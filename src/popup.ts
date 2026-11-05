import { getSettings, languages } from "./settings.js";

const statusLine = document.querySelector<HTMLParagraphElement>("#status")!;
const target = document.querySelector<HTMLParagraphElement>("#target")!;
const tabId = (await chrome.tabs.query({ active: true, currentWindow: true }))[0]?.id;
const settings = await getSettings();
target.textContent = `${settings.engine === "webgpu" ? "WebGPU" : "llama.cpp"} · ${languages[settings.target as keyof typeof languages] ?? "日本語"}`;

async function command(type: string): Promise<boolean> {
  try {
    if (tabId === undefined) throw new Error();
    const response = await chrome.tabs.sendMessage(tabId, { type }, { frameId: 0 });
    statusLine.textContent = response.error ?? response.status;
    return !response.error;
  } catch {
    statusLine.textContent = "このページでは利用できません。導入直後はページを再読み込みしてください。";
    return false;
  }
}

for (const type of ["start", "restore", "selection"]) {
  document.querySelector<HTMLButtonElement>(`#${type}`)!.addEventListener("click", async () => {
    if (await command(type) && type === "selection") window.close();
  });
}
document.querySelector<HTMLButtonElement>("#options")!.addEventListener("click", () => {
  void chrome.runtime.openOptionsPage();
});
if (await command("page-status")) {
  window.setInterval(() => {
    if (!statusLine.textContent?.startsWith("ページ上で翻訳する")) void command("page-status");
  }, 750);
}
