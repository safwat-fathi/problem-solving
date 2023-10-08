// https://leetcode.com/problems/container-with-most-water

// const h1 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
// const h2 = [1, 1];
// const h3 = [1, 2, 1];
// const h4 = [7, 8, 2, 10];
// const h5 = [2, 3, 4, 5, 18, 17, 6];

export const maxArea = (height: number[]): number => {
  const n = height.length;
  let p1 = 0;
  let p2 = n - 1;
  let maxArea = 0;

  while (p1 < p2) {
    const currHeight = height[p1] < height[p2] ? height[p1] : height[p2];
    const area = (p2 - p1) * currHeight;

    if (area > maxArea) maxArea = area;

    if (height[p1] < height[p2]) p1++;
    else if (height[p2] < height[p1] || height[p1] === height[p2]) p2--;
    // else if (height[p1] === height[p2]) p2--;
  }

  return maxArea;
};
