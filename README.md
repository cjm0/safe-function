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

## 使用

CommonJS 格式：

`const { newURL } = require('safe-function');`

ES 模块格式：

`import { newURL } from 'safe-function';`

## 函数列表对应关系

newURL() => new URL()

jsonPrase() => JSON.parse()
jsonStringify() => JSON.stringify()

## 注意事项
