// localStorage 封装

import { log } from "./com.js";
import { jsonPrase, jsonStringify } from "./json.js";

// 往 localStorage 写入数据
// errCB 回调函数，当 localStorage 存储数据超过最大容量时执行
function setLocal(key, value, errCB) {
  if (!key) {
    return;
  }

  try {
    window.localStorage.setItem(key, jsonStringify(value))
  } catch (error) {
    log('setLocal', error)

    // 当 localStorage 存储数据超过最大容量时，会抛出一个错误 QuotaExceededError，表示配额超出错误
    // 缓存超过浏览器最大容量，则清空带 transcode_data_cache 的 key 的所有数据
    if (error.name === 'QuotaExceededError') {
      errCB && errCB();
    }
  }
};

// 获取 localStorage 数据
function getLocal(key) {
  if (!key) {
    return '';
  }

  try {
    const value = window.localStorage.getItem(key);
    return jsonPrase(value);
  } catch (error) {
    log('getLocal', error)
  }
};

// 清除某一个 key 的数据
function removeOneLocal(key) {
  window.localStorage.removeItem(key);
};

// 清空 localStorage 全部数据
function removeAllLocal() {
  window.localStorage.clear();
};

// 清除指定数组 keys 的数据
function removeArrayLocal(keys) {
  if (keys && keys.length) {
    keys.forEach((key) => {
      removeOneLocal(key);
    });
  }
};

export {
  setLocal,
  getLocal,
  
  removeOneLocal,
  removeAllLocal,
  removeArrayLocal,
}
