interface ChromeEvent<Args extends unknown[]> {
  addListener(listener: (...args: Args) => boolean | void): void;
}

interface ChromePort {
  name: string;
  sender?: { tab?: { id?: number } };
  onMessage: ChromeEvent<[unknown]>;
  onDisconnect: ChromeEvent<[]>;
  postMessage(message: unknown): void;
  disconnect(): void;
}

declare const chrome: {
  runtime: {
    id: string;
    connect(options: { name: string }): ChromePort;
    onConnect: ChromeEvent<[ChromePort]>;
    onInstalled: ChromeEvent<[]>;
    onMessage: ChromeEvent<[any, { id?: string; tab?: { id?: number }; url?: string }, (response: unknown) => void]>;
    getContexts(filter: { contextTypes: ["OFFSCREEN_DOCUMENT"]; documentUrls: string[] }): Promise<object[]>;
    getURL(path: string): string;
    sendMessage(message: unknown): Promise<any>;
    openOptionsPage(): Promise<void>;
  };
  offscreen: {
    createDocument(options: { url: string; reasons: ["WORKERS"]; justification: string }): Promise<void>;
  };
  tabs: {
    query(query: { active: boolean; currentWindow: boolean }): Promise<{ id?: number }[]>;
    sendMessage(tabId: number, message: unknown, options: { frameId: number }): Promise<any>;
  };
  contextMenus: {
    create(options: { id: string; title: string; contexts: ["selection"]; documentUrlPatterns: string[] }): void;
    onClicked: ChromeEvent<[
      { menuItemId: string | number; selectionText?: string; frameId?: number },
      { id?: number } | undefined,
    ]>;
  };
  storage: {
    local: {
      get(key: string | string[]): Promise<Record<string, unknown>>;
      set(values: Record<string, unknown>): Promise<void>;
      remove(key: string): Promise<void>;
    };
    onChanged: ChromeEvent<[Record<string, { oldValue?: unknown; newValue?: unknown }>, string]>;
  };
};

interface ExtensionSettings {
  engine: "llama.cpp" | "webgpu";
  server: string;
  target: string;
  autoTranslate: boolean;
  selectionButton: boolean;
}

interface GenerationMetrics {
  tokens: number;
  milliseconds: number;
  estimated?: true;
}

interface TranslationResult {
  text: string;
  metrics?: GenerationMetrics;
  cached?: true;
}

type TranslationReply = TranslationResult | { error: string };
