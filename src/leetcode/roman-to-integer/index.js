const romanNumerals = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

/**
 * @param {string} s
 * @return {number}
 */
function romanToInt(s = "") {
  let i = 0;
  let result = 0;
  let calculated = {};

  while (i < s.length) {
    if (!calculated[i]) {
      if (s[i] === "I" && (s[i + 1] === "V" || s[i + 1] === "X")) {
        result += romanNumerals[s[i + 1]] - romanNumerals[s[i]];
        calculated[i + 1] = s[i + 1];
      } else if (s[i] === "X" && (s[i + 1] === "L" || s[i + 1] === "C")) {
        result += romanNumerals[s[i + 1]] - romanNumerals[s[i]];
        calculated[i + 1] = s[i + 1];
      } else if (s[i] === "C" && (s[i + 1] === "D" || s[i + 1] === "M")) {
        result += romanNumerals[s[i + 1]] - romanNumerals[s[i]];
        calculated[i + 1] = s[i + 1];
      } else {
        result += romanNumerals[s[i]];
      }
    }

    i++;
  }

  return result;
}

const s0 = "IV";
const s1 = "III";
const s2 = "LVIII";
const s3 = "MCMXCIV";

console.log(romanToInt(s3));
