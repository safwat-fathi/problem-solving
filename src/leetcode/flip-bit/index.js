/**
 * This is a dummy description of function
 * @param {number[]} bulbs Accepts array of integers (1 or 0)
 * @returns {number} Returns integer representing cost of flipping bits
 */
function flipBitsCost(bulbs = []) {
  let cost = 0;
  let i;

  for (i in bulbs) {
    if (cost % 2 !== 0) bulbs[i] = Number(!bulbs[i]);

    if (bulbs[i] % 2 !== 1) cost++;
  }

  return cost;
}

const a1 = [1, 0, 1, 1, 1];
const a2 = [1, 1, 1];
const a3 = [0, 1, 0, 1, 1, 0, 1, 1];

console.log(flipBitsCost(a2));
