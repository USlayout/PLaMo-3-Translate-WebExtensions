# wllama runtime snapshot

The JavaScript and WebAssembly files are an unmodified snapshot of the
[wllama upstream demo](https://github.ngxson.com/wllama/examples/basic/).
The embedded llama.cpp revision is `b1-5aeac37`. This snapshot supports the
PLaMo 3 tokenizer used by the 0.8B GGUF.

| File | Source | SHA-256 |
| --- | --- | --- |
| index.js | [JavaScript module](https://github.ngxson.com/wllama/esm/index.js) | `dc8299b8786b34acc64e71b152f00df760b099eeba42410ea584eaaad8dbe5a0` |
| wllama.wasm | [WebAssembly binary](https://github.ngxson.com/wllama/esm/wasm/wllama.wasm) | `603137019c05a97addffcb240c678a758282cd65b5358d21450f1720ce71116f` |

The extension build extracts the embedded inference worker into a separate
local script to satisfy Manifest V3. See the accompanying MIT licence.
