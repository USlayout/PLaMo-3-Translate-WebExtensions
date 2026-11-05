let database: Promise<IDBDatabase> | undefined;
let generation = 0;

function openCache(): Promise<IDBDatabase> {
  database ??= new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open("plamo-translations", 1);
    request.onupgradeneeded = () => request.result.createObjectStore("translations");
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  }).catch((error: unknown) => {
    database = undefined;
    throw error;
  });
  return database;
}

async function access<T>(
  mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T> | undefined,
): Promise<T | undefined> {
  const db = await openCache();
  return new Promise((resolve, reject) => {
    const transaction = db.transaction("translations", mode);
    const request = run(transaction.objectStore("translations"));
    transaction.oncomplete = () => resolve(request?.result);
    transaction.onabort = () => reject(transaction.error);
  });
}

export async function clearCache(): Promise<void> {
  generation++;
  await access("readwrite", (store) => store.clear());
}

export async function cachedTranslation(
  identity: string[], translate: () => Promise<TranslationResult>, signal: AbortSignal,
): Promise<TranslationResult> {
  const started = generation;
  const digest = await crypto.subtle.digest("SHA-256", new TextEncoder().encode(JSON.stringify(identity)));
  const key = Array.from(new Uint8Array(digest), (byte) => byte.toString(16).padStart(2, "0")).join("");
  const hit = await access("readonly", (store) => store.get(key)).catch(() => undefined);
  signal.throwIfAborted();
  if (started === generation && typeof hit === "string") return { text: hit, cached: true };

  const result = await translate();
  if (!signal.aborted && started === generation) {
    await access("readwrite", (store) => {
      if (started !== generation || signal.aborted) return;
      return store.put(result.text, key);
    }).catch(() => undefined);
  }
  return result;
}
