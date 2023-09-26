function jumpingOnClouds(c = []) {
  let i = 0;
  let currentCloud = 0;
  let nextCloud = 1;
  let nextToNextCloud = 2;
  let totalJumps = 0;

  if (c.length < 3 && c[c.length - 1] === 0) {
    return 1;
  }

  while (i < c.length) {
    if (c[currentCloud] === 0 && c[nextToNextCloud] === 0) {
      totalJumps++;

      currentCloud = nextToNextCloud;
      nextCloud = currentCloud + 1;
      nextToNextCloud = currentCloud + 2;
    } else if (c[currentCloud] === 0 && c[nextCloud] === 0) {
      totalJumps++;

      currentCloud = nextCloud;
      nextCloud = currentCloud + 1;
      nextToNextCloud = currentCloud + 2;
    }

    i++;
  }

  return totalJumps;
}

const c0 = [0, 1, 0]; // 1
const c1 = [0, 0, 1, 0, 0, 1, 0]; // 4
const c2 = [0, 0, 0, 0, 1, 0]; // 3
const c3 = [0, 1, 0, 0, 1, 0, 0]; // 4
const c4 = [0, 1, 0, 1, 0, 0, 0]; // 3
const c5 = [
  0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0,
  1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0,
  1, 0, 1, 0, 1, 0, 0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0,
  1, 0, 0, 1, 0, 1, 0,
]; // 46
const c6 = [0, 0]; // 1

console.log(jumpingOnClouds(c5));
