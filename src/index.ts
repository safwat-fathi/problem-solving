// import isValidSudoku from "./leetcode/Arrays/valid-sudoku";

import { PatternGenerator } from "./turing-challenges/pattern-generator";

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

type TPatternChars = "." | "#";

const h: Record<TPatternChars, RegExp> = {
  ".": /^[A-Z]+/,
  "#": /^[0-9]+/,
};

let valid = true;

const regexStr = ".#.";
const chars = "A3B";

const pg = new PatternGenerator();

console.log(pg.verify(chars, regexStr));
