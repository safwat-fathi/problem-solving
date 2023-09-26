function quickSort(arr = []) {
  if (arr.length < 2) return arr;

  let pivot = arr[0];
  let less = [];
  let greater = [];
  let subArray = arr.slice(1);

  for (let i = 0; i < subArray.length; i++) {
    if (subArray[i] < pivot) less.push(subArray[i]);
    if (subArray[i] > pivot) greater.push(subArray[i]);
  }

  return quickSort(less).concat([pivot], quickSort(greater));
}

console.log(quickSort([9, 3, 0, 6]));
// console.log(["wdwd"].concat([4], ["wdwdwd", "wdwdwd"]));
