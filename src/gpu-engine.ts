interface RuntimeEngine {
  loadModel(files: File[], options: { n_ctx: number; n_threads: number; n_gpu_layers: number }): Promise<void>;
  createCompletion(options: {
    prompt: string; stop: string[]; temperature: number; max_tokens: number; stream: false; abortSignal?: AbortSignal;
  }): Promise<{ choices: { text: string; finish_reason: string }[] }>;
  exit(): Promise<void>;
}

interface Runtime {
  Wllama: new (
    paths: { default: string },
    options: { logger: Record<"debug" | "log" | "warn" | "error", (...parts: unknown[]) => void> },
  ) => RuntimeEngine;
}

export class GpuEngine {
  private engine?: RuntimeEngine;
  private loadError?: string;
  layers?: string;

  constructor(private readonly log: (line: string) => void = () => undefined) {}

  private report = (...parts: unknown[]): void => {
    const line = parts.map((part) => part instanceof ErrorEvent ? part.message : String(part)).join(" ");
    const match = /offloaded\s+(\d+\/\d+)\s+layers\s+to\s+GPU/i.exec(line);
    if (match) this.layers = match[1];
    if (line.includes("llama_model_load: error loading model")) this.loadError = line;
    this.log(line);
  };

  private async withTimeout<T>(operation: Promise<T>, message: string): Promise<T> {
    let timer: ReturnType<typeof setTimeout> | undefined;
    try {
      return await Promise.race([operation, new Promise<never>((_, reject) => {
        timer = setTimeout(() => reject(new Error(message)), 120_000);
      })]);
    } finally {
      clearTimeout(timer);
    }
  }

  async load(files: File[], layers: number): Promise<void> {
    await this.dispose();
    this.layers = this.loadError = undefined;
    const script = "./vendor/wllama.js";
    const { Wllama } = await import(script) as Runtime;
    this.engine = new Wllama({ default: "./vendor/wllama.wasm" }, {
      logger: { debug: this.report, log: this.report, warn: this.report, error: this.report },
    });
    try {
      await this.withTimeout(this.engine.loadModel(files, {
        n_ctx: 4096, n_threads: 1, n_gpu_layers: layers,
      }), "モデルの読み込みがタイムアウトしました。");
      if (this.loadError) throw new Error(this.loadError);
      if (layers && !/^[1-9]\d*\//.test(this.layers ?? "")) {
        throw new Error("GPU にモデルを割り当てられませんでした。WebGPU の利用可否と空きメモリーを確認してください。");
      }
    } catch (error) {
      await this.dispose().catch(this.report);
      throw error;
    }
  }

  async translate(text: string, target: string, signal?: AbortSignal): Promise<string> {
    signal?.throwIfAborted();
    if (!this.engine) throw new Error("WebGPU モデルが読み込まれていません。");
    // Break literal PFML3 delimiters in webpage text before building the prompt.
    const input = text.replaceAll("<|plamo:", "<\u200B|plamo:");
    const response = await this.withTimeout(this.engine.createCompletion({
      prompt: "<|plamo:tag|>dataset<|plamo:msg|>translation" +
        `<|plamo:tag|>input<|plamo:msg|>${input}` +
        `<|plamo:tag|>output<|plamo:key|>lang<|plamo:val|>${target}<|plamo:msg|>`,
      stop: ["<|plamo:tag|>", "<|plamo:bos|>"],
      temperature: 0, max_tokens: 1024, stream: false, abortSignal: signal,
    }), "WebGPU 翻訳がタイムアウトしました。");
    signal?.throwIfAborted();
    const choice = response.choices[0];
    if (choice?.finish_reason === "length") throw new Error("訳文が出力上限に達しました。");
    const translation = choice?.text.trim();
    if (!translation) throw new Error("訳文が空でした。");
    return translation;
  }

  async dispose(): Promise<void> {
    const previous = this.engine;
    this.engine = undefined;
    await previous?.exit();
  }
}
