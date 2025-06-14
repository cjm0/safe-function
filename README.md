<p align="center">
  <img alt="NPM Downloads" src="https://img.shields.io/npm/d18m/safe-function">
  <img alt="NPM Version" src="https://img.shields.io/npm/v/safe-function">
  <img alt="NPM language" src="https://img.shields.io/badge/language-js-orange.svg">
  <a href="https://github.com/cjm0/safe-function/blob/main/LICENSE"><img alt="NPM License" src="https://img.shields.io/npm/l/safe-function"></a>
  <a href="https://cjm0.github.io/blog/page/list/"><img alt="个人博客" src="https://img.shields.io/badge/blog-@前端一锅煮-blue.svg"></a>
  <a href="https://www.zhihu.com/people/qian-duan-yiguo-zhu"><img alt="知乎" src="https://img.shields.io/badge/知乎-@前端一锅煮-blue.svg"></a>
</p>

# 安全 js 函数

封装常用 js 函数，自动处理报错，避免在使用的时候到处加 try catch

轻量，包大小 2kb

## 用处

使用前 
```js
try {
  let name = JSON.parse('{"name": "safe"}')
} catch (error) {
  console.log(error)
}

try {
  let age = JSON.parse('{"age": "18"}')
} catch (error) {
  console.log(error)
}

try {
  let urlObj = new URL(url);
} catch (error) {
  console.log(error)
}
```

使用后
```js
import { jsonPrase, newURL } from 'safe-function'

let obj = jsonPrase('{"name": "safe"}')
let age = jsonPrase('{"age": "18"}')

let urlObj = newURL(url);
```

## 快速开始

包下载：`npm i safe-function`

## 使用方法

CommonJS 格式：

`const { newURL } = require('safe-function');`

ES 模块格式：

`import { newURL } from 'safe-function';`

## api 列表和对应关系

### url

newURL(href) => new URL()

### JSON

jsonPrase(str) => JSON.parse()

jsonStringify(obj) => JSON.stringify()

### dom

getCptStyle(el, att, after) => getComputedStyle()

selectorOne(select) => document.querySelector()

selectorAll(select) => document.querySelectorAll()

### localStorage

setLocal(key, value, errCB) => localStorage.setItem()
- errCB 回调函数，当 localStorage 存储数据超过最大容量时执行

getLocal(key) => localStorage.getItem()

removeOneLocal(key) => localStorage.removeItem()

removeAllLocal() => localStorage.clear()

removeArrayLocal(keys) 
- 清除指定数组 keys 的数据

## 注意事项
