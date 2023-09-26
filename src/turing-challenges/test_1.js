function solution(cards = []) {
  const track = {};
  let max = 0;

  for (let i = 0; i < cards.length; i++) {
    for (let j = 0; j < cards[i].length; j++) {
      const element = cards[i][j];
      // console.log(element);
      if (track[element]) {
        track[element]++;
      } else {
        track[element] = 1;
      }
    }
  }

  for (let key in track) {
    if (track[key] === 1 && max < key) {
      max = key;
    }
  }

  if (max > 0) return max;

  return -1;
}

const testCase0 = [
  [5, 5],
  [2, 2],
];
const testCase1 = [
  [5, 7, 3, 9, 4, 9, 8, 3, 1],
  [1, 2, 2, 4, 4, 1],
];

console.log(solution(testCase0));
