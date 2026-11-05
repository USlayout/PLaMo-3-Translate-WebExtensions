import type { GpuModel } from "./gpu-model.js";

const documentPath = "gpu-offscreen.html";
let creation: Promise<void> | undefined;

async function hasDocument(): Promise<boolean> {
  return (await chrome.runtime.getContexts({
    contextTypes: ["OFFSCREEN_DOCUMENT"],
    documentUrls: [chrome.runtime.getURL(documentPath)],
  })).length > 0;
}

async function ensureDocument(): Promise<void> {
  creation ??= (async () => {
    if (!await hasDocument()) {
      await chrome.offscreen.createDocument({
        url: documentPath,
        reasons: ["WORKERS"],
        justification: "Run the PLaMo model in a WebGPU worker for local translation.",
      });
    }
  })().finally(() => { creation = undefined; });
  await creation;
}

type Command =
  | { action: "probe" }
  | { action: "prepare"; model: GpuModel }
  | { action: "translate"; model: GpuModel; text: string; target: string }
  | { action: "release"; model?: GpuModel };

export async function gpuRequest(
  command: Command, signal?: AbortSignal,
): Promise<{ text?: string; layers?: string; available?: boolean }> {
  signal?.throwIfAborted();
  if (command.action === "release") {
    await creation;
    if (!await hasDocument()) return {};
  } else {
    await ensureDocument();
  }
  signal?.throwIfAborted();
  const destination = "gpu-offscreen";
  const id = crypto.randomUUID();
  const cancel = () => {
    void chrome.runtime.sendMessage({ destination, action: "cancel", id }).catch(() => undefined);
  };
  signal?.addEventListener("abort", cancel, { once: true });
  try {
    const result = await chrome.runtime.sendMessage({ destination, id, ...command });
    signal?.throwIfAborted();
    if (!result) throw new Error("WebGPU 実行環境との接続が切れました。再試行してください。");
    if (result.error) throw new Error(result.error);
    return result;
  } finally {
    signal?.removeEventListener("abort", cancel);
  }
}
