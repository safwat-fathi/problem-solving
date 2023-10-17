// https://leetcode.com/problems/top-k-frequent-elements/

// const nums1 = [1, 1, 1, 2, 2, 3];
// const k1 = 2;
// const nums2 = [1];
// const k2 = 1;
// const nums3 = [1, 1, 3, 3];
// const k3 = 2;
// const nums4 = [1, 2, 2, 3, 3, 3, 4];
// const k4 = 2;
// const nums5 = [1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5];
// const k5 = 3;

// * O(n log n) time complexity
export const topKFrequent = (nums: number[], k: number): number[] => {
  const counts: Record<number, number> = {};
  const frequents: number[][] = Array(nums.length);
  const res: number[] = [];

  // find counts of every num
  for (let k in nums) {
    const num = nums[k];

    if (counts[num]) counts[num]++;
    else counts[num] = 1;
  }

  for (let k in counts) {
    const count = counts[k];

    if (frequents[count]) frequents[count].push(+k);
    else frequents[count] = [+k];
  }

  for (let i = frequents.length; i > 0; i--) {
    const freq = frequents[i];

    if (Array.isArray(freq)) {
      freq.forEach(el => {
        if (res.length !== k) res.push(el);
      });
    }
  }

  return res;
  // for (let k in counts) {
  //   const num = counts[k];

  //   frequents.push([+k, num]);
  // }

  // frequents.sort((a, b) => b[1] - a[1]);

  // while (i < k) {
  //   maxFrequents.push(frequents[i][0]);

  //   i++;
  // }

  // return maxFrequents.sort();
};
