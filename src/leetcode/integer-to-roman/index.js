const numerals = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
};

/**
 * @param {number} num
 * @return {string}
 */
function intToRoman(num = 0) {
  let valuesToCheck = [];
  let currValIdx = 0;

  let numResult = num;
  let romanResult = "";

  // if num is straight forward value
  if (numerals[num]) {
    return (romanResult = numerals[num]);
  }

  // if num is complicated
  for (let i in numerals) {
    if (num > i) {
      valuesToCheck.push(Number(i));
      currValIdx = valuesToCheck.length - 1;
    }
  }

  while (currValIdx >= 0) {
    if (numResult - valuesToCheck[currValIdx] >= 0) {
      numResult = numResult - valuesToCheck[currValIdx];
      romanResult += numerals[valuesToCheck[currValIdx]];
    } else {
      currValIdx--;
    }
  }

  return romanResult;
}

const s0 = 3;
const s1 = 4;
const s2 = 5;
const s3 = 58;
const s4 = 1994;
const s5 = 10;
const s6 = 50;
const s7 = 9;

console.log(intToRoman(s7));
