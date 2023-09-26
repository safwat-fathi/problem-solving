function rotLeft(a = [], d = 0) {
  if (a.length === d || a.length === 0) return a;

  let untouched = a.slice(d);
  let rotatedArr = [];

  while (d > 0) {
    rotatedArr.push(a.shift());
    d--;
  }

  return [...untouched, ...rotatedArr];
}

const arr1 = [1, 2, 3, 4, 5];
console.log(rotLeft(arr1, 4));
