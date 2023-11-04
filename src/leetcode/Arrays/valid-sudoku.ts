export default function isValidSudoku(board: string[][]): boolean {
  // check rows
  for (let i in board) {
    const row = board[i];
    const filledNumbers: Record<string, number> = {};

    for (let num of row) {
      if (+num > 0) {
        if (filledNumbers[+num]) return false;
        else filledNumbers[+num] = +num;
      }
    }
  }

  return true;
}
