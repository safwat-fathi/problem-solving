/**
 * @param {number} numRows
 * @returns {number[]} []
 */

function generatePascalTriangle(numRows = 0) {
  const rows = [];
  let lastRow = [];
  let newRow = [];
  let row = 1;
  let i = 0;

  while (row <= numRows) {
    if (row === 1) {
      lastRow = [1];
      rows.push(lastRow);
    } else if (row === 2) {
      lastRow = [1, 1];
      rows.push(lastRow);
    } else {
      while (i < lastRow.length) {
        if (i === 0) {
          newRow.push(1);
        }

        if (i > 0) {
          newRow.push(lastRow[i] + lastRow[i - 1]);
        } else {
        }

        if (i === lastRow.length - 1) {
          newRow.push(1);
        }

        i++;
      }

      rows.push(newRow);
      lastRow = [...newRow];
      i = 0;
    }

    newRow = [];
    row++;
  }

  return rows;
}

const testCase0 = 1;
const testCase1 = 5;
const testCase2 = 2;
const testCase3 = 200;

console.log(generatePascalTriangle(testCase3));
