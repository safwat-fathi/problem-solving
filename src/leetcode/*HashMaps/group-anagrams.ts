// https://leetcode.com/problems/group-anagrams/

// const strs0 = ["eat", "tea", "tan", "ate", "nat", "bat"];
// const strs1 = ["eat", "tea", "ten", "ate", "net"];
// const strs2 = [""];
// const strs3 = ["a"];

// * O(n * k * log k) time complexity - O(n * k) space complexity
export const groupAnagrams = (strs: string[]): string[][] => {
  const foundGroups: Record<string, string[]> = {};

  for (let i = 0; i < strs.length; i++) {
    const word = strs[i];
    const wordSorted = word.split("").sort().join("");

    if (!foundGroups[wordSorted]) foundGroups[wordSorted] = [word];
    else foundGroups[wordSorted] = [...foundGroups[wordSorted], word];
  }

  return Object.values(foundGroups);
};
