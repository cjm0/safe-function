
// rollup.config.js

const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const babel = require('@rollup/plugin-babel');
const json = require('@rollup/plugin-json');
const terser = require('@rollup/plugin-terser');

module.exports = {
  input: 'src/main.js', // 输入文件
  output: [
    {
      file: 'dist/safe-function.cjs.js', // CommonJS 格式输出文件
      format: 'cjs', // CommonJS 格式
      sourcemap: true, // 生成 source map
    },
    {
      file: 'dist/safe-function.esm.js', // ES 模块格式输出文件
      format: 'esm', // ES 模块格式
      sourcemap: true, // 生成 source map
    },
  ],
  plugins: [
    resolve(), // 解析 Node 模块
    commonjs(), // 转换 CommonJS 模块
    json(), // 支持 JSON 文件
    babel({ // 使用 Babel 转译代码
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // 排除 node_modules 中的文件
    }), 

    // 配置 @rollup/plugin-terser 来压缩代码和删除注释
    terser({
      format: {
        comments: false, // 删除所有注释
      },
      compress: { // 启用压缩
        drop_console: true, // 删除所有 console 语句
      },
      // mangle: true, // 启用变量名混淆
    }),
  ]
};