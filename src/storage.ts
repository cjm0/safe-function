// localStorage 封装

import { log } from './base'
import { jsonPrase, jsonStringify } from './json'

// 往 localStorage 写入数据
// errCB 回调函数，当 localStorage 存储数据超过最大容量时执行
function setLocal(key: string, value, errCB?: Function) {
  if (!key) {
    return
  }

  try {
    window.localStorage.setItem(key, jsonStringify(value))
  } catch (error) {
    log('setLocal', error)

    // 当 localStorage 存储数据超过最大容量时，会抛出一个错误 QuotaExceededError，表示配额超出错误
    // 缓存超过浏览器最大容量，则清空带 transcode_data_cache 的 key 的所有数据
    const err = error as Error;
    if (err.name === 'QuotaExceededError') {
      errCB && errCB()
    }
  }
}

// 获取 localStorage 数据
function getLocal(key: string): Object | null {
  if (!key) {
    return null
  }

  try {
    const value = window.localStorage.getItem(key)
    if (!value) {
      return null
    }
    return jsonPrase(value)
  } catch (error) {
    log('getLocal', error)
  }

  return null
}

// 清除某一个 key 的数据
function removeOneLocal(key: string) {
  window.localStorage.removeItem(key)
}

// 清空 localStorage 全部数据
function removeAllLocal() {
  window.localStorage.clear()
}

// 清除指定数组 keys 的数据
function removeArrayLocal(keys: string[]) {
  if (keys && keys.length) {
    keys.forEach((key) => {
      removeOneLocal(key)
    })
  }
}

export {
  setLocal,
  getLocal,
  
  removeOneLocal,
  removeAllLocal,
  removeArrayLocal,
}
