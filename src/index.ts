// import { lengthOfLongestSubstring } from "./leetcode/HashMaps/*longest-substring-without-repeating-characters";

import { maxSlidingWindow } from "./leetcode/*Arrays/*sliding-window-maximum";
import { Queue } from "./leetcode/Queue/queue";

// const s1 = "abcabcbb";
// const s2 = "bbbbb";
// const s3 = "pwwkew";
// const s4 = " ";
// const s5 = "aab";
// const s6 = "dvdf";

// console.log(lengthOfLongestSubstring(s6));
// lengthOfLongestSubstring(s1);

const n1 = [1, 3, -1, -3, 5, 3, 6, 7];
const n2 = [1, 2, 3, 4, 5];
const n3 = [1];

// console.log(maxSlidingWindow(n1, 3));

const q = new Queue<number>();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

console.log(q.dequeue());
console.log(q.peek());
