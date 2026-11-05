export interface GpuModel {
  id: string;
  name: string;
  files: string[];
  layers: number;
}

export const gpuModelKey = "gpuModel";
export const gpuModelsKey = "gpuModels";

export async function getModelLibrary(): Promise<{ active?: GpuModel; models: GpuModel[] }> {
  const stored = await chrome.storage.local.get([gpuModelKey, gpuModelsKey]);
  const active = stored[gpuModelKey] as GpuModel | null | undefined;
  const models = stored[gpuModelsKey] as GpuModel[] | undefined;
  return { active: active ?? undefined, models: models ?? (active ? [active] : []) };
}

export async function saveModelLibrary(models: GpuModel[], active?: GpuModel): Promise<void> {
  await chrome.storage.local.set({ [gpuModelsKey]: models, [gpuModelKey]: active ?? null });
}

export function modelName(files: File[]): string {
  if (!files.length || files.some((file) => !file.name.toLowerCase().endsWith(".gguf") || !file.size)) {
    throw new Error("有効な GGUF ファイルを選んでください。");
  }
  const parts = files.map((file) => /^(.*)-(\d{5})-of-(\d{5})\.gguf$/i.exec(file.name));
  const first = parts[0];
  if (files.length === 1 && !first) return files[0].name;
  if (!first || parts.some((part) => !part || part[1] !== first[1] || Number(part[3]) !== files.length ||
    Number(part[2]) < 1 || Number(part[2]) > files.length) ||
    new Set(parts.map((part) => part?.[2])).size !== files.length) {
    throw new Error("同じモデルの分割ファイルをすべて選んでください。");
  }
  return `${first[1]}（${files.length} 分割）`;
}

async function modelRoot(): Promise<FileSystemDirectoryHandle> {
  return (await navigator.storage.getDirectory()).getDirectoryHandle("plamo-models", { create: true });
}

export async function importModel(files: File[], layers: number): Promise<GpuModel> {
  const model = { id: crypto.randomUUID(), name: modelName(files), files: files.map((file) => file.name), layers };
  const root = await modelRoot();
  const directory = await root.getDirectoryHandle(model.id, { create: true });
  try {
    for (const file of files) {
      const handle = await directory.getFileHandle(file.name, { create: true });
      await file.stream().pipeTo(await handle.createWritable());
    }
  } catch (error) {
    await root.removeEntry(model.id, { recursive: true }).catch(() => undefined);
    throw error;
  }
  return model;
}

export async function readModelFiles(model: GpuModel): Promise<File[]> {
  const directory = await (await modelRoot()).getDirectoryHandle(model.id);
  return Promise.all(model.files.map(async (file) => (await directory.getFileHandle(file)).getFile()));
}

export async function removeModelFiles(model: GpuModel): Promise<void> {
  await (await modelRoot()).removeEntry(model.id, { recursive: true }).catch((error: unknown) => {
    if (!(error instanceof DOMException && error.name === "NotFoundError")) throw error;
  });
}

// Model management holds an exclusive lock so an interrupted import can be reclaimed safely.
export async function removeAbandonedImports(models: GpuModel[]): Promise<void> {
  const registered = new Set(models.map(({ id }) => id));
  const root = await modelRoot() as FileSystemDirectoryHandle & {
    keys(): AsyncIterableIterator<string>;
  };
  for await (const id of root.keys()) {
    if (!registered.has(id)) await root.removeEntry(id, { recursive: true });
  }
}
