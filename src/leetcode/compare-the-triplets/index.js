function compareTriplets(a = [], b = []) {
  let aliceScore = 0;
  let bobScore = 0;

  for (let i in a) {
    if (a[i] > b[i]) aliceScore++;
    if (a[i] < b[i]) bobScore++;
  }

  // Alice's score first, Bob's score second
  return [aliceScore, bobScore];
}

const a1 = [1, 2, 3];
const b1 = [3, 2, 1];

const a2 = [5, 6, 7];
const b2 = [3, 6, 10];

const a3 = [17, 28, 30];
const b3 = [99, 16, 8];

console.log(compareTriplets(a3, b3));
