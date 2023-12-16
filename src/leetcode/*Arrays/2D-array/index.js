function hourglassSum(arr) {
  let row = 0;
  let col = 0;
  let sum = 0;
  let currNode = 0;
  let currNodeVal = null;
  let maxSum = 0;
  let hourglassCounter = 0;
  let hourglassTopCounter = 0;
  let hourglassMidCounter = 0;
  let hourglassBottomCounter = 0;

  // while (hourglassCounter < 16) {
  while (currNode < 36) {
    // console.log(arr[0][0]);
    let tempSum = 0;

    // if (hourglassTopCounter < 3) {
    // currNodeVal = arr[row][col];
    //   sum = sum + currNodeVal;
    //   col++;
    //   hourglassTopCounter++;
    // }

    if (hourglassBottomCounter < 3) {
      row = row + 2;
      currNodeVal = arr[row][col];
      sum = sum + currNodeVal;
      col++;
    }

    // sum += currNodeVal;
    // sum += currNodeVal;

    // console.log("col:", col);
    // console.log("row:", row);
    // console.log(`currNodeVal *arr[${row}][${col}]*:`, currNodeVal);
    // console.log("sum += currNodeVal:", (sum += currNodeVal));

    // if (col < 5) {
    //   col++;
    // } else {
    //   col = 0;
    //   row++;
    // }
    currNode++;
    // console.log();
    // if (hourglassTopCounter < 3) {
    //   console.log("arr[row][col]:", arr[row][col]);
    //   console.log("arr[row][col + 1]:", arr[row][col + 1]);
    //   console.log("arr[row][col + 2]:", arr[row][col + 2]);

    //   tempSum = arr[row][col] + arr[row][col + 1] + arr[row][col + 2];
    //   console.log("tempSum:", tempSum);
    //   sum += tempSum;
    //   console.log("sum:", sum);
    //   hourglassTopCounter++;
    // }

    // if (col === 6) {
    //   col = 0;
    // }
    // col++;

    // hourglassCounter++;
  }

  return sum;
}

const arr1 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const arr2 = [
  [-9, -9, -9, 1, 1, 1],
  [0, -9, 0, 4, 3, 2],
  [-9, -9, -9, 1, 2, 3],
  [0, 0, 8, 6, 6, 0],
  [0, 0, 0, -2, 0, 0],
  [0, 0, 1, 2, 4, 0],
];

const arr3 = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0],
];

console.log(hourglassSum(arr3));
