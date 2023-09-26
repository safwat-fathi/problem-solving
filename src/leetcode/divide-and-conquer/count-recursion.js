// ** count all items in array
function count(arr = []) {
  if (arr[0] === undefined) return 0;
  return 1 + count(arr.splice(1));
}

console.log(count([1, 2, 3, 4, 4, 4, 4, 4, 4, 4]));
