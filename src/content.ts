(() => {
  const excluded = "script,style,noscript,form,textarea,input,select,option,code,pre,svg,math,[translate=no],[hidden],[inert],[aria-hidden=true]";
  const pending = new Map<Text, Element>();
  const watched = new Map<Element, number>();
  const near = new Set<Element>();
  const originals = new Map<Text, { original: string; translated: string }>();
  let pageRun: AbortController | undefined;
  let selectionRun: AbortController | undefined;
  let selectionButtonEnabled = false;
  let pageError = "";
  let scanTimer: number | undefined;

  const host = document.createElement("plamo-translator-panel");
  host.style.setProperty("all", "initial", "important");
  host.style.setProperty("position", "fixed", "important");
  host.style.setProperty("right", "16px", "important");
  host.style.setProperty("bottom", "16px", "important");
  host.style.setProperty("z-index", "2147483647", "important");
  const shadow = host.attachShadow({ mode: "closed" });
  const style = new CSSStyleSheet();
  style.replaceSync(`
    :host { color-scheme: light; }
    section { box-sizing: border-box; width: max-content; max-width: min(360px, calc(100vw - 32px));
      padding: 12px; margin-top: 6px; border: 1px solid #a9b7c8; border-radius: 8px;
      box-shadow: 0 3px 14px #0003; background: #fff; color: #14243a;
      font: 14px/1.5 system-ui, sans-serif; }
    output { display: block; white-space: pre-wrap; overflow-wrap: anywhere; max-height: 40vh; overflow: auto; }
    button { cursor: pointer; margin: 4px 6px 0 0; font: inherit; }
  `);
  shadow.adoptedStyleSheets = [style];
  const pagePanel = document.createElement("section");
  const selectionPanel = document.createElement("section");
  const pageStatus = document.createElement("output");
  const selectionResult = document.createElement("output");
  const selectionAction = makeButton("選択範囲を翻訳", () => {
    const text = selectedText;
    if (text) showSelection(text);
  });
  const retry = makeButton("再試行", startPage);
  const restore = makeButton("原文に戻す", restorePage);
  const closeSelection = makeButton("閉じる", () => {
    selectionRun?.abort();
    selectionRun = undefined;
    selectionPanel.hidden = true;
  });
  pagePanel.append(pageStatus, retry, restore);
  selectionPanel.append(selectionResult, closeSelection);
  shadow.append(pagePanel, selectionPanel, selectionAction);
  pagePanel.hidden = selectionPanel.hidden = selectionAction.hidden = true;
  let selectedText = "";

  function makeButton(label: string, action: () => void): HTMLButtonElement {
    const button = document.createElement("button");
    button.type = "button";
    button.textContent = label;
    button.addEventListener("click", action);
    return button;
  }

  function attachPanel(): void {
    if (!host.isConnected) document.documentElement.append(host);
  }

  function requestTranslation(text: string, signal: AbortSignal): Promise<string> {
    signal.throwIfAborted();
    return new Promise((resolve, reject) => {
      const port = chrome.runtime.connect({ name: "translate" });
      function finish(): void {
        signal.removeEventListener("abort", cancel);
        port.disconnect();
      }
      function cancel(): void {
        finish();
        reject(signal.reason);
      }
      signal.addEventListener("abort", cancel, { once: true });
      port.onMessage.addListener((message) => {
        finish();
        const reply = message as TranslationReply;
        if ("error" in reply) reject(new Error(reply.error));
        else resolve(reply.text);
      });
      port.onDisconnect.addListener(() => {
        signal.removeEventListener("abort", cancel);
        reject(new Error("拡張機能との接続が切れました。ページを再読み込みしてください。"));
      });
      port.postMessage(text);
    });
  }

  async function translateLong(source: string, signal: AbortSignal): Promise<string> {
    let translated = "";
    let rest = source;
    while (rest) {
      let end = Math.min(rest.length, 1000);
      if (end < rest.length) {
        // Prefer a sentence or word boundary and never split a surrogate pair.
        const boundary = rest.slice(0, end).search(/[。！？.!?\s][^。！？.!?\s]*$/u);
        if (boundary >= end / 2) end = boundary + 1;
        else if (/[\uD800-\uDBFF]/u.test(rest[end - 1])) end--;
      }
      const chunk = rest.slice(0, end);
      const core = chunk.trim();
      if (core) {
        const result = await requestTranslation(core, signal);
        const start = chunk.indexOf(core);
        translated += chunk.slice(0, start) + result + chunk.slice(start + core.length);
      } else {
        translated += chunk;
      }
      rest = rest.slice(end);
    }
    return translated;
  }

  function candidate(node: Text): Element | undefined {
    const parent = node.parentElement;
    if (!parent || !/[\p{L}\p{M}]/u.test(node.data) || parent.closest(excluded)) return;
    if (parent instanceof HTMLElement && parent.isContentEditable) return;
    const { visibility } = getComputedStyle(parent);
    if (visibility !== "visible") return;
    const range = document.createRange();
    range.selectNodeContents(node);
    if (!range.getClientRects().length) return;
    // display:contents has no box for IntersectionObserver.
    let anchor = parent;
    while (!anchor.getClientRects().length && anchor.parentElement) anchor = anchor.parentElement;
    return anchor;
  }

  const visible = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting && watched.has(entry.target)) near.add(entry.target);
      else near.delete(entry.target);
    }
    if (pageRun) void pump(pageRun);
  }, { rootMargin: "200px 0px" });

  function removePending(node: Text): void {
    const anchor = pending.get(node);
    if (!anchor) return;
    pending.delete(node);
    const remaining = (watched.get(anchor) ?? 1) - 1;
    if (remaining) watched.set(anchor, remaining);
    else {
      watched.delete(anchor);
      near.delete(anchor);
      visible.unobserve(anchor);
    }
  }

  function scanPage(): void {
    if (!pageRun || !document.body) return;
    for (const [node, value] of originals) {
      if (!node.isConnected || node.data !== value.translated) originals.delete(node);
    }
    for (const node of pending.keys()) {
      if (!node.isConnected) removePending(node);
    }
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
    for (let next = walker.nextNode(); next; next = walker.nextNode()) {
      const node = next as Text;
      if (originals.has(node) || node === inFlight) continue;
      const anchor = candidate(node);
      if (pending.get(node) === anchor) continue;
      removePending(node);
      if (!anchor) continue;
      pending.set(node, anchor);
      if (!watched.has(anchor)) visible.observe(anchor);
      watched.set(anchor, (watched.get(anchor) ?? 0) + 1);
    }
    void pump(pageRun);
  }

  const mutations = new MutationObserver((records) => {
    if (records.some((record) => record.type !== "characterData" ||
      originals.get(record.target as Text)?.translated !== (record.target as Text).data)) {
      scheduleScan();
    }
  });

  function status(): string {
    if (pageError) return pageError;
    if (!pageRun) return "ページ翻訳を開始できます。";
    const changed = originals.size;
    if (inFlight) return `翻訳中 · ${changed} 件反映 · ${pending.size} 件待機`;
    if (pending.size) return `${changed} 件反映 · スクロールすると続きを翻訳します。`;
    return changed ? `翻訳済み · ${changed} 件反映` : "翻訳対象のテキストがありません。";
  }

  function renderProgress(): void {
    pageStatus.textContent = status();
    retry.hidden = !pageError;
  }

  let inFlight: Text | undefined;
  async function pump(run: AbortController): Promise<void> {
    if (inFlight || run.signal.aborted) return;
    while (!run.signal.aborted) {
      let job: [Text, Element] | undefined;
      for (const entry of pending) {
        if (!near.has(entry[1])) continue;
        job = entry;
        break;
      }
      if (!job) break;
      const [node, anchor] = job;
      removePending(node);
      if (!node.isConnected || candidate(node) !== anchor) continue;
      const original = node.data;
      inFlight = node;
      renderProgress();
      try {
        const translated = await translateLong(original, run.signal);
        if (!run.signal.aborted && node.isConnected && node.data === original && candidate(node)) {
          originals.set(node, { original, translated });
          if (original !== translated) node.data = translated;
        } else if (!run.signal.aborted && node.isConnected) {
          scheduleScan();
        }
      } catch (error) {
        if (!run.signal.aborted) {
          stopPage();
          pageError = error instanceof Error ? error.message : String(error);
        }
      } finally {
        inFlight = undefined;
      }
    }
    renderProgress();
    if (pageRun && pageRun !== run) scanPage();
  }

  function scheduleScan(): void {
    if (scanTimer !== undefined) return;
    scanTimer = window.setTimeout(() => {
      scanTimer = undefined;
      scanPage();
    }, 160);
  }

  function stopPage(): void {
    pageRun?.abort();
    pageRun = undefined;
    mutations.disconnect();
    visible.disconnect();
    watched.clear();
    near.clear();
    pending.clear();
    clearTimeout(scanTimer);
    scanTimer = undefined;
  }

  function startPage(): void {
    if (pageRun) return;
    pageRun = new AbortController();
    pageError = "";
    attachPanel();
    pagePanel.hidden = false;
    mutations.observe(document.documentElement, {
      subtree: true, childList: true, characterData: true, attributes: true,
      attributeFilter: ["class", "style", "hidden", "inert", "aria-hidden", "translate", "contenteditable", "open"],
    });
    scanPage();
  }

  function restorePage(): void {
    stopPage();
    for (const [node, { original, translated }] of originals) {
      if (node.data === translated) node.data = original;
    }
    originals.clear();
    pageError = "";
    pagePanel.hidden = true;
  }

  function showSelection(text: string): void {
    selectionRun?.abort();
    const run = new AbortController();
    selectionRun = run;
    attachPanel();
    selectionAction.hidden = true;
    selectionPanel.hidden = false;
    selectionResult.textContent = "選択範囲を翻訳中…";
    void (async () => {
      try {
        if (text.length > 12_000) throw new Error("選択範囲は12,000文字以内にしてください。");
        const result = await translateLong(text, run.signal);
        if (!run.signal.aborted) selectionResult.textContent = result;
      } catch (error) {
        if (!run.signal.aborted) selectionResult.textContent = error instanceof Error ? error.message : String(error);
      }
    })();
  }

  // Retain the page selection while clicking the optional button.
  selectionAction.addEventListener("mousedown", (event) => event.preventDefault());
  document.addEventListener("selectionchange", () => {
    const selection = document.getSelection();
    const anchor = selection?.anchorNode?.parentElement;
    const focus = selection?.focusNode?.parentElement;
    selectedText = anchor?.closest(excluded) || focus?.closest(excluded) ||
      anchor?.isContentEditable || focus?.isContentEditable ? "" : selection?.toString().trim() ?? "";
    selectionAction.hidden = !selectionButtonEnabled || !selectedText;
    if (!selectionAction.hidden) attachPanel();
  });

  chrome.runtime.onMessage.addListener((message, sender, respond) => {
    if (sender.tab) return;
    if (message?.type === "start") startPage();
    else if (message?.type === "restore") restorePage();
    else if (message?.type === "selection") {
      const text = (typeof message.text === "string" ? message.text.trim() : "") || selectedText;
      if (text) showSelection(text);
      else {
        respond({ error: "ページ上で翻訳するテキストを選択してください。" });
        return;
      }
    } else if (message?.type !== "page-status") return;
    respond({ status: status() });
  });

  function readSettings(value: unknown): Partial<ExtensionSettings> {
    return value as Partial<ExtensionSettings> | undefined ?? {};
  }
  chrome.storage.onChanged.addListener((updates, area) => {
    if (area !== "local" || (!updates.settings && !updates.gpuModel)) return;
    if (!updates.settings) {
      void chrome.storage.local.get("settings").then(({ settings }) => {
        if (!settings || readSettings(settings).engine === "webgpu") restartTranslation();
      });
      return;
    }
    const settings = readSettings(updates.settings.newValue);
    const previous = readSettings(updates.settings.oldValue);
    selectionButtonEnabled = !!settings.selectionButton;
    selectionAction.hidden = !selectionButtonEnabled || !selectedText;
    if (!selectionAction.hidden) attachPanel();
    if (settings.target !== previous.target || settings.server !== previous.server ||
      (settings.engine ?? "llama.cpp") !== (previous.engine ?? "llama.cpp")) restartTranslation();
  });
  function restartTranslation(): void {
    const restart = !!pageRun;
    restorePage();
    closeSelection.click();
    if (restart) startPage();
  }
  void chrome.storage.local.get("settings").then(({ settings }) => {
    const initial = readSettings(settings);
    selectionButtonEnabled = !!initial.selectionButton;
    if (initial.autoTranslate) startPage();
  });
})();
