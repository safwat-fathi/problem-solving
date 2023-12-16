// * https://leetcode.com/problems/longest-substring-without-repeating-characters/

export function lengthOfLongestSubstring(s: string): number {
  // const cache: Record<
  //   "chars" | "substrings",
  //   Record<string, number | boolean>
  // > = {
  //   chars: {},
  //   substrings: {},
  // };
  const substrings: Record<string, number> = {};
  let currMax = 0;
  let currSubstring = "";
  // window pointers
  let left = 0;
  let right = 0;

  while (right < s.length) {
    const char = s[left];
    console.log("🚀 ~ lengthOfLongestSubstring ~ char:", char);
    // console.log("🚀 ~ lengthOfLongestSubstring ~ char :", char);
    // if (currSubstring.length === 0) currSubstring += char;
    if (currSubstring.includes(char)) {
      // console.log("char found", char);
      // console.log("curr substring", currSubstring);

      currSubstring = s.substring(left, right);
      console.log(
        "🚀 ~ lengthOfLongestSubstring ~ currSubstring:",
        currSubstring
      );
      left = right;
      substrings[currSubstring] = currSubstring.length;
      currSubstring = "";
    }
    // // console.log(
    // //   "🚀 ~ lengthOfLongestSubstring ~ currSubstring:",
    // //   currSubstring
    // // );

    currSubstring += char;
    // substrings[currSubstring] = currSubstring.length;

    // left++;
    right++;
  }
  console.log("🚀 ~ lengthOfLongestSubstring ~ substrings:", substrings);

  // for (const char of s) {
  //   if (cache.chars[char]) {
  //     cache.chars = {};
  //     cache.substrings[currSubstring] = currSubstring.length;
  //     currSubstring = "";
  //   }

  //   cache.chars[char] = true;
  //   currSubstring += char;
  //   currMax = Math.max(currMax, currSubstring.length);
  // }
  // console.log("🚀 ~ lengthOfLongestSubstring ~ cache:", cache);

  return currMax;
}
