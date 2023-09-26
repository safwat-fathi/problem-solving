function countSwaps(a = []) {
  let n = a.length;

  let numSwaps = 0;

  let i;
  let j;

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (a[j] > a[j + 1]) {
        // swap(a[j], a[j + 1]);
        [a[j], a[j + 1]] = [a[j + 1], a[j]];
        checked = true;
        numSwaps++;
      }
    }
  }

  console.log(`Array is sorted in ${numSwaps} swaps.`);
  console.log(`First Element: ${a[0]}`);
  console.log(`First Element: ${a[n - 1]}`);
  return;
}

const arr1 = [1, 2, 3];
const arr2 = [3, 2, 1];
const arr3 = [4, 2, 3, 1];

console.log(countSwaps(arr3));
