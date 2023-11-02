// https://leetcode.com/problems/product-of-array-except-self/

export const productExceptSelf = (nums: number[]): number[] => {
  const res: number[] = [];
  let prefixNum = 1;
  let postfixNum = 1;

  // build prefix
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    res[i] = prefixNum;
    prefixNum *= currNum;
  }

  // build postfix
  for (let i = nums.length - 1; i >= 0; i--) {
    const currNum = nums[i];

    res[i] *= postfixNum;
    postfixNum *= currNum;
  }

  return res;
};
