export const languages = {
  ja: "日本語",
  en: "英語",
  ko: "韓国語",
  "zh-hans": "中国語（簡体字）",
  "zh-hant": "中国語（繁体字）",
  de: "ドイツ語",
  fr: "フランス語",
  es: "スペイン語",
};

export const defaults: ExtensionSettings = {
  engine: "llama.cpp",
  server: "http://127.0.0.1:8000",
  target: "ja",
  autoTranslate: false,
  selectionButton: false,
};

export function normalizeServer(value: string): string {
  const url = URL.parse(value.trim());
  if (
    !url || url.protocol !== "http:" ||
    !["localhost", "127.0.0.1"].includes(url.hostname) ||
    url.username || url.password || url.pathname !== "/" || url.search || url.hash
  ) {
    throw new Error("接続先には localhost または 127.0.0.1 の HTTP アドレスを入力してください。");
  }
  return url.origin;
}

async function readDefaultEngine(): Promise<ExtensionSettings["engine"]> {
  const response = await chrome.runtime.sendMessage({ type: "default-engine" }).catch(() => undefined);
  return response?.engine === "webgpu" ? "webgpu" : "llama.cpp";
}

export async function getSettings(
  resolveDefaultEngine = readDefaultEngine,
): Promise<ExtensionSettings> {
  const { settings } = await chrome.storage.local.get("settings");
  // Existing settings from before engine selection used llama.cpp.
  if (settings) return { ...defaults, ...(settings as Partial<ExtensionSettings>) };
  return { ...defaults, engine: await resolveDefaultEngine() };
}
