// https://leetcode.com/problems/number-of-islands/description/

export function numIslands(grid: string[][]): number {
  console.log("🚀 ~ numIslands ~ grid:", grid);
  let counter = 0;

  for (let i in grid) {
    const row = grid[i];
    console.log("🚀 ~ numIslands ~ row:", row);

    for (let j in row) {
      const cell = row[j];
      console.log("🚀 ~ numIslands ~ cell:", cell);
      // console.log(row);
    }
  }

  return 0;
}
