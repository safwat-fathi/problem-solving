// https://leetcode.com/problems/valid-anagram/

// const s1 = "anagram";
// const t1 = "nagaram";
// const s2 = "rat";
// const t2 = "car";
// const s3 = "aacc";
// const t3 = "ccac";
// const s4 = "cloud";
// const t4 = "could";

export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  // * O(n) time complexity - O(n) space complexity
  const sCounter: Record<string, number> = {};
  const tCounter: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    if (sCounter[sChar]) sCounter[sChar]++;
    else sCounter[sChar] = 1;

    if (tCounter[tChar]) tCounter[tChar]++;
    else tCounter[tChar] = 1;
  }

  for (let char in sCounter) {
    if (sCounter[char] !== tCounter[char]) return false;
  }

  return true;

  // * O(n log n) time complexity - O(n) space complexity
  // if (s.length !== t.length) return false;

  // const a = s.split("").sort();
  // const b = t.split("").sort();

  // for (let i = 0; i < s.length; i++) {
  //   const aChar = a[i];
  //   const bChar = b[i];

  //   if (aChar !== bChar) return false;
  // }

  // return true;

  // * O(n^2) time complexity - O(1) space complexity
  // for (let i = 0; i < s.length; i++) {
  //   const sChar = s[i];

  //   if (t.indexOf(sChar) >= 0) {
  //     const part1 = t.slice(0, t.indexOf(sChar));
  //     const part2 = t.slice(t.indexOf(sChar) + 1, t.length);
  //     t = part1 + part2;
  //   }
  // }

  // return t.length ? false : true;
};
