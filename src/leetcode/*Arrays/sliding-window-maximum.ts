// https://leetcode.com/problems/sliding-window-maximum/

export const maxSlidingWindow = (nums: number[], k: number): number[] => {
  const maxNums = [];

  for (let i = 0; i < nums.length - k + 1; i++) {
    const num = nums[i];

    let currMax = num;

    let j = 0;
    let nextIndex = i + 1;

    while (j < k - 1) {
      const newNum = nums[nextIndex];
      if (newNum > currMax) currMax = newNum;

      j++;
      nextIndex++;
    }

    maxNums.push(currMax);
  }

  return maxNums;
};
