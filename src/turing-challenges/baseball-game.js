// * You are keeping score for a baseball game with strange rules. The game consists of several rounds, where the scores of past rounds may affect future rounds' scores.
// * At the beginning of the game, you start with an empty record. You are given a list of strings ops, where ops [1] is the ith operation you must apply to the record and is one of the following:
// * 1. An integer x - Record a new score of x.
// * 2. "+" - Record a new score that is the sum of the previous two scores. It is guaranteed there will always be two previous scores.
// * 3. "D" - Record a new score that is double the previous score. It is guaranteed there will always be a previous score.
// * 4. "C" - Invalidate the previous score, removing it from the record. It is guaranteed there will always be a previous score. Return the sum of all the scores on the record.

// * Example 1:
// * Input: ops = ["5","2", "C", "D","+"] Output: 30
// * Explanation:
// * "5" - Add 5 to the record, record is now [5].
// * "2" -
// * "C" "D"
// * -
// * -
// * "+" -
// * Add 2 to the record, record is now [5, 2].
// * Invalidate and remove the previous score, record is now [5].
// * Add 25 = 10 to the record, record is now [5, 10].
// * Add 5 10 15 to the record, record is now [5, 10, 15].
// * The total sum is 5 + 10 + 15 = 30.

// * Example 2:
// * Input: ops = ["5", "-2", "4", "C", "D","9","+","+"] Output: 27
// * Explanation:
// * "5"
// * "-2"
// * "4"
// * "C"
// * "יס"
// * -
// * -
// * -
// * -
// * "9"
// * -
// * -
// * Add 5 to the record, record is now [5].
// * Add -2 to the record, record is now [5, -2].
// * Add 4 to the record, record is now [5, -2, 4].
// * Invalidate and remove the previous score, record is now [5, -2].
// * Add 2-2-4 to the record, record is now [5, -2, -4].
// * Add 9 to the record, record is now [5, -2, -4, 9].
// * Add -4+95 to the record, record is now [5, -2, -4, 9, 5].
// * Add 95 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// * = The total sum is 5 + 2 + 4 + 9 +5 +14= 27.

function calPoints(ops = []) {
  let i;
  let result = null;
  let record = [];

  for (i = 0; i < ops.length; i++) {
    if (!isNaN(+ops[i])) {
      record.push(+ops[i]);
    }

    if (ops[i] === "C") {
      record.pop();
    }

    if (ops[i] === "D") {
      record.push(record[record.length - 1] * 2);
    }

    if (ops[i] === "+") {
      record.push(record[record.length - 2] + record[record.length - 1]);
    }
  }

  result = record.reduce((a, b) => a + b);

  return result;
}

const ops1 = ["5", "2", "C", "D", "+"];
const ops2 = ["5", "-2", , "4", "C", "D", , "9", "+", "+"];
console.log("5 2 C D +".split(" "));
// console.log(calPoints(ops2));
