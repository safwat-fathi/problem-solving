export function maxProfit(prices: number[]): number {
  let min = Number.MAX_VALUE;
  let currProfit = 0;

  for (let i = 0; i < prices.length; i++) {
    const currPrice = prices[i];

    if (currPrice < min) {
      min = currPrice;
    }

    if (currPrice - min > currProfit) {
      currProfit = currPrice - min;
    }
  }

  return currProfit;
}

// const p1 = [2, 1, 2, 1, 0, 1, 2]; // 2
// const p2 = [7, 1, 5, 3, 6, 4]; // 5
// const p3 = [7, 6, 4, 3, 1]; // 0
