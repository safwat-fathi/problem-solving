/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
function findJudge(n = 0, trust = []) {
  if (trust.length === 0 && n === 1) return n;
  if (trust.length === 0) return -1;

  const trusts = {};

  for (let i = 0; i < trust.length; i++) {
    const currTrust = trust[i];

    trusts[currTrust[0]] ? --trusts[currTrust[0]] : (trusts[currTrust[0]] = -1);
    trusts[currTrust[1]] ? ++trusts[currTrust[1]] : (trusts[currTrust[1]] = 1);
  }

  // console.log("trusts:", trusts);

  for (let key in trusts) {
    if (trusts[key] === n - 1) return key;
  }

  return -1;
}

const testCase0 = [
  [1, 3],
  [2, 3],
  [3, 1],
]; // n = 3 -> -1
const testCase1 = [
  [1, 3],
  [2, 3],
]; // n = 3 -> 3
const testCase2 = [[1, 2]]; // n = 2 -> 2
const testCase3 = [
  [1, 3],
  [1, 4],
  [2, 3],
  [2, 4],
  [4, 3],
]; // n = 4 -> 3
const testCase4 = [
  [1, 2],
  [2, 1],
]; // n = 2 -> -1

console.log(findJudge(2, testCase4));
