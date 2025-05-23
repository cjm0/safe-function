// json 相关封装

import { log } from "./com.js";

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
  jsonPrase,
  jsonStringify
}