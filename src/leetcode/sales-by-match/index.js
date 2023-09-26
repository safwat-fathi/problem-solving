// URL on hacker rank : https://www.hackerrank.com/challenges/sock-merchant/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=warmup

function sockMerchant(n, arr) {
  let pairsCounter = 0;

  let i;
  for (i = 0; i < n; i++) {
    let matchIndex = arr.indexOf(arr[i], i + 1);

    if (matchIndex !== -1) {
      arr.splice(matchIndex, 1);
      pairsCounter++;
    }
  }

  return pairsCounter;
}
const nSocks = 5;
const socks = [10, 20, 20, 10, 10, 30, 50, 10, 20];

console.log(sockMerchant(nSocks, socks));
