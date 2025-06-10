// rollup.config.js

const resolve = require('@rollup/plugin-node-resolve'); // 引入 Node.js 内置模块解析插件
const commonjs = require('@rollup/plugin-commonjs'); // 引入 CommonJS 支持
const babel = require('@rollup/plugin-babel'); // 引入 Babel 支持
const json = require('@rollup/plugin-json'); // 引入 JSON 支持
const terser = require('@rollup/plugin-terser'); // 引入 Terser 支持
const typescript = require('@rollup/plugin-typescript'); // 引入 TypeScript 支持

module.exports = {
  input: 'src/main.ts', // 输入文件
  output: [
    {
      file: 'dist/safe-function.esm.js', // ES 模块格式输出文件
      format: 'esm', // ES 模块格式
      sourcemap: true, // 生成 source map
    },
    {
      file: 'dist/safe-function.cjs.js', // CommonJS 格式输出文件
      format: 'cjs', // CommonJS 格式
      sourcemap: true, // 生成 source map
    },
    {
      file: 'dist/safe-function.umd.js', // UMD 模块格式输出文件
      format: 'umd', // ES 模块格式
      name: 'safeFn', // 全局变量名
      sourcemap: true, // 生成 source map
    },
  ],
  plugins: [
    typescript({
      noEmit: true, // 禁止 TypeScript 编译输出，只做类型检查
    }),
    resolve(), // 解析 Node 模块
    commonjs(), // 转换 CommonJS 模块
    json(), // 支持 JSON 文件
    babel({ // 使用 Babel 转译代码
      babelHelpers: 'bundled',
      exclude: 'node_modules/**', // 排除 node_modules 中的文件
      presets: [ // 将 ts 代码转换为兼容目标环境的 js 代码
        ["@babel/preset-env", { targets: "defaults" }],
        "@babel/preset-typescript",
      ],
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