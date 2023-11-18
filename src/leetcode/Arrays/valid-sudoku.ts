export default function isValidSudoku(board: string[][]): boolean {
  // console.log("🚀 ~ isValidSudoku ~ board:", board);
  let valid = true;
  const filledNumbers: Record<any, any> = {};

  // const pointerRow = 0;
  // const pointerCol = 0;
  // const currRow = board[pointerRow];
  // console.log("🚀 ~ isValidSudoku ~ currRow:", currRow);
  // const currCol = board[pointerRow][pointerCol];
  // console.log("🚀 ~ isValidSudoku ~ currCol:", currCol);
  // check rows
  for (let i in board) {
    const row = board[i];
    let colPointer = 0;
    const numInCol = board[i][colPointer];
    console.log("🚀 ~ numInCol:", numInCol);
    // filledNumbers[`row-${i}`] = row;
    for (let j in row) {
      // console.log("🚀 ~ j:", j);
      const numInRow = row[j];
      // console.log("🚀 ~  ~ i:", i);
      // const
      // console.log("🚀 ~ numInRow:", numInRow);

      // if (+num > 0) {
      //   if (filledNumbers[+num]) return false;
      //   else filledNumbers[+num] = +num;
      // }
    }
    colPointer++;
  }

  console.log("🚀 ~ isValidSudoku ~ filledNumbers:", filledNumbers);
  return valid;
}
