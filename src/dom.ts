// dom 相关方法封装

import { log } from './base'

// 保存 window.getComputedStyle
let originGetComputedStyle = window.getComputedStyle

/**
 * 获取元素最终计算样式
 * @param el 元素对象
 * @param att 属性名
 * @param after 伪类选择器：默认 null，可传 ::after ::before 获取伪类元素的计算属性
 * @return 计算样式对象或者单个属性值
 */
function getCptStyle(el: HTMLElement, att: string = '', after: string | null = null): any {
  if (!el) {
    return ''
  }

  // 如过 window.getComputedStyle 被篡改，则使用 iframe 获取原始的 window.getComputedStyle
  if (!String(originGetComputedStyle).includes('native code')) {
    const iframe = document.createElement('iframe')
    iframe.style.display = 'none'

    document.body.appendChild(iframe)
    if (iframe.contentWindow) {
      originGetComputedStyle = iframe.contentWindow.getComputedStyle
    }
    
    iframe.remove()
  }

  const computed = originGetComputedStyle(el, after)
  return att ? computed[att as keyof CSSStyleDeclaration] : computed
}

/**
 * 通过选择器获取单个元素
 * @param select 选择器字符串
 * @return 获取到的元素对象
 */
function selectorOne(select: string): HTMLElement | null {
  try {
    return document.querySelector(select) as HTMLElement
  } catch (error) {
    log('selectorOne err', error)
  }
  return null
}
/**
 * 通过选择器获取多个元素
 * @param select 选择器字符串
 * @return 获取到的元素对象数组
 */
function selectorAll(select: string): NodeListOf<HTMLElement> | [] {
  try {
    return document.querySelectorAll(select) as NodeListOf<HTMLElement>
  } catch (error) {
    log('selectorAll err', error)
  }
  return []
}

export {
  getCptStyle,
  selectorOne,
  selectorAll,
}