var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __knownSymbol = (name, symbol) => (symbol = Symbol[name]) ? symbol : Symbol.for("Symbol." + name);
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);
var __async = (__this, __arguments, generator) => {
  return new Promise((resolve, reject) => {
    var fulfilled = (value) => {
      try {
        step(generator.next(value));
      } catch (e) {
        reject(e);
      }
    };
    var rejected = (value) => {
      try {
        step(generator.throw(value));
      } catch (e) {
        reject(e);
      }
    };
    var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
    step((generator = generator.apply(__this, __arguments)).next());
  });
};
var __await = function(promise, isYieldStar) {
  this[0] = promise;
  this[1] = isYieldStar;
};
var __asyncGenerator = (__this, __arguments, generator) => {
  var resume = (k, v, yes, no) => {
    try {
      var x = generator[k](v), isAwait = (v = x.value) instanceof __await, done = x.done;
      Promise.resolve(isAwait ? v[0] : v).then((y) => isAwait ? resume(k === "return" ? k : "next", v[1] ? { done: y.done, value: y.value } : y, yes, no) : yes({ value: y, done })).catch((e) => resume("throw", e, yes, no));
    } catch (e) {
      no(e);
    }
  }, method = (k) => it[k] = (x) => new Promise((yes, no) => resume(k, x, yes, no)), it = {};
  return generator = generator.apply(__this, __arguments), it[__knownSymbol("asyncIterator")] = () => it, method("next"), method("throw"), method("return"), it;
};
var __forAwait = (obj, it, method) => (it = obj[__knownSymbol("asyncIterator")]) ? it.call(obj) : (obj = obj[__knownSymbol("iterator")](), it = {}, method = (key, fn) => (fn = obj[key]) && (it[key] = (arg) => new Promise((yes, no, done) => (arg = fn.call(obj, arg), done = arg.done, Promise.resolve(arg.value).then((value) => yes({ value, done }), no)))), method("next"), method("return"), it);

// src/glue/messages.ts
var GLUE_VERSION = 1;
var GLUE_MESSAGE_PROTOTYPES = {
  "erro_evt": {
    "name": "erro_evt",
    "structName": "glue_msg_error",
    "className": "GlueMsgError",
    "fields": [
      {
        "type": "str",
        "name": "message",
        "isNullable": false
      }
    ]
  },
  "load_req": {
    "name": "load_req",
    "structName": "glue_msg_load_req",
    "className": "GlueMsgLoadReq",
    "fields": [
      {
        "type": "arr_str",
        "name": "model_paths",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "mmproj_path",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "n_ctx_auto",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "use_mmap",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "use_mlock",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_gpu_layers",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ctx",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_threads",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "model_alias",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "log_level",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "embeddings",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "offload_kqv",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_batch",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_ubatch",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_parallel",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "pooling_type",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "rope_scaling_type",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "rope_freq_base",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "rope_freq_scale",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_ext_factor",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_attn_factor",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_beta_fast",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "yarn_beta_slow",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "yarn_orig_ctx",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "cache_type_k",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "cache_type_v",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "kv_unified",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "flash_attn",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "swa_full",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_ctx_checkpoints",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "checkpoint_min_step",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "chat_template",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "jinja",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "default_template_kwargs_keys",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "default_template_kwargs_vals",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "reasoning",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "image_min_tokens",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "image_max_tokens",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "warmup",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "no_kv_offload",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "mmproj_offload",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "cont_batching",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_keep",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "ctx_shift",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "cache_idle_slots",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "n_cache_reuse",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "lora_paths",
        "isNullable": true
      },
      {
        "type": "arr_float",
        "name": "lora_scales",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "lora_init_without_apply",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "spec_draft_model",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_ngl",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_n_max",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_n_min",
        "isNullable": true
      },
      {
        "type": "float",
        "name": "spec_draft_p_min",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_threads",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "spec_draft_threads_batch",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "kv_overrides_keys",
        "isNullable": true
      },
      {
        "type": "arr_str",
        "name": "kv_overrides_vals",
        "isNullable": true
      },
      {
        "type": "int",
        "name": "reasoning_budget_tokens",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "reasoning_budget_message",
        "isNullable": true
      },
      {
        "type": "str",
        "name": "reasoning_format",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "skip_chat_parsing",
        "isNullable": true
      },
      {
        "type": "bool",
        "name": "prefill_assistant",
        "isNullable": true
      }
    ]
  },
  "load_res": {
    "name": "load_res",
    "structName": "glue_msg_load_res",
    "className": "GlueMsgLoadRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ctx",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_batch",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ubatch",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_vocab",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_ctx_train",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_embd",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "n_layer",
        "isNullable": false
      },
      {
        "type": "arr_str",
        "name": "metadata_key",
        "isNullable": false
      },
      {
        "type": "arr_str",
        "name": "metadata_val",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_bos",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_eos",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_eot",
        "isNullable": false
      },
      {
        "type": "arr_int",
        "name": "list_tokens_eog",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "add_bos_token",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "add_eos_token",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_encoder",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "token_decoder_start",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "media_marker",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_image_input",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_audio_input",
        "isNullable": false
      }
    ]
  },
  "cmpl_req": {
    "name": "cmpl_req",
    "structName": "glue_msg_completion_req",
    "className": "GlueMsgCompletionReq",
    "fields": [
      {
        "type": "bool",
        "name": "is_chat",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      },
      {
        "type": "arr_raw",
        "name": "files",
        "isNullable": false
      }
    ]
  },
  "cmpl_res": {
    "name": "cmpl_res",
    "structName": "glue_msg_completion_res",
    "className": "GlueMsgCompletionRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "embd_req": {
    "name": "embd_req",
    "structName": "glue_msg_embedding_req",
    "className": "GlueMsgEmbeddingReq",
    "fields": [
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      },
      {
        "type": "arr_raw",
        "name": "files",
        "isNullable": false
      }
    ]
  },
  "embd_res": {
    "name": "embd_res",
    "structName": "glue_msg_embedding_res",
    "className": "GlueMsgEmbeddingRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "message",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "rrnk_req": {
    "name": "rrnk_req",
    "structName": "glue_msg_rerank_req",
    "className": "GlueMsgRerankReq",
    "fields": [
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      }
    ]
  },
  "rrnk_res": {
    "name": "rrnk_res",
    "structName": "glue_msg_rerank_res",
    "className": "GlueMsgRerankRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "sys1_req": {
    "name": "sys1_req",
    "structName": "glue_msg_systemone_req",
    "className": "GlueMsgSystemoneReq",
    "fields": [
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      }
    ]
  },
  "sys1_res": {
    "name": "sys1_res",
    "structName": "glue_msg_systemone_res",
    "className": "GlueMsgSystemoneRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "gres_req": {
    "name": "gres_req",
    "structName": "glue_msg_get_result_req",
    "className": "GlueMsgGetResultReq",
    "fields": [
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "gres_res": {
    "name": "gres_res",
    "structName": "glue_msg_get_result_res",
    "className": "GlueMsgGetResultRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "has_more",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "is_error",
        "isNullable": false
      },
      {
        "type": "str",
        "name": "data_json",
        "isNullable": false
      }
    ]
  },
  "cncl_req": {
    "name": "cncl_req",
    "structName": "glue_msg_cancel_req",
    "className": "GlueMsgCancelReq",
    "fields": [
      {
        "type": "int",
        "name": "req_id",
        "isNullable": false
      }
    ]
  },
  "cncl_res": {
    "name": "cncl_res",
    "structName": "glue_msg_cancel_res",
    "className": "GlueMsgCancelRes",
    "fields": [
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      }
    ]
  },
  "tbop_req": {
    "name": "tbop_req",
    "structName": "glue_msg_test_backend_ops_req",
    "className": "GlueMsgTestBackendOpsReq",
    "fields": [
      {
        "type": "arr_str",
        "name": "args",
        "isNullable": false
      }
    ]
  },
  "tbop_res": {
    "name": "tbop_res",
    "structName": "glue_msg_test_backend_ops_res",
    "className": "GlueMsgTestBackendOpsRes",
    "fields": [
      {
        "type": "int",
        "name": "retcode",
        "isNullable": false
      },
      {
        "type": "bool",
        "name": "success",
        "isNullable": false
      }
    ]
  }
};

// src/glue/glue.ts
var GLUE_MAGIC = new Uint8Array([71, 76, 85, 69]);
var GLUE_DTYPE_NULL = 0;
var GLUE_DTYPE_BOOL = 1;
var GLUE_DTYPE_INT = 2;
var GLUE_DTYPE_FLOAT = 3;
var GLUE_DTYPE_STRING = 4;
var GLUE_DTYPE_RAW = 5;
var GLUE_DTYPE_ARRAY_BOOL = 6;
var GLUE_DTYPE_ARRAY_INT = 7;
var GLUE_DTYPE_ARRAY_FLOAT = 8;
var GLUE_DTYPE_ARRAY_STRING = 9;
var GLUE_DTYPE_ARRAY_RAW = 10;
var TYPE_MAP = {
  str: GLUE_DTYPE_STRING,
  int: GLUE_DTYPE_INT,
  float: GLUE_DTYPE_FLOAT,
  bool: GLUE_DTYPE_BOOL,
  raw: GLUE_DTYPE_RAW,
  arr_str: GLUE_DTYPE_ARRAY_STRING,
  arr_int: GLUE_DTYPE_ARRAY_INT,
  arr_float: GLUE_DTYPE_ARRAY_FLOAT,
  arr_bool: GLUE_DTYPE_ARRAY_BOOL,
  arr_raw: GLUE_DTYPE_ARRAY_RAW,
  null: GLUE_DTYPE_NULL
};
function glueDeserialize(buf) {
  let offset = 0;
  const view = new DataView(buf.buffer);
  const readUint32 = () => {
    const value = view.getUint32(offset, true);
    offset += 4;
    return value;
  };
  const readInt32 = () => {
    const value = view.getInt32(offset, true);
    offset += 4;
    return value;
  };
  const readFloat = () => {
    const value = view.getFloat32(offset, true);
    offset += 4;
    return value;
  };
  const readBool = () => {
    return readUint32() !== 0;
  };
  const readString = (customLen) => {
    const length = customLen != null ? customLen : readUint32();
    const value = new TextDecoder().decode(buf.slice(offset, offset + length));
    offset += length;
    return value;
  };
  const readRaw = () => {
    const length = readUint32();
    const value = buf.slice(offset, offset + length);
    offset += length;
    return value;
  };
  const readArray = (readItem) => {
    const length = readUint32();
    const value = new Array(length);
    for (let i = 0; i < length; i++) {
      value[i] = readItem();
    }
    return value;
  };
  const readNull = () => null;
  const readField = (field) => {
    switch (field.type) {
      case "str":
        return readString();
      case "int":
        return readInt32();
      case "float":
        return readFloat();
      case "bool":
        return readBool();
      case "raw":
        return readRaw();
      case "arr_str":
        return readArray(readString);
      case "arr_int":
        return readArray(readInt32);
      case "arr_float":
        return readArray(readFloat);
      case "arr_bool":
        return readArray(readBool);
      case "arr_raw":
        return readArray(readRaw);
      case "null":
        return readNull();
    }
  };
  const magicValid = buf[0] === GLUE_MAGIC[0] && buf[1] === GLUE_MAGIC[1] && buf[2] === GLUE_MAGIC[2] && buf[3] === GLUE_MAGIC[3];
  offset += 4;
  if (!magicValid) {
    throw new Error("Invalid magic number");
  }
  const version = readUint32();
  if (version !== GLUE_VERSION) {
    throw new Error("Invalid version number");
  }
  const name = readString(8);
  const msgProto = GLUE_MESSAGE_PROTOTYPES[name];
  if (!msgProto) {
    throw new Error(`Unknown message name: ${name}`);
  }
  const output = { _name: name };
  for (const field of msgProto.fields) {
    const readType = readUint32();
    if (readType === GLUE_DTYPE_NULL) {
      if (!field.isNullable) {
        throw new Error(
          `${name}: Expect field ${field.name} to be non-nullable`
        );
      }
      output[field.name] = null;
      continue;
    }
    if (readType !== TYPE_MAP[field.type]) {
      throw new Error(
        `${name}: Expect field ${field.name} to have type ${field.type}`
      );
    }
    output[field.name] = readField(field);
  }
  return output;
}
function glueSerialize(msg) {
  const msgProto = GLUE_MESSAGE_PROTOTYPES[msg._name];
  if (!msgProto) {
    throw new Error(`Unknown message name: ${msg._name}`);
  }
  const bufs = [];
  const writeUint32 = (value) => {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setUint32(0, value, true);
    bufs.push(new Uint8Array(buf));
  };
  const writeInt32 = (value) => {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setInt32(0, value, true);
    bufs.push(new Uint8Array(buf));
  };
  const writeFloat = (value) => {
    const buf = new ArrayBuffer(4);
    new DataView(buf).setFloat32(0, value, true);
    bufs.push(new Uint8Array(buf));
  };
  const writeBool = (value) => {
    writeUint32(value ? 1 : 0);
  };
  const writeString = (value) => {
    const utf8 = new TextEncoder().encode(value);
    writeUint32(utf8.byteLength);
    bufs.push(utf8);
  };
  const writeRaw = (value) => {
    writeUint32(value.byteLength);
    bufs.push(value);
  };
  const writeArray = (value, writeItem) => {
    writeUint32(value.length);
    for (const item of value) {
      writeItem(item);
    }
  };
  const writeNull = () => {
  };
  bufs.push(GLUE_MAGIC);
  writeUint32(GLUE_VERSION);
  {
    const utf8 = new TextEncoder().encode(msg._name);
    bufs.push(utf8);
  }
  for (const field of msgProto.fields) {
    const val = msg[field.name];
    if (!field.isNullable && (val === null || val === void 0)) {
      throw new Error(
        `${msg._name}: Expect field ${field.name} to be non-nullable`
      );
    }
    if (val === null || val === void 0) {
      writeUint32(GLUE_DTYPE_NULL);
      continue;
    }
    writeUint32(TYPE_MAP[field.type]);
    switch (field.type) {
      case "str":
        writeString(val);
        break;
      case "int":
        writeInt32(val);
        break;
      case "float":
        writeFloat(val);
        break;
      case "bool":
        writeBool(val);
        break;
      case "raw":
        writeRaw(val);
        break;
      case "arr_str":
        writeArray(val, writeString);
        break;
      case "arr_int":
        writeArray(val, writeInt32);
        break;
      case "arr_float":
        writeArray(val, writeFloat);
        break;
      case "arr_bool":
        writeArray(val, writeBool);
        break;
      case "arr_raw":
        writeArray(val, writeRaw);
        break;
      case "null":
        writeNull();
        break;
    }
  }
  const totalLength = bufs.reduce((acc, buf) => acc + buf.byteLength, 0);
  const output = new Uint8Array(totalLength);
  let offset = 0;
  for (const buf of bufs) {
    output.set(buf, offset);
    offset += buf.byteLength;
  }
  return output;
}

// src/wasm/source-map.ts
var WASM_SOURCE_MAP = {
  "default": "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",
  "compat": "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"
};

// src/debug.ts
var cache = /* @__PURE__ */ new Map();
function loadMap(buildKey) {
  return __async(this, null, function* () {
    if (cache.has(buildKey)) return cache.get(buildKey);
    const b64 = WASM_SOURCE_MAP[buildKey];
    if (!b64) throw new Error(`No source map for build "${buildKey}"`);
    const gzipped = Uint8Array.from(atob(b64), (c) => c.charCodeAt(0));
    const ds = new DecompressionStream("gzip");
    const writer = ds.writable.getWriter();
    writer.write(gzipped);
    writer.close();
    const buf = yield new Response(ds.readable).arrayBuffer();
    const dv = new DataView(buf);
    const bytes = new Uint8Array(buf);
    const firstId = dv.getUint32(0, true);
    const funcCount = dv.getUint32(4, true);
    const numNames = dv.getUint32(8, true);
    const td = new TextDecoder();
    const names = [];
    let pos = 12;
    for (let i = 0; i < numNames; i++) {
      const len = bytes[pos++];
      names.push(td.decode(bytes.subarray(pos, pos + len)));
      pos += len;
    }
    const funcNames = [];
    for (let i = 0; i < funcCount; i++) {
      const idx = dv.getUint16(pos, true);
      pos += 2;
      funcNames.push(idx === 65535 ? null : names[idx]);
    }
    const entry = { firstId, funcNames };
    cache.set(buildKey, entry);
    return entry;
  });
}
var Debug = {
  /**
   * Resolves a list of wasm function indices to their cleaned symbol names.
   */
  decodeFuncIds: (funcIds, isCompatBuild) => __async(void 0, null, function* () {
    const buildKey = isCompatBuild ? "compat" : "default";
    const { firstId, funcNames } = yield loadMap(buildKey);
    return funcIds.map((funcId) => {
      const i = funcId - firstId;
      const name = i >= 0 && i < funcNames.length && funcNames[i] ? funcNames[i] : "(unknown)";
      return { funcId, name };
    });
  }),
  /**
   * Annotates a wasm stack trace string with resolved function names.
   *
   * Example input from Chrome:
   *   at http://localhost:8080/esm/wasm/wllama.wasm:wasm-function[775]:0x74251
   *   at async blob:http://localhost:8080/53a863cc-7227-45cc-8594-ddbbf5257f20:317:28
   *
   * Example input from Firefox:
   *   @http://localhost:8080/esm/wasm/wllama.wasm:wasm-function[796]:0x7dfe2
   *       at wModuleInit/WebAssembly.promising/< (9b6a2acd-d909-44e2-b021-d42fb9087cfb:15:32) index.js:1433:45
   *
   * Example input from Safari:
   *   2441@wasm-function[2441]
   *       at wrapper (d746f19e-4523-4f36-ba06-d0969acc0b05:22:126009)
   *
   * Example output:
   *   wasm-func[775] (server_response::send)
   */
  decodeStackTrace: (stack, isCompatBuild) => __async(void 0, null, function* () {
    const re = /wasm-function\[(\d+)\]/g;
    const funcIds = [
      ...new Set([...stack.matchAll(re)].map((m) => parseInt(m[1])))
    ];
    if (funcIds.length === 0) return stack;
    const resolved = yield Debug.decodeFuncIds(funcIds, isCompatBuild);
    return resolved.map((r) => {
      if (r.name === "(unknown)") {
        return `    wasm-func[${r.funcId}] (unknown)`;
      }
      return `    wasm-func[${r.funcId}] (${r.name})`;
    }).join("\n");
  })
};

// src/utils.ts
var textDecoder = new TextDecoder();
var URL_PARTS_REGEX = /-(\d{5})-of-(\d{5})\.gguf(?:\?.*)?$/;
var parseShardNumber = (fnameOrUrl) => {
  const matches = fnameOrUrl.match(URL_PARTS_REGEX);
  if (!matches) {
    return {
      baseURL: fnameOrUrl,
      current: 1,
      total: 1
    };
  } else {
    return {
      baseURL: fnameOrUrl.replace(URL_PARTS_REGEX, ""),
      current: parseInt(matches[1]),
      total: parseInt(matches[2])
    };
  }
};
var sortFileByShard = (blobs) => {
  const isFiles = blobs.every((b) => !!b.name);
  if (isFiles && blobs.length > 1) {
    const files = blobs;
    files.sort((a, b) => {
      const infoA = parseShardNumber(a.name);
      const infoB = parseShardNumber(b.name);
      return infoA.current - infoB.current;
    });
  }
};
var isMmproj = (blob) => __async(void 0, null, function* () {
  const META_NAME = "general.architecture";
  const META_VAL = "clip";
  const tmp = blob.slice(0, 128 * 1024);
  const header = yield tmp.arrayBuffer();
  const buf = new Uint8Array(header);
  const nameBytes = new TextEncoder().encode(META_NAME);
  const valBytes = new TextEncoder().encode(META_VAL);
  let offset = -1;
  outer: for (let i = 0; i <= buf.length - nameBytes.length; i++) {
    for (let j = 0; j < nameBytes.length; j++) {
      if (buf[i + j] !== nameBytes[j]) continue outer;
    }
    offset = i;
    break;
  }
  if (offset === -1) return false;
  if (offset + 8 * 4 + 4 > buf.length) return false;
  const view = new DataView(header);
  const valLen = view.getBigUint64(offset + 8 * 3, true);
  if (valLen !== /* @__PURE__ */ BigInt("4")) return false;
  for (let i = 0; i < valBytes.length; i++) {
    if (buf[offset + 8 * 4 + i] !== valBytes[i]) return false;
  }
  return true;
});
var absoluteUrl = (relativePath) => typeof document === "undefined" ? new URL(relativePath, self.location.href).href : new URL(relativePath, document.baseURI).href;
var padDigits = (number, digits) => {
  return Array(Math.max(digits - String(number).length + 1, 0)).join("0") + number;
};
var sumArr = (arr) => arr.reduce((prev, curr) => prev + curr, 0);
var isString = (value) => !!(value == null ? void 0 : value.startsWith);
var MMPROJ_FILE_NAME = "mmproj.gguf";
var prepareBlobs = (blobsInp) => __async(void 0, null, function* () {
  const blobs = [];
  let blobMmproj = null;
  for (const blob of blobsInp) {
    if (yield isMmproj(blob)) {
      blobMmproj = blob;
    } else {
      blobs.push(blob);
    }
  }
  sortFileByShard(blobs);
  const result = blobs.map((blob, i) => ({
    blob,
    name: `model-${padDigits(i + 1, 5)}-of-${padDigits(blobs.length, 5)}.gguf`
  }));
  if (blobMmproj) {
    result.push({
      blob: blobMmproj,
      name: MMPROJ_FILE_NAME
    });
  }
  return {
    llm: result.filter((f) => f.name !== MMPROJ_FILE_NAME),
    mmproj: blobMmproj ? { blob: blobMmproj, name: MMPROJ_FILE_NAME } : null,
    all: result
  };
});
var isSupportMultiThread = () => ((e) => __async(void 0, null, function* () {
  try {
    return "undefined" != typeof MessageChannel && new MessageChannel().port1.postMessage(new SharedArrayBuffer(1)), WebAssembly.validate(e);
  } catch (e2) {
    return false;
  }
}))(
  new Uint8Array([
    0,
    97,
    115,
    109,
    1,
    0,
    0,
    0,
    1,
    4,
    1,
    96,
    0,
    0,
    3,
    2,
    1,
    0,
    5,
    4,
    1,
    3,
    1,
    1,
    10,
    11,
    1,
    9,
    0,
    65,
    0,
    254,
    16,
    2,
    0,
    26,
    11
  ])
);
var isSupportExceptions = () => __async(void 0, null, function* () {
  return WebAssembly.validate(
    new Uint8Array([
      0,
      97,
      115,
      109,
      1,
      0,
      0,
      0,
      1,
      4,
      1,
      96,
      0,
      0,
      3,
      2,
      1,
      0,
      10,
      8,
      1,
      6,
      0,
      6,
      64,
      25,
      11,
      11
    ])
  );
});
var isSupportSIMD = () => __async(void 0, null, function* () {
  return WebAssembly.validate(
    new Uint8Array([
      0,
      97,
      115,
      109,
      1,
      0,
      0,
      0,
      1,
      5,
      1,
      96,
      0,
      1,
      123,
      3,
      2,
      1,
      0,
      10,
      10,
      1,
      8,
      0,
      65,
      0,
      253,
      15,
      253,
      98,
      11
    ])
  );
});
var isSupportJSPI = () => {
  return !!WebAssembly.Suspending;
};
var isSupportWebGPU = () => {
  return !!navigator.gpu;
};
var isSupportMem64 = () => {
  try {
    new WebAssembly.Memory({
      address: "i64",
      initial: /* @__PURE__ */ BigInt("1")
      // 1 page (64 KiB)
    });
    return true;
  } catch (e) {
    return false;
  }
};
var checkEnvironmentCompatible = () => __async(void 0, null, function* () {
  if (!(yield isSupportExceptions())) {
    throw new Error("WebAssembly runtime does not support exception handling");
  }
  if (!(yield isSupportSIMD())) {
    throw new Error("WebAssembly runtime does not support SIMD");
  }
});
var isFirefox = () => {
  return !!navigator.userAgent.match(/Firefox\/([0-9\.]+)(?:\s|$)/);
};
var GGUF_FILE_REGEX = /^.*\.gguf(?:\?.*)?$/;
var isValidGgufFile = (path) => {
  return GGUF_FILE_REGEX.test(path);
};
var isSafariMobile = () => {
  return !!navigator.userAgent.match(/Version\/([0-9\._]+).*Mobile.*Safari.*/);
};
var createWorker = (workerCode) => {
  const workerURL = URL.createObjectURL(
    isString(workerCode) ? new Blob([workerCode], { type: "text/javascript" }) : workerCode
  );
  return new Worker(workerURL, { type: "module" });
};
var cbToAsyncIter = (fn) => (...args) => {
  let values = [];
  let resolve;
  let reject;
  values.push(
    new Promise((res, rej) => {
      resolve = res;
      reject = rej;
    })
  );
  fn(...args, (val, done, err) => {
    if (err) {
      reject(err);
      return;
    }
    resolve([val, done]);
    values.push(
      new Promise((res, rej) => {
        resolve = res;
        reject = rej;
      })
    );
  });
  return function() {
    return __asyncGenerator(this, null, function* () {
      let val;
      for (let i = 0, done = false; !done; i++) {
        [val, done] = yield new __await(values[i]);
        delete values[i];
        if (val !== void 0) yield val;
      }
    });
  }();
};
var canUseAsyncFileRead = (compat) => isSupportJSPI() || compat;
var needCompat = () => !isSupportJSPI() || !isSupportMem64();

// src/workers-code/generated.ts
var LIBLLAMA_VERSION = "b1-5aeac37";
var LLAMA_CPP_WORKER_CODE = "// Start the main llama.cpp\nlet wllamaMalloc;\nlet wllamaStart;\nlet wllamaAction;\nlet wllamaExit;\nlet wllamaDebug;\n\nlet Module = null;\nlet isCompat = false;\nlet lastStack = '';\nlet isAborted = false;\nlet hasMultithread = false;\n\n//////////////////////////////////////////////////////////////\n// UTILS\n//////////////////////////////////////////////////////////////\n\n// send message back to main thread\nconst msg = (data, transfer) => postMessage(data, transfer);\n\n// Convert CPP log into JS log\nconst cppLogToJSLog = (line) => {\n  const matched = line.match(/@@(DEBUG|INFO|WARN|ERROR)@@(.*)/);\n  return !!matched\n    ? {\n        level: (matched[1] === 'INFO' ? 'debug' : matched[1]).toLowerCase(),\n        text: matched[2],\n      }\n    : { level: 'log', text: line };\n};\n\nconst getHeapU8 = () => {\n  const buffer = Module.wasmMemory.buffer;\n  return new Uint8Array(buffer);\n};\n\nconst toSizeT = (num) => {\n  return isCompat ? Number(num) : BigInt(num);\n};\n\n// Get module config that forwards stdout/err to main thread\nconst getWModuleConfig = (_argMainScriptBlob) => {\n  var pathConfig = RUN_OPTIONS.pathConfig;\n  var pthreadPoolSize = RUN_OPTIONS.nbThread;\n  var argMainScriptBlob = _argMainScriptBlob;\n\n  isCompat = RUN_OPTIONS.compat;\n  hasMultithread = pthreadPoolSize > 1;\n\n  msg({\n    verb: 'console.debug',\n    args: [\n      `Multithread enabled: ${hasMultithread}, pthreadPoolSize: ${pthreadPoolSize}`,\n    ],\n  });\n\n  if (!pathConfig['wllama.wasm']) {\n    throw new Error('\"wllama.wasm\" is missing in pathConfig');\n  }\n  return {\n    noInitialRun: true,\n    print: function (text) {\n      if (arguments.length > 1)\n        text = Array.prototype.slice.call(arguments).join(' ');\n      msg({ verb: 'console.log', args: [text] });\n    },\n    printErr: function (text) {\n      if (arguments.length > 1)\n        text = Array.prototype.slice.call(arguments).join(' ');\n      if (text.startsWith('@@STACK@@')) {\n        lastStack = text.slice('@@STACK@@'.length);\n        return;\n      }\n      const logLine = cppLogToJSLog(text);\n      msg({ verb: 'console.' + logLine.level, args: [logLine.text] });\n    },\n    locateFile: function (filename, basePath) {\n      const p = pathConfig[filename];\n      const truncate = (str) =>\n        str.length > 128 ? `${str.substr(0, 128)}...` : str;\n      if (filename.match(/wllama\\.worker\\.js/)) {\n        msg({\n          verb: 'console.error',\n          args: [\n            '\"wllama.worker.js\" is removed from v2.2.1. Hint: make sure to clear browser\\'s cache.',\n          ],\n        });\n      } else {\n        msg({\n          verb: 'console.debug',\n          args: [`Loading \"${filename}\" from \"${truncate(p)}\"`],\n        });\n        return p;\n      }\n    },\n    mainScriptUrlOrBlob: hasMultithread\n      ? argMainScriptBlob\n      : 'throw new Error(\"Multithreading is not enabled\")',\n    pthreadPoolSize: hasMultithread ? pthreadPoolSize : 0,\n    wasmMemory: hasMultithread ? getWasmMemory() : null,\n    onAbort: function (message) {\n      isAborted = true;\n      msg({ verb: 'signal.abort', args: ['abort', message, lastStack, null] });\n    },\n    onExit: function (code) {\n      isAborted = true;\n      const callstack = new Error().stack.toString();\n      msg({\n        verb: 'signal.abort',\n        args: ['abort', 'exit(' + code + ')', callstack, null],\n      });\n    },\n  };\n};\n\n// Get the memory to be used by wasm. (Only used in multi-thread mode)\n// Because we have a weird OOM issue on iOS, we need to try some values\n// See: https://github.com/emscripten-core/emscripten/issues/19144\n//      https://github.com/godotengine/godot/issues/70621\nconst getWasmMemory = () => {\n  let minBytes = 128 * 1024 * 1024;\n  let maxBytes = 4096 * 1024 * 1024;\n  let stepBytes = 128 * 1024 * 1024;\n  while (maxBytes > minBytes) {\n    try {\n      const wasmMemory = new WebAssembly.Memory({\n        initial: toSizeT(minBytes / 65536),\n        maximum: toSizeT(maxBytes / 65536),\n        shared: true,\n        address: isCompat ? undefined : 'i64',\n      });\n      return wasmMemory;\n    } catch (e) {\n      maxBytes -= stepBytes;\n      continue; // retry\n    }\n  }\n  throw new Error('Cannot allocate WebAssembly.Memory');\n};\n\n//////////////////////////////////////////////////////////////\n// HEAPFS PATCH\n//////////////////////////////////////////////////////////////\n\n/**\n * By default, emscripten uses memfs. The way it works is by\n * allocating new Uint8Array in javascript heap. This is not good\n * because it requires files to be copied to wasm heap each time\n * a file is read.\n *\n * HeapFS is an alternative, which resolves this problem by\n * allocating space for file directly inside wasm heap. This\n * allows us to mmap without doing any copy.\n *\n * For llama.cpp, this is great because we use MAP_SHARED\n *\n * Ref: https://github.com/ngxson/wllama/pull/39\n * Ref: https://github.com/emscripten-core/emscripten/blob/main/src/library_memfs.js\n *\n * Note 29/05/2024 @ngxson\n * Due to ftell() being limited to MAX_LONG, we cannot load files bigger than 2^31 bytes (or 2GB)\n * Ref: https://github.com/emscripten-core/emscripten/blob/main/system/lib/libc/musl/src/stdio/ftell.c\n */\n\nconst fsNameToFile = {}; // map Name => File\nconst fsIdToFile = {}; // map ID => File\nlet currFileId = 0;\n\n// Patch and redirect memfs calls to wllama\nconst patchHeapFS = () => {\n  const m = Module;\n  // save functions\n  m.MEMFS.stream_ops._read = m.MEMFS.stream_ops.read;\n  m.MEMFS.stream_ops._write = m.MEMFS.stream_ops.write;\n  m.MEMFS.stream_ops._llseek = m.MEMFS.stream_ops.llseek;\n  m.MEMFS.stream_ops._allocate = m.MEMFS.stream_ops.allocate;\n  m.MEMFS.stream_ops._mmap = m.MEMFS.stream_ops.mmap;\n  m.MEMFS.stream_ops._msync = m.MEMFS.stream_ops.msync;\n\n  const patchStream = (stream) => {\n    const name = stream.node.name;\n    if (fsNameToFile[name]) {\n      const f = fsNameToFile[name];\n      const ptr = Number(f.ptr);\n      stream.node.contents = getHeapU8().subarray(ptr, ptr + f.size);\n      stream.node.usedBytes = f.size;\n    }\n  };\n\n  // replace \"read\" functions\n  m.MEMFS.stream_ops.read = function (\n    stream,\n    buffer,\n    offset,\n    length,\n    position\n  ) {\n    patchStream(stream);\n    return m.MEMFS.stream_ops._read(stream, buffer, offset, length, position);\n  };\n  m.MEMFS.ops_table.file.stream.read = m.MEMFS.stream_ops.read;\n\n  // replace \"llseek\" functions\n  m.MEMFS.stream_ops.llseek = function (stream, offset, whence) {\n    patchStream(stream);\n    return m.MEMFS.stream_ops._llseek(stream, offset, whence);\n  };\n  m.MEMFS.ops_table.file.stream.llseek = m.MEMFS.stream_ops.llseek;\n\n  // replace \"mmap\" functions\n  m.MEMFS.stream_ops.mmap = function (stream, length, position, prot, flags) {\n    patchStream(stream);\n    const name = stream.node.name;\n    if (fsNameToFile[name]) {\n      const f = fsNameToFile[name];\n      const mmapPtr = f.ptr + toSizeT(position);\n      return {\n        ptr: mmapPtr,\n        allocated: false,\n      };\n    } else {\n      return m.MEMFS.stream_ops._mmap(stream, length, position, prot, flags);\n    }\n  };\n  m.MEMFS.ops_table.file.stream.mmap = m.MEMFS.stream_ops.mmap;\n\n  // mount FS\n  m.FS.mkdir('/models');\n  m.FS.mount(m.MEMFS, { root: '.' }, '/models');\n};\n\n// Allocate a new file in wllama heapfs, returns file ID\nconst heapfsAlloc = (name, size, allocBuffer) => {\n  if (size < 1) {\n    throw new Error('File size must be bigger than 0');\n  }\n  const m = Module;\n  const ptr = toSizeT(allocBuffer ? m.mmapAlloc(size) : 0);\n  const file = {\n    ptr: ptr,\n    size: size,\n    id: currFileId++,\n  };\n  fsIdToFile[file.id] = file;\n  fsNameToFile[name] = file;\n  return file.id;\n};\n\n// Add new file to wllama heapfs, return number of written bytes\nconst heapfsWrite = (id, buffer, offset) => {\n  if (fsIdToFile[id]) {\n    const { ptr, size } = fsIdToFile[id];\n    const afterWriteByte = offset + buffer.byteLength;\n    if (afterWriteByte > size) {\n      throw new Error(\n        `File ID ${id} write out of bound, afterWriteByte = ${afterWriteByte} while size = ${size}`\n      );\n    }\n    getHeapU8().set(buffer, Number(ptr) + offset);\n    return buffer.byteLength;\n  } else {\n    throw new Error(`File ID ${id} not found in heapfs`);\n  }\n};\n\n//////////////////////////////////////////////////////////////\n// ASYNC FILE READ\n//////////////////////////////////////////////////////////////\n\nlet isAwaitReading = false;\nlet pendingReadPromise = null;\nlet pendingReadResolve = null;\nlet pendingReadReject = null;\n\nconst _stripModelsPrefix = (path) => path.replace(/^\\/?models\\//, '');\n\n// Called from EM_ASYNC_JS stub in wllama-fs.h (path is already a JS string)\nconst _wllama_js_file_read = async (path, offset, req_size, out_ptr) => {\n  const name = _stripModelsPrefix(path);\n\n  pendingReadPromise = new Promise((res, rej) => {\n    pendingReadResolve = res;\n    pendingReadReject = rej;\n  });\n  isAwaitReading = true;\n\n  postMessage({ verb: 'fs.read_req', args: [name, offset, req_size] });\n\n  let data;\n  try {\n    data = await pendingReadPromise;\n  } finally {\n    isAwaitReading = false;\n    pendingReadResolve = null;\n    pendingReadReject = null;\n  }\n\n  const bytes = new Uint8Array(data);\n  getHeapU8().set(bytes, out_ptr);\n  return toSizeT(bytes.length);\n};\n\n//////////////////////////////////////////////////////////////\n// MAIN CODE\n//////////////////////////////////////////////////////////////\n\nconst callWrapper = (name, ret, args, isAsync) => {\n  const fn = Module.cwrap(\n    name,\n    ret,\n    args,\n    isAsync ? { async: true } : undefined\n  );\n  return async (action, req) => {\n    // console.log(`Calling ${name} with action:`, action, 'and req:', req);\n    let result;\n    try {\n      if (args.length === 2) {\n        result = isAsync ? await fn(action, req) : fn(action, req);\n      } else {\n        result = fn();\n      }\n    } catch (ex) {\n      console.error(ex);\n      throw ex;\n    }\n    return result;\n  };\n};\n\n// re-entering the wasm while a call is suspended (JSPI / asyncify) corrupts its state, so only one call runs at a time and the rest wait in the queue\nlet wasmCallBusy = false;\nconst wasmCallQueue = [];\n\nconst runWasmCall = async (callbackId, fn) => {\n  if (isAborted) {\n    // the wasm is dead, fail fast instead of calling into it\n    msg({ callbackId, err: 'wllama has crashed, please reload the module' });\n    return;\n  }\n  if (wasmCallBusy) {\n    wasmCallQueue.push({ callbackId, fn });\n    return;\n  }\n  wasmCallBusy = true;\n  try {\n    await fn();\n  } finally {\n    wasmCallBusy = false;\n    if (isAborted) {\n      // do not touch the wasm again after it aborted; the main thread already rejected the queued tasks\n      wasmCallQueue.length = 0;\n    } else {\n      const next = wasmCallQueue.shift();\n      if (next) runWasmCall(next.callbackId, next.fn);\n    }\n  }\n};\n\nconst runAction = async (data) => {\n  const { args, callbackId } = data;\n  const argAction = args[0];\n  const argEncodedMsg = args[1];\n  try {\n    const inputPtr = await wllamaMalloc(toSizeT(argEncodedMsg.byteLength), 0);\n    // copy data to wasm heap\n    const inputBuffer = new Uint8Array(\n      getHeapU8().buffer,\n      Number(inputPtr),\n      argEncodedMsg.byteLength\n    );\n    inputBuffer.set(argEncodedMsg, 0);\n    const outputPtr = await wllamaAction(argAction, inputPtr);\n    // length of output buffer is written at the first 4 bytes of input buffer\n    const outputLen = new Uint32Array(\n      getHeapU8().buffer,\n      Number(inputPtr),\n      1\n    )[0];\n    // copy the output buffer to JS heap\n    const outputBuffer = new Uint8Array(outputLen);\n    const outputSrcView = new Uint8Array(\n      getHeapU8().buffer,\n      Number(outputPtr),\n      outputLen\n    );\n    outputBuffer.set(outputSrcView, 0); // copy it\n    msg({ callbackId, result: outputBuffer }, [outputBuffer.buffer]);\n  } catch (err) {\n    handleError(err);\n  }\n};\n\nfunction handleError(err) {\n  // If WASM already aborted, onAbort already sent signal.abort; skip to avoid\n  // re-reporting the resulting WebAssembly.RuntimeError as a JS exception.\n  if (isAborted) return;\n\n  const message = err ? err.message || String(err) : 'Unknown error';\n  const stack = err ? err.stack || String(err) : '';\n  msg({\n    verb: 'signal.abort',\n    args: ['exception', message, stack, err],\n  });\n}\n\nonmessage = async (e) => {\n  if (!e.data) return;\n  const { verb, args, callbackId } = e.data;\n\n  // fs.read_res arrives while wasm is JSPI-suspended; resolve the pending promise.\n  if (verb === 'fs.read_res') {\n    if (pendingReadResolve) {\n      pendingReadResolve(args[0]);\n    }\n    return;\n  }\n\n  // Guard: while awaiting a file read, reject any other incoming task.\n  if (isAwaitReading) {\n    if (callbackId) {\n      msg({\n        callbackId,\n        err: 'Worker is suspended waiting for file data (JSPI)',\n      });\n    }\n    return;\n  }\n\n  if (!callbackId) {\n    msg({ verb: 'console.error', args: ['callbackId is required', e.data] });\n    return;\n  }\n\n  if (verb === 'module.init') {\n    const argMainScriptBlob = args[0];\n    const argUseAsyncFile = args[1];\n    try {\n      Module = getWModuleConfig(argMainScriptBlob);\n      Module.preRun = () => {\n        if (argUseAsyncFile) {\n          Module.ENV['USE_ASYNC_FILE'] = '1';\n        }\n      };\n      Module.onRuntimeInitialized = () => {\n        // async call once module is ready\n        // init FS\n        patchHeapFS();\n        // init cwrap\n        const pointer = isCompat ? 'number' : 'bigint';\n        // TODO: note sure why emscripten cannot bind if there is only 1 argument\n        wllamaMalloc = callWrapper('wllama_malloc', pointer, [\n          'number',\n          pointer,\n        ]);\n        wllamaStart = callWrapper('wllama_start', 'string', [], true);\n        wllamaAction = callWrapper(\n          'wllama_action',\n          pointer,\n          ['string', pointer],\n          true\n        );\n        wllamaExit = callWrapper('wllama_exit', 'string', []);\n        wllamaDebug = callWrapper('wllama_debug', 'string', []);\n        msg({ callbackId, result: null });\n      };\n      wModuleInit();\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'fs.alloc') {\n    const argFilename = args[0];\n    const argSize = args[1];\n    const argAllocBuffer = args[2];\n    try {\n      // create blank file\n      const emptyBuffer = new ArrayBuffer(0);\n      Module['FS_createDataFile'](\n        '/models',\n        argFilename,\n        emptyBuffer,\n        true,\n        true,\n        true\n      );\n      // alloc data on heap\n      const fileId = heapfsAlloc(argFilename, argSize, argAllocBuffer);\n      msg({ callbackId, result: { fileId } });\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'fs.write') {\n    const argFileId = args[0];\n    const argBuffer = args[1];\n    const argOffset = args[2];\n    try {\n      const writtenBytes = heapfsWrite(argFileId, argBuffer, argOffset);\n      msg({ callbackId, result: { writtenBytes } });\n    } catch (err) {\n      handleError(err);\n    }\n    return;\n  }\n\n  if (verb === 'wllama.start') {\n    await runWasmCall(callbackId, async () => {\n      try {\n        const result = await wllamaStart();\n        msg({ callbackId, result });\n      } catch (err) {\n        handleError(err);\n      }\n    });\n    return;\n  }\n\n  if (verb === 'wllama.action') {\n    await runWasmCall(callbackId, () => runAction(e.data));\n    return;\n  }\n\n  if (verb === 'wllama.exit') {\n    await runWasmCall(callbackId, async () => {\n      try {\n        const result = await wllamaExit();\n        msg({ callbackId, result });\n      } catch (err) {\n        handleError(err);\n      }\n    });\n    return;\n  }\n\n  if (verb === 'wllama.debug') {\n    await runWasmCall(callbackId, async () => {\n      try {\n        const result = await wllamaDebug();\n        msg({ callbackId, result });\n      } catch (err) {\n        handleError(err);\n      }\n    });\n    return;\n  }\n};\n";
var OPFS_UTILS_WORKER_CODE = "let accessHandle;\nlet abortController = new AbortController();\n\nasync function openFile(filename) {\n  const opfsRoot = await navigator.storage.getDirectory();\n  const cacheDir = await opfsRoot.getDirectoryHandle('cache', { create: true });\n  const fileHandler = await cacheDir.getFileHandle(filename, { create: true });\n  accessHandle = await fileHandler.createSyncAccessHandle();\n  accessHandle.truncate(0); // clear file content\n}\n\nasync function writeFile(buf) {\n  accessHandle.write(buf);\n}\n\nasync function closeFile() {\n  accessHandle.flush();\n  accessHandle.close();\n}\n\nasync function writeTextFile(filename, str) {\n  await openFile(filename);\n  await writeFile(new TextEncoder().encode(str));\n  await closeFile();\n}\n\nconst throttled = (func, delay) => {\n  let lastRun = 0;\n  return (...args) => {\n    const now = Date.now();\n    if (now - lastRun > delay) {\n      lastRun = now;\n      func.apply(null, args);\n    }\n  };\n};\n\nconst assertNonNull = (val) => {\n  if (val === null || val === undefined) {\n    throw new Error('OPFS Worker: Assertion failed');\n  }\n};\n\n// respond to main thread\nconst resOK = () => postMessage({ ok: true });\nconst resProgress = (loaded, total) =>\n  postMessage({ progress: { loaded, total } });\nconst resErr = (err) => postMessage({ err });\n\nonmessage = async (e) => {\n  try {\n    if (!e.data) return;\n\n    /**\n     * @param {Object} e.data\n     *\n     * Fine-control FS actions:\n     * - { action: 'open', filename: 'string' }\n     * - { action: 'write', buf: ArrayBuffer }\n     * - { action: 'close' }\n     *\n     * Simple write API:\n     * - { action: 'write-simple', filename: 'string', buf: ArrayBuffer }\n     *\n     * Download API:\n     * - { action: 'download', url: 'string', filename: 'string', options: Object, metadataFileName: 'string' }\n     * - { action: 'download-abort' }\n     */\n    const {\n      action,\n      filename,\n      buf,\n      url,\n      options,\n      metadataFileName,\n      metadataAdditional,\n    } = e.data;\n\n    if (action === 'open') {\n      assertNonNull(filename);\n      await openFile(filename);\n      return resOK();\n    } else if (action === 'write') {\n      assertNonNull(buf);\n      await writeFile(buf);\n      return resOK();\n    } else if (action === 'close') {\n      await closeFile();\n      return resOK();\n    } else if (action === 'write-simple') {\n      assertNonNull(filename);\n      assertNonNull(buf);\n      await openFile(filename);\n      await writeFile(buf);\n      await closeFile();\n      return resOK();\n    } else if (action === 'download') {\n      assertNonNull(url);\n      assertNonNull(filename);\n      assertNonNull(metadataFileName);\n      assertNonNull(options);\n      assertNonNull(options.aborted);\n      abortController = new AbortController();\n      if (options.aborted) abortController.abort();\n      const response = await fetch(url, {\n        ...options,\n        signal: abortController.signal,\n      });\n      const contentLength = response.headers.get('content-length');\n      const etag = (response.headers.get('etag') || '').replace(\n        /[^A-Za-z0-9]/g,\n        ''\n      );\n      const total = parseInt(contentLength, 10);\n      const reader = response.body.getReader();\n      await openFile(filename);\n      let loaded = 0;\n      const throttledProgress = throttled(resProgress, 100);\n      while (true) {\n        const { done, value } = await reader.read();\n        if (done) break;\n        loaded += value.byteLength;\n        await writeFile(value);\n        throttledProgress(loaded, total);\n      }\n      resProgress(total, total); // 100% done\n      await closeFile();\n      // make sure this is in-sync with CacheEntryMetadata\n      await writeTextFile(\n        metadataFileName,\n        JSON.stringify({\n          originalURL: url,\n          originalSize: total,\n          etag,\n          ...metadataAdditional,\n        })\n      );\n      return resOK();\n    } else if (action === 'download-abort') {\n      if (abortController) {\n        abortController.abort();\n      }\n      return;\n    }\n\n    throw new Error('OPFS Worker: Invalid action', e.data);\n  } catch (err) {\n    return resErr(err);\n  }\n};\n";
var WLLAMA_EMSCRIPTEN_CODE = 'var Module=typeof Module!="undefined"?Module:{};var ENVIRONMENT_IS_WEB=!!globalThis.window;var ENVIRONMENT_IS_WORKER=!!globalThis.WorkerGlobalScope;var ENVIRONMENT_IS_NODE=globalThis.process?.versions?.node&&globalThis.process?.type!="renderer";var ENVIRONMENT_IS_PTHREAD=ENVIRONMENT_IS_WORKER&&self.name?.startsWith("em-pthread");if(ENVIRONMENT_IS_NODE){var worker_threads=require("worker_threads");global.Worker=worker_threads.Worker;ENVIRONMENT_IS_WORKER=!worker_threads.isMainThread;ENVIRONMENT_IS_PTHREAD=ENVIRONMENT_IS_WORKER&&worker_threads["workerData"]=="em-pthread"}var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var _scriptName=globalThis.document?.currentScript?.src;if(typeof __filename!="undefined"){_scriptName=__filename}else if(ENVIRONMENT_IS_WORKER){_scriptName=self.location.href}var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var readAsync,readBinary;if(ENVIRONMENT_IS_NODE){var fs=require("fs");scriptDirectory=__dirname+"/";readBinary=filename=>{filename=isFileURI(filename)?new URL(filename):filename;var ret=fs.readFileSync(filename);return ret};readAsync=async(filename,binary=true)=>{filename=isFileURI(filename)?new URL(filename):filename;var ret=fs.readFileSync(filename,binary?undefined:"utf8");return ret};if(process.argv.length>1){thisProgram=process.argv[1].replace(/\\\\/g,"/")}arguments_=process.argv.slice(2);if(typeof module!="undefined"){module["exports"]=Module}quit_=(status,toThrow)=>{process.exitCode=status;throw toThrow}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){try{scriptDirectory=new URL(".",_scriptName).href}catch{}if(!ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=async url=>{if(isFileURI(url)){return new Promise((resolve,reject)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){resolve(xhr.response);return}reject(xhr.status)};xhr.onerror=reject;xhr.send(null)})}var response=await fetch(url,{credentials:"same-origin"});if(response.ok){return response.arrayBuffer()}throw new Error(response.status+" : "+response.url)}}}else{}var defaultPrint=console.log.bind(console);var defaultPrintErr=console.error.bind(console);if(ENVIRONMENT_IS_NODE){var utils=require("util");var stringify=a=>typeof a=="object"?utils.inspect(a):a;defaultPrint=(...args)=>fs.writeSync(1,args.map(stringify).join(" ")+"\\n");defaultPrintErr=(...args)=>fs.writeSync(2,args.map(stringify).join(" ")+"\\n")}var out=defaultPrint;var err=defaultPrintErr;var wasmBinary;var wasmModule;var ABORT=false;var EXITSTATUS;function assert(condition,text){if(!condition){abort(text)}}var isFileURI=filename=>filename.startsWith("file://");function growMemViews(){if(wasmMemory.buffer!=HEAP8.buffer){updateMemoryViews()}}if(ENVIRONMENT_IS_NODE&&ENVIRONMENT_IS_PTHREAD){var parentPort=worker_threads["parentPort"];parentPort.on("message",msg=>global.onmessage?.({data:msg}));Object.assign(globalThis,{self:global,postMessage:msg=>parentPort["postMessage"](msg)});process.on("uncaughtException",err=>{postMessage({cmd:"uncaughtException",error:err});process.exit(1)})}var startWorker;if(ENVIRONMENT_IS_PTHREAD){var initializedJS=false;self.onunhandledrejection=e=>{throw e.reason||e};async function handleMessage(e){try{var msgData=e["data"];var cmd=msgData.cmd;if(cmd==="load"){let messageQueue=[];self.onmessage=e=>messageQueue.push(e);startWorker=()=>{postMessage({cmd:"loaded"});for(let msg of messageQueue){handleMessage(msg)}self.onmessage=handleMessage};for(const handler of msgData.handlers){if(!Module[handler]||Module[handler].proxy){Module[handler]=(...args)=>{postMessage({cmd:"callHandler",handler,args})};if(handler=="print")out=Module[handler];if(handler=="printErr")err=Module[handler]}}wasmMemory=msgData.wasmMemory;updateMemoryViews();wasmModule=msgData.wasmModule;createWasm();run()}else if(cmd==="run"){establishStackSpace(msgData.pthread_ptr);__emscripten_thread_init(msgData.pthread_ptr,0,0,1,0,0);PThread.threadInitTLS();__emscripten_thread_mailbox_await(msgData.pthread_ptr);if(!initializedJS){initializedJS=true}try{await invokeEntryPoint(msgData.start_routine,msgData.arg)}catch(ex){if(ex!="unwind"){throw ex}}}else if(msgData.target==="setimmediate"){}else if(cmd==="checkMailbox"){if(initializedJS){checkMailbox()}}else if(cmd){err(`worker: received unknown command ${cmd}`);err(msgData)}}catch(ex){__emscripten_thread_crashed();throw ex}}self.onmessage=handleMessage}var HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;var HEAP64,HEAPU64;var runtimeInitialized=false;function updateMemoryViews(){var b=wasmMemory.buffer;HEAP8=new Int8Array(b);HEAP16=new Int16Array(b);Module["HEAPU8"]=HEAPU8=new Uint8Array(b);HEAPU16=new Uint16Array(b);HEAP32=new Int32Array(b);HEAPU32=new Uint32Array(b);HEAPF32=new Float32Array(b);HEAPF64=new Float64Array(b);HEAP64=new BigInt64Array(b);HEAPU64=new BigUint64Array(b)}function initMemory(){if(ENVIRONMENT_IS_PTHREAD){return}if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||134217728;wasmMemory=new WebAssembly.Memory({initial:BigInt(INITIAL_MEMORY/65536),maximum:65536n,shared:true,address:"i64"})}updateMemoryViews()}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(onPreRuns)}function initRuntime(){runtimeInitialized=true;if(ENVIRONMENT_IS_PTHREAD)return startWorker();if(!Module["noFSInit"]&&!FS.initialized)FS.init();TTY.init();wasmExports["__wasm_call_ctors"]();FS.ignorePermissions=false}function preMain(){}function postRun(){if(ENVIRONMENT_IS_PTHREAD){return}if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(onPostRuns)}function abort(what){Module["onAbort"]?.(what);what="Aborted("+what+")";err(what);ABORT=true;what+=". Build with -sASSERTIONS for more info.";if(runtimeInitialized){___trap()}var e=new WebAssembly.RuntimeError(what);throw e}var wasmBinaryFile;function findWasmBinary(){return locateFile("wllama.wasm")}function getBinarySync(file){if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}async function getWasmBinary(binaryFile){if(!wasmBinary){try{var response=await readAsync(binaryFile);return new Uint8Array(response)}catch{}}return getBinarySync(binaryFile)}async function instantiateArrayBuffer(binaryFile,imports){try{var binary=await getWasmBinary(binaryFile);var instance=await WebAssembly.instantiate(binary,imports);return instance}catch(reason){err(`failed to asynchronously prepare wasm: ${reason}`);abort(reason)}}async function instantiateAsync(binary,binaryFile,imports){if(!binary&&!isFileURI(binaryFile)&&!ENVIRONMENT_IS_NODE){try{var response=fetch(binaryFile,{credentials:"same-origin"});var instantiationResult=await WebAssembly.instantiateStreaming(response,imports);return instantiationResult}catch(reason){err(`wasm streaming compile failed: ${reason}`);err("falling back to ArrayBuffer instantiation")}}return instantiateArrayBuffer(binaryFile,imports)}function getWasmImports(){assignWasmImports();if(!wasmImports.__instrumented){wasmImports.__instrumented=true;Asyncify.instrumentWasmImports(wasmImports)}var imports={env:wasmImports,wasi_snapshot_preview1:wasmImports};return imports}async function createWasm(){function receiveInstance(instance,module){wasmExports=instance.exports;wasmExports=Asyncify.instrumentWasmExports(wasmExports);wasmExports=applySignatureConversions(wasmExports);registerTLSInit(wasmExports["_emscripten_tls_init"]);assignWasmExports(wasmExports);wasmModule=module;removeRunDependency("wasm-instantiate");return wasmExports}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){return receiveInstance(result["instance"],result["module"])}var info=getWasmImports();if(Module["instantiateWasm"]){return new Promise((resolve,reject)=>{Module["instantiateWasm"](info,(inst,mod)=>{resolve(receiveInstance(inst,mod))})})}if(ENVIRONMENT_IS_PTHREAD){var instance=new WebAssembly.Instance(wasmModule,getWasmImports());return receiveInstance(instance,wasmModule)}wasmBinaryFile??=findWasmBinary();var result=await instantiateAsync(wasmBinary,wasmBinaryFile,info);var exports=receiveInstantiationResult(result);return exports}class ExitStatus{name="ExitStatus";constructor(status){this.message=`Program terminated with exit(${status})`;this.status=status}}var terminateWorker=worker=>{worker.terminate();worker.onmessage=e=>{}};var cleanupThread=pthread_ptr=>{var worker=PThread.pthreads[pthread_ptr];PThread.returnWorkerToPool(worker)};var callRuntimeCallbacks=callbacks=>{while(callbacks.length>0){callbacks.shift()(Module)}};var onPreRuns=[];var addOnPreRun=cb=>onPreRuns.push(cb);var runDependencies=0;var dependenciesFulfilled=null;var removeRunDependency=id=>{runDependencies--;Module["monitorRunDependencies"]?.(runDependencies);if(runDependencies==0){if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}};var addRunDependency=id=>{runDependencies++;Module["monitorRunDependencies"]?.(runDependencies)};var spawnThread=threadParams=>{var worker=PThread.getNewWorker();if(!worker){return 6}PThread.runningWorkers.push(worker);PThread.pthreads[threadParams.pthread_ptr]=worker;worker.pthread_ptr=threadParams.pthread_ptr;var msg={cmd:"run",start_routine:threadParams.startRoutine,arg:threadParams.arg,pthread_ptr:threadParams.pthread_ptr};if(ENVIRONMENT_IS_NODE){worker.unref()}worker.postMessage(msg,threadParams.transferList);return 0};var runtimeKeepaliveCounter=0;var keepRuntimeAlive=()=>noExitRuntime||runtimeKeepaliveCounter>0;var stackSave=()=>_emscripten_stack_get_current();var stackRestore=val=>__emscripten_stack_restore(val);var stackAlloc=sz=>__emscripten_stack_alloc(sz);var proxyToMainThread=(funcIndex,emAsmAddr,sync,...callArgs)=>{var serializedNumCallArgs=callArgs.length*2;var sp=stackSave();var args=stackAlloc(serializedNumCallArgs*8);var b=args/8;for(var i=0;i<callArgs.length;i++){var arg=callArgs[i];if(typeof arg=="bigint"){(growMemViews(),HEAP64)[b+2*i]=1n;(growMemViews(),HEAP64)[b+2*i+1]=arg}else{(growMemViews(),HEAP64)[b+2*i]=0n;(growMemViews(),HEAPF64)[b+2*i+1]=arg}}var rtn=__emscripten_run_js_on_main_thread(funcIndex,emAsmAddr,serializedNumCallArgs,args,sync);stackRestore(sp);return rtn};function _proc_exit(code){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(0,0,1,code);EXITSTATUS=code;if(!keepRuntimeAlive()){PThread.terminateAllThreads();Module["onExit"]?.(code);ABORT=true}quit_(code,new ExitStatus(code))}function exitOnMainThread(returnCode){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(1,0,0,returnCode);_exit(returnCode)}var exitJS=(status,implicit)=>{EXITSTATUS=status;if(ENVIRONMENT_IS_PTHREAD){exitOnMainThread(status);throw"unwind"}_proc_exit(status)};var _exit=exitJS;var PThread={unusedWorkers:[],runningWorkers:[],tlsInitFunctions:[],pthreads:{},init(){if(!ENVIRONMENT_IS_PTHREAD){PThread.initMainThread()}},initMainThread(){var pthreadPoolSize=Module["pthreadPoolSize"];while(pthreadPoolSize--){PThread.allocateUnusedWorker()}addOnPreRun(async()=>{var pthreadPoolReady=PThread.loadWasmModuleToAllWorkers();addRunDependency("loading-workers");await pthreadPoolReady;removeRunDependency("loading-workers")})},terminateAllThreads:()=>{for(var worker of PThread.runningWorkers){terminateWorker(worker)}for(var worker of PThread.unusedWorkers){terminateWorker(worker)}PThread.unusedWorkers=[];PThread.runningWorkers=[];PThread.pthreads={}},returnWorkerToPool:worker=>{var pthread_ptr=worker.pthread_ptr;delete PThread.pthreads[pthread_ptr];PThread.unusedWorkers.push(worker);PThread.runningWorkers.splice(PThread.runningWorkers.indexOf(worker),1);worker.pthread_ptr=0;__emscripten_thread_free_data(pthread_ptr)},threadInitTLS(){PThread.tlsInitFunctions.forEach(f=>f())},loadWasmModuleToWorker:worker=>new Promise(onFinishedLoading=>{worker.onmessage=e=>{var d=e["data"];var cmd=d.cmd;if(d.targetThread&&d.targetThread!=_pthread_self()){var targetWorker=PThread.pthreads[d.targetThread];if(targetWorker){targetWorker.postMessage(d,d.transferList)}else{err(`Internal error! Worker sent a message "${cmd}" to target pthread ${d.targetThread}, but that thread no longer exists!`)}return}if(cmd==="checkMailbox"){checkMailbox()}else if(cmd==="spawnThread"){spawnThread(d)}else if(cmd==="cleanupThread"){callUserCallback(()=>cleanupThread(d.thread))}else if(cmd==="loaded"){worker.loaded=true;if(ENVIRONMENT_IS_NODE&&!worker.pthread_ptr){worker.unref()}onFinishedLoading(worker)}else if(d.target==="setimmediate"){worker.postMessage(d)}else if(cmd==="uncaughtException"){worker.onerror(d.error)}else if(cmd==="callHandler"){Module[d.handler](...d.args)}else if(cmd){err(`worker sent an unknown command ${cmd}`)}};worker.onerror=e=>{var message="worker sent an error!";err(`${message} ${e.filename}:${e.lineno}: ${e.message}`);throw e};if(ENVIRONMENT_IS_NODE){worker.on("message",data=>worker.onmessage({data}));worker.on("error",e=>worker.onerror(e))}var handlers=[];var knownHandlers=["onExit","onAbort","print","printErr"];for(var handler of knownHandlers){if(Module.propertyIsEnumerable(handler)){handlers.push(handler)}}worker.postMessage({cmd:"load",handlers,wasmMemory,wasmModule})}),async loadWasmModuleToAllWorkers(){if(ENVIRONMENT_IS_PTHREAD){return}let pthreadPoolReady=Promise.all(PThread.unusedWorkers.map(PThread.loadWasmModuleToWorker));return pthreadPoolReady},allocateUnusedWorker(){var worker;var pthreadMainJs=_scriptName;if(Module["mainScriptUrlOrBlob"]){pthreadMainJs=Module["mainScriptUrlOrBlob"];if(typeof pthreadMainJs!="string"){pthreadMainJs=URL.createObjectURL(pthreadMainJs)}}worker=new Worker(pthreadMainJs,{workerData:"em-pthread",name:"em-pthread"});PThread.unusedWorkers.push(worker)},getNewWorker(){if(PThread.unusedWorkers.length==0){PThread.allocateUnusedWorker();PThread.loadWasmModuleToWorker(PThread.unusedWorkers[0])}return PThread.unusedWorkers.pop()}};var onPostRuns=[];var addOnPostRun=cb=>onPostRuns.push(cb);function establishStackSpace(pthread_ptr){var stackHigh=Number((growMemViews(),HEAPU64)[(pthread_ptr+88)/8]);var stackSize=Number((growMemViews(),HEAPU64)[(pthread_ptr+96)/8]);var stackLow=stackHigh-stackSize;_emscripten_stack_set_limits(stackHigh,stackLow);stackRestore(stackHigh)}var wasmTableMirror=[];var getWasmTableEntry=funcPtr=>{funcPtr=Number(funcPtr);var func=wasmTableMirror[funcPtr];if(!func){wasmTableMirror[funcPtr]=func=wasmTable.get(BigInt(funcPtr));if(Asyncify.isAsyncExport(func)){wasmTableMirror[funcPtr]=func=Asyncify.makeAsyncFunction(func)}}return func};var invokeEntryPoint=async(ptr,arg)=>{runtimeKeepaliveCounter=0;noExitRuntime=0;var result=(a1=>WebAssembly.promising(getWasmTableEntry(ptr)).call(null,BigInt(a1)))(arg);function finish(result){if(keepRuntimeAlive()){EXITSTATUS=result;return}__emscripten_thread_exit(result)}result=await result;finish(result)};invokeEntryPoint.isAsync=true;var noExitRuntime=true;var registerTLSInit=tlsInitFunc=>PThread.tlsInitFunctions.push(tlsInitFunc);var wasmMemory;function pthreadCreateProxied(pthread_ptr,attr,startRoutine,arg){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(2,0,1,pthread_ptr,attr,startRoutine,arg);return ___pthread_create_js(pthread_ptr,attr,startRoutine,arg)}var _emscripten_has_threading_support=()=>!!globalThis.SharedArrayBuffer;var INT53_MAX=9007199254740992;var INT53_MIN=-9007199254740992;var bigintToI53Checked=num=>num<INT53_MIN||num>INT53_MAX?NaN:Number(num);function ___pthread_create_js(pthread_ptr,attr,startRoutine,arg){pthread_ptr=bigintToI53Checked(pthread_ptr);attr=bigintToI53Checked(attr);startRoutine=bigintToI53Checked(startRoutine);arg=bigintToI53Checked(arg);if(!_emscripten_has_threading_support()){return 6}var transferList=[];var error=0;if(ENVIRONMENT_IS_PTHREAD&&(transferList.length===0||error)){return pthreadCreateProxied(pthread_ptr,attr,startRoutine,arg)}if(error)return error;var threadParams={startRoutine,pthread_ptr,arg,transferList};if(ENVIRONMENT_IS_PTHREAD){threadParams.cmd="spawnThread";postMessage(threadParams,transferList);return 0}return spawnThread(threadParams)}var syscallGetVarargP=()=>{var ret=Number((growMemViews(),HEAPU64)[SYSCALLS.varargs/8]);SYSCALLS.varargs+=8;return ret};var syscallGetVarargI=()=>{var ret=(growMemViews(),HEAP32)[+SYSCALLS.varargs/4];SYSCALLS.varargs+=4;return ret};var PATH={isAbs:path=>path.charAt(0)==="/",splitPath:filename=>{var splitPathRe=/^(\\/?|)([\\s\\S]*?)((?:\\.{1,2}|[^\\/]+?|)(\\.[^.\\/]*|))(?:[\\/]*)$/;return splitPathRe.exec(filename).slice(1)},normalizeArray:(parts,allowAboveRoot)=>{var up=0;for(var i=parts.length-1;i>=0;i--){var last=parts[i];if(last==="."){parts.splice(i,1)}else if(last===".."){parts.splice(i,1);up++}else if(up){parts.splice(i,1);up--}}if(allowAboveRoot){for(;up;up--){parts.unshift("..")}}return parts},normalize:path=>{var isAbsolute=PATH.isAbs(path),trailingSlash=path.slice(-1)==="/";path=PATH.normalizeArray(path.split("/").filter(p=>!!p),!isAbsolute).join("/");if(!path&&!isAbsolute){path="."}if(path&&trailingSlash){path+="/"}return(isAbsolute?"/":"")+path},dirname:path=>{var result=PATH.splitPath(path),root=result[0],dir=result[1];if(!root&&!dir){return"."}if(dir){dir=dir.slice(0,-1)}return root+dir},basename:path=>path&&path.match(/([^\\/]+|\\/)\\/*$/)[1],join:(...paths)=>PATH.normalize(paths.join("/")),join2:(l,r)=>PATH.normalize(l+"/"+r)};var initRandomFill=()=>view=>view.set(crypto.getRandomValues(new Uint8Array(view.byteLength)));var randomFill=view=>{(randomFill=initRandomFill())(view)};var PATH_FS={resolve:(...args)=>{var resolvedPath="",resolvedAbsolute=false;for(var i=args.length-1;i>=-1&&!resolvedAbsolute;i--){var path=i>=0?args[i]:FS.cwd();if(typeof path!="string"){throw new TypeError("Arguments to path.resolve must be strings")}else if(!path){return""}resolvedPath=path+"/"+resolvedPath;resolvedAbsolute=PATH.isAbs(path)}resolvedPath=PATH.normalizeArray(resolvedPath.split("/").filter(p=>!!p),!resolvedAbsolute).join("/");return(resolvedAbsolute?"/":"")+resolvedPath||"."},relative:(from,to)=>{from=PATH_FS.resolve(from).slice(1);to=PATH_FS.resolve(to).slice(1);function trim(arr){var start=0;for(;start<arr.length;start++){if(arr[start]!=="")break}var end=arr.length-1;for(;end>=0;end--){if(arr[end]!=="")break}if(start>end)return[];return arr.slice(start,end-start+1)}var fromParts=trim(from.split("/"));var toParts=trim(to.split("/"));var length=Math.min(fromParts.length,toParts.length);var samePartsLength=length;for(var i=0;i<length;i++){if(fromParts[i]!==toParts[i]){samePartsLength=i;break}}var outputParts=[];for(var i=samePartsLength;i<fromParts.length;i++){outputParts.push("..")}outputParts=outputParts.concat(toParts.slice(samePartsLength));return outputParts.join("/")}};var UTF8Decoder=globalThis.TextDecoder&&new TextDecoder;var findStringEnd=(heapOrArray,idx,maxBytesToRead,ignoreNul)=>{var maxIdx=idx+maxBytesToRead;if(ignoreNul)return maxIdx;while(heapOrArray[idx]&&!(idx>=maxIdx))++idx;return idx};var UTF8ArrayToString=(heapOrArray,idx=0,maxBytesToRead,ignoreNul)=>{var endPtr=findStringEnd(heapOrArray,idx,maxBytesToRead,ignoreNul);if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.buffer instanceof ArrayBuffer?heapOrArray.subarray(idx,endPtr):heapOrArray.slice(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str};var FS_stdin_getChar_buffer=[];var lengthBytesUTF8=str=>{var len=0;for(var i=0;i<str.length;++i){var c=str.charCodeAt(i);if(c<=127){len++}else if(c<=2047){len+=2}else if(c>=55296&&c<=57343){len+=4;++i}else{len+=3}}return len};var stringToUTF8Array=(str,heap,outIdx,maxBytesToWrite)=>{if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.codePointAt(i);if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63;i++}}heap[outIdx]=0;return outIdx-startIdx};var intArrayFromString=(stringy,dontAddNull,length)=>{var len=length>0?length:lengthBytesUTF8(stringy)+1;var u8array=new Array(len);var numBytesWritten=stringToUTF8Array(stringy,u8array,0,u8array.length);if(dontAddNull)u8array.length=numBytesWritten;return u8array};var FS_stdin_getChar=()=>{if(!FS_stdin_getChar_buffer.length){var result=null;if(ENVIRONMENT_IS_NODE){var BUFSIZE=256;var buf=Buffer.alloc(BUFSIZE);var bytesRead=0;var fd=process.stdin.fd;try{bytesRead=fs.readSync(fd,buf,0,BUFSIZE)}catch(e){if(e.toString().includes("EOF"))bytesRead=0;else throw e}if(bytesRead>0){result=buf.slice(0,bytesRead).toString("utf-8")}}else if(globalThis.window?.prompt){result=window.prompt("Input: ");if(result!==null){result+="\\n"}}else{}if(!result){return null}FS_stdin_getChar_buffer=intArrayFromString(result,true)}return FS_stdin_getChar_buffer.shift()};var TTY={ttys:[],init(){},shutdown(){},register(dev,ops){TTY.ttys[dev]={input:[],output:[],ops};FS.registerDevice(dev,TTY.stream_ops)},stream_ops:{open(stream){var tty=TTY.ttys[stream.node.rdev];if(!tty){throw new FS.ErrnoError(43)}stream.tty=tty;stream.seekable=false},close(stream){stream.tty.ops.fsync(stream.tty)},fsync(stream){stream.tty.ops.fsync(stream.tty)},read(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.get_char){throw new FS.ErrnoError(60)}var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=stream.tty.ops.get_char(stream.tty)}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){if(!stream.tty||!stream.tty.ops.put_char){throw new FS.ErrnoError(60)}try{for(var i=0;i<length;i++){stream.tty.ops.put_char(stream.tty,buffer[offset+i])}}catch(e){throw new FS.ErrnoError(29)}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}},default_tty_ops:{get_char(tty){return FS_stdin_getChar()},put_char(tty,val){if(val===null||val===10){out(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){out(UTF8ArrayToString(tty.output));tty.output=[]}},ioctl_tcgets(tty){return{c_iflag:25856,c_oflag:5,c_cflag:191,c_lflag:35387,c_cc:[3,28,127,21,4,0,1,0,17,19,26,0,18,15,23,22,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}},ioctl_tcsets(tty,optional_actions,data){return 0},ioctl_tiocgwinsz(tty){return[24,80]}},default_tty1_ops:{put_char(tty,val){if(val===null||val===10){err(UTF8ArrayToString(tty.output));tty.output=[]}else{if(val!=0)tty.output.push(val)}},fsync(tty){if(tty.output?.length>0){err(UTF8ArrayToString(tty.output));tty.output=[]}}}};var zeroMemory=(ptr,size)=>(growMemViews(),HEAPU8).fill(0,ptr,ptr+size);var alignMemory=(size,alignment)=>Math.ceil(size/alignment)*alignment;var mmapAlloc=size=>{size=alignMemory(size,65536);var ptr=_emscripten_builtin_memalign(65536,size);if(ptr)zeroMemory(ptr,size);return ptr};var MEMFS={ops_table:null,mount(mount){return MEMFS.createNode(null,"/",16895,0)},createNode(parent,name,mode,dev){if(FS.isBlkdev(mode)||FS.isFIFO(mode)){throw new FS.ErrnoError(63)}MEMFS.ops_table||={dir:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,lookup:MEMFS.node_ops.lookup,mknod:MEMFS.node_ops.mknod,rename:MEMFS.node_ops.rename,unlink:MEMFS.node_ops.unlink,rmdir:MEMFS.node_ops.rmdir,readdir:MEMFS.node_ops.readdir,symlink:MEMFS.node_ops.symlink},stream:{llseek:MEMFS.stream_ops.llseek}},file:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:{llseek:MEMFS.stream_ops.llseek,read:MEMFS.stream_ops.read,write:MEMFS.stream_ops.write,mmap:MEMFS.stream_ops.mmap,msync:MEMFS.stream_ops.msync}},link:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr,readlink:MEMFS.node_ops.readlink},stream:{}},chrdev:{node:{getattr:MEMFS.node_ops.getattr,setattr:MEMFS.node_ops.setattr},stream:FS.chrdev_stream_ops}};var node=FS.createNode(parent,name,mode,dev);if(FS.isDir(node.mode)){node.node_ops=MEMFS.ops_table.dir.node;node.stream_ops=MEMFS.ops_table.dir.stream;node.contents={}}else if(FS.isFile(node.mode)){node.node_ops=MEMFS.ops_table.file.node;node.stream_ops=MEMFS.ops_table.file.stream;node.usedBytes=0;node.contents=null}else if(FS.isLink(node.mode)){node.node_ops=MEMFS.ops_table.link.node;node.stream_ops=MEMFS.ops_table.link.stream}else if(FS.isChrdev(node.mode)){node.node_ops=MEMFS.ops_table.chrdev.node;node.stream_ops=MEMFS.ops_table.chrdev.stream}node.atime=node.mtime=node.ctime=Date.now();if(parent){parent.contents[name]=node;parent.atime=parent.mtime=parent.ctime=node.atime}return node},getFileDataAsTypedArray(node){if(!node.contents)return new Uint8Array(0);if(node.contents.subarray)return node.contents.subarray(0,node.usedBytes);return new Uint8Array(node.contents)},expandFileStorage(node,newCapacity){var prevCapacity=node.contents?node.contents.length:0;if(prevCapacity>=newCapacity)return;var CAPACITY_DOUBLING_MAX=1024*1024;newCapacity=Math.max(newCapacity,prevCapacity*(prevCapacity<CAPACITY_DOUBLING_MAX?2:1.125)>>>0);if(prevCapacity!=0)newCapacity=Math.max(newCapacity,256);var oldContents=node.contents;node.contents=new Uint8Array(newCapacity);if(node.usedBytes>0)node.contents.set(oldContents.subarray(0,node.usedBytes),0)},resizeFileStorage(node,newSize){if(node.usedBytes==newSize)return;if(newSize==0){node.contents=null;node.usedBytes=0}else{var oldContents=node.contents;node.contents=new Uint8Array(newSize);if(oldContents){node.contents.set(oldContents.subarray(0,Math.min(newSize,node.usedBytes)))}node.usedBytes=newSize}},node_ops:{getattr(node){var attr={};attr.dev=FS.isChrdev(node.mode)?node.id:1;attr.ino=node.id;attr.mode=node.mode;attr.nlink=1;attr.uid=0;attr.gid=0;attr.rdev=node.rdev;if(FS.isDir(node.mode)){attr.size=4096}else if(FS.isFile(node.mode)){attr.size=node.usedBytes}else if(FS.isLink(node.mode)){attr.size=node.link.length}else{attr.size=0}attr.atime=new Date(node.atime);attr.mtime=new Date(node.mtime);attr.ctime=new Date(node.ctime);attr.blksize=4096;attr.blocks=Math.ceil(attr.size/attr.blksize);return attr},setattr(node,attr){for(const key of["mode","atime","mtime","ctime"]){if(attr[key]!=null){node[key]=attr[key]}}if(attr.size!==undefined){MEMFS.resizeFileStorage(node,attr.size)}},lookup(parent,name){if(!MEMFS.doesNotExistError){MEMFS.doesNotExistError=new FS.ErrnoError(44);MEMFS.doesNotExistError.stack="<generic error, no stack>"}throw MEMFS.doesNotExistError},mknod(parent,name,mode,dev){return MEMFS.createNode(parent,name,mode,dev)},rename(old_node,new_dir,new_name){var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(new_node){if(FS.isDir(old_node.mode)){for(var i in new_node.contents){throw new FS.ErrnoError(55)}}FS.hashRemoveNode(new_node)}delete old_node.parent.contents[old_node.name];new_dir.contents[new_name]=old_node;old_node.name=new_name;new_dir.ctime=new_dir.mtime=old_node.parent.ctime=old_node.parent.mtime=Date.now()},unlink(parent,name){delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},rmdir(parent,name){var node=FS.lookupNode(parent,name);for(var i in node.contents){throw new FS.ErrnoError(55)}delete parent.contents[name];parent.ctime=parent.mtime=Date.now()},readdir(node){return[".","..",...Object.keys(node.contents)]},symlink(parent,newname,oldpath){var node=MEMFS.createNode(parent,newname,511|40960,0);node.link=oldpath;return node},readlink(node){if(!FS.isLink(node.mode)){throw new FS.ErrnoError(28)}return node.link}},stream_ops:{read(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=stream.node.usedBytes)return 0;var size=Math.min(stream.node.usedBytes-position,length);if(size>8&&contents.subarray){buffer.set(contents.subarray(position,position+size),offset)}else{for(var i=0;i<size;i++)buffer[offset+i]=contents[position+i]}return size},write(stream,buffer,offset,length,position,canOwn){if(buffer.buffer===(growMemViews(),HEAP8).buffer){canOwn=false}if(!length)return 0;var node=stream.node;node.mtime=node.ctime=Date.now();if(buffer.subarray&&(!node.contents||node.contents.subarray)){if(canOwn){node.contents=buffer.subarray(offset,offset+length);node.usedBytes=length;return length}else if(node.usedBytes===0&&position===0){node.contents=buffer.slice(offset,offset+length);node.usedBytes=length;return length}else if(position+length<=node.usedBytes){node.contents.set(buffer.subarray(offset,offset+length),position);return length}}MEMFS.expandFileStorage(node,position+length);if(node.contents.subarray&&buffer.subarray){node.contents.set(buffer.subarray(offset,offset+length),position)}else{for(var i=0;i<length;i++){node.contents[position+i]=buffer[offset+i]}}node.usedBytes=Math.max(node.usedBytes,position+length);return length},llseek(stream,offset,whence){var position=offset;if(whence===1){position+=stream.position}else if(whence===2){if(FS.isFile(stream.node.mode)){position+=stream.node.usedBytes}}if(position<0){throw new FS.ErrnoError(28)}return position},mmap(stream,length,position,prot,flags){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}var ptr;var allocated;var contents=stream.node.contents;if(!(flags&2)&&contents&&contents.buffer===(growMemViews(),HEAP8).buffer){allocated=false;ptr=contents.byteOffset}else{allocated=true;ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}if(contents){if(position>0||position+length<contents.length){if(contents.subarray){contents=contents.subarray(position,position+length)}else{contents=Array.prototype.slice.call(contents,position,position+length)}}(growMemViews(),HEAP8).set(contents,ptr)}}return{ptr,allocated}},msync(stream,buffer,offset,length,mmapFlags){MEMFS.stream_ops.write(stream,buffer,0,length,offset,false);return 0}}};var FS_modeStringToFlags=str=>{var flagModes={r:0,"r+":2,w:512|64|1,"w+":512|64|2,a:1024|64|1,"a+":1024|64|2};var flags=flagModes[str];if(typeof flags=="undefined"){throw new Error(`Unknown file open mode: ${str}`)}return flags};var FS_getMode=(canRead,canWrite)=>{var mode=0;if(canRead)mode|=292|73;if(canWrite)mode|=146;return mode};var asyncLoad=async url=>{var arrayBuffer=await readAsync(url);return new Uint8Array(arrayBuffer)};var FS_createDataFile=(...args)=>FS.createDataFile(...args);var getUniqueRunDependency=id=>id;var preloadPlugins=[];var FS_handledByPreloadPlugin=async(byteArray,fullname)=>{if(typeof Browser!="undefined")Browser.init();for(var plugin of preloadPlugins){if(plugin["canHandle"](fullname)){return plugin["handle"](byteArray,fullname)}}return byteArray};var FS_preloadFile=async(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish)=>{var fullname=name?PATH_FS.resolve(PATH.join2(parent,name)):parent;var dep=getUniqueRunDependency(`cp ${fullname}`);addRunDependency(dep);try{var byteArray=url;if(typeof url=="string"){byteArray=await asyncLoad(url)}byteArray=await FS_handledByPreloadPlugin(byteArray,fullname);preFinish?.();if(!dontCreateFile){FS_createDataFile(parent,name,byteArray,canRead,canWrite,canOwn)}}finally{removeRunDependency(dep)}};var FS_createPreloadedFile=(parent,name,url,canRead,canWrite,onload,onerror,dontCreateFile,canOwn,preFinish)=>{FS_preloadFile(parent,name,url,canRead,canWrite,dontCreateFile,canOwn,preFinish).then(onload).catch(onerror)};var FS={root:null,mounts:[],devices:{},streams:[],nextInode:1,nameTable:null,currentPath:"/",initialized:false,ignorePermissions:true,filesystems:null,syncFSRequests:0,readFiles:{},ErrnoError:class{name="ErrnoError";constructor(errno){this.errno=errno}},FSStream:class{shared={};get object(){return this.node}set object(val){this.node=val}get isRead(){return(this.flags&2097155)!==1}get isWrite(){return(this.flags&2097155)!==0}get isAppend(){return this.flags&1024}get flags(){return this.shared.flags}set flags(val){this.shared.flags=val}get position(){return this.shared.position}set position(val){this.shared.position=val}},FSNode:class{node_ops={};stream_ops={};readMode=292|73;writeMode=146;mounted=null;constructor(parent,name,mode,rdev){if(!parent){parent=this}this.parent=parent;this.mount=parent.mount;this.id=FS.nextInode++;this.name=name;this.mode=mode;this.rdev=rdev;this.atime=this.mtime=this.ctime=Date.now()}get read(){return(this.mode&this.readMode)===this.readMode}set read(val){val?this.mode|=this.readMode:this.mode&=~this.readMode}get write(){return(this.mode&this.writeMode)===this.writeMode}set write(val){val?this.mode|=this.writeMode:this.mode&=~this.writeMode}get isFolder(){return FS.isDir(this.mode)}get isDevice(){return FS.isChrdev(this.mode)}},lookupPath(path,opts={}){if(!path){throw new FS.ErrnoError(44)}opts.follow_mount??=true;if(!PATH.isAbs(path)){path=FS.cwd()+"/"+path}linkloop:for(var nlinks=0;nlinks<40;nlinks++){var parts=path.split("/").filter(p=>!!p);var current=FS.root;var current_path="/";for(var i=0;i<parts.length;i++){var islast=i===parts.length-1;if(islast&&opts.parent){break}if(parts[i]==="."){continue}if(parts[i]===".."){current_path=PATH.dirname(current_path);if(FS.isRoot(current)){path=current_path+"/"+parts.slice(i+1).join("/");nlinks--;continue linkloop}else{current=current.parent}continue}current_path=PATH.join2(current_path,parts[i]);try{current=FS.lookupNode(current,parts[i])}catch(e){if(e?.errno===44&&islast&&opts.noent_okay){return{path:current_path}}throw e}if(FS.isMountpoint(current)&&(!islast||opts.follow_mount)){current=current.mounted.root}if(FS.isLink(current.mode)&&(!islast||opts.follow)){if(!current.node_ops.readlink){throw new FS.ErrnoError(52)}var link=current.node_ops.readlink(current);if(!PATH.isAbs(link)){link=PATH.dirname(current_path)+"/"+link}path=link+"/"+parts.slice(i+1).join("/");continue linkloop}}return{path:current_path,node:current}}throw new FS.ErrnoError(32)},getPath(node){var path;while(true){if(FS.isRoot(node)){var mount=node.mount.mountpoint;if(!path)return mount;return mount[mount.length-1]!=="/"?`${mount}/${path}`:mount+path}path=path?`${node.name}/${path}`:node.name;node=node.parent}},hashName(parentid,name){var hash=0;for(var i=0;i<name.length;i++){hash=(hash<<5)-hash+name.charCodeAt(i)|0}return(parentid+hash>>>0)%FS.nameTable.length},hashAddNode(node){var hash=FS.hashName(node.parent.id,node.name);node.name_next=FS.nameTable[hash];FS.nameTable[hash]=node},hashRemoveNode(node){var hash=FS.hashName(node.parent.id,node.name);if(FS.nameTable[hash]===node){FS.nameTable[hash]=node.name_next}else{var current=FS.nameTable[hash];while(current){if(current.name_next===node){current.name_next=node.name_next;break}current=current.name_next}}},lookupNode(parent,name){var errCode=FS.mayLookup(parent);if(errCode){throw new FS.ErrnoError(errCode)}var hash=FS.hashName(parent.id,name);for(var node=FS.nameTable[hash];node;node=node.name_next){var nodeName=node.name;if(node.parent.id===parent.id&&nodeName===name){return node}}return FS.lookup(parent,name)},createNode(parent,name,mode,rdev){var node=new FS.FSNode(parent,name,mode,rdev);FS.hashAddNode(node);return node},destroyNode(node){FS.hashRemoveNode(node)},isRoot(node){return node===node.parent},isMountpoint(node){return!!node.mounted},isFile(mode){return(mode&61440)===32768},isDir(mode){return(mode&61440)===16384},isLink(mode){return(mode&61440)===40960},isChrdev(mode){return(mode&61440)===8192},isBlkdev(mode){return(mode&61440)===24576},isFIFO(mode){return(mode&61440)===4096},isSocket(mode){return(mode&49152)===49152},flagsToPermissionString(flag){var perms=["r","w","rw"][flag&3];if(flag&512){perms+="w"}return perms},nodePermissions(node,perms){if(FS.ignorePermissions){return 0}if(perms.includes("r")&&!(node.mode&292)){return 2}else if(perms.includes("w")&&!(node.mode&146)){return 2}else if(perms.includes("x")&&!(node.mode&73)){return 2}return 0},mayLookup(dir){if(!FS.isDir(dir.mode))return 54;var errCode=FS.nodePermissions(dir,"x");if(errCode)return errCode;if(!dir.node_ops.lookup)return 2;return 0},mayCreate(dir,name){if(!FS.isDir(dir.mode)){return 54}try{var node=FS.lookupNode(dir,name);return 20}catch(e){}return FS.nodePermissions(dir,"wx")},mayDelete(dir,name,isdir){var node;try{node=FS.lookupNode(dir,name)}catch(e){return e.errno}var errCode=FS.nodePermissions(dir,"wx");if(errCode){return errCode}if(isdir){if(!FS.isDir(node.mode)){return 54}if(FS.isRoot(node)||FS.getPath(node)===FS.cwd()){return 10}}else{if(FS.isDir(node.mode)){return 31}}return 0},mayOpen(node,flags){if(!node){return 44}if(FS.isLink(node.mode)){return 32}else if(FS.isDir(node.mode)){if(FS.flagsToPermissionString(flags)!=="r"||flags&(512|64)){return 31}}return FS.nodePermissions(node,FS.flagsToPermissionString(flags))},checkOpExists(op,err){if(!op){throw new FS.ErrnoError(err)}return op},MAX_OPEN_FDS:4096,nextfd(){for(var fd=0;fd<=FS.MAX_OPEN_FDS;fd++){if(!FS.streams[fd]){return fd}}throw new FS.ErrnoError(33)},getStreamChecked(fd){var stream=FS.getStream(fd);if(!stream){throw new FS.ErrnoError(8)}return stream},getStream:fd=>FS.streams[fd],createStream(stream,fd=-1){stream=Object.assign(new FS.FSStream,stream);if(fd==-1){fd=FS.nextfd()}stream.fd=fd;FS.streams[fd]=stream;return stream},closeStream(fd){FS.streams[fd]=null},dupStream(origStream,fd=-1){var stream=FS.createStream(origStream,fd);stream.stream_ops?.dup?.(stream);return stream},doSetAttr(stream,node,attr){var setattr=stream?.stream_ops.setattr;var arg=setattr?stream:node;setattr??=node.node_ops.setattr;FS.checkOpExists(setattr,63);setattr(arg,attr)},chrdev_stream_ops:{open(stream){var device=FS.getDevice(stream.node.rdev);stream.stream_ops=device.stream_ops;stream.stream_ops.open?.(stream)},llseek(){throw new FS.ErrnoError(70)}},major:dev=>dev>>8,minor:dev=>dev&255,makedev:(ma,mi)=>ma<<8|mi,registerDevice(dev,ops){FS.devices[dev]={stream_ops:ops}},getDevice:dev=>FS.devices[dev],getMounts(mount){var mounts=[];var check=[mount];while(check.length){var m=check.pop();mounts.push(m);check.push(...m.mounts)}return mounts},syncfs(populate,callback){if(typeof populate=="function"){callback=populate;populate=false}FS.syncFSRequests++;if(FS.syncFSRequests>1){err(`warning: ${FS.syncFSRequests} FS.syncfs operations in flight at once, probably just doing extra work`)}var mounts=FS.getMounts(FS.root.mount);var completed=0;function doCallback(errCode){FS.syncFSRequests--;return callback(errCode)}function done(errCode){if(errCode){if(!done.errored){done.errored=true;return doCallback(errCode)}return}if(++completed>=mounts.length){doCallback(null)}}for(var mount of mounts){if(mount.type.syncfs){mount.type.syncfs(mount,populate,done)}else{done(null)}}},mount(type,opts,mountpoint){var root=mountpoint==="/";var pseudo=!mountpoint;var node;if(root&&FS.root){throw new FS.ErrnoError(10)}else if(!root&&!pseudo){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});mountpoint=lookup.path;node=lookup.node;if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}if(!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}}var mount={type,opts,mountpoint,mounts:[]};var mountRoot=type.mount(mount);mountRoot.mount=mount;mount.root=mountRoot;if(root){FS.root=mountRoot}else if(node){node.mounted=mount;if(node.mount){node.mount.mounts.push(mount)}}return mountRoot},unmount(mountpoint){var lookup=FS.lookupPath(mountpoint,{follow_mount:false});if(!FS.isMountpoint(lookup.node)){throw new FS.ErrnoError(28)}var node=lookup.node;var mount=node.mounted;var mounts=FS.getMounts(mount);for(var[hash,current]of Object.entries(FS.nameTable)){while(current){var next=current.name_next;if(mounts.includes(current.mount)){FS.destroyNode(current)}current=next}}node.mounted=null;var idx=node.mount.mounts.indexOf(mount);node.mount.mounts.splice(idx,1)},lookup(parent,name){return parent.node_ops.lookup(parent,name)},mknod(path,mode,dev){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);if(!name){throw new FS.ErrnoError(28)}if(name==="."||name===".."){throw new FS.ErrnoError(20)}var errCode=FS.mayCreate(parent,name);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.mknod){throw new FS.ErrnoError(63)}return parent.node_ops.mknod(parent,name,mode,dev)},statfs(path){return FS.statfsNode(FS.lookupPath(path,{follow:true}).node)},statfsStream(stream){return FS.statfsNode(stream.node)},statfsNode(node){var rtn={bsize:4096,frsize:4096,blocks:1e6,bfree:5e5,bavail:5e5,files:FS.nextInode,ffree:FS.nextInode-1,fsid:42,flags:2,namelen:255};if(node.node_ops.statfs){Object.assign(rtn,node.node_ops.statfs(node.mount.opts.root))}return rtn},create(path,mode=438){mode&=4095;mode|=32768;return FS.mknod(path,mode,0)},mkdir(path,mode=511){mode&=511|512;mode|=16384;return FS.mknod(path,mode,0)},mkdirTree(path,mode){var dirs=path.split("/");var d="";for(var dir of dirs){if(!dir)continue;if(d||PATH.isAbs(path))d+="/";d+=dir;try{FS.mkdir(d,mode)}catch(e){if(e.errno!=20)throw e}}},mkdev(path,mode,dev){if(typeof dev=="undefined"){dev=mode;mode=438}mode|=8192;return FS.mknod(path,mode,dev)},symlink(oldpath,newpath){if(!PATH_FS.resolve(oldpath)){throw new FS.ErrnoError(44)}var lookup=FS.lookupPath(newpath,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var newname=PATH.basename(newpath);var errCode=FS.mayCreate(parent,newname);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.symlink){throw new FS.ErrnoError(63)}return parent.node_ops.symlink(parent,newname,oldpath)},rename(old_path,new_path){var old_dirname=PATH.dirname(old_path);var new_dirname=PATH.dirname(new_path);var old_name=PATH.basename(old_path);var new_name=PATH.basename(new_path);var lookup,old_dir,new_dir;lookup=FS.lookupPath(old_path,{parent:true});old_dir=lookup.node;lookup=FS.lookupPath(new_path,{parent:true});new_dir=lookup.node;if(!old_dir||!new_dir)throw new FS.ErrnoError(44);if(old_dir.mount!==new_dir.mount){throw new FS.ErrnoError(75)}var old_node=FS.lookupNode(old_dir,old_name);var relative=PATH_FS.relative(old_path,new_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(28)}relative=PATH_FS.relative(new_path,old_dirname);if(relative.charAt(0)!=="."){throw new FS.ErrnoError(55)}var new_node;try{new_node=FS.lookupNode(new_dir,new_name)}catch(e){}if(old_node===new_node){return}var isdir=FS.isDir(old_node.mode);var errCode=FS.mayDelete(old_dir,old_name,isdir);if(errCode){throw new FS.ErrnoError(errCode)}errCode=new_node?FS.mayDelete(new_dir,new_name,isdir):FS.mayCreate(new_dir,new_name);if(errCode){throw new FS.ErrnoError(errCode)}if(!old_dir.node_ops.rename){throw new FS.ErrnoError(63)}if(FS.isMountpoint(old_node)||new_node&&FS.isMountpoint(new_node)){throw new FS.ErrnoError(10)}if(new_dir!==old_dir){errCode=FS.nodePermissions(old_dir,"w");if(errCode){throw new FS.ErrnoError(errCode)}}FS.hashRemoveNode(old_node);try{old_dir.node_ops.rename(old_node,new_dir,new_name);old_node.parent=new_dir}catch(e){throw e}finally{FS.hashAddNode(old_node)}},rmdir(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,true);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.rmdir){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.rmdir(parent,name);FS.destroyNode(node)},readdir(path){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var readdir=FS.checkOpExists(node.node_ops.readdir,54);return readdir(node)},unlink(path){var lookup=FS.lookupPath(path,{parent:true});var parent=lookup.node;if(!parent){throw new FS.ErrnoError(44)}var name=PATH.basename(path);var node=FS.lookupNode(parent,name);var errCode=FS.mayDelete(parent,name,false);if(errCode){throw new FS.ErrnoError(errCode)}if(!parent.node_ops.unlink){throw new FS.ErrnoError(63)}if(FS.isMountpoint(node)){throw new FS.ErrnoError(10)}parent.node_ops.unlink(parent,name);FS.destroyNode(node)},readlink(path){var lookup=FS.lookupPath(path);var link=lookup.node;if(!link){throw new FS.ErrnoError(44)}if(!link.node_ops.readlink){throw new FS.ErrnoError(28)}return link.node_ops.readlink(link)},stat(path,dontFollow){var lookup=FS.lookupPath(path,{follow:!dontFollow});var node=lookup.node;var getattr=FS.checkOpExists(node.node_ops.getattr,63);return getattr(node)},fstat(fd){var stream=FS.getStreamChecked(fd);var node=stream.node;var getattr=stream.stream_ops.getattr;var arg=getattr?stream:node;getattr??=node.node_ops.getattr;FS.checkOpExists(getattr,63);return getattr(arg)},lstat(path){return FS.stat(path,true)},doChmod(stream,node,mode,dontFollow){FS.doSetAttr(stream,node,{mode:mode&4095|node.mode&~4095,ctime:Date.now(),dontFollow})},chmod(path,mode,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChmod(null,node,mode,dontFollow)},lchmod(path,mode){FS.chmod(path,mode,true)},fchmod(fd,mode){var stream=FS.getStreamChecked(fd);FS.doChmod(stream,stream.node,mode,false)},doChown(stream,node,dontFollow){FS.doSetAttr(stream,node,{timestamp:Date.now(),dontFollow})},chown(path,uid,gid,dontFollow){var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:!dontFollow});node=lookup.node}else{node=path}FS.doChown(null,node,dontFollow)},lchown(path,uid,gid){FS.chown(path,uid,gid,true)},fchown(fd,uid,gid){var stream=FS.getStreamChecked(fd);FS.doChown(stream,stream.node,false)},doTruncate(stream,node,len){if(FS.isDir(node.mode)){throw new FS.ErrnoError(31)}if(!FS.isFile(node.mode)){throw new FS.ErrnoError(28)}var errCode=FS.nodePermissions(node,"w");if(errCode){throw new FS.ErrnoError(errCode)}FS.doSetAttr(stream,node,{size:len,timestamp:Date.now()})},truncate(path,len){if(len<0){throw new FS.ErrnoError(28)}var node;if(typeof path=="string"){var lookup=FS.lookupPath(path,{follow:true});node=lookup.node}else{node=path}FS.doTruncate(null,node,len)},ftruncate(fd,len){var stream=FS.getStreamChecked(fd);if(len<0||(stream.flags&2097155)===0){throw new FS.ErrnoError(28)}FS.doTruncate(stream,stream.node,len)},utime(path,atime,mtime){var lookup=FS.lookupPath(path,{follow:true});var node=lookup.node;var setattr=FS.checkOpExists(node.node_ops.setattr,63);setattr(node,{atime,mtime})},open(path,flags,mode=438){if(path===""){throw new FS.ErrnoError(44)}flags=typeof flags=="string"?FS_modeStringToFlags(flags):flags;if(flags&64){mode=mode&4095|32768}else{mode=0}var node;var isDirPath;if(typeof path=="object"){node=path}else{isDirPath=path.endsWith("/");var lookup=FS.lookupPath(path,{follow:!(flags&131072),noent_okay:true});node=lookup.node;path=lookup.path}var created=false;if(flags&64){if(node){if(flags&128){throw new FS.ErrnoError(20)}}else if(isDirPath){throw new FS.ErrnoError(31)}else{node=FS.mknod(path,mode|511,0);created=true}}if(!node){throw new FS.ErrnoError(44)}if(FS.isChrdev(node.mode)){flags&=~512}if(flags&65536&&!FS.isDir(node.mode)){throw new FS.ErrnoError(54)}if(!created){var errCode=FS.mayOpen(node,flags);if(errCode){throw new FS.ErrnoError(errCode)}}if(flags&512&&!created){FS.truncate(node,0)}flags&=~(128|512|131072);var stream=FS.createStream({node,path:FS.getPath(node),flags,seekable:true,position:0,stream_ops:node.stream_ops,ungotten:[],error:false});if(stream.stream_ops.open){stream.stream_ops.open(stream)}if(created){FS.chmod(node,mode&511)}if(Module["logReadFiles"]&&!(flags&1)){if(!(path in FS.readFiles)){FS.readFiles[path]=1}}return stream},close(stream){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(stream.getdents)stream.getdents=null;try{if(stream.stream_ops.close){stream.stream_ops.close(stream)}}catch(e){throw e}finally{FS.closeStream(stream.fd)}stream.fd=null},isClosed(stream){return stream.fd===null},llseek(stream,offset,whence){if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if(!stream.seekable||!stream.stream_ops.llseek){throw new FS.ErrnoError(70)}if(whence!=0&&whence!=1&&whence!=2){throw new FS.ErrnoError(28)}stream.position=stream.stream_ops.llseek(stream,offset,whence);stream.ungotten=[];return stream.position},read(stream,buffer,offset,length,position){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.read){throw new FS.ErrnoError(28)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesRead=stream.stream_ops.read(stream,buffer,offset,length,position);if(!seeking)stream.position+=bytesRead;return bytesRead},write(stream,buffer,offset,length,position,canOwn){if(length<0||position<0){throw new FS.ErrnoError(28)}if(FS.isClosed(stream)){throw new FS.ErrnoError(8)}if((stream.flags&2097155)===0){throw new FS.ErrnoError(8)}if(FS.isDir(stream.node.mode)){throw new FS.ErrnoError(31)}if(!stream.stream_ops.write){throw new FS.ErrnoError(28)}if(stream.seekable&&stream.flags&1024){FS.llseek(stream,0,2)}var seeking=typeof position!="undefined";if(!seeking){position=stream.position}else if(!stream.seekable){throw new FS.ErrnoError(70)}var bytesWritten=stream.stream_ops.write(stream,buffer,offset,length,position,canOwn);if(!seeking)stream.position+=bytesWritten;return bytesWritten},mmap(stream,length,position,prot,flags){if((prot&2)!==0&&(flags&2)===0&&(stream.flags&2097155)!==2){throw new FS.ErrnoError(2)}if((stream.flags&2097155)===1){throw new FS.ErrnoError(2)}if(!stream.stream_ops.mmap){throw new FS.ErrnoError(43)}if(!length){throw new FS.ErrnoError(28)}return stream.stream_ops.mmap(stream,length,position,prot,flags)},msync(stream,buffer,offset,length,mmapFlags){if(!stream.stream_ops.msync){return 0}return stream.stream_ops.msync(stream,buffer,offset,length,mmapFlags)},ioctl(stream,cmd,arg){if(!stream.stream_ops.ioctl){throw new FS.ErrnoError(59)}return stream.stream_ops.ioctl(stream,cmd,arg)},readFile(path,opts={}){opts.flags=opts.flags||0;opts.encoding=opts.encoding||"binary";if(opts.encoding!=="utf8"&&opts.encoding!=="binary"){abort(`Invalid encoding type "${opts.encoding}"`)}var stream=FS.open(path,opts.flags);var stat=FS.stat(path);var length=stat.size;var buf=new Uint8Array(length);FS.read(stream,buf,0,length,0);if(opts.encoding==="utf8"){buf=UTF8ArrayToString(buf)}FS.close(stream);return buf},writeFile(path,data,opts={}){opts.flags=opts.flags||577;var stream=FS.open(path,opts.flags,opts.mode);if(typeof data=="string"){data=new Uint8Array(intArrayFromString(data,true))}if(ArrayBuffer.isView(data)){FS.write(stream,data,0,data.byteLength,undefined,opts.canOwn)}else{abort("Unsupported data type")}FS.close(stream)},cwd:()=>FS.currentPath,chdir(path){var lookup=FS.lookupPath(path,{follow:true});if(lookup.node===null){throw new FS.ErrnoError(44)}if(!FS.isDir(lookup.node.mode)){throw new FS.ErrnoError(54)}var errCode=FS.nodePermissions(lookup.node,"x");if(errCode){throw new FS.ErrnoError(errCode)}FS.currentPath=lookup.path},createDefaultDirectories(){FS.mkdir("/tmp");FS.mkdir("/home");FS.mkdir("/home/web_user")},createDefaultDevices(){FS.mkdir("/dev");FS.registerDevice(FS.makedev(1,3),{read:()=>0,write:(stream,buffer,offset,length,pos)=>length,llseek:()=>0});FS.mkdev("/dev/null",FS.makedev(1,3));TTY.register(FS.makedev(5,0),TTY.default_tty_ops);TTY.register(FS.makedev(6,0),TTY.default_tty1_ops);FS.mkdev("/dev/tty",FS.makedev(5,0));FS.mkdev("/dev/tty1",FS.makedev(6,0));var randomBuffer=new Uint8Array(1024),randomLeft=0;var randomByte=()=>{if(randomLeft===0){randomFill(randomBuffer);randomLeft=randomBuffer.byteLength}return randomBuffer[--randomLeft]};FS.createDevice("/dev","random",randomByte);FS.createDevice("/dev","urandom",randomByte);FS.mkdir("/dev/shm");FS.mkdir("/dev/shm/tmp")},createSpecialDirectories(){FS.mkdir("/proc");var proc_self=FS.mkdir("/proc/self");FS.mkdir("/proc/self/fd");FS.mount({mount(){var node=FS.createNode(proc_self,"fd",16895,73);node.stream_ops={llseek:MEMFS.stream_ops.llseek};node.node_ops={lookup(parent,name){var fd=+name;var stream=FS.getStreamChecked(fd);var ret={parent:null,mount:{mountpoint:"fake"},node_ops:{readlink:()=>stream.path},id:fd+1};ret.parent=ret;return ret},readdir(){return Array.from(FS.streams.entries()).filter(([k,v])=>v).map(([k,v])=>k.toString())}};return node}},{},"/proc/self/fd")},createStandardStreams(input,output,error){if(input){FS.createDevice("/dev","stdin",input)}else{FS.symlink("/dev/tty","/dev/stdin")}if(output){FS.createDevice("/dev","stdout",null,output)}else{FS.symlink("/dev/tty","/dev/stdout")}if(error){FS.createDevice("/dev","stderr",null,error)}else{FS.symlink("/dev/tty1","/dev/stderr")}var stdin=FS.open("/dev/stdin",0);var stdout=FS.open("/dev/stdout",1);var stderr=FS.open("/dev/stderr",1)},staticInit(){FS.nameTable=new Array(4096);FS.mount(MEMFS,{},"/");FS.createDefaultDirectories();FS.createDefaultDevices();FS.createSpecialDirectories();FS.filesystems={MEMFS}},init(input,output,error){FS.initialized=true;input??=Module["stdin"];output??=Module["stdout"];error??=Module["stderr"];FS.createStandardStreams(input,output,error)},quit(){FS.initialized=false;for(var stream of FS.streams){if(stream){FS.close(stream)}}},findObject(path,dontResolveLastLink){var ret=FS.analyzePath(path,dontResolveLastLink);if(!ret.exists){return null}return ret.object},analyzePath(path,dontResolveLastLink){try{var lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});path=lookup.path}catch(e){}var ret={isRoot:false,exists:false,error:0,name:null,path:null,object:null,parentExists:false,parentPath:null,parentObject:null};try{var lookup=FS.lookupPath(path,{parent:true});ret.parentExists=true;ret.parentPath=lookup.path;ret.parentObject=lookup.node;ret.name=PATH.basename(path);lookup=FS.lookupPath(path,{follow:!dontResolveLastLink});ret.exists=true;ret.path=lookup.path;ret.object=lookup.node;ret.name=lookup.node.name;ret.isRoot=lookup.path==="/"}catch(e){ret.error=e.errno}return ret},createPath(parent,path,canRead,canWrite){parent=typeof parent=="string"?parent:FS.getPath(parent);var parts=path.split("/").reverse();while(parts.length){var part=parts.pop();if(!part)continue;var current=PATH.join2(parent,part);try{FS.mkdir(current)}catch(e){if(e.errno!=20)throw e}parent=current}return current},createFile(parent,name,properties,canRead,canWrite){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(canRead,canWrite);return FS.create(path,mode)},createDataFile(parent,name,data,canRead,canWrite,canOwn){var path=name;if(parent){parent=typeof parent=="string"?parent:FS.getPath(parent);path=name?PATH.join2(parent,name):parent}var mode=FS_getMode(canRead,canWrite);var node=FS.create(path,mode);if(data){if(typeof data=="string"){var arr=new Array(data.length);for(var i=0,len=data.length;i<len;++i)arr[i]=data.charCodeAt(i);data=arr}FS.chmod(node,mode|146);var stream=FS.open(node,577);FS.write(stream,data,0,data.length,0,canOwn);FS.close(stream);FS.chmod(node,mode)}},createDevice(parent,name,input,output){var path=PATH.join2(typeof parent=="string"?parent:FS.getPath(parent),name);var mode=FS_getMode(!!input,!!output);FS.createDevice.major??=64;var dev=FS.makedev(FS.createDevice.major++,0);FS.registerDevice(dev,{open(stream){stream.seekable=false},close(stream){if(output?.buffer?.length){output(10)}},read(stream,buffer,offset,length,pos){var bytesRead=0;for(var i=0;i<length;i++){var result;try{result=input()}catch(e){throw new FS.ErrnoError(29)}if(result===undefined&&bytesRead===0){throw new FS.ErrnoError(6)}if(result===null||result===undefined)break;bytesRead++;buffer[offset+i]=result}if(bytesRead){stream.node.atime=Date.now()}return bytesRead},write(stream,buffer,offset,length,pos){for(var i=0;i<length;i++){try{output(buffer[offset+i])}catch(e){throw new FS.ErrnoError(29)}}if(length){stream.node.mtime=stream.node.ctime=Date.now()}return i}});return FS.mkdev(path,mode,dev)},forceLoadFile(obj){if(obj.isDevice||obj.isFolder||obj.link||obj.contents)return true;if(globalThis.XMLHttpRequest){abort("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.")}else{try{obj.contents=readBinary(obj.url)}catch(e){throw new FS.ErrnoError(29)}}},createLazyFile(parent,name,url,canRead,canWrite){class LazyUint8Array{lengthKnown=false;chunks=[];get(idx){if(idx>this.length-1||idx<0){return undefined}var chunkOffset=idx%this.chunkSize;var chunkNum=idx/this.chunkSize|0;return this.getter(chunkNum)[chunkOffset]}setDataGetter(getter){this.getter=getter}cacheLength(){var xhr=new XMLHttpRequest;xhr.open("HEAD",url,false);xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn\'t load "+url+". Status: "+xhr.status);var datalength=Number(xhr.getResponseHeader("Content-length"));var header;var hasByteServing=(header=xhr.getResponseHeader("Accept-Ranges"))&&header==="bytes";var usesGzip=(header=xhr.getResponseHeader("Content-Encoding"))&&header==="gzip";var chunkSize=1024*1024;if(!hasByteServing)chunkSize=datalength;var doXHR=(from,to)=>{if(from>to)abort("invalid range ("+from+", "+to+") or no bytes requested!");if(to>datalength-1)abort("only "+datalength+" bytes available! programmer error!");var xhr=new XMLHttpRequest;xhr.open("GET",url,false);if(datalength!==chunkSize)xhr.setRequestHeader("Range","bytes="+from+"-"+to);xhr.responseType="arraybuffer";if(xhr.overrideMimeType){xhr.overrideMimeType("text/plain; charset=x-user-defined")}xhr.send(null);if(!(xhr.status>=200&&xhr.status<300||xhr.status===304))abort("Couldn\'t load "+url+". Status: "+xhr.status);if(xhr.response!==undefined){return new Uint8Array(xhr.response||[])}return intArrayFromString(xhr.responseText||"",true)};var lazyArray=this;lazyArray.setDataGetter(chunkNum=>{var start=chunkNum*chunkSize;var end=(chunkNum+1)*chunkSize-1;end=Math.min(end,datalength-1);if(typeof lazyArray.chunks[chunkNum]=="undefined"){lazyArray.chunks[chunkNum]=doXHR(start,end)}if(typeof lazyArray.chunks[chunkNum]=="undefined")abort("doXHR failed!");return lazyArray.chunks[chunkNum]});if(usesGzip||!datalength){chunkSize=datalength=1;datalength=this.getter(0).length;chunkSize=datalength;out("LazyFiles on gzip forces download of the whole file when length is accessed")}this._length=datalength;this._chunkSize=chunkSize;this.lengthKnown=true}get length(){if(!this.lengthKnown){this.cacheLength()}return this._length}get chunkSize(){if(!this.lengthKnown){this.cacheLength()}return this._chunkSize}}if(globalThis.XMLHttpRequest){if(!ENVIRONMENT_IS_WORKER)abort("Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc");var lazyArray=new LazyUint8Array;var properties={isDevice:false,contents:lazyArray}}else{var properties={isDevice:false,url}}var node=FS.createFile(parent,name,properties,canRead,canWrite);if(properties.contents){node.contents=properties.contents}else if(properties.url){node.contents=null;node.url=properties.url}Object.defineProperties(node,{usedBytes:{get:function(){return this.contents.length}}});var stream_ops={};for(const[key,fn]of Object.entries(node.stream_ops)){stream_ops[key]=(...args)=>{FS.forceLoadFile(node);return fn(...args)}}function writeChunks(stream,buffer,offset,length,position){var contents=stream.node.contents;if(position>=contents.length)return 0;var size=Math.min(contents.length-position,length);if(contents.slice){for(var i=0;i<size;i++){buffer[offset+i]=contents[position+i]}}else{for(var i=0;i<size;i++){buffer[offset+i]=contents.get(position+i)}}return size}stream_ops.read=(stream,buffer,offset,length,position)=>{FS.forceLoadFile(node);return writeChunks(stream,buffer,offset,length,position)};stream_ops.mmap=(stream,length,position,prot,flags)=>{FS.forceLoadFile(node);var ptr=mmapAlloc(length);if(!ptr){throw new FS.ErrnoError(48)}writeChunks(stream,(growMemViews(),HEAP8),ptr,length,position);return{ptr,allocated:true}};node.stream_ops=stream_ops;return node}};var UTF8ToString=(ptr,maxBytesToRead,ignoreNul)=>ptr?UTF8ArrayToString((growMemViews(),HEAPU8),ptr,maxBytesToRead,ignoreNul):"";var SYSCALLS={DEFAULT_POLLMASK:5,calculateAt(dirfd,path,allowEmpty){if(PATH.isAbs(path)){return path}var dir;if(dirfd===-100){dir=FS.cwd()}else{var dirstream=SYSCALLS.getStreamFromFD(dirfd);dir=dirstream.path}if(path.length==0){if(!allowEmpty){throw new FS.ErrnoError(44)}return dir}return dir+"/"+path},writeStat(buf,stat){(growMemViews(),HEAPU32)[buf/4]=stat.dev;(growMemViews(),HEAPU32)[(buf+4)/4]=stat.mode;(growMemViews(),HEAPU64)[(buf+8)/8]=BigInt(stat.nlink);(growMemViews(),HEAPU32)[(buf+16)/4]=stat.uid;(growMemViews(),HEAPU32)[(buf+20)/4]=stat.gid;(growMemViews(),HEAPU32)[(buf+24)/4]=stat.rdev;(growMemViews(),HEAP64)[(buf+32)/8]=BigInt(stat.size);(growMemViews(),HEAP32)[(buf+40)/4]=4096;(growMemViews(),HEAP32)[(buf+44)/4]=stat.blocks;var atime=stat.atime.getTime();var mtime=stat.mtime.getTime();var ctime=stat.ctime.getTime();(growMemViews(),HEAP64)[(buf+48)/8]=BigInt(Math.floor(atime/1e3));(growMemViews(),HEAPU64)[(buf+56)/8]=BigInt(atime%1e3*1e3*1e3);(growMemViews(),HEAP64)[(buf+64)/8]=BigInt(Math.floor(mtime/1e3));(growMemViews(),HEAPU64)[(buf+72)/8]=BigInt(mtime%1e3*1e3*1e3);(growMemViews(),HEAP64)[(buf+80)/8]=BigInt(Math.floor(ctime/1e3));(growMemViews(),HEAPU64)[(buf+88)/8]=BigInt(ctime%1e3*1e3*1e3);(growMemViews(),HEAP64)[(buf+96)/8]=BigInt(stat.ino);return 0},writeStatFs(buf,stats){(growMemViews(),HEAPU32)[(buf+8)/4]=stats.bsize;(growMemViews(),HEAPU32)[(buf+72)/4]=stats.bsize;(growMemViews(),HEAP64)[(buf+16)/8]=BigInt(stats.blocks);(growMemViews(),HEAP64)[(buf+24)/8]=BigInt(stats.bfree);(growMemViews(),HEAP64)[(buf+32)/8]=BigInt(stats.bavail);(growMemViews(),HEAP64)[(buf+40)/8]=BigInt(stats.files);(growMemViews(),HEAP64)[(buf+48)/8]=BigInt(stats.ffree);(growMemViews(),HEAPU32)[(buf+56)/4]=stats.fsid;(growMemViews(),HEAPU32)[(buf+80)/4]=stats.flags;(growMemViews(),HEAPU32)[(buf+64)/4]=stats.namelen},doMsync(addr,stream,len,flags,offset){if(!FS.isFile(stream.node.mode)){throw new FS.ErrnoError(43)}if(flags&2){return 0}var buffer=(growMemViews(),HEAPU8).slice(addr,addr+len);FS.msync(stream,buffer,offset,len,flags)},getStreamFromFD(fd){var stream=FS.getStreamChecked(fd);return stream},varargs:undefined,getStr(ptr){var ret=UTF8ToString(ptr);return ret}};function ___syscall_fcntl64(fd,cmd,varargs){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(3,0,1,fd,cmd,varargs);varargs=bigintToI53Checked(varargs);SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(cmd){case 0:{var arg=syscallGetVarargI();if(arg<0){return-28}while(FS.streams[arg]){arg++}var newStream;newStream=FS.dupStream(stream,arg);return newStream.fd}case 1:case 2:return 0;case 3:return stream.flags;case 4:{var arg=syscallGetVarargI();stream.flags|=arg;return 0}case 5:{var arg=syscallGetVarargP();var offset=0;(growMemViews(),HEAP16)[(arg+offset)/2]=2;return 0}case 6:case 7:return 0}return-28}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_fstat64(fd,buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(4,0,1,fd,buf);buf=bigintToI53Checked(buf);try{return SYSCALLS.writeStat(buf,FS.fstat(fd))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var stringToUTF8=(str,outPtr,maxBytesToWrite)=>stringToUTF8Array(str,(growMemViews(),HEAPU8),outPtr,maxBytesToWrite);function ___syscall_getcwd(buf,size){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(5,0,1,buf,size);buf=bigintToI53Checked(buf);size=bigintToI53Checked(size);try{if(size===0)return-28;var cwd=FS.cwd();var cwdLengthInBytes=lengthBytesUTF8(cwd)+1;if(size<cwdLengthInBytes)return-68;stringToUTF8(cwd,buf,size);return cwdLengthInBytes}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_getdents64(fd,dirp,count){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(6,0,1,fd,dirp,count);dirp=bigintToI53Checked(dirp);count=bigintToI53Checked(count);try{var stream=SYSCALLS.getStreamFromFD(fd);stream.getdents||=FS.readdir(stream.path);var struct_size=280;var pos=0;var off=FS.llseek(stream,0,1);var startIdx=Math.floor(off/struct_size);var endIdx=Math.min(stream.getdents.length,startIdx+Math.floor(count/struct_size));for(var idx=startIdx;idx<endIdx;idx++){var id;var type;var name=stream.getdents[idx];if(name==="."){id=stream.node.id;type=4}else if(name===".."){var lookup=FS.lookupPath(stream.path,{parent:true});id=lookup.node.id;type=4}else{var child;try{child=FS.lookupNode(stream.node,name)}catch(e){if(e?.errno===28){continue}throw e}id=child.id;type=FS.isChrdev(child.mode)?2:FS.isDir(child.mode)?4:FS.isLink(child.mode)?10:8}(growMemViews(),HEAP64)[(dirp+pos)/8]=BigInt(id);(growMemViews(),HEAP64)[(dirp+pos+8)/8]=BigInt((idx+1)*struct_size);(growMemViews(),HEAP16)[(dirp+pos+16)/2]=280;(growMemViews(),HEAP8)[dirp+pos+18]=type;stringToUTF8(name,dirp+pos+19,256);pos+=struct_size}FS.llseek(stream,idx*struct_size,0);return pos}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_ioctl(fd,op,varargs){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(7,0,1,fd,op,varargs);varargs=bigintToI53Checked(varargs);SYSCALLS.varargs=varargs;try{var stream=SYSCALLS.getStreamFromFD(fd);switch(op){case 21509:{if(!stream.tty)return-59;return 0}case 21505:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tcgets){var termios=stream.tty.ops.ioctl_tcgets(stream);var argp=syscallGetVarargP();(growMemViews(),HEAP32)[argp/4]=termios.c_iflag||0;(growMemViews(),HEAP32)[(argp+4)/4]=termios.c_oflag||0;(growMemViews(),HEAP32)[(argp+8)/4]=termios.c_cflag||0;(growMemViews(),HEAP32)[(argp+12)/4]=termios.c_lflag||0;for(var i=0;i<32;i++){(growMemViews(),HEAP8)[argp+i+17]=termios.c_cc[i]||0}return 0}return 0}case 21510:case 21511:case 21512:{if(!stream.tty)return-59;return 0}case 21506:case 21507:case 21508:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tcsets){var argp=syscallGetVarargP();var c_iflag=(growMemViews(),HEAP32)[argp/4];var c_oflag=(growMemViews(),HEAP32)[(argp+4)/4];var c_cflag=(growMemViews(),HEAP32)[(argp+8)/4];var c_lflag=(growMemViews(),HEAP32)[(argp+12)/4];var c_cc=[];for(var i=0;i<32;i++){c_cc.push((growMemViews(),HEAP8)[argp+i+17])}return stream.tty.ops.ioctl_tcsets(stream.tty,op,{c_iflag,c_oflag,c_cflag,c_lflag,c_cc})}return 0}case 21519:{if(!stream.tty)return-59;var argp=syscallGetVarargP();(growMemViews(),HEAP32)[argp/4]=0;return 0}case 21520:{if(!stream.tty)return-59;return-28}case 21537:case 21531:{var argp=syscallGetVarargP();return FS.ioctl(stream,op,argp)}case 21523:{if(!stream.tty)return-59;if(stream.tty.ops.ioctl_tiocgwinsz){var winsize=stream.tty.ops.ioctl_tiocgwinsz(stream.tty);var argp=syscallGetVarargP();(growMemViews(),HEAP16)[argp/2]=winsize[0];(growMemViews(),HEAP16)[(argp+2)/2]=winsize[1]}return 0}case 21524:{if(!stream.tty)return-59;return 0}case 21515:{if(!stream.tty)return-59;return 0}default:return-28}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_lstat64(path,buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(8,0,1,path,buf);path=bigintToI53Checked(path);buf=bigintToI53Checked(buf);try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.lstat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_newfstatat(dirfd,path,buf,flags){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(9,0,1,dirfd,path,buf,flags);path=bigintToI53Checked(path);buf=bigintToI53Checked(buf);try{path=SYSCALLS.getStr(path);var nofollow=flags&256;var allowEmpty=flags&4096;flags=flags&~6400;path=SYSCALLS.calculateAt(dirfd,path,allowEmpty);return SYSCALLS.writeStat(buf,nofollow?FS.lstat(path):FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_openat(dirfd,path,flags,varargs){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(10,0,1,dirfd,path,flags,varargs);path=bigintToI53Checked(path);varargs=bigintToI53Checked(varargs);SYSCALLS.varargs=varargs;try{path=SYSCALLS.getStr(path);path=SYSCALLS.calculateAt(dirfd,path);var mode=varargs?syscallGetVarargI():0;return FS.open(path,flags,mode).fd}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function ___syscall_stat64(path,buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(11,0,1,path,buf);path=bigintToI53Checked(path);buf=bigintToI53Checked(buf);try{path=SYSCALLS.getStr(path);return SYSCALLS.writeStat(buf,FS.stat(path))}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __abort_js=()=>abort("");function __emscripten_init_main_thread_js(tb){tb=bigintToI53Checked(tb);__emscripten_thread_init(tb,!ENVIRONMENT_IS_WORKER,1,!ENVIRONMENT_IS_WEB,5242880,false);PThread.threadInitTLS()}var handleException=e=>{if(e instanceof ExitStatus||e=="unwind"){return EXITSTATUS}quit_(1,e)};var maybeExit=()=>{if(!keepRuntimeAlive()){try{if(ENVIRONMENT_IS_PTHREAD){if(_pthread_self())__emscripten_thread_exit(EXITSTATUS);return}_exit(EXITSTATUS)}catch(e){handleException(e)}}};var callUserCallback=func=>{if(ABORT){return}try{func();maybeExit()}catch(e){handleException(e)}};function __emscripten_thread_mailbox_await(pthread_ptr){pthread_ptr=bigintToI53Checked(pthread_ptr);if(Atomics.waitAsync){var wait=Atomics.waitAsync((growMemViews(),HEAP32),pthread_ptr/4,pthread_ptr);wait.value.then(checkMailbox);var waitingAsync=pthread_ptr+228;Atomics.store((growMemViews(),HEAP32),waitingAsync/4,1)}}var checkMailbox=()=>callUserCallback(()=>{var pthread_ptr=_pthread_self();if(pthread_ptr){__emscripten_thread_mailbox_await(pthread_ptr);__emscripten_check_mailbox()}});function __emscripten_notify_mailbox_postmessage(targetThread,currThreadId){targetThread=bigintToI53Checked(targetThread);currThreadId=bigintToI53Checked(currThreadId);if(targetThread==currThreadId){setTimeout(checkMailbox)}else if(ENVIRONMENT_IS_PTHREAD){postMessage({targetThread,cmd:"checkMailbox"})}else{var worker=PThread.pthreads[targetThread];if(!worker){return}worker.postMessage({cmd:"checkMailbox"})}}var proxiedJSCallArgs=[];function __emscripten_receive_on_main_thread_js(funcIndex,emAsmAddr,callingThread,numCallArgs,args){emAsmAddr=bigintToI53Checked(emAsmAddr);callingThread=bigintToI53Checked(callingThread);args=bigintToI53Checked(args);numCallArgs/=2;proxiedJSCallArgs.length=numCallArgs;var b=args/8;for(var i=0;i<numCallArgs;i++){if((growMemViews(),HEAP64)[b+2*i]){proxiedJSCallArgs[i]=(growMemViews(),HEAP64)[b+2*i+1]}else{proxiedJSCallArgs[i]=(growMemViews(),HEAPF64)[b+2*i+1]}}var func=proxiedFunctionTable[funcIndex];PThread.currentProxiedOperationCallerThread=callingThread;var rtn=func(...proxiedJSCallArgs);PThread.currentProxiedOperationCallerThread=0;if(typeof rtn=="bigint"){rtn=bigintToI53Checked(rtn)}return rtn}function __emscripten_thread_cleanup(thread){thread=bigintToI53Checked(thread);if(!ENVIRONMENT_IS_PTHREAD)cleanupThread(thread);else postMessage({cmd:"cleanupThread",thread})}function __emscripten_thread_set_strongref(thread){thread=bigintToI53Checked(thread);if(ENVIRONMENT_IS_NODE){PThread.pthreads[thread].ref()}}var isLeapYear=year=>year%4===0&&(year%100!==0||year%400===0);var MONTH_DAYS_LEAP_CUMULATIVE=[0,31,60,91,121,152,182,213,244,274,305,335];var MONTH_DAYS_REGULAR_CUMULATIVE=[0,31,59,90,120,151,181,212,243,273,304,334];var ydayFromDate=date=>{var leap=isLeapYear(date.getFullYear());var monthDaysCumulative=leap?MONTH_DAYS_LEAP_CUMULATIVE:MONTH_DAYS_REGULAR_CUMULATIVE;var yday=monthDaysCumulative[date.getMonth()]+date.getDate()-1;return yday};function __localtime_js(time,tmPtr){time=bigintToI53Checked(time);tmPtr=bigintToI53Checked(tmPtr);var date=new Date(time*1e3);(growMemViews(),HEAP32)[tmPtr/4]=date.getSeconds();(growMemViews(),HEAP32)[(tmPtr+4)/4]=date.getMinutes();(growMemViews(),HEAP32)[(tmPtr+8)/4]=date.getHours();(growMemViews(),HEAP32)[(tmPtr+12)/4]=date.getDate();(growMemViews(),HEAP32)[(tmPtr+16)/4]=date.getMonth();(growMemViews(),HEAP32)[(tmPtr+20)/4]=date.getFullYear()-1900;(growMemViews(),HEAP32)[(tmPtr+24)/4]=date.getDay();var yday=ydayFromDate(date)|0;(growMemViews(),HEAP32)[(tmPtr+28)/4]=yday;(growMemViews(),HEAP64)[(tmPtr+40)/8]=BigInt(-(date.getTimezoneOffset()*60));var start=new Date(date.getFullYear(),0,1);var summerOffset=new Date(date.getFullYear(),6,1).getTimezoneOffset();var winterOffset=start.getTimezoneOffset();var dst=(summerOffset!=winterOffset&&date.getTimezoneOffset()==Math.min(winterOffset,summerOffset))|0;(growMemViews(),HEAP32)[(tmPtr+32)/4]=dst}function __mmap_js(len,prot,flags,fd,offset,allocated,addr){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(12,0,1,len,prot,flags,fd,offset,allocated,addr);len=bigintToI53Checked(len);offset=bigintToI53Checked(offset);allocated=bigintToI53Checked(allocated);addr=bigintToI53Checked(addr);try{var stream=SYSCALLS.getStreamFromFD(fd);var res=FS.mmap(stream,len,offset,prot,flags);var ptr=res.ptr;(growMemViews(),HEAP32)[allocated/4]=res.allocated;(growMemViews(),HEAPU64)[addr/8]=BigInt(ptr);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}function __munmap_js(addr,len,prot,flags,fd,offset){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(13,0,1,addr,len,prot,flags,fd,offset);addr=bigintToI53Checked(addr);len=bigintToI53Checked(len);offset=bigintToI53Checked(offset);try{var stream=SYSCALLS.getStreamFromFD(fd);if(prot&2){SYSCALLS.doMsync(addr,stream,len,flags,offset)}}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return-e.errno}}var __tzset_js=function(timezone,daylight,std_name,dst_name){timezone=bigintToI53Checked(timezone);daylight=bigintToI53Checked(daylight);std_name=bigintToI53Checked(std_name);dst_name=bigintToI53Checked(dst_name);var currentYear=(new Date).getFullYear();var winter=new Date(currentYear,0,1);var summer=new Date(currentYear,6,1);var winterOffset=winter.getTimezoneOffset();var summerOffset=summer.getTimezoneOffset();var stdTimezoneOffset=Math.max(winterOffset,summerOffset);(growMemViews(),HEAPU64)[timezone/8]=BigInt(stdTimezoneOffset*60);(growMemViews(),HEAP32)[daylight/4]=Number(winterOffset!=summerOffset);var extractZone=timezoneOffset=>{var sign=timezoneOffset>=0?"-":"+";var absOffset=Math.abs(timezoneOffset);var hours=String(Math.floor(absOffset/60)).padStart(2,"0");var minutes=String(absOffset%60).padStart(2,"0");return`UTC${sign}${hours}${minutes}`};var winterName=extractZone(winterOffset);var summerName=extractZone(summerOffset);if(summerOffset<winterOffset){stringToUTF8(winterName,std_name,17);stringToUTF8(summerName,dst_name,17)}else{stringToUTF8(winterName,dst_name,17);stringToUTF8(summerName,std_name,17)}};var _emscripten_get_now=()=>performance.timeOrigin+performance.now();var _emscripten_date_now=()=>Date.now();var nowIsMonotonic=1;var checkWasiClock=clock_id=>clock_id>=0&&clock_id<=3;function _clock_time_get(clk_id,ignored_precision,ptime){ignored_precision=bigintToI53Checked(ignored_precision);ptime=bigintToI53Checked(ptime);if(!checkWasiClock(clk_id)){return 28}var now;if(clk_id===0){now=_emscripten_date_now()}else if(nowIsMonotonic){now=_emscripten_get_now()}else{return 52}var nsec=Math.round(now*1e3*1e3);(growMemViews(),HEAP64)[ptime/8]=BigInt(nsec);return 0}var _emscripten_check_blocking_allowed=()=>{};var runtimeKeepalivePush=()=>{runtimeKeepaliveCounter+=1};var _emscripten_exit_with_live_runtime=()=>{runtimeKeepalivePush();throw"unwind"};var jsStackTrace=()=>(new Error).stack.toString();var getCallstack=flags=>{var callstack=jsStackTrace();var lines=callstack.split("\\n");callstack="";var firefoxRe=new RegExp("\\\\s*(.*?)@(.*?):([0-9]+):([0-9]+)");var chromeRe=new RegExp("\\\\s*at (.*?) \\\\((.*):(.*):(.*)\\\\)");for(var line of lines){var symbolName="";var file="";var lineno=0;var column=0;var parts=chromeRe.exec(line);if(parts?.length==5){symbolName=parts[1];file=parts[2];lineno=parts[3];column=parts[4]}else{parts=firefoxRe.exec(line);if(parts?.length>=4){symbolName=parts[1];file=parts[2];lineno=parts[3];column=parts[4]|0}else{callstack+=line+"\\n";continue}}if(symbolName=="_emscripten_log"||symbolName=="_emscripten_get_callstack"){callstack="";continue}if(flags&24){if(flags&64){file=file.substring(file.replace(/\\\\/g,"/").lastIndexOf("/")+1)}callstack+=`    at ${symbolName} (${file}:${lineno}:${column})\\n`}}callstack=callstack.replace(/\\s+$/,"");return callstack};function _emscripten_get_callstack(flags,str,maxbytes){str=bigintToI53Checked(str);var callstack=getCallstack(flags);if(!str||maxbytes<=0){return lengthBytesUTF8(callstack)+1}var bytesWrittenExcludingNull=stringToUTF8(callstack,str,maxbytes);return bytesWrittenExcludingNull+1}var getHeapMax=()=>4294967296;var _emscripten_get_heap_max=()=>BigInt(getHeapMax());var _emscripten_has_asyncify=()=>2;var _emscripten_num_logical_cores=()=>ENVIRONMENT_IS_NODE?require("os").cpus().length:navigator["hardwareConcurrency"];var growMemory=size=>{var oldHeapSize=wasmMemory.buffer.byteLength;var pages=(size-oldHeapSize+65535)/65536|0;try{wasmMemory.grow(BigInt(pages));updateMemoryViews();return 1}catch(e){}};function _emscripten_resize_heap(requestedSize){requestedSize=bigintToI53Checked(requestedSize);var oldSize=(growMemViews(),HEAPU8).length;if(requestedSize<=oldSize){return false}var maxHeapSize=getHeapMax();if(requestedSize>maxHeapSize){return false}for(var cutDown=1;cutDown<=4;cutDown*=2){var overGrownHeapSize=oldSize*(1+.2/cutDown);overGrownHeapSize=Math.min(overGrownHeapSize,requestedSize+100663296);var newSize=Math.min(maxHeapSize,alignMemory(Math.max(requestedSize,overGrownHeapSize),65536));var replacement=growMemory(newSize);if(replacement){return true}}return false}var stringToUTF8OnStack=str=>{var size=lengthBytesUTF8(str)+1;var ret=stackAlloc(size);stringToUTF8(str,ret,size);return ret};var writeI53ToI64=(ptr,num)=>{(growMemViews(),HEAPU32)[ptr/4]=num;var lower=(growMemViews(),HEAPU32)[ptr/4];(growMemViews(),HEAPU32)[(ptr+4)/4]=(num-lower)/4294967296};var stringToNewUTF8=str=>{var size=lengthBytesUTF8(str)+1;var ret=_malloc(size);if(ret)stringToUTF8(str,ret,size);return ret};var readI53FromI64=ptr=>(growMemViews(),HEAPU32)[ptr/4]+(growMemViews(),HEAP32)[(ptr+4)/4]*4294967296;var WebGPU={Internals:{jsObjects:[],jsObjectInsert:(ptr,jsObject)=>{WebGPU.Internals.jsObjects[ptr]=jsObject},bufferOnUnmaps:[],futures:[],futureInsert:(futureId,promise)=>{WebGPU.Internals.futures[futureId]=new Promise(resolve=>promise.finally(()=>resolve(futureId)))}},getJsObject:ptr=>{if(!ptr)return undefined;return WebGPU.Internals.jsObjects[ptr]},importJsAdapter:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateAdapter(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsBindGroup:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateBindGroup(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsBindGroupLayout:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateBindGroupLayout(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsBuffer:(buffer,parentPtr=0)=>{assert(buffer.mapState==="unmapped");var bufferPtr=_emwgpuCreateBuffer(parentPtr);WebGPU.Internals.jsObjectInsert(bufferPtr,buffer);return bufferPtr},importJsCommandBuffer:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateCommandBuffer(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsCommandEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateCommandEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsComputePassEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateComputePassEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsComputePipeline:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateComputePipeline(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsDevice:(device,parentPtr=0)=>{var queuePtr=_emwgpuCreateQueue(parentPtr);var devicePtr=_emwgpuCreateDevice(parentPtr,queuePtr);WebGPU.Internals.jsObjectInsert(queuePtr,device.queue);WebGPU.Internals.jsObjectInsert(devicePtr,device);return devicePtr},importJsExternalTexture:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateExternalTexture(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsPipelineLayout:(obj,parentPtr=0)=>{var ptr=_emwgpuCreatePipelineLayout(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsQuerySet:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateQuerySet(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsQueue:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateQueue(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderBundle:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderBundle(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderBundleEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderBundleEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderPassEncoder:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderPassEncoder(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsRenderPipeline:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateRenderPipeline(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsSampler:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateSampler(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsShaderModule:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateShaderModule(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsSurface:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateSurface(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsTexture:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateTexture(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},importJsTextureView:(obj,parentPtr=0)=>{var ptr=_emwgpuCreateTextureView(parentPtr);WebGPU.Internals.jsObjects[ptr]=obj;return ptr},errorCallback:(callback,type,message,userdata)=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(message);((a1,a2,a3)=>getWasmTableEntry(callback).call(null,a1,BigInt(a2),BigInt(a3)))(type,BigInt(messagePtr),userdata);stackRestore(sp)},iterateExtensions:(root,handlers)=>{for(var ptr=Number((growMemViews(),HEAPU64)[root/8]);ptr;ptr=Number((growMemViews(),HEAPU64)[ptr/8])){var sType=(growMemViews(),HEAP32)[(ptr+8)/4];var handler=handlers[sType](ptr)}},setStringView:(ptr,data,length)=>{(growMemViews(),HEAPU64)[ptr/8]=BigInt(data);(growMemViews(),HEAPU64)[(ptr+8)/8]=BigInt(length)},makeStringFromStringView:stringViewPtr=>{var ptr=Number((growMemViews(),HEAPU64)[stringViewPtr/8]);var length=Number((growMemViews(),HEAPU64)[(stringViewPtr+8)/8]);return UTF8ToString(ptr,length)},makeStringFromOptionalStringView:stringViewPtr=>{var ptr=Number((growMemViews(),HEAPU64)[stringViewPtr/8]);var length=Number((growMemViews(),HEAPU64)[(stringViewPtr+8)/8]);if(!ptr){if(length===0){return""}return undefined}return UTF8ToString(ptr,length)},makeColor:ptr=>({r:(growMemViews(),HEAPF64)[ptr/8],g:(growMemViews(),HEAPF64)[(ptr+8)/8],b:(growMemViews(),HEAPF64)[(ptr+16)/8],a:(growMemViews(),HEAPF64)[(ptr+24)/8]}),makeExtent3D:ptr=>({width:(growMemViews(),HEAPU32)[ptr/4],height:(growMemViews(),HEAPU32)[(ptr+4)/4],depthOrArrayLayers:(growMemViews(),HEAPU32)[(ptr+8)/4]}),makeOrigin3D:ptr=>({x:(growMemViews(),HEAPU32)[ptr/4],y:(growMemViews(),HEAPU32)[(ptr+4)/4],z:(growMemViews(),HEAPU32)[(ptr+8)/4]}),makeTexelCopyTextureInfo:ptr=>({texture:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[ptr/8])),mipLevel:(growMemViews(),HEAPU32)[(ptr+8)/4],origin:WebGPU.makeOrigin3D(ptr+12),aspect:WebGPU.TextureAspect[(growMemViews(),HEAP32)[(ptr+24)/4]]}),makeTexelCopyBufferLayout:ptr=>{var bytesPerRow=(growMemViews(),HEAPU32)[(ptr+8)/4];var rowsPerImage=(growMemViews(),HEAPU32)[(ptr+12)/4];return{offset:readI53FromI64(ptr),bytesPerRow:bytesPerRow===4294967295?undefined:bytesPerRow,rowsPerImage:rowsPerImage===4294967295?undefined:rowsPerImage}},makeTexelCopyBufferInfo:ptr=>{var layoutPtr=ptr+0;var bufferCopyView=WebGPU.makeTexelCopyBufferLayout(layoutPtr);bufferCopyView["buffer"]=WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(ptr+16)/8]));return bufferCopyView},makePassTimestampWrites:ptr=>{if(ptr===0)return undefined;return{querySet:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(ptr+8)/8])),beginningOfPassWriteIndex:(growMemViews(),HEAPU32)[(ptr+16)/4],endOfPassWriteIndex:(growMemViews(),HEAPU32)[(ptr+20)/4]}},makePipelineConstants:(constantCount,constantsPtr)=>{if(!constantCount)return;var constants={};for(var i=0;i<constantCount;++i){var entryPtr=constantsPtr+32*i;var key=WebGPU.makeStringFromStringView(entryPtr+8);constants[key]=(growMemViews(),HEAPF64)[(entryPtr+24)/8]}return constants},makePipelineLayout:layoutPtr=>{if(!layoutPtr)return"auto";return WebGPU.getJsObject(layoutPtr)},makeComputeState:ptr=>{if(!ptr)return undefined;var desc={module:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(ptr+8)/8])),constants:WebGPU.makePipelineConstants(Number((growMemViews(),HEAPU64)[(ptr+32)/8]),Number((growMemViews(),HEAPU64)[(ptr+40)/8])),entryPoint:WebGPU.makeStringFromOptionalStringView(ptr+16)};return desc},makeComputePipelineDesc:descriptor=>{var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),layout:WebGPU.makePipelineLayout(Number((growMemViews(),HEAPU64)[(descriptor+24)/8])),compute:WebGPU.makeComputeState(descriptor+32)};return desc},makeRenderPipelineDesc:descriptor=>{function makePrimitiveState(psPtr){if(!psPtr)return undefined;return{topology:WebGPU.PrimitiveTopology[(growMemViews(),HEAP32)[(psPtr+8)/4]],stripIndexFormat:WebGPU.IndexFormat[(growMemViews(),HEAP32)[(psPtr+12)/4]],frontFace:WebGPU.FrontFace[(growMemViews(),HEAP32)[(psPtr+16)/4]],cullMode:WebGPU.CullMode[(growMemViews(),HEAP32)[(psPtr+20)/4]],unclippedDepth:!!(growMemViews(),HEAPU32)[(psPtr+24)/4]}}function makeBlendComponent(bdPtr){if(!bdPtr)return undefined;return{operation:WebGPU.BlendOperation[(growMemViews(),HEAP32)[bdPtr/4]],srcFactor:WebGPU.BlendFactor[(growMemViews(),HEAP32)[(bdPtr+4)/4]],dstFactor:WebGPU.BlendFactor[(growMemViews(),HEAP32)[(bdPtr+8)/4]]}}function makeBlendState(bsPtr){if(!bsPtr)return undefined;return{alpha:makeBlendComponent(bsPtr+12),color:makeBlendComponent(bsPtr+0)}}function makeColorState(csPtr){var format=WebGPU.TextureFormat[(growMemViews(),HEAP32)[(csPtr+8)/4]];return format?{format,blend:makeBlendState(Number((growMemViews(),HEAPU64)[(csPtr+16)/8])),writeMask:(growMemViews(),HEAPU32)[(csPtr+24)/4]}:undefined}function makeColorStates(count,csArrayPtr){var states=[];for(var i=0;i<count;++i){states.push(makeColorState(csArrayPtr+32*i))}return states}function makeStencilStateFace(ssfPtr){return{compare:WebGPU.CompareFunction[(growMemViews(),HEAP32)[ssfPtr/4]],failOp:WebGPU.StencilOperation[(growMemViews(),HEAP32)[(ssfPtr+4)/4]],depthFailOp:WebGPU.StencilOperation[(growMemViews(),HEAP32)[(ssfPtr+8)/4]],passOp:WebGPU.StencilOperation[(growMemViews(),HEAP32)[(ssfPtr+12)/4]]}}function makeDepthStencilState(dssPtr){if(!dssPtr)return undefined;return{format:WebGPU.TextureFormat[(growMemViews(),HEAP32)[(dssPtr+8)/4]],depthWriteEnabled:!!(growMemViews(),HEAPU32)[(dssPtr+12)/4],depthCompare:WebGPU.CompareFunction[(growMemViews(),HEAP32)[(dssPtr+16)/4]],stencilFront:makeStencilStateFace(dssPtr+20),stencilBack:makeStencilStateFace(dssPtr+36),stencilReadMask:(growMemViews(),HEAPU32)[(dssPtr+52)/4],stencilWriteMask:(growMemViews(),HEAPU32)[(dssPtr+56)/4],depthBias:(growMemViews(),HEAP32)[(dssPtr+60)/4],depthBiasSlopeScale:(growMemViews(),HEAPF32)[(dssPtr+64)/4],depthBiasClamp:(growMemViews(),HEAPF32)[(dssPtr+68)/4]}}function makeVertexAttribute(vaPtr){return{format:WebGPU.VertexFormat[(growMemViews(),HEAP32)[(vaPtr+8)/4]],offset:readI53FromI64(vaPtr+16),shaderLocation:(growMemViews(),HEAPU32)[(vaPtr+24)/4]}}function makeVertexAttributes(count,vaArrayPtr){var vas=[];for(var i=0;i<count;++i){vas.push(makeVertexAttribute(vaArrayPtr+i*32))}return vas}function makeVertexBuffer(vbPtr){if(!vbPtr)return undefined;var stepMode=WebGPU.VertexStepMode[(growMemViews(),HEAP32)[(vbPtr+8)/4]];var attributeCount=Number((growMemViews(),HEAPU64)[(vbPtr+24)/8]);if(!stepMode&&!attributeCount){return null}return{arrayStride:readI53FromI64(vbPtr+16),stepMode,attributes:makeVertexAttributes(attributeCount,Number((growMemViews(),HEAPU64)[(vbPtr+32)/8]))}}function makeVertexBuffers(count,vbArrayPtr){if(!count)return undefined;var vbs=[];for(var i=0;i<count;++i){vbs.push(makeVertexBuffer(vbArrayPtr+i*40))}return vbs}function makeVertexState(viPtr){if(!viPtr)return undefined;var desc={module:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(viPtr+8)/8])),constants:WebGPU.makePipelineConstants(Number((growMemViews(),HEAPU64)[(viPtr+32)/8]),Number((growMemViews(),HEAPU64)[(viPtr+40)/8])),buffers:makeVertexBuffers(Number((growMemViews(),HEAPU64)[(viPtr+48)/8]),Number((growMemViews(),HEAPU64)[(viPtr+56)/8])),entryPoint:WebGPU.makeStringFromOptionalStringView(viPtr+16)};return desc}function makeMultisampleState(msPtr){if(!msPtr)return undefined;return{count:(growMemViews(),HEAPU32)[(msPtr+8)/4],mask:(growMemViews(),HEAPU32)[(msPtr+12)/4],alphaToCoverageEnabled:!!(growMemViews(),HEAPU32)[(msPtr+16)/4]}}function makeFragmentState(fsPtr){if(!fsPtr)return undefined;var desc={module:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(fsPtr+8)/8])),constants:WebGPU.makePipelineConstants(Number((growMemViews(),HEAPU64)[(fsPtr+32)/8]),Number((growMemViews(),HEAPU64)[(fsPtr+40)/8])),targets:makeColorStates(Number((growMemViews(),HEAPU64)[(fsPtr+48)/8]),Number((growMemViews(),HEAPU64)[(fsPtr+56)/8])),entryPoint:WebGPU.makeStringFromOptionalStringView(fsPtr+16)};return desc}var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),layout:WebGPU.makePipelineLayout(Number((growMemViews(),HEAPU64)[(descriptor+24)/8])),vertex:makeVertexState(descriptor+32),primitive:makePrimitiveState(descriptor+96),depthStencil:makeDepthStencilState(Number((growMemViews(),HEAPU64)[(descriptor+128)/8])),multisample:makeMultisampleState(descriptor+136),fragment:makeFragmentState(Number((growMemViews(),HEAPU64)[(descriptor+160)/8]))};return desc},fillLimitStruct:(limits,limitsOutPtr)=>{var nextInChainPtr=Number((growMemViews(),HEAPU64)[limitsOutPtr/8]);function setLimitValueU32(name,basePtr,limitOffset,fallbackValue=0){var limitValue=limits[name]??fallbackValue;(growMemViews(),HEAPU32)[(basePtr+limitOffset)/4]=limitValue}function setLimitValueU64(name,basePtr,limitOffset,fallbackValue=0){var limitValue=limits[name]??fallbackValue;writeI53ToI64(basePtr+limitOffset,limitValue)}setLimitValueU32("maxTextureDimension1D",limitsOutPtr,8);setLimitValueU32("maxTextureDimension2D",limitsOutPtr,12);setLimitValueU32("maxTextureDimension3D",limitsOutPtr,16);setLimitValueU32("maxTextureArrayLayers",limitsOutPtr,20);setLimitValueU32("maxBindGroups",limitsOutPtr,24);setLimitValueU32("maxBindGroupsPlusVertexBuffers",limitsOutPtr,28);setLimitValueU32("maxBindingsPerBindGroup",limitsOutPtr,32);setLimitValueU32("maxDynamicUniformBuffersPerPipelineLayout",limitsOutPtr,36);setLimitValueU32("maxDynamicStorageBuffersPerPipelineLayout",limitsOutPtr,40);setLimitValueU32("maxSampledTexturesPerShaderStage",limitsOutPtr,44);setLimitValueU32("maxSamplersPerShaderStage",limitsOutPtr,48);setLimitValueU32("maxStorageBuffersPerShaderStage",limitsOutPtr,52);setLimitValueU32("maxStorageTexturesPerShaderStage",limitsOutPtr,56);setLimitValueU32("maxUniformBuffersPerShaderStage",limitsOutPtr,60);setLimitValueU32("minUniformBufferOffsetAlignment",limitsOutPtr,80);setLimitValueU32("minStorageBufferOffsetAlignment",limitsOutPtr,84);setLimitValueU64("maxUniformBufferBindingSize",limitsOutPtr,64);setLimitValueU64("maxStorageBufferBindingSize",limitsOutPtr,72);setLimitValueU32("maxVertexBuffers",limitsOutPtr,88);setLimitValueU64("maxBufferSize",limitsOutPtr,96);setLimitValueU32("maxVertexAttributes",limitsOutPtr,104);setLimitValueU32("maxVertexBufferArrayStride",limitsOutPtr,108);setLimitValueU32("maxInterStageShaderVariables",limitsOutPtr,112);setLimitValueU32("maxColorAttachments",limitsOutPtr,116);setLimitValueU32("maxColorAttachmentBytesPerSample",limitsOutPtr,120);setLimitValueU32("maxComputeWorkgroupStorageSize",limitsOutPtr,124);setLimitValueU32("maxComputeInvocationsPerWorkgroup",limitsOutPtr,128);setLimitValueU32("maxComputeWorkgroupSizeX",limitsOutPtr,132);setLimitValueU32("maxComputeWorkgroupSizeY",limitsOutPtr,136);setLimitValueU32("maxComputeWorkgroupSizeZ",limitsOutPtr,140);setLimitValueU32("maxComputeWorkgroupsPerDimension",limitsOutPtr,144);setLimitValueU32("maxImmediateSize",limitsOutPtr,148);if(nextInChainPtr!==0){var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var compatibilityModeLimitsPtr=nextInChainPtr;setLimitValueU32("maxStorageBuffersInVertexStage",compatibilityModeLimitsPtr,16,limits.maxStorageBuffersPerShaderStage);setLimitValueU32("maxStorageBuffersInFragmentStage",compatibilityModeLimitsPtr,24,limits.maxStorageBuffersPerShaderStage);setLimitValueU32("maxStorageTexturesInVertexStage",compatibilityModeLimitsPtr,20,limits.maxStorageTexturesPerShaderStage);setLimitValueU32("maxStorageTexturesInFragmentStage",compatibilityModeLimitsPtr,28,limits.maxStorageTexturesPerShaderStage)}},fillAdapterInfoStruct:(info,infoStruct)=>{(growMemViews(),HEAPU32)[(infoStruct+88)/4]=info.subgroupMinSize;(growMemViews(),HEAPU32)[(infoStruct+92)/4]=info.subgroupMaxSize;var strs=info.vendor+info.architecture+info.device+info.description;var strPtr=stringToNewUTF8(strs);var vendorLen=lengthBytesUTF8(info.vendor);WebGPU.setStringView(infoStruct+8,strPtr,vendorLen);strPtr+=vendorLen;var architectureLen=lengthBytesUTF8(info.architecture);WebGPU.setStringView(infoStruct+24,strPtr,architectureLen);strPtr+=architectureLen;var deviceLen=lengthBytesUTF8(info.device);WebGPU.setStringView(infoStruct+40,strPtr,deviceLen);strPtr+=deviceLen;var descriptionLen=lengthBytesUTF8(info.description);WebGPU.setStringView(infoStruct+56,strPtr,descriptionLen);strPtr+=descriptionLen;(growMemViews(),HEAP32)[(infoStruct+72)/4]=2;var adapterType=info.isFallbackAdapter?3:4;(growMemViews(),HEAP32)[(infoStruct+76)/4]=adapterType;(growMemViews(),HEAPU32)[(infoStruct+80)/4]=0;(growMemViews(),HEAPU32)[(infoStruct+84)/4]=0},AddressMode:[,"clamp-to-edge","repeat","mirror-repeat"],BlendFactor:[,"zero","one","src","one-minus-src","src-alpha","one-minus-src-alpha","dst","one-minus-dst","dst-alpha","one-minus-dst-alpha","src-alpha-saturated","constant","one-minus-constant","src1","one-minus-src1","src1-alpha","one-minus-src1-alpha"],BlendOperation:[,"add","subtract","reverse-subtract","min","max"],BufferBindingType:[,,"uniform","storage","read-only-storage"],BufferMapState:[,"unmapped","pending","mapped"],CompareFunction:[,"never","less","equal","less-equal","greater","not-equal","greater-equal","always"],CompilationInfoRequestStatus:[,"success","callback-cancelled"],ComponentSwizzle:[,"0","1","r","g","b","a"],CompositeAlphaMode:[,"opaque","premultiplied","unpremultiplied","inherit"],CullMode:[,"none","front","back"],ErrorFilter:[,"validation","out-of-memory","internal"],FeatureLevel:[,"compatibility","core"],FeatureName:{1:"core-features-and-limits",2:"depth-clip-control",3:"depth32float-stencil8",4:"texture-compression-bc",5:"texture-compression-bc-sliced-3d",6:"texture-compression-etc2",7:"texture-compression-astc",8:"texture-compression-astc-sliced-3d",9:"timestamp-query",10:"indirect-first-instance",11:"shader-f16",12:"rg11b10ufloat-renderable",13:"bgra8unorm-storage",14:"float32-filterable",15:"float32-blendable",16:"clip-distances",17:"dual-source-blending",18:"subgroups",19:"texture-formats-tier1",20:"texture-formats-tier2",21:"primitive-index",22:"texture-component-swizzle",327692:"chromium-experimental-unorm16-texture-formats",327729:"chromium-experimental-multi-draw-indirect"},FilterMode:[,"nearest","linear"],FrontFace:[,"ccw","cw"],IndexFormat:[,"uint16","uint32"],InstanceFeatureName:[,"timed-wait-any","shader-source-spirv","multiple-devices-per-adapter"],LoadOp:[,"load","clear"],MipmapFilterMode:[,"nearest","linear"],OptionalBool:["false","true"],PowerPreference:[,"low-power","high-performance"],PredefinedColorSpace:[,"srgb","display-p3"],PrimitiveTopology:[,"point-list","line-list","line-strip","triangle-list","triangle-strip"],QueryType:[,"occlusion","timestamp"],SamplerBindingType:[,,"filtering","non-filtering","comparison"],Status:[,"success","error"],StencilOperation:[,"keep","zero","replace","invert","increment-clamp","decrement-clamp","increment-wrap","decrement-wrap"],StorageTextureAccess:[,,"write-only","read-only","read-write"],StoreOp:[,"store","discard"],SurfaceGetCurrentTextureStatus:[,"success-optimal","success-suboptimal","timeout","outdated","lost","error"],TextureAspect:[,"all","stencil-only","depth-only"],TextureDimension:[,"1d","2d","3d"],TextureFormat:[,"r8unorm","r8snorm","r8uint","r8sint","r16unorm","r16snorm","r16uint","r16sint","r16float","rg8unorm","rg8snorm","rg8uint","rg8sint","r32float","r32uint","r32sint","rg16unorm","rg16snorm","rg16uint","rg16sint","rg16float","rgba8unorm","rgba8unorm-srgb","rgba8snorm","rgba8uint","rgba8sint","bgra8unorm","bgra8unorm-srgb","rgb10a2uint","rgb10a2unorm","rg11b10ufloat","rgb9e5ufloat","rg32float","rg32uint","rg32sint","rgba16unorm","rgba16snorm","rgba16uint","rgba16sint","rgba16float","rgba32float","rgba32uint","rgba32sint","stencil8","depth16unorm","depth24plus","depth24plus-stencil8","depth32float","depth32float-stencil8","bc1-rgba-unorm","bc1-rgba-unorm-srgb","bc2-rgba-unorm","bc2-rgba-unorm-srgb","bc3-rgba-unorm","bc3-rgba-unorm-srgb","bc4-r-unorm","bc4-r-snorm","bc5-rg-unorm","bc5-rg-snorm","bc6h-rgb-ufloat","bc6h-rgb-float","bc7-rgba-unorm","bc7-rgba-unorm-srgb","etc2-rgb8unorm","etc2-rgb8unorm-srgb","etc2-rgb8a1unorm","etc2-rgb8a1unorm-srgb","etc2-rgba8unorm","etc2-rgba8unorm-srgb","eac-r11unorm","eac-r11snorm","eac-rg11unorm","eac-rg11snorm","astc-4x4-unorm","astc-4x4-unorm-srgb","astc-5x4-unorm","astc-5x4-unorm-srgb","astc-5x5-unorm","astc-5x5-unorm-srgb","astc-6x5-unorm","astc-6x5-unorm-srgb","astc-6x6-unorm","astc-6x6-unorm-srgb","astc-8x5-unorm","astc-8x5-unorm-srgb","astc-8x6-unorm","astc-8x6-unorm-srgb","astc-8x8-unorm","astc-8x8-unorm-srgb","astc-10x5-unorm","astc-10x5-unorm-srgb","astc-10x6-unorm","astc-10x6-unorm-srgb","astc-10x8-unorm","astc-10x8-unorm-srgb","astc-10x10-unorm","astc-10x10-unorm-srgb","astc-12x10-unorm","astc-12x10-unorm-srgb","astc-12x12-unorm","astc-12x12-unorm-srgb"],TextureSampleType:[,,"float","unfilterable-float","depth","sint","uint"],TextureViewDimension:[,"1d","2d","2d-array","cube","cube-array","3d"],ToneMappingMode:[,"standard","extended"],VertexFormat:[,"uint8","uint8x2","uint8x4","sint8","sint8x2","sint8x4","unorm8","unorm8x2","unorm8x4","snorm8","snorm8x2","snorm8x4","uint16","uint16x2","uint16x4","sint16","sint16x2","sint16x4","unorm16","unorm16x2","unorm16x4","snorm16","snorm16x2","snorm16x4","float16","float16x2","float16x4","float32","float32x2","float32x3","float32x4","uint32","uint32x2","uint32x3","uint32x4","sint32","sint32x2","sint32x3","sint32x4","unorm10-10-10-2","unorm8x4-bgra"],VertexStepMode:[,"vertex","instance"],WGSLLanguageFeatureName:[,"readonly_and_readwrite_storage_textures","packed_4x8_integer_dot_product","unrestricted_pointer_parameters","pointer_composite_access","uniform_buffer_standard_layout","subgroup_id","texture_and_sampler_let","subgroup_uniformity","texture_formats_tier1"]};var emwgpuStringToInt_DeviceLostReason={undefined:1,unknown:1,destroyed:2};var runtimeKeepalivePop=()=>{runtimeKeepaliveCounter-=1};function _emwgpuAdapterRequestDevice(adapterPtr,futureId,deviceLostFutureId,devicePtr,queuePtr,descriptor){adapterPtr=bigintToI53Checked(adapterPtr);futureId=bigintToI53Checked(futureId);deviceLostFutureId=bigintToI53Checked(deviceLostFutureId);devicePtr=bigintToI53Checked(devicePtr);queuePtr=bigintToI53Checked(queuePtr);descriptor=bigintToI53Checked(descriptor);var adapter=WebGPU.getJsObject(adapterPtr);var desc={};if(descriptor){var requiredFeatureCount=Number((growMemViews(),HEAPU64)[(descriptor+24)/8]);if(requiredFeatureCount){var requiredFeaturesPtr=Number((growMemViews(),HEAPU64)[(descriptor+32)/8]);desc["requiredFeatures"]=Array.from((growMemViews(),HEAPU32).subarray(requiredFeaturesPtr/4,(requiredFeaturesPtr+requiredFeatureCount*4)/4),feature=>WebGPU.FeatureName[feature])}var limitsPtr=Number((growMemViews(),HEAPU64)[(descriptor+40)/8]);if(limitsPtr){var nextInChainPtr=Number((growMemViews(),HEAPU64)[limitsPtr/8]);var requiredLimits={};function setLimitU32IfDefined(name,basePtr,limitOffset,ignoreIfZero=false){var ptr=basePtr+limitOffset;var value=(growMemViews(),HEAPU32)[ptr/4];if(value!=4294967295&&(!ignoreIfZero||value!=0)){requiredLimits[name]=value}}function setLimitU64IfDefined(name,basePtr,limitOffset){var ptr=basePtr+limitOffset;var limitPart1=(growMemViews(),HEAPU32)[ptr/4];var limitPart2=(growMemViews(),HEAPU32)[(ptr+4)/4];if(limitPart1!=4294967295||limitPart2!=4294967295){requiredLimits[name]=readI53FromI64(ptr)}}setLimitU32IfDefined("maxTextureDimension1D",limitsPtr,8);setLimitU32IfDefined("maxTextureDimension2D",limitsPtr,12);setLimitU32IfDefined("maxTextureDimension3D",limitsPtr,16);setLimitU32IfDefined("maxTextureArrayLayers",limitsPtr,20);setLimitU32IfDefined("maxBindGroups",limitsPtr,24);setLimitU32IfDefined("maxBindGroupsPlusVertexBuffers",limitsPtr,28);setLimitU32IfDefined("maxBindingsPerBindGroup",limitsPtr,32);setLimitU32IfDefined("maxDynamicUniformBuffersPerPipelineLayout",limitsPtr,36);setLimitU32IfDefined("maxDynamicStorageBuffersPerPipelineLayout",limitsPtr,40);setLimitU32IfDefined("maxSampledTexturesPerShaderStage",limitsPtr,44);setLimitU32IfDefined("maxSamplersPerShaderStage",limitsPtr,48);setLimitU32IfDefined("maxStorageBuffersPerShaderStage",limitsPtr,52);setLimitU32IfDefined("maxStorageTexturesPerShaderStage",limitsPtr,56);setLimitU32IfDefined("maxUniformBuffersPerShaderStage",limitsPtr,60);setLimitU32IfDefined("minUniformBufferOffsetAlignment",limitsPtr,80);setLimitU32IfDefined("minStorageBufferOffsetAlignment",limitsPtr,84);setLimitU64IfDefined("maxUniformBufferBindingSize",limitsPtr,64);setLimitU64IfDefined("maxStorageBufferBindingSize",limitsPtr,72);setLimitU32IfDefined("maxVertexBuffers",limitsPtr,88);setLimitU64IfDefined("maxBufferSize",limitsPtr,96);setLimitU32IfDefined("maxVertexAttributes",limitsPtr,104);setLimitU32IfDefined("maxVertexBufferArrayStride",limitsPtr,108);setLimitU32IfDefined("maxInterStageShaderVariables",limitsPtr,112);setLimitU32IfDefined("maxColorAttachments",limitsPtr,116);setLimitU32IfDefined("maxColorAttachmentBytesPerSample",limitsPtr,120);setLimitU32IfDefined("maxComputeWorkgroupStorageSize",limitsPtr,124);setLimitU32IfDefined("maxComputeInvocationsPerWorkgroup",limitsPtr,128);setLimitU32IfDefined("maxComputeWorkgroupSizeX",limitsPtr,132);setLimitU32IfDefined("maxComputeWorkgroupSizeY",limitsPtr,136);setLimitU32IfDefined("maxComputeWorkgroupSizeZ",limitsPtr,140);setLimitU32IfDefined("maxComputeWorkgroupsPerDimension",limitsPtr,144);setLimitU32IfDefined("maxImmediateSize",limitsPtr,148,true);if(nextInChainPtr!==0){var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var compatibilityModeLimitsPtr=nextInChainPtr;if("maxStorageBuffersInVertexStage"in GPUSupportedLimits.prototype){setLimitU32IfDefined("maxStorageBuffersInVertexStage",compatibilityModeLimitsPtr,16);setLimitU32IfDefined("maxStorageTexturesInVertexStage",compatibilityModeLimitsPtr,20);setLimitU32IfDefined("maxStorageBuffersInFragmentStage",compatibilityModeLimitsPtr,24);setLimitU32IfDefined("maxStorageTexturesInFragmentStage",compatibilityModeLimitsPtr,28)}}desc["requiredLimits"]=requiredLimits}var defaultQueuePtr=Number((growMemViews(),HEAPU64)[(descriptor+48)/8]);if(defaultQueuePtr){var defaultQueueDesc={label:WebGPU.makeStringFromOptionalStringView(defaultQueuePtr+8)};desc["defaultQueue"]=defaultQueueDesc}desc["label"]=WebGPU.makeStringFromOptionalStringView(descriptor+8)}runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,adapter.requestDevice(desc).then(device=>{runtimeKeepalivePop();callUserCallback(()=>{WebGPU.Internals.jsObjectInsert(queuePtr,device.queue);WebGPU.Internals.jsObjectInsert(devicePtr,device);devicePtr=BigInt(devicePtr);WebGPU.Internals.futureInsert(deviceLostFutureId,device.lost.then(info=>{callUserCallback(()=>{device.onuncapturederror=ev=>{};var sp=stackSave();var messagePtr=stringToUTF8OnStack(info.message);_emwgpuOnDeviceLostCompleted(deviceLostFutureId,emwgpuStringToInt_DeviceLostReason[info.reason],BigInt(messagePtr));stackRestore(sp)})}));device.onuncapturederror=ev=>{var type=5;if(ev.error instanceof GPUValidationError)type=2;else if(ev.error instanceof GPUOutOfMemoryError)type=3;else if(ev.error instanceof GPUInternalError)type=4;var sp=stackSave();var messagePtr=stringToUTF8OnStack(ev.error.message);_emwgpuOnUncapturedError(BigInt(devicePtr),type,BigInt(messagePtr));stackRestore(sp)};_emwgpuOnRequestDeviceCompleted(futureId,1,BigInt(devicePtr),0n)})},ex=>{runtimeKeepalivePop();callUserCallback(()=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(ex.message);_emwgpuOnRequestDeviceCompleted(futureId,3,BigInt(devicePtr),BigInt(messagePtr));if(deviceLostFutureId){_emwgpuOnDeviceLostCompleted(deviceLostFutureId,4,BigInt(messagePtr))}stackRestore(sp)})}))}function _emwgpuBufferDestroy(bufferPtr){bufferPtr=bigintToI53Checked(bufferPtr);var buffer=WebGPU.getJsObject(bufferPtr);var onUnmap=WebGPU.Internals.bufferOnUnmaps[bufferPtr];if(onUnmap){for(var i=0;i<onUnmap.length;++i){onUnmap[i]()}delete WebGPU.Internals.bufferOnUnmaps[bufferPtr]}buffer.destroy()}var warnOnce=text=>{warnOnce.shown||={};if(!warnOnce.shown[text]){warnOnce.shown[text]=1;if(ENVIRONMENT_IS_NODE)text="warning: "+text;err(text)}};var _emwgpuBufferGetConstMappedRange=function(bufferPtr,offset,size){bufferPtr=bigintToI53Checked(bufferPtr);offset=bigintToI53Checked(offset);size=bigintToI53Checked(size);var ret=(()=>{var buffer=WebGPU.getJsObject(bufferPtr);if(size==-1)size=undefined;var mapped;try{mapped=buffer.getMappedRange(offset,size)}catch(ex){return 0n}var data=_memalign(16,mapped.byteLength);(growMemViews(),HEAPU8).set(new Uint8Array(mapped),data);WebGPU.Internals.bufferOnUnmaps[bufferPtr].push(()=>_free(data));return data})();return BigInt(ret)};var _emwgpuBufferMapAsync=function(bufferPtr,futureId,mode,offset,size){bufferPtr=bigintToI53Checked(bufferPtr);futureId=bigintToI53Checked(futureId);mode=bigintToI53Checked(mode);offset=bigintToI53Checked(offset);size=bigintToI53Checked(size);var buffer=WebGPU.getJsObject(bufferPtr);WebGPU.Internals.bufferOnUnmaps[bufferPtr]=[];if(size==-1)size=undefined;runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,buffer.mapAsync(mode,offset,size).then(()=>{runtimeKeepalivePop();callUserCallback(()=>{_emwgpuOnMapAsyncCompleted(futureId,1,0n)})},ex=>{runtimeKeepalivePop();callUserCallback(()=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(ex.message);var status=ex.name==="AbortError"?4:ex.name==="OperationError"?3:0;_emwgpuOnMapAsyncCompleted(futureId,status,BigInt(messagePtr));delete WebGPU.Internals.bufferOnUnmaps[bufferPtr]})}))};function _emwgpuBufferUnmap(bufferPtr){bufferPtr=bigintToI53Checked(bufferPtr);var buffer=WebGPU.getJsObject(bufferPtr);var onUnmap=WebGPU.Internals.bufferOnUnmaps[bufferPtr];if(!onUnmap){return}for(var i=0;i<onUnmap.length;++i){onUnmap[i]()}delete WebGPU.Internals.bufferOnUnmaps[bufferPtr];buffer.unmap()}function _emwgpuDelete(ptr){ptr=bigintToI53Checked(ptr);delete WebGPU.Internals.jsObjects[ptr]}function _emwgpuDeviceCreateBuffer(devicePtr,descriptor,bufferPtr){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);bufferPtr=bigintToI53Checked(bufferPtr);var mappedAtCreation=!!(growMemViews(),HEAPU32)[(descriptor+40)/4];var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),usage:(growMemViews(),HEAPU32)[(descriptor+24)/4],size:readI53FromI64(descriptor+32),mappedAtCreation};var device=WebGPU.getJsObject(devicePtr);var buffer;try{buffer=device.createBuffer(desc)}catch(ex){return false}WebGPU.Internals.jsObjectInsert(bufferPtr,buffer);if(mappedAtCreation){WebGPU.Internals.bufferOnUnmaps[bufferPtr]=[]}return true}function _emwgpuDeviceCreateShaderModule(devicePtr,descriptor,shaderModulePtr){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);shaderModulePtr=bigintToI53Checked(shaderModulePtr);var nextInChainPtr=Number((growMemViews(),HEAPU64)[descriptor/8]);var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),code:""};switch(sType){case 2:{desc["code"]=WebGPU.makeStringFromStringView(nextInChainPtr+16);break}}var device=WebGPU.getJsObject(devicePtr);WebGPU.Internals.jsObjectInsert(shaderModulePtr,device.createShaderModule(desc))}var _emwgpuDeviceDestroy=devicePtr=>{const device=WebGPU.getJsObject(devicePtr);device.onuncapturederror=null;device.destroy()};function _emwgpuInstanceRequestAdapter(instancePtr,futureId,options,adapterPtr){instancePtr=bigintToI53Checked(instancePtr);futureId=bigintToI53Checked(futureId);options=bigintToI53Checked(options);adapterPtr=bigintToI53Checked(adapterPtr);var opts;if(options){opts={featureLevel:WebGPU.FeatureLevel[(growMemViews(),HEAP32)[(options+8)/4]],powerPreference:WebGPU.PowerPreference[(growMemViews(),HEAP32)[(options+12)/4]],forceFallbackAdapter:!!(growMemViews(),HEAPU32)[(options+16)/4]};var nextInChainPtr=Number((growMemViews(),HEAPU64)[options/8]);if(nextInChainPtr!==0){var sType=(growMemViews(),HEAP32)[(nextInChainPtr+8)/4];var webxrOptions=nextInChainPtr;opts.xrCompatible=!!(growMemViews(),HEAPU32)[(webxrOptions+16)/4]}}if(!("gpu"in navigator)){var sp=stackSave();var messagePtr=stringToUTF8OnStack("WebGPU not available on this browser (navigator.gpu is not available)");_emwgpuOnRequestAdapterCompleted(futureId,3,BigInt(adapterPtr),BigInt(messagePtr));stackRestore(sp);return}runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,navigator.gpu.requestAdapter(opts).then(adapter=>{runtimeKeepalivePop();callUserCallback(()=>{if(adapter){WebGPU.Internals.jsObjectInsert(adapterPtr,adapter);_emwgpuOnRequestAdapterCompleted(futureId,1,BigInt(adapterPtr),0n)}else{var sp=stackSave();var messagePtr=stringToUTF8OnStack("WebGPU not available on this browser (requestAdapter returned null)");_emwgpuOnRequestAdapterCompleted(futureId,3,BigInt(adapterPtr),BigInt(messagePtr));stackRestore(sp)}})},ex=>{runtimeKeepalivePop();callUserCallback(()=>{var sp=stackSave();var messagePtr=stringToUTF8OnStack(ex.message);_emwgpuOnRequestAdapterCompleted(futureId,4,BigInt(adapterPtr),BigInt(messagePtr));stackRestore(sp)})}))}var _emwgpuQueueOnSubmittedWorkDone=function(queuePtr,futureId){queuePtr=bigintToI53Checked(queuePtr);futureId=bigintToI53Checked(futureId);var queue=WebGPU.getJsObject(queuePtr);runtimeKeepalivePush();WebGPU.Internals.futureInsert(futureId,queue.onSubmittedWorkDone().then(()=>{runtimeKeepalivePop();callUserCallback(()=>{_emwgpuOnWorkDoneCompleted(futureId,1)})}))};var _emwgpuWaitAny=function(futurePtr,futureCount,timeoutMSPtr){futurePtr=bigintToI53Checked(futurePtr);futureCount=bigintToI53Checked(futureCount);timeoutMSPtr=bigintToI53Checked(timeoutMSPtr);return Asyncify.handleAsync(async()=>{var promises=[];if(timeoutMSPtr){var timeoutMS=(growMemViews(),HEAP32)[timeoutMSPtr/4];promises.length=futureCount+1;promises[futureCount]=new Promise(resolve=>setTimeout(resolve,timeoutMS,0))}else{promises.length=futureCount}for(var i=0;i<futureCount;++i){var futureId=readI53FromI64(futurePtr+i*8);if(!(futureId in WebGPU.Internals.futures)){return futureId}promises[i]=WebGPU.Internals.futures[futureId]}const firstResolvedFuture=await Promise.race(promises);delete WebGPU.Internals.futures[firstResolvedFuture];return firstResolvedFuture})};_emwgpuWaitAny.isAsync=true;var ENV={};var getExecutableName=()=>thisProgram||"./this.program";var getEnvStrings=()=>{if(!getEnvStrings.strings){var lang=(typeof navigator=="object"&&navigator.language||"C").replace("-","_")+".UTF-8";var env={USER:"web_user",LOGNAME:"web_user",PATH:"/",PWD:"/",HOME:"/home/web_user",LANG:lang,_:getExecutableName()};for(var x in ENV){if(ENV[x]===undefined)delete env[x];else env[x]=ENV[x]}var strings=[];for(var x in env){strings.push(`${x}=${env[x]}`)}getEnvStrings.strings=strings}return getEnvStrings.strings};function _environ_get(__environ,environ_buf){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(14,0,1,__environ,environ_buf);__environ=bigintToI53Checked(__environ);environ_buf=bigintToI53Checked(environ_buf);var bufSize=0;var envp=0;for(var string of getEnvStrings()){var ptr=environ_buf+bufSize;(growMemViews(),HEAPU64)[(__environ+envp)/8]=BigInt(ptr);bufSize+=stringToUTF8(string,ptr,Infinity)+1;envp+=8}return 0}function _environ_sizes_get(penviron_count,penviron_buf_size){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(15,0,1,penviron_count,penviron_buf_size);penviron_count=bigintToI53Checked(penviron_count);penviron_buf_size=bigintToI53Checked(penviron_buf_size);var strings=getEnvStrings();(growMemViews(),HEAPU64)[penviron_count/8]=BigInt(strings.length);var bufSize=0;for(var string of strings){bufSize+=lengthBytesUTF8(string)+1}(growMemViews(),HEAPU64)[penviron_buf_size/8]=BigInt(bufSize);return 0}function _fd_close(fd){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(16,0,1,fd);try{var stream=SYSCALLS.getStreamFromFD(fd);FS.close(stream);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doReadv=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=Number((growMemViews(),HEAPU64)[iov/8]);var len=Number((growMemViews(),HEAPU64)[(iov+8)/8]);iov+=16;var curr=FS.read(stream,(growMemViews(),HEAP8),ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len)break;if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_read(fd,iov,iovcnt,pnum){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(17,0,1,fd,iov,iovcnt,pnum);iov=bigintToI53Checked(iov);iovcnt=bigintToI53Checked(iovcnt);pnum=bigintToI53Checked(pnum);try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doReadv(stream,iov,iovcnt);(growMemViews(),HEAPU64)[pnum/8]=BigInt(num);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _fd_seek(fd,offset,whence,newOffset){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(18,0,1,fd,offset,whence,newOffset);offset=bigintToI53Checked(offset);newOffset=bigintToI53Checked(newOffset);try{if(isNaN(offset))return 61;var stream=SYSCALLS.getStreamFromFD(fd);FS.llseek(stream,offset,whence);(growMemViews(),HEAP64)[newOffset/8]=BigInt(stream.position);if(stream.getdents&&offset===0&&whence===0)stream.getdents=null;return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}var doWritev=(stream,iov,iovcnt,offset)=>{var ret=0;for(var i=0;i<iovcnt;i++){var ptr=Number((growMemViews(),HEAPU64)[iov/8]);var len=Number((growMemViews(),HEAPU64)[(iov+8)/8]);iov+=16;var curr=FS.write(stream,(growMemViews(),HEAP8),ptr,len,offset);if(curr<0)return-1;ret+=curr;if(curr<len){break}if(typeof offset!="undefined"){offset+=curr}}return ret};function _fd_write(fd,iov,iovcnt,pnum){if(ENVIRONMENT_IS_PTHREAD)return proxyToMainThread(19,0,1,fd,iov,iovcnt,pnum);iov=bigintToI53Checked(iov);iovcnt=bigintToI53Checked(iovcnt);pnum=bigintToI53Checked(pnum);try{var stream=SYSCALLS.getStreamFromFD(fd);var num=doWritev(stream,iov,iovcnt);(growMemViews(),HEAPU64)[pnum/8]=BigInt(num);return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _random_get(buffer,size){buffer=bigintToI53Checked(buffer);size=bigintToI53Checked(size);try{randomFill((growMemViews(),HEAPU8).subarray(buffer,buffer+size));return 0}catch(e){if(typeof FS=="undefined"||!(e.name==="ErrnoError"))throw e;return e.errno}}function _wgpuAdapterGetInfo(adapterPtr,info){adapterPtr=bigintToI53Checked(adapterPtr);info=bigintToI53Checked(info);var adapter=WebGPU.getJsObject(adapterPtr);WebGPU.fillAdapterInfoStruct(adapter.info,info);return 1}function _wgpuAdapterGetLimits(adapterPtr,limitsOutPtr){adapterPtr=bigintToI53Checked(adapterPtr);limitsOutPtr=bigintToI53Checked(limitsOutPtr);var adapter=WebGPU.getJsObject(adapterPtr);WebGPU.fillLimitStruct(adapter.limits,limitsOutPtr);return 1}function _wgpuAdapterHasFeature(adapterPtr,featureEnumValue){adapterPtr=bigintToI53Checked(adapterPtr);var adapter=WebGPU.getJsObject(adapterPtr);return adapter.features.has(WebGPU.FeatureName[featureEnumValue])}var _wgpuBufferGetSize=function(bufferPtr){bufferPtr=bigintToI53Checked(bufferPtr);var ret=(()=>{var buffer=WebGPU.getJsObject(bufferPtr);return buffer.size})();return BigInt(ret)};var _wgpuCommandEncoderBeginComputePass=function(encoderPtr,descriptor){encoderPtr=bigintToI53Checked(encoderPtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var desc;if(descriptor){desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),timestampWrites:WebGPU.makePassTimestampWrites(Number((growMemViews(),HEAPU64)[(descriptor+24)/8]))}}var commandEncoder=WebGPU.getJsObject(encoderPtr);var ptr=_emwgpuCreateComputePassEncoder(0n);WebGPU.Internals.jsObjectInsert(ptr,commandEncoder.beginComputePass(desc));return ptr})();return BigInt(ret)};function _wgpuCommandEncoderCopyBufferToBuffer(encoderPtr,srcPtr,srcOffset,dstPtr,dstOffset,size){encoderPtr=bigintToI53Checked(encoderPtr);srcPtr=bigintToI53Checked(srcPtr);srcOffset=bigintToI53Checked(srcOffset);dstPtr=bigintToI53Checked(dstPtr);dstOffset=bigintToI53Checked(dstOffset);size=bigintToI53Checked(size);var commandEncoder=WebGPU.getJsObject(encoderPtr);var src=WebGPU.getJsObject(srcPtr);var dst=WebGPU.getJsObject(dstPtr);commandEncoder.copyBufferToBuffer(src,srcOffset,dst,dstOffset,size)}var _wgpuCommandEncoderFinish=function(encoderPtr,descriptor){encoderPtr=bigintToI53Checked(encoderPtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var commandEncoder=WebGPU.getJsObject(encoderPtr);var ptr=_emwgpuCreateCommandBuffer(0n);WebGPU.Internals.jsObjectInsert(ptr,commandEncoder.finish());return ptr})();return BigInt(ret)};function _wgpuComputePassEncoderDispatchWorkgroups(passPtr,x,y,z){passPtr=bigintToI53Checked(passPtr);var pass=WebGPU.getJsObject(passPtr);pass.dispatchWorkgroups(x,y,z)}function _wgpuComputePassEncoderEnd(passPtr){passPtr=bigintToI53Checked(passPtr);var pass=WebGPU.getJsObject(passPtr);pass.end()}function _wgpuComputePassEncoderSetBindGroup(passPtr,groupIndex,groupPtr,dynamicOffsetCount,dynamicOffsetsPtr){passPtr=bigintToI53Checked(passPtr);groupPtr=bigintToI53Checked(groupPtr);dynamicOffsetCount=bigintToI53Checked(dynamicOffsetCount);dynamicOffsetsPtr=bigintToI53Checked(dynamicOffsetsPtr);var pass=WebGPU.getJsObject(passPtr);var group=WebGPU.getJsObject(groupPtr);if(dynamicOffsetCount==0){pass.setBindGroup(groupIndex,group)}else{pass.setBindGroup(groupIndex,group,(growMemViews(),HEAPU32),dynamicOffsetsPtr/4,dynamicOffsetCount)}}function _wgpuComputePassEncoderSetPipeline(passPtr,pipelinePtr){passPtr=bigintToI53Checked(passPtr);pipelinePtr=bigintToI53Checked(pipelinePtr);var pass=WebGPU.getJsObject(passPtr);var pipeline=WebGPU.getJsObject(pipelinePtr);pass.setPipeline(pipeline)}var _wgpuComputePipelineGetBindGroupLayout=function(pipelinePtr,groupIndex){pipelinePtr=bigintToI53Checked(pipelinePtr);var ret=(()=>{var pipeline=WebGPU.getJsObject(pipelinePtr);var ptr=_emwgpuCreateBindGroupLayout(0n);WebGPU.Internals.jsObjectInsert(ptr,pipeline.getBindGroupLayout(groupIndex));return ptr})();return BigInt(ret)};var _wgpuDeviceCreateBindGroup=function(devicePtr,descriptor){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{function makeEntry(entryPtr){var bufferPtr=Number((growMemViews(),HEAPU64)[(entryPtr+16)/8]);var samplerPtr=Number((growMemViews(),HEAPU64)[(entryPtr+40)/8]);var textureViewPtr=Number((growMemViews(),HEAPU64)[(entryPtr+48)/8]);var externalTexturePtr=0;WebGPU.iterateExtensions(entryPtr,{327681:ptr=>{externalTexturePtr=Number((growMemViews(),HEAPU64)[(ptr+16)/8])}});var resource;if(bufferPtr){var size=readI53FromI64(entryPtr+32);if(size==-1)size=undefined;resource={buffer:WebGPU.getJsObject(bufferPtr),offset:readI53FromI64(entryPtr+24),size}}else{resource=WebGPU.getJsObject(samplerPtr||textureViewPtr||externalTexturePtr)}return{binding:(growMemViews(),HEAPU32)[(entryPtr+8)/4],resource}}function makeEntries(count,entriesPtrs){var entries=[];for(var i=0;i<count;++i){entries.push(makeEntry(entriesPtrs+56*i))}return entries}var desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8),layout:WebGPU.getJsObject(Number((growMemViews(),HEAPU64)[(descriptor+24)/8])),entries:makeEntries(Number((growMemViews(),HEAPU64)[(descriptor+32)/8]),Number((growMemViews(),HEAPU64)[(descriptor+40)/8]))};var device=WebGPU.getJsObject(devicePtr);var ptr=_emwgpuCreateBindGroup(0n);WebGPU.Internals.jsObjectInsert(ptr,device.createBindGroup(desc));return ptr})();return BigInt(ret)};var _wgpuDeviceCreateCommandEncoder=function(devicePtr,descriptor){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var desc;if(descriptor){desc={label:WebGPU.makeStringFromOptionalStringView(descriptor+8)}}var device=WebGPU.getJsObject(devicePtr);var ptr=_emwgpuCreateCommandEncoder(0n);WebGPU.Internals.jsObjectInsert(ptr,device.createCommandEncoder(desc));return ptr})();return BigInt(ret)};var _wgpuDeviceCreateComputePipeline=function(devicePtr,descriptor){devicePtr=bigintToI53Checked(devicePtr);descriptor=bigintToI53Checked(descriptor);var ret=(()=>{var desc=WebGPU.makeComputePipelineDesc(descriptor);var device=WebGPU.getJsObject(devicePtr);var ptr=_emwgpuCreateComputePipeline(0n);WebGPU.Internals.jsObjectInsert(ptr,device.createComputePipeline(desc));return ptr})();return BigInt(ret)};function _wgpuInstanceHasWGSLLanguageFeature(instance,featureEnumValue){instance=bigintToI53Checked(instance);if(!("wgslLanguageFeatures"in navigator.gpu)){return false}return navigator.gpu.wgslLanguageFeatures.has(WebGPU.WGSLLanguageFeatureName[featureEnumValue])}var _wgpuQueueSubmit=function(queuePtr,commandCount,commands){queuePtr=bigintToI53Checked(queuePtr);commandCount=bigintToI53Checked(commandCount);commands=bigintToI53Checked(commands);var queue=WebGPU.getJsObject(queuePtr);var cmds=Array.from((growMemViews(),HEAP64).subarray(commands/8,(commands+commandCount*8)/8),id=>WebGPU.getJsObject(id));queue.submit(cmds)};function _wgpuQueueWriteBuffer(queuePtr,bufferPtr,bufferOffset,data,size){queuePtr=bigintToI53Checked(queuePtr);bufferPtr=bigintToI53Checked(bufferPtr);bufferOffset=bigintToI53Checked(bufferOffset);data=bigintToI53Checked(data);size=bigintToI53Checked(size);var queue=WebGPU.getJsObject(queuePtr);var buffer=WebGPU.getJsObject(bufferPtr);var subarray=(growMemViews(),HEAPU8).subarray(data,data+size);queue.writeBuffer(buffer,bufferOffset,subarray,0,size)}var Asyncify={instrumentWasmImports(imports){var importPattern=/^(invoke_.*|__asyncjs__.*)$/;for(let[x,original]of Object.entries(imports)){if(typeof original=="function"){let isAsyncifyImport=original.isAsync||importPattern.test(x);if(isAsyncifyImport){imports[x]=original=new WebAssembly.Suspending(original)}}}},instrumentFunction(original){var wrapper=(...args)=>original(...args);return wrapper},instrumentWasmExports(exports){var exportPattern=/^(wllama_start|wllama_action|main|__main_argc_argv)$/;Asyncify.asyncExports=new Set;var ret={};for(let[x,original]of Object.entries(exports)){if(typeof original=="function"){let isAsyncifyExport=exportPattern.test(x);if(isAsyncifyExport){Asyncify.asyncExports.add(original);original=Asyncify.makeAsyncFunction(original)}var wrapper=Asyncify.instrumentFunction(original);ret[x]=wrapper}else{ret[x]=original}}return ret},asyncExports:null,isAsyncExport(func){return Asyncify.asyncExports?.has(func)},handleAsync:async startAsync=>{runtimeKeepalivePush();try{return await startAsync()}finally{runtimeKeepalivePop()}},handleSleep:startAsync=>Asyncify.handleAsync(()=>new Promise(startAsync)),makeAsyncFunction(original){return WebAssembly.promising(original)}};var getCFunc=ident=>{var func=Module["_"+ident];return func};var writeArrayToMemory=(array,buffer)=>{(growMemViews(),HEAP8).set(array,buffer)};var ccall=(ident,returnType,argTypes,args,opts)=>{var toC={pointer:p=>BigInt(p),string:str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){ret=stringToUTF8OnStack(str)}return BigInt(ret)},array:arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return BigInt(ret)}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(Number(ret))}if(returnType==="pointer")return Number(ret);if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func(...cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}var asyncMode=opts?.async;if(asyncMode)return ret.then(onDone);ret=onDone(ret);return ret};var cwrap=(ident,returnType,argTypes,opts)=>{var numericArgs=!argTypes||argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return(...args)=>ccall(ident,returnType,argTypes,args,opts)};var FS_createPath=(...args)=>FS.createPath(...args);var FS_unlink=(...args)=>FS.unlink(...args);var FS_createLazyFile=(...args)=>FS.createLazyFile(...args);var FS_createDevice=(...args)=>FS.createDevice(...args);PThread.init();FS.createPreloadedFile=FS_createPreloadedFile;FS.preloadFile=FS_preloadFile;FS.staticInit();{initMemory();if(Module["noExitRuntime"])noExitRuntime=Module["noExitRuntime"];if(Module["preloadPlugins"])preloadPlugins=Module["preloadPlugins"];if(Module["print"])out=Module["print"];if(Module["printErr"])err=Module["printErr"];if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].shift()()}}}Module["ENV"]=ENV;Module["mmapAlloc"]=mmapAlloc;Module["wasmMemory"]=wasmMemory;Module["addRunDependency"]=addRunDependency;Module["removeRunDependency"]=removeRunDependency;Module["ccall"]=ccall;Module["cwrap"]=cwrap;Module["FS_preloadFile"]=FS_preloadFile;Module["FS_unlink"]=FS_unlink;Module["FS_createPath"]=FS_createPath;Module["FS_createDevice"]=FS_createDevice;Module["FS"]=FS;Module["FS_createDataFile"]=FS_createDataFile;Module["FS_createLazyFile"]=FS_createLazyFile;Module["MEMFS"]=MEMFS;var proxiedFunctionTable=[_proc_exit,exitOnMainThread,pthreadCreateProxied,___syscall_fcntl64,___syscall_fstat64,___syscall_getcwd,___syscall_getdents64,___syscall_ioctl,___syscall_lstat64,___syscall_newfstatat,___syscall_openat,___syscall_stat64,__mmap_js,__munmap_js,_environ_get,_environ_sizes_get,_fd_close,_fd_read,_fd_seek,_fd_write];function __asyncjs__js_file_read(path_ptr,offset,req_size,out_ptr){return Asyncify.handleAsync(async()=>await _wllama_js_file_read(UTF8ToString(Number(path_ptr)),Number(offset),Number(req_size),Number(out_ptr)))}__asyncjs__js_file_read.sig="jjjjj";var _wllama_malloc,_wllama_start,_wllama_action,_wllama_exit,_wllama_debug,_main,_malloc,_free,_emwgpuCreateBindGroup,_emwgpuCreateBindGroupLayout,_emwgpuCreateCommandBuffer,_emwgpuCreateCommandEncoder,_emwgpuCreateComputePassEncoder,_emwgpuCreateComputePipeline,_emwgpuCreateExternalTexture,_emwgpuCreatePipelineLayout,_emwgpuCreateQuerySet,_emwgpuCreateRenderBundle,_emwgpuCreateRenderBundleEncoder,_emwgpuCreateRenderPassEncoder,_emwgpuCreateRenderPipeline,_emwgpuCreateSampler,_emwgpuCreateSurface,_emwgpuCreateTexture,_emwgpuCreateTextureView,_emwgpuCreateAdapter,_emwgpuCreateBuffer,_emwgpuCreateDevice,_emwgpuCreateQueue,_emwgpuCreateShaderModule,_emwgpuOnDeviceLostCompleted,_emwgpuOnMapAsyncCompleted,_emwgpuOnRequestAdapterCompleted,_emwgpuOnRequestDeviceCompleted,_emwgpuOnWorkDoneCompleted,_emwgpuOnUncapturedError,__emscripten_tls_init,_pthread_self,_emscripten_builtin_memalign,__emscripten_thread_init,__emscripten_thread_crashed,__emscripten_run_js_on_main_thread,__emscripten_thread_free_data,__emscripten_thread_exit,__emscripten_check_mailbox,_memalign,___trap,_emscripten_stack_set_limits,__emscripten_stack_restore,__emscripten_stack_alloc,_emscripten_stack_get_current,__indirect_function_table,wasmTable;function assignWasmExports(wasmExports){_wllama_malloc=Module["_wllama_malloc"]=wasmExports["wllama_malloc"];_wllama_start=Module["_wllama_start"]=wasmExports["wllama_start"];_wllama_action=Module["_wllama_action"]=wasmExports["wllama_action"];_wllama_exit=Module["_wllama_exit"]=wasmExports["wllama_exit"];_wllama_debug=Module["_wllama_debug"]=wasmExports["wllama_debug"];_main=Module["_main"]=wasmExports["main"];_malloc=wasmExports["malloc"];_free=wasmExports["free"];_emwgpuCreateBindGroup=wasmExports["emwgpuCreateBindGroup"];_emwgpuCreateBindGroupLayout=wasmExports["emwgpuCreateBindGroupLayout"];_emwgpuCreateCommandBuffer=wasmExports["emwgpuCreateCommandBuffer"];_emwgpuCreateCommandEncoder=wasmExports["emwgpuCreateCommandEncoder"];_emwgpuCreateComputePassEncoder=wasmExports["emwgpuCreateComputePassEncoder"];_emwgpuCreateComputePipeline=wasmExports["emwgpuCreateComputePipeline"];_emwgpuCreateExternalTexture=wasmExports["emwgpuCreateExternalTexture"];_emwgpuCreatePipelineLayout=wasmExports["emwgpuCreatePipelineLayout"];_emwgpuCreateQuerySet=wasmExports["emwgpuCreateQuerySet"];_emwgpuCreateRenderBundle=wasmExports["emwgpuCreateRenderBundle"];_emwgpuCreateRenderBundleEncoder=wasmExports["emwgpuCreateRenderBundleEncoder"];_emwgpuCreateRenderPassEncoder=wasmExports["emwgpuCreateRenderPassEncoder"];_emwgpuCreateRenderPipeline=wasmExports["emwgpuCreateRenderPipeline"];_emwgpuCreateSampler=wasmExports["emwgpuCreateSampler"];_emwgpuCreateSurface=wasmExports["emwgpuCreateSurface"];_emwgpuCreateTexture=wasmExports["emwgpuCreateTexture"];_emwgpuCreateTextureView=wasmExports["emwgpuCreateTextureView"];_emwgpuCreateAdapter=wasmExports["emwgpuCreateAdapter"];_emwgpuCreateBuffer=wasmExports["emwgpuCreateBuffer"];_emwgpuCreateDevice=wasmExports["emwgpuCreateDevice"];_emwgpuCreateQueue=wasmExports["emwgpuCreateQueue"];_emwgpuCreateShaderModule=wasmExports["emwgpuCreateShaderModule"];_emwgpuOnDeviceLostCompleted=wasmExports["emwgpuOnDeviceLostCompleted"];_emwgpuOnMapAsyncCompleted=wasmExports["emwgpuOnMapAsyncCompleted"];_emwgpuOnRequestAdapterCompleted=wasmExports["emwgpuOnRequestAdapterCompleted"];_emwgpuOnRequestDeviceCompleted=wasmExports["emwgpuOnRequestDeviceCompleted"];_emwgpuOnWorkDoneCompleted=wasmExports["emwgpuOnWorkDoneCompleted"];_emwgpuOnUncapturedError=wasmExports["emwgpuOnUncapturedError"];__emscripten_tls_init=wasmExports["_emscripten_tls_init"];_pthread_self=wasmExports["pthread_self"];_emscripten_builtin_memalign=wasmExports["emscripten_builtin_memalign"];__emscripten_thread_init=wasmExports["_emscripten_thread_init"];__emscripten_thread_crashed=wasmExports["_emscripten_thread_crashed"];__emscripten_run_js_on_main_thread=wasmExports["_emscripten_run_js_on_main_thread"];__emscripten_thread_free_data=wasmExports["_emscripten_thread_free_data"];__emscripten_thread_exit=wasmExports["_emscripten_thread_exit"];__emscripten_check_mailbox=wasmExports["_emscripten_check_mailbox"];_memalign=wasmExports["memalign"];___trap=wasmExports["__trap"];_emscripten_stack_set_limits=wasmExports["emscripten_stack_set_limits"];__emscripten_stack_restore=wasmExports["_emscripten_stack_restore"];__emscripten_stack_alloc=wasmExports["_emscripten_stack_alloc"];_emscripten_stack_get_current=wasmExports["emscripten_stack_get_current"];__indirect_function_table=wasmTable=wasmExports["__indirect_function_table"]}var wasmImports;function assignWasmImports(){wasmImports={__asyncjs__js_file_read,__pthread_create_js:___pthread_create_js,__syscall_fcntl64:___syscall_fcntl64,__syscall_getcwd:___syscall_getcwd,__syscall_getdents64:___syscall_getdents64,__syscall_ioctl:___syscall_ioctl,__syscall_openat:___syscall_openat,__syscall_stat64:___syscall_stat64,_abort_js:__abort_js,_emscripten_init_main_thread_js:__emscripten_init_main_thread_js,_emscripten_notify_mailbox_postmessage:__emscripten_notify_mailbox_postmessage,_emscripten_receive_on_main_thread_js:__emscripten_receive_on_main_thread_js,_emscripten_thread_cleanup:__emscripten_thread_cleanup,_emscripten_thread_mailbox_await:__emscripten_thread_mailbox_await,_emscripten_thread_set_strongref:__emscripten_thread_set_strongref,_localtime_js:__localtime_js,_mmap_js:__mmap_js,_munmap_js:__munmap_js,_tzset_js:__tzset_js,clock_time_get:_clock_time_get,emscripten_check_blocking_allowed:_emscripten_check_blocking_allowed,emscripten_date_now:_emscripten_date_now,emscripten_exit_with_live_runtime:_emscripten_exit_with_live_runtime,emscripten_get_callstack:_emscripten_get_callstack,emscripten_get_heap_max:_emscripten_get_heap_max,emscripten_get_now:_emscripten_get_now,emscripten_has_asyncify:_emscripten_has_asyncify,emscripten_num_logical_cores:_emscripten_num_logical_cores,emscripten_resize_heap:_emscripten_resize_heap,emwgpuAdapterRequestDevice:_emwgpuAdapterRequestDevice,emwgpuBufferDestroy:_emwgpuBufferDestroy,emwgpuBufferGetConstMappedRange:_emwgpuBufferGetConstMappedRange,emwgpuBufferMapAsync:_emwgpuBufferMapAsync,emwgpuBufferUnmap:_emwgpuBufferUnmap,emwgpuDelete:_emwgpuDelete,emwgpuDeviceCreateBuffer:_emwgpuDeviceCreateBuffer,emwgpuDeviceCreateShaderModule:_emwgpuDeviceCreateShaderModule,emwgpuDeviceDestroy:_emwgpuDeviceDestroy,emwgpuInstanceRequestAdapter:_emwgpuInstanceRequestAdapter,emwgpuQueueOnSubmittedWorkDone:_emwgpuQueueOnSubmittedWorkDone,emwgpuWaitAny:_emwgpuWaitAny,environ_get:_environ_get,environ_sizes_get:_environ_sizes_get,exit:_exit,fd_close:_fd_close,fd_read:_fd_read,fd_seek:_fd_seek,fd_write:_fd_write,memory:wasmMemory,random_get:_random_get,wgpuAdapterGetInfo:_wgpuAdapterGetInfo,wgpuAdapterGetLimits:_wgpuAdapterGetLimits,wgpuAdapterHasFeature:_wgpuAdapterHasFeature,wgpuBufferGetSize:_wgpuBufferGetSize,wgpuCommandEncoderBeginComputePass:_wgpuCommandEncoderBeginComputePass,wgpuCommandEncoderCopyBufferToBuffer:_wgpuCommandEncoderCopyBufferToBuffer,wgpuCommandEncoderFinish:_wgpuCommandEncoderFinish,wgpuComputePassEncoderDispatchWorkgroups:_wgpuComputePassEncoderDispatchWorkgroups,wgpuComputePassEncoderEnd:_wgpuComputePassEncoderEnd,wgpuComputePassEncoderSetBindGroup:_wgpuComputePassEncoderSetBindGroup,wgpuComputePassEncoderSetPipeline:_wgpuComputePassEncoderSetPipeline,wgpuComputePipelineGetBindGroupLayout:_wgpuComputePipelineGetBindGroupLayout,wgpuDeviceCreateBindGroup:_wgpuDeviceCreateBindGroup,wgpuDeviceCreateCommandEncoder:_wgpuDeviceCreateCommandEncoder,wgpuDeviceCreateComputePipeline:_wgpuDeviceCreateComputePipeline,wgpuInstanceHasWGSLLanguageFeature:_wgpuInstanceHasWGSLLanguageFeature,wgpuQueueSubmit:_wgpuQueueSubmit,wgpuQueueWriteBuffer:_wgpuQueueWriteBuffer}}function applySignatureConversions(wasmExports){wasmExports=Object.assign({},wasmExports);var makeWrapper___PP=f=>(a0,a1,a2)=>f(a0,BigInt(a1?a1:0),BigInt(a2?a2:0));var makeWrapper_pp=f=>a0=>Number(f(BigInt(a0)));var makeWrapper__p=f=>a0=>f(BigInt(a0));var makeWrapper_p=f=>()=>Number(f());var makeWrapper_ppp=f=>(a0,a1)=>Number(f(BigInt(a0),BigInt(a1)));var makeWrapper__p_____=f=>(a0,a1,a2,a3,a4,a5)=>f(BigInt(a0),a1,a2,a3,a4,a5);var makeWrapper___p_p_=f=>(a0,a1,a2,a3,a4)=>f(a0,BigInt(a1),a2,BigInt(a3),a4);var makeWrapper__pp=f=>(a0,a1)=>f(BigInt(a0),BigInt(a1));wasmExports["main"]=makeWrapper___PP(wasmExports["main"]);wasmExports["malloc"]=makeWrapper_pp(wasmExports["malloc"]);wasmExports["free"]=makeWrapper__p(wasmExports["free"]);wasmExports["pthread_self"]=makeWrapper_p(wasmExports["pthread_self"]);wasmExports["emscripten_builtin_memalign"]=makeWrapper_ppp(wasmExports["emscripten_builtin_memalign"]);wasmExports["_emscripten_thread_init"]=makeWrapper__p_____(wasmExports["_emscripten_thread_init"]);wasmExports["_emscripten_run_js_on_main_thread"]=makeWrapper___p_p_(wasmExports["_emscripten_run_js_on_main_thread"]);wasmExports["_emscripten_thread_free_data"]=makeWrapper__p(wasmExports["_emscripten_thread_free_data"]);wasmExports["_emscripten_thread_exit"]=makeWrapper__p(wasmExports["_emscripten_thread_exit"]);wasmExports["memalign"]=makeWrapper_ppp(wasmExports["memalign"]);wasmExports["emscripten_stack_set_limits"]=makeWrapper__pp(wasmExports["emscripten_stack_set_limits"]);wasmExports["_emscripten_stack_restore"]=makeWrapper__p(wasmExports["_emscripten_stack_restore"]);wasmExports["_emscripten_stack_alloc"]=makeWrapper_pp(wasmExports["_emscripten_stack_alloc"]);wasmExports["emscripten_stack_get_current"]=makeWrapper_p(wasmExports["emscripten_stack_get_current"]);return wasmExports}async function callMain(){var entryFunction=_main;var argc=0;var argv=0;try{var ret=entryFunction(argc,BigInt(argv));ret=await ret;exitJS(ret,true);return ret}catch(e){return handleException(e)}}function run(){if(runDependencies>0){dependenciesFulfilled=run;return}if(ENVIRONMENT_IS_PTHREAD){initRuntime();return}preRun();if(runDependencies>0){dependenciesFulfilled=run;return}async function doRun(){Module["calledRun"]=true;if(ABORT)return;initRuntime();preMain();Module["onRuntimeInitialized"]?.();var noInitialRun=Module["noInitialRun"]||false;if(!noInitialRun)await callMain();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(()=>{setTimeout(()=>Module["setStatus"](""),1);doRun()},1)}else{doRun()}}var wasmExports;if(!ENVIRONMENT_IS_PTHREAD){createWasm();run()}\n';

// src/worker.ts
var FILE_READ_REQ_EVENT = "fs.read_req";
var JSPI_STUB = `
if (!WebAssembly.Suspending) {
  // JSPI not available - stubs that keep the import/export tables valid.
  // Suspending wraps imports: identity is fine since async imports won't be called.
  WebAssembly.Suspending = function (fn) {
    // console.log(fn.toString());
    return fn;
  };
  // promising wraps exports: must return a Promise so ccall's ret.then() works.
  WebAssembly.promising = function (fn) {
    return function (...args) {
      try {
        return Promise.resolve(fn(...args));
      } catch (e) {
        return Promise.reject(e);
      }
    };
  };
}
`;
var ProxyToWorker = class {
  // filename -> Blob for async reads
  constructor(resources, nbThread, suppressNativeLog, logger) {
    __publicField(this, "resources");
    __publicField(this, "logger");
    __publicField(this, "suppressNativeLog");
    __publicField(this, "taskQueue", []);
    __publicField(this, "taskId", 1);
    __publicField(this, "resultQueue", []);
    __publicField(this, "busy", false);
    // is the work loop is running?
    __publicField(this, "worker");
    __publicField(this, "multiThread");
    __publicField(this, "nbThread");
    __publicField(this, "useAsyncFile");
    __publicField(this, "fileBlobs", /* @__PURE__ */ new Map());
    this.resources = resources;
    this.nbThread = nbThread;
    this.multiThread = nbThread > 0;
    this.logger = logger;
    this.suppressNativeLog = suppressNativeLog;
    this.useAsyncFile = canUseAsyncFileRead(resources.compat);
  }
  getModuleCode() {
    return __async(this, null, function* () {
      if (!this.resources.jsPath) {
        if (this.resources.compat) {
          throw new Error(
            "compat mode is enabled but no jsPath was provided. Pass a worker JS via setCompat() or install @wllama/wllama-compat."
          );
        }
        return WLLAMA_EMSCRIPTEN_CODE;
      } else if (this.resources.jsPath.code) {
        return this.resources.jsPath.code;
      } else if (isString(this.resources.jsPath)) {
        const response = yield fetch(this.resources.jsPath);
        if (!response.ok) {
          throw new Error(
            `Failed to fetch worker code from ${this.resources.jsPath}`
          );
        }
        return yield response.text();
      } else {
        throw new Error("No JS code provided for worker");
      }
    });
  }
  moduleInit(ggufFiles) {
    return __async(this, null, function* () {
      let moduleCode = JSPI_STUB + (yield this.getModuleCode());
      if (this.resources.noWebGPU) {
        moduleCode = 'try{Object.defineProperty(WorkerNavigator.prototype,"gpu",{get:()=>({requestAdapter:async()=>null})});}catch(e){}' + moduleCode;
      }
      let mainModuleCode = moduleCode.replace("var Module", "var ___Module");
      const runOptions = {
        pathConfig: {
          "wllama.wasm": this.resources.wasmPath
        },
        nbThread: this.nbThread,
        compat: this.resources.compat
      };
      const completeCode = [
        `const RUN_OPTIONS = ${JSON.stringify(runOptions)};`,
        `function wModuleInit() { ${mainModuleCode}; return Module; }`,
        LLAMA_CPP_WORKER_CODE
      ].join(";\n\n");
      this.worker = createWorker(completeCode);
      this.worker.onmessage = this.onRecvMsg.bind(this);
      this.worker.onerror = this.logger.error;
      const res = yield this.pushTask({
        verb: "module.init",
        args: [
          new Blob([moduleCode], { type: "text/javascript" }),
          this.useAsyncFile
        ],
        callbackId: this.taskId++
      });
      const nativeFiles = [];
      for (const file of ggufFiles) {
        const needAllocBuffer = !this.useAsyncFile;
        const id = yield this.fileAlloc(
          file.name,
          file.blob.size,
          needAllocBuffer
        );
        nativeFiles.push(__spreadValues({ id }, file));
        if (this.useAsyncFile) {
          this.fileBlobs.set(file.name, file.blob);
        }
      }
      if (!this.useAsyncFile) {
        yield Promise.all(
          nativeFiles.map((file) => {
            return this.fileWrite(file.id, file.blob);
          })
        );
      }
      return res;
    });
  }
  wllamaStart() {
    return __async(this, null, function* () {
      const result = yield this.pushTask({
        verb: "wllama.start",
        args: [],
        callbackId: this.taskId++
      });
      const parsedResult = this.parseResult(result);
      return parsedResult;
    });
  }
  wllamaAction(name, body) {
    return __async(this, null, function* () {
      const encodedMsg = glueSerialize(body);
      const result = yield this.pushTask({
        verb: "wllama.action",
        args: [name, encodedMsg],
        callbackId: this.taskId++
      });
      const parsedResult = glueDeserialize(result);
      return parsedResult;
    });
  }
  wllamaExit() {
    return __async(this, null, function* () {
      if (this.worker) {
        this.worker.terminate();
      }
    });
  }
  wllamaDebug() {
    return __async(this, null, function* () {
      const result = yield this.pushTask({
        verb: "wllama.debug",
        args: [],
        callbackId: this.taskId++
      });
      return JSON.parse(result);
    });
  }
  ///////////////////////////////////////
  /**
   * Allocate a new file in heapfs
   * @returns fileId, to be used by fileWrite()
   */
  fileAlloc(fileName, size, allocBuffer) {
    return __async(this, null, function* () {
      const result = yield this.pushTask({
        verb: "fs.alloc",
        args: [fileName, size, allocBuffer],
        callbackId: this.taskId++
      });
      return result.fileId;
    });
  }
  /**
   * Write a Blob to heapfs
   */
  fileWrite(fileId, blob) {
    return __async(this, null, function* () {
      const reader = blob.stream().getReader();
      let offset = 0;
      while (true) {
        const { done, value } = yield reader.read();
        if (done) break;
        const size = value.byteLength;
        yield this.pushTask(
          {
            verb: "fs.write",
            args: [fileId, value, offset],
            callbackId: this.taskId++
          },
          // @ts-ignore Type 'ArrayBufferLike' is not assignable to type 'ArrayBuffer'
          [value.buffer]
        );
        offset += size;
      }
    });
  }
  fileReadResponse(name, offset, size) {
    return __async(this, null, function* () {
      var _a;
      try {
        const blob = this.fileBlobs.get(name);
        if (!blob) {
          throw new Error(`blob not found for name="${name}"`);
        }
        const chunk = blob.slice(offset, offset + size);
        const buffer = yield chunk.arrayBuffer();
        this.worker.postMessage(
          { verb: "fs.read_res", args: [buffer] },
          { transfer: [buffer] }
        );
      } catch (err) {
        this.logger.error("fileReadResponse failed, terminating worker:", err);
        (_a = this.worker) == null ? void 0 : _a.terminate();
        this.worker = void 0;
        this.abort(`File read failed: ${err}`, err.stack || "");
      }
    });
  }
  /**
   * Parse JSON result returned by cpp code.
   * Throw new Error if "__exception" is present in the response
   *
   * TODO: get rid of this function once everything is migrated to Glue
   */
  parseResult(result) {
    const parsedResult = JSON.parse(result);
    if (parsedResult && parsedResult["error"]) {
      throw new WllamaRuntimeError("Unknown error, please see console.log", "");
    }
    return parsedResult;
  }
  /**
   * Push a new task to taskQueue
   */
  pushTask(param, buffers) {
    return new Promise((resolve, reject) => {
      this.taskQueue.push({ resolve, reject, param, buffers });
      this.runTaskLoop();
    });
  }
  /**
   * Main loop for processing tasks
   */
  runTaskLoop() {
    return __async(this, null, function* () {
      var _a;
      if (this.busy) {
        return;
      }
      this.busy = true;
      while (true) {
        const task = this.taskQueue.shift();
        if (!task) break;
        this.resultQueue.push(task);
        this.worker.postMessage(
          task.param,
          isSafariMobile() ? void 0 : {
            transfer: (_a = task.buffers) != null ? _a : []
          }
        );
      }
      this.busy = false;
    });
  }
  /**
   * Handle messages from worker
   */
  onRecvMsg(e) {
    if (!e.data) return;
    const { verb, args } = e.data;
    const isCompatBuild = this.resources.compat;
    if (verb && verb.startsWith("console.")) {
      if (this.suppressNativeLog) {
        return;
      }
      if (verb.endsWith("debug")) this.logger.debug(...args);
      if (verb.endsWith("log")) this.logger.log(...args);
      if (verb.endsWith("warn")) this.logger.warn(...args);
      if (verb.endsWith("error")) this.logger.error(...args);
      return;
    } else if (verb === "signal.abort") {
      const [signalType, message, rawStack, originalErr] = args;
      if (originalErr) {
        this.logger.error(originalErr);
      }
      (() => __async(this, null, function* () {
        let stack = "";
        let newMsg = message.replace(
          "Build with -sASSERTIONS for more info.",
          ""
        );
        if (signalType === "abort") {
          newMsg = `(ABORT) ${newMsg}`;
          stack = rawStack.replace(/\|/g, "\n");
        } else if (signalType === "exception") {
          stack = rawStack;
        }
        const decoded = yield Debug.decodeStackTrace(stack, isCompatBuild);
        this.logger.error(`Stack trace (${signalType}):
` + decoded);
        this.abort(newMsg, decoded);
      }))();
      return;
    }
    if (verb === FILE_READ_REQ_EVENT) {
      const [name, offset, size] = args;
      this.fileReadResponse(name, offset, size).catch(() => {
      });
      return;
    }
    const { callbackId, result, err } = e.data;
    if (callbackId) {
      const idx = this.resultQueue.findIndex(
        (t) => t.param.callbackId === callbackId
      );
      if (idx !== -1) {
        const waitingTask = this.resultQueue.splice(idx, 1)[0];
        if (err) waitingTask.reject(err);
        else waitingTask.resolve(result);
      } else {
        this.logger.error(
          `Cannot find waiting task with callbackId = ${callbackId}`
        );
      }
    }
  }
  abort(text, stack) {
    const error = new WllamaRuntimeError(
      text.length == 0 ? "(unknown error)" : text,
      stack
    );
    while (this.resultQueue.length > 0) {
      const waitingTask = this.resultQueue.pop();
      if (!waitingTask) break;
      waitingTask.reject(error);
    }
    while (this.taskQueue.length > 0) {
      const pendingTask = this.taskQueue.pop();
      if (!pendingTask) break;
      pendingTask.reject(error);
    }
  }
};

// src/huggingface.ts
var HF_BASE = "https://huggingface.co";
var DEFAULT_QUANTS = ["Q4_K_M", "Q8_0"];
function fetchRepoFiles(repo, token) {
  return __async(this, null, function* () {
    var _a;
    const url = `${HF_BASE}/api/models/${repo}/tree/main?recursive=true`;
    const headers = { Accept: "application/json" };
    if (token) {
      headers["Authorization"] = `Bearer ${token}`;
    }
    const res = yield fetch(url, { headers });
    if (!res.ok) {
      let msg = res.statusText;
      try {
        msg = (_a = (yield res.json()).error) != null ? _a : msg;
      } catch (e) {
      }
      throw new Error(`HF API error (${res.status}): ${msg}`);
    }
    return res.json();
  });
}
function firstShardPath(files, path) {
  const m = path.match(/^(.+)-(\d{5})-of-(\d{5})\.gguf$/i);
  if (!m) return path;
  const first = `${m[1]}-00001-of-${m[3]}.gguf`;
  return files.some((f) => f.path === first) ? first : path;
}
function selectFile(files, quant, mmprojOnly) {
  const candidates = files.filter((f) => {
    if (f.type !== "file" || !f.path.toLowerCase().endsWith(".gguf"))
      return false;
    const ismmproj = f.path.toLowerCase().includes("mmproj");
    return mmprojOnly ? ismmproj : !ismmproj;
  });
  if (candidates.length === 0) return null;
  if (quant) {
    const upper = quant.toUpperCase();
    const match = candidates.find((f) => f.path.toUpperCase().includes(upper));
    if (match) return firstShardPath(candidates, match.path);
    return null;
  }
  for (const q of DEFAULT_QUANTS) {
    const match = candidates.find((f) => f.path.toUpperCase().includes(q));
    if (match) return firstShardPath(candidates, match.path);
  }
  return firstShardPath(candidates, candidates[0].path);
}
function getHFModelSource(config) {
  return __async(this, null, function* () {
    const { repo, file, quant, mmprojFile, mmprojQuant, hfToken } = config;
    const files = yield fetchRepoFiles(repo, hfToken);
    const modelPath = file != null ? file : selectFile(files, quant, false);
    if (!modelPath) {
      throw new Error(`No GGUF file found in repo "${repo}"`);
    }
    const source = {
      url: `${HF_BASE}/${repo}/resolve/main/${modelPath}`
    };
    if (mmprojFile || mmprojQuant !== void 0) {
      const mmpath = mmprojFile != null ? mmprojFile : selectFile(files, mmprojQuant, true);
      if (mmpath) {
        source.mmprojUrl = `${HF_BASE}/${repo}/resolve/main/${mmpath}`;
      }
    }
    if (hfToken) {
      const params = new URLSearchParams({ token: hfToken });
      source.url += `?${params}`;
      if (source.mmprojUrl) {
        source.mmprojUrl += `?${params}`;
      }
    }
    return source;
  });
}
function getHFFileSHA256(url, headers) {
  return __async(this, null, function* () {
    if (!url.includes("/resolve/")) return void 0;
    const rawUrl = url.replace("/resolve/", "/raw/");
    try {
      const text = yield fetch(rawUrl, { headers }).then((r) => r.text());
      const match = text.match(/^oid sha256:([0-9a-f]{64})$/m);
      return match ? match[1] : void 0;
    } catch (e) {
      return void 0;
    }
  });
}

// src/storage/opfs.ts
var OPFSBackend = class {
  isSupported() {
    var _a;
    return typeof navigator !== "undefined" && "storage" in navigator && !!((_a = navigator.storage) == null ? void 0 : _a.getDirectory);
  }
  read(key) {
    return __async(this, null, function* () {
      try {
        const cacheDir = yield getCacheDir();
        const fileHandle = yield cacheDir.getFileHandle(key);
        return yield fileHandle.getFile();
      } catch (e) {
        return null;
      }
    });
  }
  write(key, stream) {
    return __async(this, null, function* () {
      const writable = yield openWritable(key);
      yield writable.truncate(0);
      const reader = stream.getReader();
      try {
        while (true) {
          const { done, value } = yield reader.read();
          if (done) break;
          yield writable.write(value);
        }
      } finally {
        yield writable.close();
      }
    });
  }
  getSize(key) {
    return __async(this, null, function* () {
      try {
        const cacheDir = yield getCacheDir();
        const fileHandle = yield cacheDir.getFileHandle(key);
        const file = yield fileHandle.getFile();
        return file.size;
      } catch (e) {
        return -1;
      }
    });
  }
  list() {
    return __async(this, null, function* () {
      const cacheDir = yield getCacheDir();
      const result = [];
      try {
        for (var iter = __forAwait(cacheDir.entries()), more, temp, error; more = !(temp = yield iter.next()).done; more = false) {
          const [name, handle] = temp.value;
          if (handle.kind === "file") {
            const file = yield handle.getFile();
            result.push({ key: name, size: file.size });
          }
        }
      } catch (temp) {
        error = [temp];
      } finally {
        try {
          more && (temp = iter.return) && (yield temp.call(iter));
        } finally {
          if (error)
            throw error[0];
        }
      }
      return result;
    });
  }
  delete(key) {
    return __async(this, null, function* () {
      try {
        const cacheDir = yield getCacheDir();
        yield cacheDir.removeEntry(key);
      } catch (e) {
        if ((e == null ? void 0 : e.name) !== "NotFoundError") throw e;
      }
    });
  }
};
function getCacheDir() {
  return __async(this, null, function* () {
    const opfsRoot = yield navigator.storage.getDirectory();
    return opfsRoot.getDirectoryHandle("cache", { create: true });
  });
}
function openWritable(fileName) {
  return __async(this, null, function* () {
    const worker = createWorker(OPFS_UTILS_WORKER_CODE);
    let pResolve;
    let pReject;
    worker.onmessage = (e) => {
      if (e.data.ok) pResolve(null);
      else if (e.data.err) pReject(e.data.err);
    };
    worker.onerror = (e) => {
      var _a;
      return pReject == null ? void 0 : pReject((_a = e.message) != null ? _a : e);
    };
    const workerExec = (data) => new Promise((resolve, reject) => {
      pResolve = resolve;
      pReject = reject;
      worker.postMessage(
        data,
        isSafariMobile() ? void 0 : { transfer: "buf" in data && data.buf ? [data.buf.buffer] : [] }
      );
    });
    yield workerExec({ action: "open", filename: fileName });
    return {
      truncate: () => __async(this, null, function* () {
      }),
      write: (value) => workerExec({ action: "write", buf: value }),
      close: () => __async(this, null, function* () {
        yield workerExec({ action: "close" });
        worker.terminate();
      })
    };
  });
}

// src/storage/cos.ts
function makeHash(key) {
  return { algorithm: "SHA-256", value: key };
}
var COSInternalBackend = class {
  isSupported() {
    var _a;
    return typeof navigator !== "undefined" && typeof ((_a = navigator.crossOriginStorage) == null ? void 0 : _a.getFileHandle) === "function";
  }
  // IMPORTANT: key must be SHA-256 hash of the data
  read(key) {
    return __async(this, null, function* () {
      try {
        const handle = yield navigator.crossOriginStorage.getFileHandle(
          makeHash(key)
        );
        return handle.getFile();
      } catch (e) {
        return null;
      }
    });
  }
  // IMPORTANT: key must be SHA-256 hash of the data
  write(key, stream) {
    return __async(this, null, function* () {
      const handle = yield navigator.crossOriginStorage.getFileHandle(
        makeHash(key),
        { create: true, origins: "*" }
      );
      const writable = yield handle.createWritable();
      const reader = stream.getReader();
      try {
        while (true) {
          const { done, value } = yield reader.read();
          if (done) break;
          yield writable.write(value);
        }
      } finally {
        yield writable.close();
      }
    });
  }
  // IMPORTANT: key must be SHA-256 hash of the data
  getSize(key) {
    return __async(this, null, function* () {
      try {
        const handle = yield navigator.crossOriginStorage.getFileHandle(
          makeHash(key)
        );
        const file = yield handle.getFile();
        return file.size;
      } catch (e) {
        return -1;
      }
    });
  }
  list() {
    return __async(this, null, function* () {
      throw new Error("not implemented");
    });
  }
  delete(_key) {
    return __async(this, null, function* () {
      throw new Error("not implemented");
    });
  }
};
var COSBackend = class {
  constructor() {
    __publicField(this, "cos", new COSInternalBackend());
    __publicField(this, "priv", new OPFSBackend());
  }
  isSupported() {
    return this.priv.isSupported();
  }
  read(key, hint) {
    return __async(this, null, function* () {
      if ((hint == null ? void 0 : hint.sha256) && this.cos.isSupported()) {
        const blob = yield this.cos.read(hint.sha256);
        if (blob) return blob;
      }
      return this.priv.read(key);
    });
  }
  write(key, stream, hint) {
    return __async(this, null, function* () {
      if ((hint == null ? void 0 : hint.sha256) && this.cos.isSupported()) {
        yield this.cos.write(hint.sha256, stream);
      } else {
        yield this.priv.write(key, stream);
      }
    });
  }
  getSize(key, hint) {
    return __async(this, null, function* () {
      if ((hint == null ? void 0 : hint.sha256) && this.cos.isSupported()) {
        const size = yield this.cos.getSize(hint.sha256);
        if (size !== -1) return size;
      }
      return this.priv.getSize(key);
    });
  }
  list() {
    return __async(this, null, function* () {
      return this.priv.list();
    });
  }
  delete(key) {
    return __async(this, null, function* () {
      return this.priv.delete(key);
    });
  }
};

// src/cache-manager.ts
var PREFIX_METADATA = "__metadata__";
var POLYFILL_ETAG = "polyfill_for_older_version";
function hintFromMetadata(metadata) {
  if (!metadata) return void 0;
  if (metadata.sha256) return { sha256: metadata.sha256 };
  return void 0;
}
var CacheManager = class {
  /**
   * @param backends Array of storage backends to use, in order of preference ; if first is available, use it, otherwise try the next one.
   */
  constructor(backends = [new COSBackend()]) {
    __publicField(this, "sb");
    for (const backend of backends) {
      if (backend.isSupported()) {
        this.sb = backend;
        return;
      }
    }
    throw new Error("No supported storage backend found");
  }
  /**
   * Convert a given URL into a storage key.
   *
   * Format: `${hashSHA1(fullURL)}_${fileName}`
   */
  getNameFromURL(url) {
    return __async(this, null, function* () {
      return urlToFileName(url, "");
    });
  }
  /**
   * @deprecated Use `download()` instead
   *
   * Write a new file to cache. This will overwrite existing file.
   *
   * @param name The file name returned by `getNameFromURL()` or `list()`
   */
  write(name, stream, metadata) {
    return __async(this, null, function* () {
      yield this.sb.write(name, stream);
      yield this.writeMetadata(name, metadata);
    });
  }
  download(_0) {
    return __async(this, arguments, function* (url, options = {}) {
      var _a, _b, _c, _d;
      const fileKey = yield urlToFileName(url, "");
      const sha256 = yield getHFFileSHA256(url, (_a = options.headers) != null ? _a : {});
      const hint = sha256 ? { sha256 } : void 0;
      const cachedSize = yield this.sb.getSize(fileKey, hint);
      if (cachedSize !== -1) {
        const metadata2 = yield this.readMetadata(fileKey);
        if ((metadata2 == null ? void 0 : metadata2.originalURL) === url && metadata2.originalSize === cachedSize) {
          return;
        }
        const head = yield fetch(url, __spreadValues({
          method: "HEAD"
        }, options.headers ? { headers: options.headers } : {}));
        const originalSize = parseInt(
          (_b = head.headers.get("content-length")) != null ? _b : "0",
          10
        );
        const etag2 = (head.headers.get("etag") || "").replace(
          /[^A-Za-z0-9]/g,
          ""
        );
        if (originalSize > 0 && originalSize === cachedSize) {
          yield this.writeMetadata(fileKey, __spreadValues({
            originalURL: url,
            originalSize,
            etag: etag2,
            sha256
          }, (_c = options.metadataAdditional) != null ? _c : {}));
          return;
        }
        yield this.sb.delete(fileKey);
        yield this.sb.delete(`${PREFIX_METADATA}${fileKey}`);
      }
      const response = yield fetch(url, __spreadValues(__spreadValues({}, options.headers ? { headers: options.headers } : {}), options.signal ? { signal: options.signal } : {}));
      if (!response.ok || !response.body) {
        throw new Error(`Failed to fetch ${url}: HTTP ${response.status}`);
      }
      const contentLength = response.headers.get("content-length");
      const etag = (response.headers.get("etag") || "").replace(
        /[^A-Za-z0-9]/g,
        ""
      );
      const total = parseInt(contentLength != null ? contentLength : "0", 10);
      const progressCallback = options.progressCallback;
      let loaded = 0;
      let lastProgressAt = 0;
      const progressStream = new TransformStream({
        transform(chunk, controller) {
          loaded += chunk.byteLength;
          if (progressCallback) {
            const now = Date.now();
            if (now - lastProgressAt > 100) {
              lastProgressAt = now;
              progressCallback({ loaded, total });
            }
          }
          controller.enqueue(chunk);
        },
        flush() {
          progressCallback == null ? void 0 : progressCallback({ loaded, total: total || loaded });
        }
      });
      const metadata = __spreadValues({
        originalURL: url,
        originalSize: total,
        etag
      }, (_d = options.metadataAdditional) != null ? _d : {});
      if (sha256) {
        metadata.sha256 = sha256;
      }
      yield this.sb.write(
        fileKey,
        response.body.pipeThrough(progressStream),
        hint
      );
      yield this.writeMetadata(fileKey, metadata);
    });
  }
  /**
   * Open a file in cache for reading
   *
   * @param nameOrURL The file name returned by `getNameFromURL()` or `list()`, or the original URL of the remote file
   * @returns Blob, or null if file does not exist
   */
  open(nameOrURL) {
    return __async(this, null, function* () {
      const hint1 = hintFromMetadata(yield this.getMetadata(nameOrURL));
      const direct = yield this.sb.read(nameOrURL, hint1);
      if (direct) return direct;
      const key = yield urlToFileName(nameOrURL, "");
      const hint2 = hintFromMetadata(yield this.getMetadata(key));
      return this.sb.read(key, hint2);
    });
  }
  /**
   * Get the size of a file in stored cache
   *
   * NOTE: in case the download is stopped mid-way (i.e. user close browser tab), the file maybe corrupted, size maybe different from `metadata.originalSize`
   *
   * @param name The file name returned by `getNameFromURL()` or `list()`
   * @returns number of bytes, or -1 if file does not exist
   */
  getSize(name) {
    return __async(this, null, function* () {
      const hint = hintFromMetadata(yield this.getMetadata(name));
      return this.sb.getSize(name, hint);
    });
  }
  /**
   * Get metadata of a cached file
   */
  getMetadata(name) {
    return __async(this, null, function* () {
      const metadata = yield this.readMetadata(name);
      if (metadata) return metadata;
      const cachedSize = yield this.sb.getSize(name);
      return cachedSize > 0 ? (
        // files created by older version of wllama don't have metadata; polyfill it
        {
          etag: POLYFILL_ETAG,
          originalSize: cachedSize,
          originalURL: ""
        }
      ) : (
        // cached file not found
        null
      );
    });
  }
  /**
   * Same as `getMetadata()`, but without polyfill. Returns null if the file has no metadata.
   */
  readMetadata(name) {
    return __async(this, null, function* () {
      const blob = yield this.sb.read(`${PREFIX_METADATA}${name}`);
      if (!blob) return null;
      try {
        return yield new Response(blob).json();
      } catch (e) {
        return null;
      }
    });
  }
  /**
   * List all files currently in cache
   */
  list() {
    return __async(this, null, function* () {
      const all = yield this.sb.list();
      const metadataMap = {};
      for (const { key } of all) {
        if (key.startsWith(PREFIX_METADATA)) {
          const blob = yield this.sb.read(key);
          if (blob) {
            const meta = yield new Response(blob).json().catch(() => null);
            metadataMap[key.slice(PREFIX_METADATA.length)] = meta;
          }
        }
      }
      const result = [];
      for (const { key, size } of all) {
        if (!key.startsWith(PREFIX_METADATA)) {
          result.push({
            name: key,
            size,
            metadata: metadataMap[key] || {
              originalSize: size,
              originalURL: "",
              etag: ""
            }
          });
        }
      }
      return result;
    });
  }
  /**
   * Clear all files currently in cache
   */
  clear() {
    return __async(this, null, function* () {
      yield this.deleteMany(() => true);
    });
  }
  /**
   * Delete a single file in cache
   *
   * @param nameOrURL Can be either an URL or a name returned by `getNameFromURL()` or `list()`
   */
  delete(nameOrURL) {
    return __async(this, null, function* () {
      const name2 = yield this.getNameFromURL(nameOrURL);
      yield this.deleteMany(
        (entry) => entry.name === nameOrURL || entry.name === name2
      );
    });
  }
  /**
   * Delete multiple files in cache.
   *
   * @param predicate A predicate like `array.filter(item => boolean)`
   */
  deleteMany(predicate) {
    return __async(this, null, function* () {
      const list = yield this.list();
      for (const item of list) {
        if (predicate(item)) {
          yield this.sb.delete(item.name);
          yield this.sb.delete(`${PREFIX_METADATA}${item.name}`);
        }
      }
    });
  }
  /**
   * Write the metadata of the file to disk.
   */
  writeMetadata(name, metadata) {
    return __async(this, null, function* () {
      const blob = new Blob([JSON.stringify(metadata)], { type: "text/plain" });
      yield this.sb.write(`${PREFIX_METADATA}${name}`, blob.stream());
    });
  }
};
var cache_manager_default = CacheManager;
function urlToFileName(url, prefix) {
  return __async(this, null, function* () {
    const hashBuffer = yield crypto.subtle.digest(
      "SHA-1",
      new TextEncoder().encode(url)
    );
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
    return `${prefix}${hashHex}_${url.split("/").pop()}`;
  });
}

// src/model-manager.ts
var DEFAULT_PARALLEL_DOWNLOADS = 3;
var ModelValidationStatus = /* @__PURE__ */ ((ModelValidationStatus2) => {
  ModelValidationStatus2["VALID"] = "valid";
  ModelValidationStatus2["INVALID"] = "invalid";
  ModelValidationStatus2["DELETED"] = "deleted";
  return ModelValidationStatus2;
})(ModelValidationStatus || {});
var Model = class {
  constructor(modelManager, url, mmprojUrl, savedFiles) {
    __publicField(this, "modelManager");
    /**
     * URL to the GGUF file (in case it contains multiple shards, the URL should point to the first shard)
     *
     * This URL will be used to identify the model in the cache. There can't be 2 models with the same URL.
     */
    __publicField(this, "url");
    /**
     * URL to mmproj file, if exists
     */
    __publicField(this, "mmprojUrl");
    /**
     * Size in bytes (total size of all shards).
     *
     * A value of -1 means the model is deleted from the cache. You must call `ModelManager.downloadModel` to re-download the model.
     */
    __publicField(this, "size");
    /**
     * List of all shards in the cache, sorted by original URL (ascending order)
     */
    __publicField(this, "files");
    this.modelManager = modelManager;
    this.url = url;
    this.mmprojUrl = mmprojUrl;
    if (savedFiles) {
      this.files = this.getAllFiles(savedFiles);
      this.size = sumArr(this.files.map((f) => f.metadata.originalSize));
    } else {
      this.files = [];
      this.size = 0;
    }
  }
  /**
   * Open and get a list of all shards as Blobs
   */
  open() {
    return __async(this, null, function* () {
      if (this.size === -1) {
        throw new WllamaError(
          `Model is deleted from the cache; Call ModelManager.downloadModel to re-download the model`,
          "load_error"
        );
      }
      const blobs = [];
      for (const file of this.files) {
        const blob = yield this.modelManager.cacheManager.open(file.name);
        if (!blob) {
          throw new Error(
            `Failed to open file ${file.name}; Hint: the model may be invalid, please refresh it`
          );
        }
        blobs.push(blob);
      }
      return blobs;
    });
  }
  /**
   * Validate the model files.
   *
   * If the model is invalid, the model manager will not be able to use it. You must call `refresh` to re-download the model.
   *
   * Cases that model is invalid:
   * - The model is deleted from the cache
   * - The model files are missing (or the download is interrupted)
   */
  validate() {
    let nbShards = ModelManager.parseModelUrl(this.url).length;
    if (this.mmprojUrl) {
      nbShards += 1;
    }
    if (this.size === -1) {
      return "deleted" /* DELETED */;
    }
    if (this.size < 16 || this.files.length !== nbShards) {
      return "invalid" /* INVALID */;
    }
    for (const file of this.files) {
      if (!file.metadata || file.metadata.originalSize !== file.size) {
        return "invalid" /* INVALID */;
      }
    }
    return "valid" /* VALID */;
  }
  /**
   * In case the model is invalid, call this function to re-download the model
   */
  refresh() {
    return __async(this, arguments, function* (options = {}) {
      var _a;
      const urls = ModelManager.parseModelUrl(this.url);
      if (this.mmprojUrl) {
        urls.push(this.mmprojUrl);
      }
      const works = urls.map((url, index) => ({
        url,
        index
      }));
      this.modelManager.logger.debug("Downloading model files:", urls);
      const nParallel = (_a = this.modelManager.params.parallelDownloads) != null ? _a : DEFAULT_PARALLEL_DOWNLOADS;
      const totalSize = yield this.getTotalDownloadSize(urls);
      const loadedSize = [];
      const worker = () => __async(this, null, function* () {
        while (works.length > 0) {
          const w = works.shift();
          if (!w) break;
          yield this.modelManager.cacheManager.download(w.url, __spreadProps(__spreadValues({}, options), {
            metadataAdditional: {
              originalURL: w.url,
              mmprojURL: this.mmprojUrl
            },
            progressCallback: ({ loaded }) => {
              var _a2;
              loadedSize[w.index] = loaded;
              (_a2 = options.progressCallback) == null ? void 0 : _a2.call(options, {
                loaded: sumArr(loadedSize),
                total: totalSize
              });
            }
          }));
        }
      });
      const promises = [];
      for (let i = 0; i < nParallel; i++) {
        promises.push(worker());
        loadedSize.push(0);
      }
      yield Promise.all(promises);
      this.files = this.getAllFiles(yield this.modelManager.cacheManager.list());
      this.size = this.files.reduce((acc, f) => acc + f.metadata.originalSize, 0);
    });
  }
  /**
   * Remove the model from the cache
   */
  remove() {
    return __async(this, null, function* () {
      this.files = this.getAllFiles(yield this.modelManager.cacheManager.list());
      yield this.modelManager.cacheManager.deleteMany(
        (f) => !!this.files.find((file) => file.name === f.name)
      );
      this.size = -1;
    });
  }
  getAllFiles(savedFiles) {
    const allUrls = new Set(ModelManager.parseModelUrl(this.url));
    if (this.mmprojUrl) {
      allUrls.add(this.mmprojUrl);
    }
    const allFiles = [];
    for (const url of allUrls) {
      const file = savedFiles.find((f) => f.metadata.originalURL === url);
      if (!file) {
        throw new Error(`Model file not found: ${url}`);
      }
      allFiles.push(file);
    }
    allFiles.sort(
      (a, b) => a.metadata.originalURL.localeCompare(b.metadata.originalURL)
    );
    return allFiles;
  }
  getTotalDownloadSize(urls) {
    return __async(this, null, function* () {
      const responses = yield Promise.all(
        urls.map((url) => fetch(url, { method: "HEAD" }))
      );
      const sizes = responses.map(
        (res) => Number(res.headers.get("content-length") || "0")
      );
      return sumArr(sizes);
    });
  }
};
var ModelManager = class _ModelManager {
  constructor(params = {}) {
    // The CacheManager singleton, can be accessed by user
    __publicField(this, "cacheManager");
    __publicField(this, "params");
    __publicField(this, "logger");
    this.cacheManager = params.cacheManager || new cache_manager_default();
    this.params = params;
    this.logger = params.logger || console;
  }
  /**
   * Parses a model URL and returns an array of URLs based on the following patterns:
   * - If the input URL is an array, it returns the array itself.
   * - If the input URL is a string in the `gguf-split` format, it returns an array containing the URL of each shard in ascending order.
   * - Otherwise, it returns an array containing the input URL as a single element array.
   * @param modelUrl URL or list of URLs
   */
  static parseModelUrl(modelUrl) {
    var _a;
    if (Array.isArray(modelUrl)) {
      return modelUrl;
    }
    const urlPartsRegex = /-(\d{5})-of-(\d{5})\.gguf(?:\?.*)?$/;
    const queryMatch = modelUrl.match(/\.gguf(\?.*)?$/);
    const queryParams = (_a = queryMatch == null ? void 0 : queryMatch[1]) != null ? _a : "";
    const matches = modelUrl.match(urlPartsRegex);
    if (!matches) {
      return [modelUrl];
    }
    const baseURL = modelUrl.replace(urlPartsRegex, "");
    const total = matches[2];
    const paddedShardIds = Array.from(
      { length: Number(total) },
      (_, index) => (index + 1).toString().padStart(5, "0")
    );
    return paddedShardIds.map(
      (current) => `${baseURL}-${current}-of-${total}.gguf${queryParams}`
    );
  }
  /**
   * Get all models in the cache
   */
  getModels() {
    return __async(this, arguments, function* (opts = {}) {
      const cachedFiles = yield this.cacheManager.list();
      let models = [];
      for (const file of cachedFiles) {
        if (!file.metadata.originalURL) continue;
        const shards = _ModelManager.parseModelUrl(file.metadata.originalURL);
        const mmprojUrl = file.metadata.mmprojURL;
        const isFirstShard = shards.length === 1 || shards[0] === file.metadata.originalURL;
        if (isFirstShard) {
          models.push(
            new Model(this, file.metadata.originalURL, mmprojUrl, cachedFiles)
          );
        }
      }
      if (!opts.includeInvalid) {
        models = models.filter(
          (m) => m.validate() === "valid" /* VALID */
        );
      }
      return models;
    });
  }
  /**
   * Download a model from the given URL.
   *
   * The URL must end with `.gguf`
   */
  downloadModel(_0) {
    return __async(this, arguments, function* (sourceOrURL, options = {}) {
      const source = isString(sourceOrURL) ? { url: sourceOrURL } : sourceOrURL;
      if (!isValidGgufFile(source.url)) {
        throw new WllamaError(
          `Invalid model URL: ${source.url}; URL must ends with ".gguf"`,
          "download_error"
        );
      }
      const model = new Model(this, source.url, source.mmprojUrl);
      const validity = model.validate();
      if (validity !== "valid" /* VALID */) {
        yield model.refresh(options);
      }
      return model;
    });
  }
  /**
   * Get a model from the cache or download it if it's not available.
   */
  getModelOrDownload(_0) {
    return __async(this, arguments, function* (source, options = {}) {
      var _a;
      const models = yield this.getModels();
      const model = models.find((m) => m.url === source.url);
      if (model) {
        (_a = options.progressCallback) == null ? void 0 : _a.call(options, { loaded: model.size, total: model.size });
        return model;
      }
      return this.downloadModel(source, options);
    });
  }
  /**
   * Remove all models from the cache
   */
  clear() {
    return __async(this, null, function* () {
      yield this.cacheManager.clear();
    });
  }
};

// src/types/types.ts
var LogLevel = /* @__PURE__ */ ((LogLevel2) => {
  LogLevel2[LogLevel2["DEBUG"] = 1] = "DEBUG";
  LogLevel2[LogLevel2["INFO"] = 2] = "INFO";
  LogLevel2[LogLevel2["WARN"] = 3] = "WARN";
  LogLevel2[LogLevel2["ERROR"] = 4] = "ERROR";
  return LogLevel2;
})(LogLevel || {});

// src/wasm-from-cdn.ts
var WasmCompatFromCDN = {
  worker: "https://cdn.jsdelivr.net/npm/@wllama/wllama-compat@3.12.0/wasm/wllama.js",
  wasm: "https://cdn.jsdelivr.net/npm/@wllama/wllama-compat@3.12.0/wasm/wllama.wasm"
};

// src/wllama.ts
var LoggerWithoutDebug = __spreadProps(__spreadValues({}, console), {
  debug: () => {
  }
});
var WllamaError = class extends Error {
  constructor(message, type = "unknown_error") {
    super(message);
    __publicField(this, "type");
    this.type = type;
  }
};
var WllamaAbortError = class extends Error {
  constructor() {
    super("Operation aborted");
    __publicField(this, "name", "AbortError");
  }
};
var WllamaRuntimeError = class extends Error {
  constructor(message, stack) {
    super(message);
    __publicField(this, "name", "RuntimeError");
    __publicField(this, "stack");
    this.stack = stack;
  }
};
var Wllama = class {
  constructor(pathConfig, wllamaConfig = {}) {
    // The CacheManager and ModelManager are singleton, can be accessed by user
    __publicField(this, "cacheManager");
    __publicField(this, "modelManager");
    __publicField(this, "compat", null);
    __publicField(this, "proxy", null);
    __publicField(this, "config");
    __publicField(this, "pathConfig");
    __publicField(this, "useMultiThread", false);
    __publicField(this, "nbThreads", 1);
    __publicField(this, "useEmbeddings", false);
    __publicField(this, "useRerank", false);
    // available when loaded
    __publicField(this, "loadedContextInfo", null);
    __publicField(this, "seed");
    __publicField(this, "bosToken", -1);
    __publicField(this, "eosToken", -1);
    __publicField(this, "eotToken", -1);
    __publicField(this, "eogTokens", /* @__PURE__ */ new Set());
    __publicField(this, "addBosToken", false);
    __publicField(this, "addEosToken", false);
    __publicField(this, "mediaMarker");
    __publicField(this, "chatTemplate");
    __publicField(this, "metadata");
    __publicField(this, "hasEncoder", false);
    __publicField(this, "decoderStartToken", -1);
    // note: we overlay instead of using llama-server default_template_kwargs, because we cannot transfer complex data structure via GLUE
    // overlay allow mixed data type or nested structure for kwargs
    __publicField(this, "chatTemplateKwargs", {});
    var _a, _b, _c;
    checkEnvironmentCompatible();
    if (!pathConfig) throw new WllamaError("AssetsPathConfig is required");
    this.pathConfig = pathConfig;
    this.config = wllamaConfig;
    this.cacheManager = (_a = wllamaConfig.cacheManager) != null ? _a : new cache_manager_default();
    this.modelManager = (_c = wllamaConfig.modelManager) != null ? _c : new ModelManager({
      cacheManager: this.cacheManager,
      logger: (_b = wllamaConfig.logger) != null ? _b : console,
      parallelDownloads: wllamaConfig.parallelDownloads,
      allowOffline: wllamaConfig.allowOffline
    });
    this.setCompat("default");
  }
  logger() {
    var _a;
    return (_a = this.config.logger) != null ? _a : console;
  }
  checkModelLoaded() {
    if (!this.isModelLoaded()) {
      throw new WllamaError(
        "loadModel() is not yet called",
        "model_not_loaded"
      );
    }
  }
  /**
   * Get the libllama version string, e.g. "b6327-4d74393".
   *
   * @returns version string embedded at build time.
   */
  static getLibllamaVersion() {
    return LIBLLAMA_VERSION;
  }
  /**
   * Set compatibility options for Wllama.
   * @param compat Set to null to disable compatibility, or 'default' to use the default compat resources from CDN.
   * @param mode 'safari' by default; If set to 'firefox_safari', the compat mode will **also** be enabled on Firefox, which will significantly degrade the performance but allow using WebGPU on Firefox.
   */
  setCompat(compat, mode = "safari") {
    if (mode === "safari") {
      if (isFirefox()) {
        this.compat = null;
        return;
      }
    }
    this.compat = compat === "default" ? WasmCompatFromCDN : compat;
  }
  /**
   * Check if the model is loaded via `loadModel()`
   */
  isModelLoaded() {
    return !!this.proxy && !!this.metadata;
  }
  /**
   * Get token ID associated to BOS (begin of sentence) token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getBOS() {
    return this.bosToken;
  }
  /**
   * Get token ID associated to EOS (end of sentence) token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getEOS() {
    return this.eosToken;
  }
  /**
   * Get token ID associated to EOT (end of turn) token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getEOT() {
    return this.eotToken;
  }
  /**
   * Check if a given token is end-of-generation token (e.g. EOS, EOT, etc.)
   *
   * @param token the token ID to be checked
   * @returns true if the token is EOS, EOT, or any other end-of-generation tokens
   */
  isTokenEOG(token) {
    return token === this.eosToken || token === this.eotToken || this.eogTokens.has(token);
  }
  /**
   * Get token ID associated to token used by decoder, to start generating output sequence(only usable for encoder-decoder architecture). In other words, encoder uses normal BOS and decoder uses this token.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns -1 if the model is not loaded.
   */
  getDecoderStartToken() {
    return this.decoderStartToken;
  }
  /**
   * Get model hyper-parameters and metadata
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns ModelMetadata
   */
  getModelMetadata() {
    this.checkModelLoaded();
    return this.metadata;
  }
  /**
   * Check if we're currently using multi-thread build.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if multi-thread is used.
   */
  isMultithread() {
    this.checkModelLoaded();
    return this.useMultiThread;
  }
  /**
   * Get number of threads used in the current context.
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns number of threads
   */
  getNumThreads() {
    this.checkModelLoaded();
    return this.useMultiThread ? this.nbThreads : 1;
  }
  /**
   * Check if the current model uses encoder-decoder architecture
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if multi-thread is used.
   */
  isEncoderDecoderArchitecture() {
    this.checkModelLoaded();
    return this.hasEncoder;
  }
  /**
   * Must we add BOS token to the tokenized sequence?
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if BOS token must be added to the sequence
   */
  mustAddBosToken() {
    this.checkModelLoaded();
    return this.addBosToken;
  }
  /**
   * Must we add EOS token to the tokenized sequence?
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns true if EOS token must be added to the sequence
   */
  mustAddEosToken() {
    this.checkModelLoaded();
    return this.addEosToken;
  }
  /**
   * Get the jinja chat template comes with the model. It only available if the original model (before converting to gguf) has the template in `tokenizer_config.json`
   *
   * NOTE: This can only being used after `loadModel` is called.
   *
   * @returns the jinja template. null if there is no template in gguf
   */
  getChatTemplate() {
    var _a;
    this.checkModelLoaded();
    return (_a = this.chatTemplate) != null ? _a : null;
  }
  /**
   * Check if WebGPU is supported by the current environment.
   * @returns true if WebGPU is supported
   */
  isSupportWebGPU() {
    return isSupportWebGPU();
  }
  /**
   * Load model from a given URL (or a list of URLs, in case the model is splitted into smaller files)
   * - If the model already been downloaded (via `downloadModel()`), then we will use the cached model
   * - Else, we download the model from internet
   * @param modelSourceOrURL
   * @param params
   */
  loadModelFromUrl(_0) {
    return __async(this, arguments, function* (modelSourceOrURL, params = {}) {
      var _a;
      const source = isString(modelSourceOrURL) ? { url: modelSourceOrURL } : modelSourceOrURL;
      const useCache = (_a = params.useCache) != null ? _a : true;
      const model = useCache ? yield this.modelManager.getModelOrDownload(source, params) : yield this.modelManager.downloadModel(source, params);
      const blobs = yield model.open();
      return yield this.loadModel(blobs, params);
    });
  }
  /**
   * Load model from a given Hugging Face model ID and file path.
   *
   * @param hfOptions
   * @param params
   */
  loadModelFromHF(_0) {
    return __async(this, arguments, function* (hfOptions, params = {}) {
      const source = yield getHFModelSource(hfOptions);
      return yield this.loadModelFromUrl(source, params);
    });
  }
  /**
   * Load model from a given list of Blob.
   *
   * You can pass multiple buffers into the function (in case the model contains multiple shards).
   *
   * @param ggufBlobsOrModel Can be either list of Blobs (in case you use local file), or a Model object (in case you use ModelManager)
   * @param params LoadModelParams
   */
  loadModel(_0) {
    return __async(this, arguments, function* (ggufBlobsOrModel, params = {}) {
      var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j;
      const blobs = ggufBlobsOrModel instanceof Model ? yield ggufBlobsOrModel.open() : [...ggufBlobsOrModel];
      if (blobs.some((b) => b.size === 0)) {
        throw new WllamaError(
          "Input model (or splits) must be non-empty Blob or File",
          "load_error"
        );
      }
      if (!this.pathConfig["default"]) {
        throw new WllamaError(
          '"default" is missing from pathConfig',
          "load_error"
        );
      }
      if (this.proxy) {
        throw new WllamaError("Module is already initialized", "load_error");
      }
      const supportMultiThread = yield isSupportMultiThread();
      const hwConccurency = Math.floor((navigator.hardwareConcurrency || 1) / 2);
      const nbThreads = (_a = params.n_threads) != null ? _a : hwConccurency;
      this.nbThreads = nbThreads;
      this.useMultiThread = supportMultiThread && nbThreads > 1;
      const workerResources = this.getWorkerResources();
      if (params.n_gpu_layers === 0) {
        workerResources.noWebGPU = true;
      }
      this.proxy = new ProxyToWorker(
        workerResources,
        this.useMultiThread ? nbThreads : 0,
        // 0 means disable pthread
        (_b = this.config.suppressNativeLog) != null ? _b : false,
        this.logger()
      );
      let logLevel = (_c = params.log_level) != null ? _c : 2 /* INFO */;
      if (this.config.suppressNativeLog) {
        logLevel = 9999;
      }
      const modelFiles = yield prepareBlobs(blobs);
      yield this.proxy.moduleInit(modelFiles.all);
      this.logger().debug("Calling wllamaStart...");
      const startResult = yield this.proxy.wllamaStart();
      if (!startResult.success) {
        throw new WllamaError(
          `Error while calling start function, result = ${startResult}`
        );
      }
      this.logger().debug("Loading model...");
      const loadResult = yield this.proxy.wllamaAction("load", {
        _name: "load_req",
        log_level: logLevel,
        // if async read is not supported, use mmap; refer to README-dev.md for more details
        use_mmap: !canUseAsyncFileRead(workerResources.compat),
        use_mlock: false,
        n_gpu_layers: (_d = params.n_gpu_layers) != null ? _d : 99999,
        n_ctx: (_e = params.n_ctx) != null ? _e : 1024,
        n_threads: this.useMultiThread ? nbThreads : 1,
        n_ctx_auto: false,
        // not supported for now
        mmproj_path: modelFiles.mmproj ? `/models/${MMPROJ_FILE_NAME}` : void 0,
        model_paths: modelFiles.llm.map((f) => `models/${f.name}`),
        embeddings: params.embeddings,
        offload_kqv: params.offload_kqv,
        n_batch: params.n_batch,
        n_ubatch: params.n_ubatch,
        pooling_type: params.pooling_type,
        rope_scaling_type: params.rope_scaling_type,
        rope_freq_base: params.rope_freq_base,
        rope_freq_scale: params.rope_freq_scale,
        yarn_ext_factor: params.yarn_ext_factor,
        yarn_attn_factor: params.yarn_attn_factor,
        yarn_beta_fast: params.yarn_beta_fast,
        yarn_beta_slow: params.yarn_beta_slow,
        yarn_orig_ctx: params.yarn_orig_ctx,
        cache_type_k: params.cache_type_k,
        cache_type_v: params.cache_type_v,
        // with unified KV, all sequences share one n_ctx cache, so each request can still use the full context
        n_parallel: (_f = params.n_parallel) != null ? _f : 4,
        kv_unified: (_g = params.kv_unified) != null ? _g : true,
        flash_attn: params.flash_attn,
        swa_full: params.swa_full,
        chat_template: params.chat_template,
        jinja: params.jinja,
        reasoning: params.reasoning,
        image_min_tokens: params.image_min_tokens,
        image_max_tokens: params.image_max_tokens,
        warmup: params.warmup,
        no_kv_offload: params.no_kv_offload,
        mmproj_offload: params.mmproj_offload,
        cont_batching: params.cont_batching,
        n_keep: params.n_keep,
        ctx_shift: params.ctx_shift,
        cache_idle_slots: params.cache_idle_slots,
        n_cache_reuse: params.n_cache_reuse,
        lora_paths: (_h = params.lora_adapters) == null ? void 0 : _h.map((a) => a.path),
        lora_scales: (_i = params.lora_adapters) == null ? void 0 : _i.map((a) => {
          var _a2;
          return (_a2 = a.scale) != null ? _a2 : 1;
        }),
        lora_init_without_apply: params.lora_init_without_apply,
        spec_draft_model: params.spec_draft_model,
        spec_draft_ngl: params.spec_draft_ngl,
        spec_draft_n_max: params.spec_draft_n_max,
        spec_draft_n_min: params.spec_draft_n_min,
        spec_draft_p_min: params.spec_draft_p_min,
        spec_draft_threads: params.spec_draft_threads,
        spec_draft_threads_batch: params.spec_draft_threads_batch,
        kv_overrides_keys: params.kv_overrides ? Object.keys(params.kv_overrides) : void 0,
        kv_overrides_vals: params.kv_overrides ? Object.values(params.kv_overrides) : void 0,
        reasoning_budget_tokens: params.reasoning_budget_tokens,
        reasoning_budget_message: params.reasoning_budget_message,
        reasoning_format: params.reasoning_format,
        skip_chat_parsing: params.skip_chat_parsing,
        prefill_assistant: params.prefill_assistant
      });
      const loadedCtxInfo = __spreadProps(__spreadValues({}, loadResult), {
        metadata: {}
      });
      for (let i = 0; i < loadResult.metadata_key.length; i++) {
        loadedCtxInfo.metadata[loadResult.metadata_key[i]] = loadResult.metadata_val[i];
      }
      this.seed = params.seed;
      this.bosToken = loadedCtxInfo.token_bos;
      this.eosToken = loadedCtxInfo.token_eos;
      this.eotToken = loadedCtxInfo.token_eot;
      this.useEmbeddings = !!params.embeddings;
      this.useRerank = params.pooling_type == "rank";
      this.metadata = {
        hparams: {
          nVocab: loadedCtxInfo.n_vocab,
          nCtxTrain: loadedCtxInfo.n_ctx_train,
          nEmbd: loadedCtxInfo.n_embd,
          nLayer: loadedCtxInfo.n_layer
        },
        meta: loadedCtxInfo.metadata
      };
      this.hasEncoder = !!loadedCtxInfo.has_encoder;
      this.decoderStartToken = loadedCtxInfo.token_decoder_start;
      this.addBosToken = loadedCtxInfo.add_bos_token;
      this.addEosToken = loadedCtxInfo.add_eos_token;
      this.chatTemplate = loadedCtxInfo.metadata["tokenizer.chat_template"];
      this.loadedContextInfo = loadedCtxInfo;
      this.eogTokens = new Set(loadedCtxInfo.list_tokens_eog);
      this.mediaMarker = loadedCtxInfo.media_marker;
      this.chatTemplateKwargs = (_j = params.default_template_kwargs) != null ? _j : {};
      this.logger().debug({ loadedCtxInfo });
    });
  }
  getLoadedContextInfo() {
    this.checkModelLoaded();
    if (!this.loadedContextInfo) {
      throw new WllamaError("Loaded context info is not available");
    }
    return __spreadValues({}, this.loadedContextInfo);
  }
  //////////////////////////////////////////////
  // High level API
  /**
   * Calculate embedding vector for a given text or multimodal input.
   * By default, BOS and EOS tokens will be added automatically. You can use the "skipBOS" and "skipEOS" option to disable it.
   * @param options OAI-compatible embedding creation options
   * @returns OAI-compatible embedding response
   */
  createEmbedding(options) {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      if (!this.useEmbeddings) {
        throw new WllamaError(
          "Embeddings is not enabled. Please set it via LoadModelParams.embeddings"
        );
      }
      if (options.embd_normalize !== void 0 && (!Number.isInteger(options.embd_normalize) || options.embd_normalize < -1)) {
        throw new WllamaError(
          "embd_normalize must be an integer >= -1",
          "inference_error"
        );
      }
      const { input, files } = this.prepareEmbeddingInput(options.input);
      const result = yield this.proxy.wllamaAction(
        "embedding",
        {
          _name: "embd_req",
          data_json: JSON.stringify(__spreadProps(__spreadValues({}, options), { input })),
          files: files.map((f) => new Uint8Array(f))
        }
      );
      if (!result.success) {
        throw new WllamaError(
          result.message || "Model failed to start inference",
          "inference_error"
        );
      }
      return yield this.getResponse(options, false, result.req_id);
    });
  }
  /**
   * Rerank a list of documents against a query.
   * Requires the model to be loaded with embeddings: true and pooling_type: 'rank'.
   * @param options Reranking options (query, documents, top_n)
   * @returns Reranking response with relevance scores sorted highest first
   */
  createRerank(options) {
    return __async(this, null, function* () {
      var _a, _b;
      this.checkModelLoaded();
      if (!this.useEmbeddings || !this.useRerank) {
        throw new WllamaError(
          "Rerank is not enabled. Please set it via LoadModelParams: embeddings = true and pooling_type = rank"
        );
      }
      const top_n = (_a = options.top_n) != null ? _a : options.documents.length;
      let totalTokens = 0;
      const rawResults = [];
      for (let i = 0; i < options.documents.length; i++) {
        const result = yield this.proxy.wllamaAction("rerank", {
          _name: "rrnk_req",
          data_json: JSON.stringify({
            query: options.query,
            document: options.documents[i]
          })
        });
        if (!result.success) {
          throw new WllamaError(
            "Model failed to start reranking",
            "inference_error"
          );
        }
        const { score, tokens_evaluated } = yield this.getSingleResult(result.req_id, "reranking");
        totalTokens += tokens_evaluated;
        rawResults.push({ index: i, score });
      }
      rawResults.sort((a, b) => b.score - a.score);
      return {
        model: (_b = this.getModelMetadata().meta["general.name"]) != null ? _b : "",
        object: "list",
        usage: { prompt_tokens: totalTokens, total_tokens: totalTokens },
        results: rawResults.slice(0, top_n).map(({ index, score }) => ({
          index,
          relevance_score: score
        }))
      };
    });
  }
  /**
   * Answer typed questions about a state, using a decision model (TypeSafe-compatible System One API).
   * Image input is not supported yet.
   * @param options The state and the questions
   * @returns The answer of each question
   */
  createSystemOne(options) {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      const result = yield this.proxy.wllamaAction(
        "systemone",
        {
          _name: "sys1_req",
          data_json: JSON.stringify(options)
        }
      );
      if (!result.success) {
        throw new WllamaError(
          "Model failed to start systemone",
          "inference_error"
        );
      }
      return yield this.getSingleResult(
        result.req_id,
        "systemone"
      );
    });
  }
  createChatCompletion(options) {
    return __async(this, null, function* () {
      var _a;
      if (Object.keys(this.chatTemplateKwargs).length > 0) {
        options = __spreadProps(__spreadValues({}, options), {
          chat_template_kwargs: __spreadValues(__spreadValues({}, this.chatTemplateKwargs), (_a = options.chat_template_kwargs) != null ? _a : {})
        });
      }
      if (options.stream && options.onData) {
        yield this.createCompletionImpl(options);
      } else if (options.stream) {
        return yield this.createCompletionGenerator(options);
      } else {
        return yield this.createCompletionImpl(__spreadProps(__spreadValues({}, options), { stream: false }));
      }
    });
  }
  createCompletion(options) {
    return __async(this, null, function* () {
      if (options.stream && options.onData) {
        yield this.createCompletionImpl(options);
      } else if (options.stream) {
        return yield this.createCompletionGenerator(options);
      } else {
        return yield this.createCompletionImpl(__spreadProps(__spreadValues({}, options), { stream: false }));
      }
    });
  }
  /**
   * Private implementation of createCompletion
   */
  createCompletionImpl(options) {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      const isStream = !!options.stream;
      const isChat = !!options.messages;
      const customOpt = {};
      if (this.seed !== void 0) {
        customOpt.seed = this.seed;
      }
      let files = [];
      if (isChat) {
        const tmp = this.prepareMultimodalInput(
          options
        );
        options = tmp.params;
        files = tmp.files;
      }
      const result = yield this.proxy.wllamaAction(
        "completion",
        {
          _name: "cmpl_req",
          is_chat: isChat,
          data_json: JSON.stringify(__spreadValues(__spreadValues({}, options), customOpt)),
          files: files.map((f) => new Uint8Array(f))
        }
      );
      if (!result.success) {
        throw new WllamaError(
          "Model failed to start inference",
          "inference_error"
        );
      }
      return yield this.getResponse(
        options,
        isStream,
        result.req_id
      );
    });
  }
  /**
   * Same with `createCompletion`, but returns an async iterator instead.
   * Only called when stream=true and no onData is provided.
   */
  createCompletionGenerator(options) {
    return new Promise((resolve) => {
      const createGenerator = cbToAsyncIter(
        (callback) => {
          this.createCompletionImpl(__spreadProps(__spreadValues({}, options), {
            onData: (chunk) => callback(chunk)
          })).then(() => callback(void 0, true)).catch((err) => callback(void 0, false, err));
        }
      );
      resolve(createGenerator());
    });
  }
  /**
   * Whether the currently loaded model supports a specific input modality (e.g. image or audio).
   * @param modality
   * @returns
   */
  supportInputModality(modality) {
    this.checkModelLoaded();
    if (modality === "image") {
      return !!this.loadedContextInfo.has_image_input;
    } else if (modality === "audio") {
      return !!this.loadedContextInfo.has_audio_input;
    } else {
      throw new WllamaError(
        "Unsupported modality: " + modality,
        "unknown_error"
      );
    }
  }
  /**
   * Unload the model and free all memory.
   *
   * Note: This function will NOT crash if model is not yet loaded
   */
  exit() {
    return __async(this, null, function* () {
      var _a;
      yield (_a = this.proxy) == null ? void 0 : _a.wllamaExit();
      this.proxy = null;
    });
  }
  /**
   * [FOR DEBUGGING ONLY] Run ggml backend ops tests without loading any model.
   *
   * Initializes the wasm runtime, executes `test-backend-ops` with the given args, then shuts down.
   *
   * For more info, please refer to guides/debug.md
   *
   * @param args Arguments forwarded to test-backend-ops (e.g. ["-o", "ADD"])
   * @returns retcode (0 = all tests passed) and success flag
   */
  testBackendOps() {
    return __async(this, arguments, function* (args = []) {
      var _a;
      if (!this.pathConfig["default"]) {
        throw new WllamaError(
          '"default" is missing from pathConfig',
          "load_error"
        );
      }
      if (!(yield isSupportMultiThread())) {
        throw new WllamaError(
          "Multi-threading is required to run backend ops tests, but it is not supported in the current environment."
        );
      }
      const tmpProxy = new ProxyToWorker(
        this.getWorkerResources(),
        0,
        // single-thread; no model needed
        (_a = this.config.suppressNativeLog) != null ? _a : false,
        this.logger()
      );
      try {
        yield tmpProxy.moduleInit([]);
        const startResult = yield tmpProxy.wllamaStart();
        if (!startResult.success) {
          throw new WllamaError(
            `Error while calling start function, result = ${startResult}`
          );
        }
        const result = yield tmpProxy.wllamaAction(
          "test_backend_ops",
          { _name: "tbop_req", args: ["test-backend-ops", ...args] }
        );
        return { retcode: result.retcode, success: result.success };
      } finally {
        yield tmpProxy.wllamaExit();
      }
    });
  }
  //////////////////////////////////////////////
  // Low level API
  // TODO: add back
  /**
   * get debug info
   */
  _getDebugInfo() {
    return __async(this, null, function* () {
      this.checkModelLoaded();
      return yield this.proxy.wllamaDebug();
    });
  }
  //////////////////////////////////////////////
  // Utils
  jsonDecode(data_json) {
    try {
      return JSON.parse(data_json);
    } catch (e) {
      this.logger().error("Failed to parse JSON:", data_json);
      throw new WllamaError("Failed to parse model output", "inference_error");
    }
  }
  replaceMedia(content, files) {
    return content.map((c) => {
      if (c.type === "text") {
        return c;
      }
      if (!this.mediaMarker) {
        throw new WllamaError("Media marker is undefined", "inference_error");
      }
      files.push(c.data);
      return { type: "text", text: this.mediaMarker };
    });
  }
  prepareMultimodalInput(params) {
    const msg = params.messages;
    const msgNew = [];
    const files = [];
    for (const m of msg) {
      if (Array.isArray(m.content)) {
        msgNew.push(__spreadProps(__spreadValues({}, m), {
          content: this.replaceMedia(m.content, files)
        }));
      } else {
        msgNew.push(m);
      }
    }
    return {
      params: __spreadProps(__spreadValues({}, params), {
        messages: msgNew
      }),
      files
    };
  }
  prepareEmbeddingInput(input) {
    const files = [];
    const isContentPart = (entry) => typeof entry === "object" && entry !== null && "type" in entry && (entry.type === "text" || entry.type === "image");
    const isContent = (entry) => Array.isArray(entry) && entry.length > 0 && entry.every(isContentPart);
    const toText = (content) => {
      if (content.some((c) => c.type === "text" && typeof c.text !== "string")) {
        throw new WllamaError(
          'Text input must contain a string in "text"',
          "inference_error"
        );
      }
      const text = this.replaceMedia(content, files).map((c) => c.text).join("");
      if (text.length === 0) {
        throw new WllamaError(
          "Input content cannot be empty",
          "inference_error"
        );
      }
      return text;
    };
    let prepared = input;
    if (isContent(input)) {
      prepared = toText(input);
    } else if (Array.isArray(input) && input.length > 0 && input.every(isContent)) {
      prepared = input.map(toText);
    }
    if (files.length > 0 && !this.supportInputModality("image")) {
      throw new WllamaError(
        "Image input is not supported by the loaded model",
        "inference_error"
      );
    }
    return { input: prepared, files };
  }
  // release the slot occupied by the request; cancelling an already-finished request is a no-op
  cancelRequest(reqId) {
    return __async(this, null, function* () {
      try {
        yield this.proxy.wllamaAction("cancel", {
          _name: "cncl_req",
          req_id: reqId
        });
      } catch (e) {
        this.logger().warn("Failed to cancel request", reqId, e);
      }
    });
  }
  getSingleResult(reqId, task) {
    return __async(this, null, function* () {
      let completed = false;
      try {
        while (true) {
          const chunk = yield this.proxy.wllamaAction(
            "get_result",
            { _name: "gres_req", req_id: reqId }
          );
          const jsonString = chunk.data_json;
          if (jsonString && jsonString.length > 0) {
            if (chunk.is_error) {
              const jsonData = this.jsonDecode(jsonString);
              throw new WllamaError(
                jsonData.message || `Unknown ${task} error`,
                "inference_error"
              );
            }
            completed = true;
            return this.jsonDecode(jsonString);
          }
          if (!chunk.has_more) {
            completed = true;
            break;
          }
        }
        throw new WllamaError(`No ${task} result received`, "inference_error");
      } finally {
        if (!completed) {
          yield this.cancelRequest(reqId);
        }
      }
    });
  }
  getResponse(options, isStream, reqId) {
    return __async(this, null, function* () {
      var _a, _b;
      let finalResult = null;
      let completed = false;
      try {
        while (true) {
          if ((_a = options.abortSignal) == null ? void 0 : _a.aborted) {
            throw new WllamaAbortError();
          }
          const result_chunk = yield this.proxy.wllamaAction(
            "get_result",
            {
              _name: "gres_req",
              req_id: reqId
            }
          );
          const jsonString = result_chunk.data_json;
          if (!jsonString || jsonString.length === 0) {
            if (!result_chunk.has_more) {
              completed = true;
              break;
            } else {
              continue;
            }
          }
          if (jsonString == "null") {
            continue;
          }
          let jsonData = this.jsonDecode(jsonString);
          finalResult = jsonData;
          if (result_chunk.is_error) {
            this.logger().error("Model returned an error:", jsonData);
            throw new WllamaError(
              jsonData.message || "Unknown inference error",
              "inference_error"
            );
          }
          if (isStream) {
            if (!Array.isArray(jsonData)) {
              jsonData = [jsonData];
            }
            for (const chunk of jsonData) {
              (_b = options.onData) == null ? void 0 : _b.call(options, chunk);
              finalResult = chunk;
            }
          }
          if (!result_chunk.has_more) {
            completed = true;
            break;
          }
        }
      } finally {
        if (!completed) {
          yield this.cancelRequest(reqId);
        }
      }
      return finalResult;
    });
  }
  getWorkerResources() {
    const workerResources = {
      wasmPath: absoluteUrl(this.pathConfig["default"]),
      compat: false
    };
    if (needCompat()) {
      if (!this.compat) {
        this.logger().warn(
          "Not using compat mode" + (isFirefox() ? " (expected on Firefox - WebGPU will be disabled)" : "")
        );
      } else {
        const isUsingDefault = this.compat.worker === WasmCompatFromCDN.worker && this.compat.wasm === WasmCompatFromCDN.wasm;
        if (isUsingDefault) {
          this.logger().warn(
            "Compatibility mode is activated, using resources from CDN. To use local resources, please refer to @wllama/wllama-compat package."
          );
          this.logger().warn(
            "IMPORTANT: Performance will be significantly degraded in compatibility mode."
          );
        }
        workerResources.wasmPath = absoluteUrl(this.compat.wasm);
        workerResources.jsPath = this.compat.worker;
        workerResources.compat = true;
      }
    }
    if (isFirefox()) {
      if (workerResources.compat) {
        this.logger().warn(
          'Using compat mode on Firefox, performance will be significantly degraded; Consider enabling "javascript.options.wasm_js_promise_integration" in "about:config".'
        );
      } else if (!isSupportJSPI()) {
        this.logger().warn(
          'WebGPU is disabled on Firefox due to missing JSPI support. Please consider enabling compat mode, or enabling "javascript.options.wasm_js_promise_integration" in "about:config".'
        );
      }
    }
    return workerResources;
  }
};
export {
  CacheManager,
  LogLevel,
  LoggerWithoutDebug,
  Model,
  ModelManager,
  ModelValidationStatus,
  POLYFILL_ETAG,
  Wllama,
  WllamaAbortError,
  WllamaError,
  WllamaRuntimeError,
  getHFFileSHA256,
  getHFModelSource,
  isValidGgufFile
};
