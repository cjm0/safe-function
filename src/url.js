// url 相关封装

import { log } from "./com.js";

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

export {
  newURL
}