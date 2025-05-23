/**
 * safe-function.js
 * @desc 封装常用 js 函数，自动处理报错，避免在使用的时候到处加 try catch
 * @link 函数参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects
 */

import { newURL } from "./url.js";
import { jsonPrase, jsonStringify } from "./json.js";
import { 
  setLocal,
  getLocal,
  removeOneLocal,
  removeAllLocal,
  removeArrayLocal,
} from "./storage.js";

export { 
  newURL,

  jsonPrase,
  jsonStringify,

  setLocal,
  getLocal,
  removeOneLocal,
  removeAllLocal,
  removeArrayLocal,
}
