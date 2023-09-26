/**
 * @param {number[]} nums
 * @param {number} target
 * @returns {number[]}
 */

function twoSum(nums = [], target = 0) {
  let prevValues = {};

  for (let i in nums) {
    let diff = target - nums[i];

    if (typeof prevValues[diff] !== "undefined") {
      return [prevValues[diff], Number(i)];
    } else {
      prevValues[nums[i]] = Number(i);
    }
  }
}

const a0 = [2, 7, 11, 15]; // [0, 1]
const target0 = 9;
const a1 = [3, 2, 4]; // [1, 2]
const target1 = 6;
const a2 = [3, 3]; // [0, 1]
const target2 = 6;
const a3 = [0, 4, 3, 0]; // [0, 3]
const target3 = 0;
const a4 = [3, 2, 3]; // [0, 2]
const target4 = 6;
const a5 = [2, 5, 5, 11]; // [1, 2]
const target5 = 10;

console.log(twoSum(a0, target0));
