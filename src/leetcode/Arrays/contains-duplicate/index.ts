// https://leetcode.com/problems/contains-duplicate/

// const n1 = [1, 2, 3, 1];
// const n2 = [1, 2, 3, 4];
// const n3 = [0, 4, 5, 0, 3, 6];

export const containsDuplicate = (nums: number[]): boolean => {
  const obj: Record<number, any> = {};

  for (let num of nums) {
    if (typeof obj[num] !== "undefined") return true;
    else obj[num] = num;
  }
  console.log(obj);

  return false;
};
