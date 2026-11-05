import { GpuEngine } from "./gpu-engine.js";
import { readModelFiles, type GpuModel } from "./gpu-model.js";
import { languages } from "./settings.js";

const engine = new GpuEngine();
let loaded: GpuModel | undefined;
let tail = Promise.resolve();
const requests = new Map<string, AbortController>();

async function load(model: GpuModel): Promise<void> {
  if (loaded?.id === model.id && loaded.layers === model.layers) return;
  loaded = undefined;
  await engine.dispose();
  await engine.load(await readModelFiles(model), model.layers);
  loaded = model;
}

chrome.runtime.onMessage.addListener((message, sender, respond) => {
  if (sender.id !== chrome.runtime.id || sender.tab || message?.destination !== "gpu-offscreen") return;
  if (message.action === "probe") {
    const gpu = (navigator as Navigator & { gpu?: { requestAdapter(): Promise<object | null> } }).gpu;
    let timeout: ReturnType<typeof setTimeout> | undefined;
    void Promise.race([
      Promise.resolve().then(() => gpu?.requestAdapter()),
      new Promise<null>((resolve) => { timeout = setTimeout(() => resolve(null), 5000); }),
    ]).then((adapter) => respond({ available: !!adapter }), () => respond({ available: false }))
      .finally(() => clearTimeout(timeout));
    return true;
  }
  if (message.action === "cancel") {
    requests.get(message.id)?.abort();
    return;
  }
  if (!["prepare", "translate", "release"].includes(message.action)) return;
  const controller = new AbortController();
  const { signal } = controller;
  requests.set(message.id, controller);
  const job = tail.then(async () => {
    const keepAlive = setInterval(() => {
      void chrome.runtime.sendMessage({ type: "gpu-heartbeat" }).catch(() => undefined);
    }, 20_000);
    try {
      signal.throwIfAborted();
      if (message.action === "release") {
        if (!message.model || loaded?.id === message.model.id) {
          loaded = undefined;
          await engine.dispose();
        }
        respond({ ok: true });
        return;
      }
      await load(message.model);
      signal.throwIfAborted();
      if (message.action === "prepare") {
        respond({ ok: true, layers: engine.layers });
        return;
      }
      if (!Object.hasOwn(languages, message.target)) throw new Error("翻訳先が無効です。");
      respond({ text: await engine.translate(message.text, message.target, signal) });
    } catch (error) {
      if (message.action === "translate" && !signal.aborted) {
        loaded = undefined;
        await engine.dispose().catch(() => undefined);
      }
      respond({ error: error instanceof Error ? error.message : String(error) });
    } finally {
      clearInterval(keepAlive);
      requests.delete(message.id);
    }
  });
  tail = job.catch(() => undefined);
  return true;
});
