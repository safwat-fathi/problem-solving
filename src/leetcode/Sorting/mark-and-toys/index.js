function maximumToys(prices = [], k = 0) {
  let uniquePrices = [...new Set(prices)];
  let maxItems = 0;
  let i;
  let result = 0;

  for (i in uniquePrices) {
    if (
      (uniquePrices[i] < k || uniquePrices[i] === k) &&
      result + uniquePrices[i] < k
    ) {
      result = result + uniquePrices[i];
      maxItems++;
    }
  }

  return maxItems;
}

const prices0 = [1, 1, 3, 4];
const prices1 = [1, 2, 3, 4];
const prices2 = [1, 12, 5, 111, 200, 1000, 10];
const prices3 = [
  33324560, 77661073, 31948330, 21522343, 97176507, 5724692, 24699815, 12079402,
  6479353, 28430129, 42427721, 57127004, 26256001, 29446837, 65107604, 9809008,
  65846182, 8470661, 13597655, 360,
];
const k0 = 5;
const k1 = 7;
const k2 = 50;
const k3 = 100000;

console.log(maximumToys(prices0, k0));
