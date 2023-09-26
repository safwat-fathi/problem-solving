/**
 * @param {number} n
 * @returns {number}
 */

function climbStairs(n = 0) {
  const memo = {};

  function _climbStairs(n) {
    if (n === 1) return 1;
    if (n === 2) return 2;

    if (n in memo) return memo[n];

    memo[n] = _climbStairs(n - 1) + _climbStairs(n - 2);

    return memo[n];
  }

  return _climbStairs(n);
}

const testCase0 = 2;
const testCase1 = 3;
const testCase2 = 4;
const testCase3 = 45;

console.log(climbStairs(testCase3));
