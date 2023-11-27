import { useRef } from 'react';

function useMounted(cb) {
  if (typeof cb !== 'function') console.error('useMounted arguments[0] must be a function');
  const isMounted = useRef(false);
  if (isMounted.current === false) {
    isMounted.current = true;
    const hasFunc = cb();
    if (typeof hasFunc === 'function') {
      console.warn('callback should not invoke eventListener!');
      hasFunc();
    }
  }
  return { isMounted: isMounted.current };
}

export default useMounted;
