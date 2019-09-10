//  函数节流
export const throttle = (fn, delay = 200) => {
  let timer = null
  return function (...arrs) {
    timer && clearTimeout(timer)
    timer = setTimeout(() => {
      fn.apply(this, arrs)
    }, delay)
  }
}
