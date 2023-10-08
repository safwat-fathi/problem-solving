// https://leetcode.com/problems/debounce

type F = (...args: any[]) => void;

export const debounce = (fn: F, t: number): F => {
  let timeoutId: any;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, t);
  };
};
