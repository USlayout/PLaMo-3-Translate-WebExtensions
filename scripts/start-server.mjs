import { spawn } from "node:child_process";
import { statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const local = fileURLToPath(new URL("../local/", import.meta.url));
const binaries = join(local, "llama.cpp");
const executable = join(binaries, process.platform === "win32" ? "llama-server.exe" : "llama-server");
const models = join(local, "models", "plamo-3-translate-0.8b");
const model = join(models, "plamo-3-translate-0.8b-Q4_K_M.gguf");
const template = join(models, "chat_template.jinja");

const missing = [executable, model, template].filter((path) => !statSync(path, { throwIfNoEntry: false })?.isFile());
if (missing.length) {
  console.error("必要なファイルが見つかりません。README の配置手順を確認してください。");
  for (const path of missing) console.error(`  ${path}`);
  process.exitCode = 1;
} else {
  const server = spawn(executable, [
    "--host", "127.0.0.1",
    "--port", "8000",
    "--alias", "plamo-3-translate",
    "-m", model,
    "-c", "16384",
    "--chat-template-file", template,
    "--no-prefill-assistant",
  ], { cwd: binaries, stdio: "inherit" });
  server.on("error", (error) => {
    console.error(`llama-server を起動できませんでした。 ${error.message}`);
    process.exitCode = 1;
  });
  server.on("exit", (code) => {
    process.exitCode = code ?? 1;
  });
}
