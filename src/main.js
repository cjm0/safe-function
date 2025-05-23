/**
 * safe-function.js
 * @desc 封装常用 js 函数，自动处理报错，避免在使用的时候到处加 try catch
 * @link 函数参考：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects
 */

function log(...args) {
  console.log('', ...args);
}

/**
 * new URL 封装：js 获取 url 字符串的解析对象
 * @param url 一个表示绝对或相对 URL 的 DOMString。如果 url 是相对 URL，则会将 base 用作基准 URL。如果 url 是绝对 URL，则无论参数 base 是否存在，都将被忽略
 * @param base 一个表示基准 URL 的字符串，当 url 为相对 URL 时，它才会生效。如果未指定，它默认为 undefined
 * @return 返回一个新创建的 URL 对象
 * @example
  newURL('https://www.ccgegc.com:9003/book/51920/36340.html?a=1#search') => URL {
    href: 'https://www.ccgegc.com:9003/book/51920/36340.html?a=1#search',
    origin: 'https://www.ccgegc.com:9003',
    protocol: 'https:',
    username: '',
    password: '',
    host: 'www.ccgegc.com:9003',
    hostname: 'www.ccgegc.com',
    port: '9003',
    pathname: '/book/51920/36340.html',
    search: '?a=1',
    searchParams: URLSearchParams { 'a' => '1' },
    hash: '#search'
  }

  newURL('abc123') => URL {}
*/
function newURL(url, base = undefined) {
  try {
    return new URL(url, base);
  } catch (error) {
    log("_newURL error", error?.message);
  }
  return {};
}

/**
 * JSON.parse 封装：自动处理报错
 * @param text 要被解析成 JavaScript 值的字符串
 * @param reviver 可选。转换器，如果传入该参数 (函数)，可以用来修改解析生成的原始值，调用时机在 parse 函数返回之前
 * @return 与给定的 JSON text 相对应的 Object、Array、string、number、boolean 或者 null 值
 */
function jsonPrase(text, reviver) {
  try {
    return JSON.parse(text, reviver);
  } catch (error) {
    log("jsonPrase error", error?.message);
  }
  return null;
}

/**
 * JSON.stringify 封装：自动处理报错
 * @param value 将要序列化成 一个 JSON 字符串的值。
 * @param replacer 可选。如果该参数是一个函数，则在序列化过程中，被序列化的值的每个属性都会经过该函数的转换和处理；如果该参数是一个数组，则只有包含在这个数组中的属性名才会被序列化到最终的 JSON 字符串中；如果该参数为 null 或者未提供，则对象所有的属性都会被序列化。
 * @param space 可选。指定缩进用的空白字符串，用于美化输出（pretty-print）；如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者为 null），将没有空格。
 * @return 一个表示给定值的 JSON 字符串
 */
function jsonStringify(value, replacer, space) {
  try {
    return JSON.stringify(value, replacer, space)
  } catch (error) {
    log("jsonStringify error", error?.message);
  }
  return '';
}

export { 
  newURL,

  jsonPrase,
  jsonStringify,
}
