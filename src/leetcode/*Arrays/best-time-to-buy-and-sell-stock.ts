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
