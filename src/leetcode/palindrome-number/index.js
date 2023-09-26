/**
 * @param {number} x
 * @returns {boolean}
 */

function isPalindrome(x = 0) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let reversedNum = 0;

  while (x > reversedNum) {
    reversedNum = reversedNum * 10 + (x % 10);
    x = x / 10;
    console.log("reversedNum: ", reversedNum);
    console.log("x: ", x);
  }

  return x == reversedNum || x == reversedNum / 10;
}

const x0 = 121; // true
const x1 = -121; // false
const x2 = 123; // false
const x3 = 10; // false
const x4 = 1000021; // false
const x5 = 11; // true

console.log(isPalindrome(x0));
