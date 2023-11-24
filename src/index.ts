// import isValidSudoku from "./leetcode/Arrays/valid-sudoku";

import { oddFrequencySearch } from "./turing-challenges/odd-frequency-search";

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

// array of numbers that repeated even times except one number
const arr1 = [4, 1, 2, 3, 4, 2, 1, 3, 4];
const arr2 = [4, 2, 3, 4, 2, 1, 3];
const arr3 = [4, 2, 3, 4, 2];

console.log(oddFrequencySearch(arr1));
