// ** sum all items in array recursively

// ** Time complexity: O(n*n)
function sum(arr = []) {
  // base case
  if (arr.length === 0) return 0;
  if (arr.length < 2) return arr[0];
  // sum first element to the rest of the array
  return arr[0] + sum(arr.splice(1));
}

// ** Time complexity: O(n)
function sumOptimized(arr = [], index = 0) {
  if (index === arr.length) return 0;
  return arr[index] + sumOptimized(arr, index + 1);
}

// console.log(sum([1]));
console.log("sum: ", sum([1, -2, 3]));
console.log("sumOptimized: ", sumOptimized([1, -2, 3]));
