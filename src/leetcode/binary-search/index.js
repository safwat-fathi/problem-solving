// find number in a sorted array
function binSrch(arr = [], num = 0) {
  let low = 0;
  let high = arr.length - 1;
  let mid = null;

  while (low <= high) {
    mid = Math.ceil((low + high) / 2);

    if (arr[mid] === num) return mid;
    if (arr[mid] < num) low = mid + 1;
    else high = mid - 1;
  }

  return null;
}

const arr = [1, 2, 3, 4, 5, 6];

console.log(binSrch(arr, 5));
