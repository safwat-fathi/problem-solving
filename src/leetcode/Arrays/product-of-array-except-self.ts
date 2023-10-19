// https://leetcode.com/problems/product-of-array-except-self/

export const productExceptSelf = (nums: number[]): number[] => {
  console.log("🚀 ~ nums:", nums);
  const prefix: number[] = [];
  const postfix: number[] = [];
  const res: number[] = [];
  // let totalProduct = nums[0];
  // let totalProduct = currNum === 0 ? currNum : 1;

  // build prefix
  for (let i = 0; i < nums.length; i++) {
    const currNum = nums[i];
    if (i - 1 >= 0) prefix.push(currNum * prefix[prefix.length - 1]);
    else prefix.push(currNum * 1);
  }

  // build postfix
  for (let i = nums.length - 1; i >= 0; i--) {
    const prevNum = i < nums.length - 1 ? nums[i + 1] : 1;
    const currNum = nums[i];
    // const currPrefix = prefix[i];
    // console.log("🚀 ~ prevNum:", prevNum);
    // console.log("🚀 ~ currNum:", currNum);

    // postfix.push(currNum * prevNum);
    if (i - 1 >= 0) postfix.push(prevNum * postfix[postfix.length - 1]);
    else postfix.push(prevNum * 1);
  }

  console.log("prefix: ", prefix);
  console.log("postfix: ", postfix);

  // for (let i = 0; i < nums.length; i++) {
  //   const currNum = nums[i];
  //   // console.log("🚀 ~ totalProduct:", totalProduct / currNum);
  //   // res.push(totalProduct / currNum);
  // }

  // console.log(totalProduct);

  return res;
};
