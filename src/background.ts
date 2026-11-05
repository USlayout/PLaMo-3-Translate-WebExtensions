import { cachedTranslation, clearCache } from "./cache.js";
import { getSettings, languages, normalizeServer } from "./settings.js";
import { gpuRequest } from "./gpu-bridge.js";
import { gpuModelKey, type GpuModel } from "./gpu-model.js";
import { generationMetrics } from "./generation-metrics.js";

const model = "plamo-3-translate";
const maxParallel = 2;
const maxQueued = 32;
const queue: { run: () => void; signal: AbortSignal }[] = [];
let running = 0;
let defaultEngine: Promise<ExtensionSettings["engine"]> | undefined;

function resolveDefaultEngine(): Promise<ExtensionSettings["engine"]> {
  defaultEngine ??= gpuRequest({ action: "probe" })
    .then(({ available }) => available ? "webgpu" : "llama.cpp")
    .catch(() => "llama.cpp");
  return defaultEngine;
}

async function serverRequest(server: string, path: string, options: RequestInit = {}): Promise<Response> {
  const origin = normalizeServer(server);
  let response: Response;
  try {
    response = await fetch(origin + path, {
      ...options,
      redirect: "error",
      credentials: "omit",
      signal: options.signal
        ? AbortSignal.any([options.signal, AbortSignal.timeout(25_000)])
        : AbortSignal.timeout(4_000),
    });
  } catch (error) {
    if (options.signal?.aborted) throw error;
    if (error instanceof DOMException && error.name === "TimeoutError") {
      throw new Error("llama-server の応答がタイムアウトしました。");
    }
    throw new Error(`${origin} に接続できません。llama-server の起動とポートを確認してください。`);
  }
  if (response.status === 503) throw new Error("llama-server はモデルを読み込み中です。");
  if (!response.ok) throw new Error(`llama-server がエラーを返しました（HTTP ${response.status}）。`);
  return response;
}

async function translate(text: string, settings: ExtensionSettings, signal: AbortSignal): Promise<TranslationResult> {
  const { server, target } = settings;
  if (settings.engine === "webgpu") {
    const model = (await chrome.storage.local.get(gpuModelKey))[gpuModelKey] as GpuModel | undefined;
    if (!model) throw new Error("拡張機能の設定で WebGPU 用の GGUF を登録してください。");
    return cachedTranslation(["webgpu-v1", model.id, target, text], async () => {
      const result = await gpuRequest({ action: "translate", model, text, target }, signal);
      if (!result.text) throw new Error("WebGPU から訳文を取得できませんでした。");
      return { text: result.text, metrics: result.metrics };
    }, signal);
  }
  return cachedTranslation(["chat-v1", server, model, target, text], async () => {
    const start = performance.now();
    const response = await serverRequest(server, "/v1/chat/completions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal,
      body: JSON.stringify({
        model,
        messages: [{ role: "user", content: text }],
        chat_template_kwargs: { target_lang: target },
        temperature: 0,
        max_tokens: 1536,
        stop: ["<|plamo:tag|>", "<|plamo:bos|>"],
        stream: false,
      }),
    });
    const data = await response.json();
    const choice = data.choices?.[0];
    if (choice?.finish_reason === "length") throw new Error("訳文が出力上限に達しました。");
    const result = choice?.message?.content;
    if (typeof result !== "string" || !result.trim()) throw new Error("訳文を取得できませんでした。");
    return { text: result.trim(), metrics: generationMetrics(data, performance.now() - start) };
  }, signal);
}

function drainQueue(): void {
  while (running < maxParallel && queue.length) {
    const job = queue.shift()!;
    if (!job.signal.aborted) job.run();
  }
}

function errorMessage(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

chrome.runtime.onConnect.addListener((port) => {
  if (port.name !== "translate" || port.sender?.tab?.id === undefined) return;
  const controller = new AbortController();
  let submitted = false;
  const reply = (message: TranslationReply) => {
    if (!controller.signal.aborted) port.postMessage(message);
  };
  port.onDisconnect.addListener(() => {
    controller.abort();
    const index = queue.findIndex((job) => job.signal === controller.signal);
    if (index !== -1) queue.splice(index, 1);
  });
  port.onMessage.addListener((message) => {
    if (submitted) return;
    submitted = true;
    if (typeof message !== "string" || !message.trim() || message.length > 1000) {
      reply({ error: "翻訳するテキストが空か、入力上限を超えています。" });
      return;
    }
    if (queue.length >= maxQueued) {
      reply({ error: "翻訳が混み合っています。時間をおいて再試行してください。" });
      return;
    }
    queue.push({
      signal: controller.signal,
      run() {
        running++;
        void (async () => {
          try {
            const settings = await getSettings(resolveDefaultEngine);
            if (!Object.hasOwn(languages, settings.target)) throw new Error("翻訳先の設定を確認してください。");
            reply(await translate(message, settings, controller.signal));
          } catch (error) {
            reply({ error: errorMessage(error) });
          } finally {
            running--;
            drainQueue();
          }
        })();
      },
    });
    drainQueue();
  });
});

chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (message?.type === "gpu-heartbeat" && sender.url === chrome.runtime.getURL("gpu-offscreen.html")) {
    respond(true);
    return;
  }
  if (message?.type === "default-engine" &&
    [chrome.runtime.getURL("options.html"), chrome.runtime.getURL("popup.html")].includes(sender.url ?? "")) {
    void resolveDefaultEngine().then((engine) => respond({ engine }));
    return true;
  }
  if (sender.url !== chrome.runtime.getURL("options.html") ||
    !["server-status", "clear-cache", "gpu-prepare", "gpu-release"].includes(message?.type)) return;
  void (async () => {
    try {
      if (message.type === "clear-cache") {
        await clearCache();
        respond({ ok: true });
        return;
      }
      if (message.type === "gpu-prepare" || message.type === "gpu-release") {
        const result = message.type === "gpu-prepare"
          ? await gpuRequest({ action: "prepare", model: message.model })
          : await gpuRequest({ action: "release", model: message.model });
        respond({ ok: true, ...result });
        return;
      }
      const { server } = await getSettings(resolveDefaultEngine);
      await serverRequest(server, "/health");
      const models = await (await serverRequest(server, "/v1/models")).json();
      const ready = Array.isArray(models.data) && models.data.some((entry: { id?: string }) => entry.id === model);
      respond({ ok: true, ready });
    } catch (error) {
      respond({ error: errorMessage(error) });
    }
  })();
  return true;
});

chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "translate-selection",
    title: "PLaMo で選択範囲を翻訳",
    contexts: ["selection"],
    documentUrlPatterns: ["http://*/*", "https://*/*"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId !== "translate-selection" || tab?.id === undefined || info.frameId) return;
  void chrome.tabs.sendMessage(tab.id, { type: "selection", text: info.selectionText }, { frameId: 0 })
    .catch(() => undefined);
});
