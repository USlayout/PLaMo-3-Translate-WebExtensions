import { getSettings, languages, normalizeServer } from "./settings.js";
import {
  getModelLibrary, gpuModelKey, gpuModelsKey, importModel, removeAbandonedImports,
  removeModelFiles, saveModelLibrary, type GpuModel,
} from "./gpu-model.js";

const form = document.querySelector<HTMLFormElement>("#settings")!;
const server = document.querySelector<HTMLInputElement>("#server")!;
const engine = document.querySelector<HTMLSelectElement>("#engine")!;
const target = document.querySelector<HTMLSelectElement>("#target")!;
const auto = document.querySelector<HTMLInputElement>("#auto")!;
const selection = document.querySelector<HTMLInputElement>("#selection")!;
const connection = document.querySelector<HTMLParagraphElement>("#connection")!;
const saveStatus = document.querySelector<HTMLParagraphElement>("#save-status")!;
const cacheStatus = document.querySelector<HTMLParagraphElement>("#cache-status")!;
const gpuStatus = document.querySelector<HTMLParagraphElement>("#webgpu")!;
let checkId = 0;
const checkButton = document.querySelector<HTMLButtonElement>("#check")!;
const modelSection = document.querySelector<HTMLElement>("#gpu-model-section")!;
const modelForm = document.querySelector<HTMLFormElement>("#gpu-model-form")!;
const modelSelect = document.querySelector<HTMLSelectElement>("#gpu-models")!;
const files = document.querySelector<HTMLInputElement>("#gpu-files")!;
const layers = document.querySelector<HTMLInputElement>("#gpu-layers")!;
const modelStatus = document.querySelector<HTMLParagraphElement>("#gpu-model-status")!;
const prepare = document.querySelector<HTMLButtonElement>("#gpu-prepare")!;
const remove = document.querySelector<HTMLButtonElement>("#gpu-remove")!;

let library: Awaited<ReturnType<typeof getModelLibrary>>;
let editingModel = false;

function renderEngine(): void {
  const gpu = engine.value === "webgpu";
  server.disabled = server.hidden = gpu;
  document.querySelector<HTMLElement>("#server-label")!.hidden = gpu;
  connection.hidden = checkButton.hidden = gpu;
  modelSection.hidden = !gpu;
}

function updateModelControls(): void {
  const model = library.models.find(({ id }) => id === modelSelect.value);
  layers.value = model && model.layers !== 99999 ? String(model.layers) : "";
  prepare.textContent = model ? "このモデルに切り替え・読み込み" : "登録・読み込み";
  remove.disabled = editingModel || !model;
}

function showModelLibrary(): void {
  const { active, models } = library;
  modelSelect.replaceChildren(new Option("新しいモデルを登録", ""));
  for (const model of models) {
    modelSelect.add(new Option(model.name + (model.id === active?.id ? "（使用中）" : ""), model.id));
  }
  modelSelect.value = active?.id ?? "";
  modelStatus.textContent = active
    ? `使用中 · ${active.name}。翻訳を開始すると自動で読み込みます。`
    : "WebGPU 用の GGUF を登録してください。";
  updateModelControls();
}

for (const [code, label] of Object.entries(languages)) target.add(new Option(label, code));
const current = await getSettings();
engine.value = current.engine;
server.value = current.server;
target.value = current.target;
auto.checked = current.autoTranslate;
selection.checked = current.selectionButton;
renderEngine();
library = await getModelLibrary();
showModelLibrary();
engine.addEventListener("change", renderEngine);
modelSelect.addEventListener("change", () => {
  files.value = "";
  updateModelControls();
});
files.addEventListener("change", () => {
  if (files.files?.length && modelSelect.value) {
    modelSelect.value = "";
    updateModelControls();
  }
});
chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== "local" || editingModel || (!changes[gpuModelsKey] && !changes[gpuModelKey])) return;
  void getModelLibrary().then((updated) => {
    if (editingModel) return;
    library = updated;
    showModelLibrary();
  });
});

async function checkConnection(): Promise<void> {
  const id = ++checkId;
  connection.textContent = "llama-server に接続中…";
  try {
    const result = await chrome.runtime.sendMessage({ type: "server-status" });
    if (id !== checkId) return;
    connection.textContent = result.error ?? (result.ready
      ? "llama-server に接続済み。モデルのエイリアスを確認しました。"
      : "接続済み。plamo-3-translate エイリアスが見つかりません。");
  } catch {
    if (id === checkId) connection.textContent = "接続状態を取得できませんでした。";
  }
}

form.addEventListener("submit", async (event) => {
  event.preventDefault();
  try {
    const previous = await getSettings();
    const mode = engine.value === "webgpu" ? "webgpu" : "llama.cpp";
    const settings: ExtensionSettings = {
      engine: mode,
      server: mode === "webgpu" ? previous.server : normalizeServer(server.value),
      target: target.value,
      autoTranslate: auto.checked,
      selectionButton: selection.checked,
    };
    await chrome.storage.local.set({ settings });
    server.value = settings.server;
    saveStatus.textContent = "設定を保存しました。";
    if (mode === "llama.cpp") {
      void checkConnection();
      if (previous.engine === "webgpu") void chrome.runtime.sendMessage({ type: "gpu-release" }).catch(() => undefined);
    }
  } catch (error) {
    saveStatus.textContent = error instanceof Error ? error.message : "設定を保存できませんでした。";
  }
});

checkButton.addEventListener("click", () => void checkConnection());

async function modelOperation(work: (state: typeof library) => Promise<void>): Promise<void> {
  if (editingModel) return;
  editingModel = true;
  modelSelect.disabled = files.disabled = layers.disabled = prepare.disabled = remove.disabled = true;
  try {
    await navigator.locks.request("plamo-model-management", async () => {
      const state = await getModelLibrary();
      await removeAbandonedImports(state.models);
      await work(state);
    });
  } catch (error) {
    modelStatus.textContent = error instanceof Error ? error.message : String(error);
  } finally {
    editingModel = false;
    modelSelect.disabled = files.disabled = layers.disabled = prepare.disabled = false;
    remove.disabled = !modelSelect.value;
  }
}

modelForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const selected = Array.from(files.files ?? []);
  const modelId = modelSelect.value;
  const layerCount = layers.value === "" ? 99999 : layers.valueAsNumber;
  void modelOperation(async ({ models }) => {
    const previous = models.find(({ id }) => id === modelId);
    if (!selected.length && !previous) throw new Error("登録する GGUF ファイルか、登録済みモデルを選んでください。");
    let imported: GpuModel | undefined;
    let prepared: string;
    try {
      if (selected.length) {
        modelStatus.textContent = "GGUF を拡張機能のストレージにコピー中…";
        imported = await importModel(selected, layerCount);
      }
      const model = imported ?? { ...previous!, layers: layerCount };
      modelStatus.textContent = "WebGPU にモデルを読み込み中…";
      const result = await chrome.runtime.sendMessage({ type: "gpu-prepare", model });
      if (!result?.ok) throw new Error(result?.error ?? "WebGPU モデルを準備できませんでした。");
      const updated = imported ? [...models, imported] : models.map((entry) => entry.id === model.id ? model : entry);
      await saveModelLibrary(updated, model);
      library = { models: updated, active: model };
      prepared = `準備完了 · ${model.name} · GPU に割り当てた層 ${result.layers}`;
    } catch (error) {
      if (imported) {
        await chrome.runtime.sendMessage({ type: "gpu-release", model: imported }).catch(() => undefined);
        await removeModelFiles(imported).catch(() => undefined);
      }
      throw error;
    }
    files.value = "";
    showModelLibrary();
    modelStatus.textContent = prepared;
  });
});

remove.addEventListener("click", () => {
  const id = modelSelect.value;
  void modelOperation(async ({ active, models }) => {
    const model = models.find((entry) => entry.id === id);
    if (!model) return;
    const result = await chrome.runtime.sendMessage({ type: "gpu-release", model });
    if (!result?.ok) throw new Error(result?.error ?? "WebGPU モデルを解放できませんでした。");
    const remaining = models.filter((entry) => entry.id !== id);
    const next = active?.id === id ? remaining[0] : active;
    await saveModelLibrary(remaining, next);
    library = { active: next, models: remaining };
    showModelLibrary();
    await removeModelFiles(model).catch(() => {
      modelStatus.textContent += " 保存ファイルの削除は次回の操作で再試行します。";
    });
  });
});
document.querySelector<HTMLButtonElement>("#clear")!.addEventListener("click", async (event) => {
  const button = event.currentTarget as HTMLButtonElement;
  button.disabled = true;
  try {
    const result = await chrome.runtime.sendMessage({ type: "clear-cache" });
    cacheStatus.textContent = result.error ?? "キャッシュを消去しました。";
  } catch {
    cacheStatus.textContent = "キャッシュを消去できませんでした。";
  } finally {
    button.disabled = false;
  }
});

if (current.engine === "llama.cpp") void checkConnection();
void (async () => {
  const gpu = (navigator as Navigator & { gpu?: { requestAdapter(): Promise<object | null> } }).gpu;
  const adapter = await gpu?.requestAdapter().catch(() => null);
  gpuStatus.textContent = adapter
    ? "WebGPU は利用可能です。"
    : "WebGPU の利用可能なアダプターが見つかりません。";
})();
