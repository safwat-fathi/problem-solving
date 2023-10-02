// https://leetcode.com/problems/binary-search/?envType=study-plan-v2&envId=binary-search
export const search = (nums: number[], target: number): number => {
  let low = 0;
  let high = nums.length;
  let mid = null;

  while (low <= high) {
    mid = Math.ceil((low + high) / 2);

    if (nums[mid] === target) return mid;

    if (nums[mid] < target) low = mid + 1;
    else high = mid - 1;
  }

  return -1;
};
