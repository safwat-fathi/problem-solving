// import isValidSudoku from "./leetcode/Arrays/valid-sudoku";

import orderByAge, { TData } from "./turing-challenges/age-ordering";

// const board1 = [
//   ["5", "3", ".", ".", "7", ".", ".", ".", "."],
//   ["6", ".", ".", "1", "9", "5", ".", ".", "."],
//   [".", "9", "8", ".", ".", ".", ".", "6", "."],
//   ["8", ".", ".", ".", "6", ".", ".", ".", "3"],
//   ["4", ".", ".", "8", ".", "3", ".", ".", "1"],
//   ["7", ".", ".", ".", "2", ".", ".", ".", "6"],
//   [".", "6", ".", ".", ".", ".", "2", "8", "."],
//   [".", ".", ".", "4", "1", "9", ".", ".", "5"],
//   [".", ".", ".", ".", "8", ".", ".", "7", "9"],
// ];

// console.log(isValidSudoku(board1));

const exData: TData = [
  ["Frank", 33],
  ["Stacy", 15],
  ["Juan", 24],
  ["Dom", 32],
  ["Steve", 24],
  ["Jill", 24],
];

orderByAge(exData);
