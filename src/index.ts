// import { lengthOfLongestSubstring } from "./leetcode/HashMaps/*longest-substring-without-repeating-characters";

import { numIslands } from "./leetcode/*Arrays/*2D-array/*number-of-islands";
import { Queue } from "./leetcode/Queue/queue";

// const s1 = "abcabcbb";
// const s2 = "bbbbb";
// const s3 = "pwwkew";
// const s4 = " ";
// const s5 = "aab";
// const s6 = "dvdf";

// console.log(lengthOfLongestSubstring(s6));
// lengthOfLongestSubstring(s1);

// const n1 = [1, 3, -1, -3, 5, 3, 6, 7];
// const n2 = [1, 2, 3, 4, 5];
// const n3 = [1];

// console.log(maxSlidingWindow(n1, 3));

const grid1 = [
  ["1", "1", "1", "1", "0"],
  ["1", "1", "0", "1", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "0", "0", "0"],
]; // 1

const grid2 = [
  ["1", "1", "0", "0", "0"],
  ["1", "1", "0", "0", "0"],
  ["0", "0", "1", "0", "0"],
  ["0", "0", "0", "1", "1"],
]; // 3

numIslands(grid1);
