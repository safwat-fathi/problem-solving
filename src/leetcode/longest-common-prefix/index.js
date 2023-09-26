/**
 *
 * @param {string[]} strs array of strings
 * @return {string}
 */

function longestCommonPrefix(strs = []) {
  let prefix = strs[0];

  if (strs === null || strs.length === 0) return "";

  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
    }
  }

  return prefix;
}

const strs1 = ["flower", "flow", "flight", "fly"];
const strs2 = ["dog", "racecar", "car"];
const strs3 = ["see", "seen", "seek", "sea"];
const strs4 = ["seen", "", ""];
const strs5 = ["aaa", "aa", "aaa"];

console.log(longestCommonPrefix(strs1));
