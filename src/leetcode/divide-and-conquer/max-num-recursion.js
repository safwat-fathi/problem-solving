// * find maximum number
function findMax(arr = []) {
  // Returns first number if arr length is 1
  if (arr.length === 1) return arr[0];

  // Returns the greater number between the first 2 numbers in an array
  if (arr.length === 2) return arr[0] > arr[1] ? arr[0] : arr[1];

  const subMax = findMax(arr.splice(1));
  return arr[0] > subMax ? arr[0] : subMax;
}

console.log(findMax([1, 2, 3]));
