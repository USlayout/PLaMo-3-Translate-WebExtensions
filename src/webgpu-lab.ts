import { GpuEngine } from "./gpu-engine.js";
import { modelName } from "./gpu-model.js";

const modelForm = document.querySelector<HTMLFormElement>("#model-form")!;
const translationForm = document.querySelector<HTMLFormElement>("#translation-form")!;
const fileInput = document.querySelector<HTMLInputElement>("#model-file")!;
const backend = document.querySelector<HTMLSelectElement>("#backend")!;
const layerInput = document.querySelector<HTMLInputElement>("#gpu-layers")!;
const loadButton = document.querySelector<HTMLButtonElement>("#load")!;
const translateButton = document.querySelector<HTMLButtonElement>("#translate")!;
const source = document.querySelector<HTMLTextAreaElement>("#source")!;
const modelStatus = document.querySelector<HTMLParagraphElement>("#model-status")!;
const translationStatus = document.querySelector<HTMLParagraphElement>("#translation-status")!;
const result = document.querySelector<HTMLOutputElement>("#result")!;
const logs = document.querySelector<HTMLPreElement>("#logs")!;
const logLines: string[] = [];
const engine = new GpuEngine((line) => {
  logLines.push(line);
  if (logLines.length > 300) logLines.shift();
  logs.textContent = logLines.join("\n");
});
let busy = false;
let loaded = false;

function setBusy(value: boolean): void {
  busy = value;
  fileInput.disabled = backend.disabled = loadButton.disabled = value;
  layerInput.disabled = value || backend.value === "cpu";
  translateButton.disabled = value || !loaded;
}

function seconds(start: number): string {
  return ((performance.now() - start) / 1000).toFixed(2) + " 秒";
}

function message(error: unknown): string {
  return error instanceof Error ? error.message : String(error);
}

modelStatus.textContent = "GGUF ファイルを選んで読み込んでください。";
setBusy(false);
backend.addEventListener("change", () => { layerInput.disabled = busy || backend.value === "cpu"; });

modelForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const files = Array.from(fileInput.files ?? []);
  if (!files.length || busy) return;
  let name: string;
  try {
    name = modelName(files);
  } catch (error) {
    modelStatus.textContent = message(error);
    return;
  }
  const cpu = backend.value === "cpu";
  const layers = cpu ? 0 : layerInput.value === "" ? 99999 : layerInput.valueAsNumber;
  loaded = false;
  setBusy(true);
  result.textContent = translationStatus.textContent = logs.textContent = "";
  logLines.length = 0;
  modelStatus.textContent = "モデルを読み込み中…";
  const start = performance.now();
  try {
    await engine.load(files, layers);
    const device = cpu ? "CPU モード" : `GPU に割り当てた層 ${engine.layers}`;
    modelStatus.textContent = `${name} · ${device} · 読み込み ${seconds(start)}`;
    loaded = true;
  } catch (error) {
    modelStatus.textContent = `読み込み失敗。 ${message(error)}`;
  } finally {
    setBusy(false);
  }
});

translationForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  const text = source.value.trim();
  if (!loaded || !text || busy) return;
  setBusy(true);
  result.textContent = "";
  translationStatus.textContent = "翻訳中…";
  const start = performance.now();
  try {
    const { text: translation, metrics } = await engine.translate(text, "ja");
    result.textContent = translation;
    const rate = metrics ? `${metrics.estimated ? "約 " : ""}${(1000 * metrics.tokens / metrics.milliseconds).toFixed(1)} tokens/s`
      : "生成速度の計測値なし";
    translationStatus.textContent = `翻訳 ${seconds(start)} · ${rate}`;
  } catch (error) {
    translationStatus.textContent = `翻訳失敗。 ${message(error)} モデルを読み込み直してください。`;
    await engine.dispose().catch(() => undefined);
    loaded = false;
  } finally {
    setBusy(false);
  }
});
