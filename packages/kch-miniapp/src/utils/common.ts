/**
 * @description 防抖函数
 * @param { Function } fn 执行的函数
 * @param { number } delay 延迟执行时间
 * @param { boolean } isImmediate 第一次是否立即执行
 */
export const debounce = (fn: (...arg: any[]) => void, delay: number, isImmediate = false) => {
  let timer: ReturnType<typeof setTimeout> | null = null;
  let count = 0; // 用于计数，处理立即执行
  return function _debounce(...arg: any[]) {
      if (timer) clearTimeout(timer);
      if (count === 0 && isImmediate) {
          fn(...arg);
      } else {
          timer = setTimeout(() => {
              fn(...arg);
          }, delay);
      }
      count += 1;
  };
};

/**
* @description 节流
* @param { Function } fn 执行的函数
* @param { number } delay 延迟执行时间
*/
export const throttle = <T>(fn: (...arg: any[]) => void, delay: number) => {
  let timeStamp = 0; //设置时间戳
  return (...args: Array<T>) => {
      //获取当前时间戳
      const currentTime = new Date().getTime();
      //判断当前的时间戳与上一次点击的时间戳的差是否大于time
      if (currentTime - timeStamp > delay) {
          fn(...args);
          timeStamp = currentTime;
      }
  };
};