import { cp, mkdir, readFile, writeFile } from "node:fs/promises";
import { runInNewContext } from "node:vm";

const vendor = new URL("../dist/vendor/", import.meta.url);
const wllama = new URL("../vendor/wllama/", import.meta.url);
await mkdir(vendor, { recursive: true });
const runtime = await readFile(new URL("index.js", wllama), "utf8");
const workerStart = "this.worker = createWorker(completeCode);";
if (!runtime.includes(workerStart)) throw new Error("Check wllama's worker factory before updating the runtime.");

// Package the pinned runtime's generated worker as a local script for Manifest V3.
function embeddedString(name) {
  const literal = new RegExp(`^var ${name} = (.*);$`, "m").exec(runtime)?.[1];
  if (!literal || !/^["']/.test(literal)) throw new Error(`Missing wllama component: ${name}`);
  return runInNewContext(literal);
}
const worker = [
  'const cpu = new URL(self.location.href).searchParams.has("cpu");',
  'if (cpu) Object.defineProperty(WorkerNavigator.prototype, "gpu", { get: () => ({ requestAdapter: async () => null }) });',
  'const RUN_OPTIONS = { pathConfig: { "wllama.wasm": new URL("wllama.wasm", self.location.href).href }, nbThread: 0, compat: false };',
  `function wModuleInit() { ${embeddedString("WLLAMA_EMSCRIPTEN_CODE").replace("var Module", "var ___Module")}; return Module; }`,
  embeddedString("LLAMA_CPP_WORKER_CODE"),
].join("\n");
const extensionRuntime = runtime.replace(workerStart, `this.worker = new Worker(
        new URL(this.resources.noWebGPU ? "./wllama-worker.js?cpu" : "./wllama-worker.js", import.meta.url),
        { type: "module" }
      );`);

await Promise.all([
  writeFile(new URL("wllama.js", vendor), extensionRuntime),
  writeFile(new URL("wllama-worker.js", vendor), worker),
  cp(new URL("wllama.wasm", wllama), new URL("wllama.wasm", vendor)),
  cp(new URL("LICENCE", wllama), new URL("wllama-LICENCE", vendor)),
]);

await cp(new URL("../extension/", import.meta.url), new URL("../dist/", import.meta.url), {
  recursive: true,
});
