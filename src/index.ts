// import isValidSudoku from "./leetcode/Arrays/valid-sudoku";

import { Bank, Person } from "./turing-challenges/monopoly-bank";

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

const person1 = new Person("Jake", 1000);
const person2 = new Person("Luna", 500);

const chase = new Bank("JP Morgan Chase");
const wells_fargo = new Bank("Wells Fargo");

console.log(chase.open_account(person1));
console.log(wells_fargo.open_account(person1));
console.log(chase.deposit(person1, 1000));
console.log(chase.withdrawal(person1, 250));
// console.log(chase.withdrawal(person1, 25000));

console.log(chase.transfer(person1, wells_fargo, 250));
console.log(chase.transfer(person2, wells_fargo, 250));
// console.log(chase.transfer(person1, wells_fargo, 25000));
console.log(chase.total_cash());
console.log(wells_fargo.total_cash());
