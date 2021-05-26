/**
 * 判断对象是否有指定属性
 * @param {Object} obj 
 * @param {String} key 
 * @returns 
 */
export function hasKey (obj, key) {
    if (!obj || !key) return null
    return Object.prototype.hasOwnProperty.call(obj, key)
}

/**
 * 函数防抖 短时间内多次触发同一事件
 * @param { function } func
 * @param { number } wait 延迟执行毫秒数
 * @param { boolean } immediate  true 表立即执行，false 表非立即执行
 */
 export function debounce(func, wait = 1000, immediate = false) {
    let timeout
    return function () {
        let context = this
        let args = arguments
        if (timeout) clearTimeout(timeout)
        if (immediate) {
            let callNow = !timeout
            timeout = setTimeout(() => {
                timeout = null
            }, wait)
            if (callNow) func.apply(context, args)
        } else {
            timeout = setTimeout(() => {
                func.apply(context, args)
            }, wait)
        }
    }
}

/**
 * 函数节流 指连续触发事件但是在 n 秒中只执行一次函数
 * @param { function } func 函数
 * @param { number } wait 延迟执行毫秒数
 * @param { number } type 1 表时间戳版，2 表定时器版
 */
export function throttle(func, wait, type = 2) {
    let previous, timeout
    if (type === 1) {
        previous = 0
    } else if (type === 2) {
        timeout = null
    }
    return function () {
        let context = this
        let args = arguments
        if (type === 1) {
            let now = Date.now()
            if (now - previous > wait) {
                func.apply(context, args)
                previous = now
            }
        } else if (type === 2) {
            if (!timeout) {
                timeout = setTimeout(() => {
                    timeout = null
                    func.apply(context, args)
                }, wait)
            }
        }
    }
}