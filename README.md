# PLaMo Web Translator

Chrome・Edgeで、開いているページや選択範囲を PLaMo 3 Translate で翻訳する拡張機能です。翻訳エンジンは、ブラウザー内で動く **WebGPU** と、PC上で動く **llama.cpp** から選べます。既定の翻訳先は日本語です。

## 1. 拡張機能をインストールする

ChromeまたはEdgeと、Node.js・npmを用意します。プロジェクトのルートで以下を実行してください。WebGPUランタイムの wllama はリポジトリに同梱しています。

```powershell
npm ci
npm run build
```

1. Chromeは `chrome://extensions`、Edgeは `edge://extensions`、vivaldiは `vivaldi://extensions` を開きます。
2. **開発者モード**を有効にし、**パッケージ化されていない拡張機能を読み込む**から、このプロジェクトの `dist` フォルダーを選びます。
3. 拡張機能のポップアップで **設定を開く** を押します。初回はWebGPUのアダプターが利用できればWebGPU、利用できなければllama.cppが選ばれます。保存済みの選択は優先されます。

更新時は `npm run build` を実行し、拡張機能の管理画面で **再読み込み** を押します。すでに開いている翻訳対象のページも再読み込みしてください。

## 2. GGUFモデルを用意する

初めてなら **0.8B Q4_K_M** から試せます。WebGPUでは0.8B・2B・8Bを登録できます。各モデルの利用条件は公式配布ページを確認してください。[0.8B](https://huggingface.co/pfnet/plamo-3-translate-0.8b-GGUF) · [2B](https://huggingface.co/pfnet/plamo-3-translate-2b-GGUF) · [8B](https://huggingface.co/pfnet/plamo-3-translate-8b-GGUF)

Hugging Face CLI（`hf`）がある場合は、プロジェクトのルートで次のコマンドを実行すると、0.8BのGGUFとllama.cpp用のテンプレートを所定の場所に取得できます。

```powershell
hf download pfnet/plamo-3-translate-0.8b-GGUF plamo-3-translate-0.8b-Q4_K_M.gguf chat_template.jinja --local-dir local/models/plamo-3-translate-0.8b
```

2B・8BをWebGPUで試す場合は、対応する配布ページの `*-Q4_K_M.gguf` を取得します。WebGPUでは手元の任意のフォルダーからGGUFを選べます。プロジェクト内で管理する場合の配置例は以下のとおりです。

```text
PLaMo-3-Translate-WebExtensions/
├── dist/                                   ブラウザーに読み込む
└── local/                                  Git の対象外
    ├── llama.cpp/                          llama.cpp を使う場合に用意
    │   ├── llama-server.exe
    │   └── 同梱の DLL など
    └── models/
        ├── plamo-3-translate-0.8b/
        │   ├── plamo-3-translate-0.8b-Q4_K_M.gguf
        │   └── chat_template.jinja          llama.cpp 用
        ├── plamo-3-translate-2b/
        │   └── plamo-3-translate-2b-Q4_K_M.gguf
        └── plamo-3-translate-8b/
            └── plamo-3-translate-8b-Q4_K_M.gguf
```

## 3. 翻訳エンジンをセットアップする

### WebGPUで使う

1. 設定で翻訳エンジンを **WebGPU** にして **保存** を押します。
2. **WebGPU モデル**の **登録済みモデル** で **新しいモデルを登録** を選び、GGUFファイルを指定します。分割済みのGGUFは、同じモデルの分割ファイルをすべて選びます。
3. **登録・読み込み** を押し、**準備完了**が表示されるまで待ちます。設定画面を閉じた後も翻訳できます。

複数モデルを登録したら、**登録済みモデル**から使いたいモデルを選び、**このモデルに切り替え・読み込み** を押します。選択は保存され、GPUに載せるのは使用中の1モデルです。

**GPU に割り当てる層数**は、空欄で全層を試みます。GPUメモリーが足りない場合は、層数を指定して読み込み直します。層数はモデルごとに保存されます。登録したGGUFはブラウザープロファイル内にコピーされ、再起動後も使えます。コピーを削除するには、対象を選んで **選択したモデルを削除** を押してください。

### llama.cppで使う

1. PCのOSとCPUに合ったビルドを取得し、実行ファイルと同梱ライブラリを `local/llama.cpp/` に展開します。Windows x64ならCPU版から始められます。macOS・Linuxでの実行ファイル名は `llama-server` です。[llama.cpp公式リリース](https://github.com/ggml-org/llama.cpp/releases)
2. 上の配置例どおり、`local/models/plamo-3-translate-0.8b/` に **0.8B Q4_K_MのGGUF** と **chat_template.jinja** を置き、プロジェクトのルートで起動します。

```powershell
npm run server
```

3. ブラウザーで `http://127.0.0.1:8000/health` を開き、`{"status":"ok"}` が返るまで待ちます。翻訳中はサーバーを起動した端末を開いたままにします。
4. 拡張機能の設定でエンジンを **llama.cpp** にし、接続先を `http://127.0.0.1:8000` にして **保存** を押します。**保存済みの接続先を確認** で接続状態を確認できます。

`npm run server` は0.8B Q4_K_Mを起動します。別のモデルを使うときは、対応するGGUFとテンプレートを指定して `llama-server` を起動し、エイリアスを `plamo-3-translate` にします。拡張機能の接続先には `127.0.0.1` または `localhost` のHTTPアドレスを指定できます。

## 4. 翻訳する

- **ページ全体**は、ポップアップの **ページを翻訳** から開始します。表示中とその周辺を優先し、スクロールすると続きを翻訳します。**原文に戻す** で処理を中止し、訳文を元に戻せます。
- **選択範囲**は、テキストを選んで右クリックし、**PLaMo で選択範囲を翻訳** を選びます。ポップアップの **選択範囲を翻訳** からも実行できます。
- 設定で翻訳先を変更し、自動翻訳や選択時の翻訳ボタンを有効にできます。
- ページ翻訳と選択範囲の翻訳では、処理時間と生成速度（`tokens/s`）を表示します。ページ翻訳の時間には、続きを表示するためのスクロール待ちを含めません。キャッシュから返った訳文は生成速度の計算から除外します。

## 動作確認と制約

- 設定の **WebGPU 翻訳の検証ページを開く** から、GGUFを登録せずに英日翻訳を試せます。GPUに割り当てた層数と読み込み・翻訳時間が表示され、**CPU（比較用）** でも同じ文を試せます。
- 対象はHTTP・HTTPSページのメインフレームです。ブラウザーの内部ページ、iframe、ページ側のShadow DOM、画像内の文字は対象外です。ページ翻訳ではコード、フォーム、非表示の要素を除外します。
- リンクや装飾を維持するため、本文はテキストノード単位で翻訳します。インライン要素で分かれた文は文脈が途切れる場合があります。
- WebGPUはブラウザー内で推論し、llama.cppは翻訳対象のテキストを設定したローカルサーバーへ送ります。訳文はブラウザー内にキャッシュされ、設定の **キャッシュを消去** で削除できます。
