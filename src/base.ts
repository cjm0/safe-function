// 公共 js 方法

function log(...args: unknown[]) {
  console.log('safe-function', ...args)
}

export {
  log
}
