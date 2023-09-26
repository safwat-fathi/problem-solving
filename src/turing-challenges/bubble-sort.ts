// * Write an implementation of bubble sort that does not use any custom classes. You'll likely want to use methods and will surely needs arrays and a while loop.

// const a1 = [1, 0, 3, 2];
// const a2 = [5, 2, 1, 4,3];

const swap = (a: any[], indexA: any, indexB: any) => {
  let temp = a[indexA];
  a[indexA] = a[indexB];
  a[indexB] = temp;

  return a;
};

export const bubbleSort = (a: number[]) => {
  const iterations = a.length;
  let currIteration = 1;

  const start = performance.now();

  while (currIteration < iterations) {
    for (let i = 0; i < a.length; i++) {
      if (i < a.length - 1) {
        let curr = i;
        let next = i + 1;

        if (a[curr] > a[next]) {
          // a[curr] = a.splice(next, 1, a[curr])[0];
          let temp = a[curr];
          a[curr] = a[next];
          a[next] = temp;

          // a = swap(a, curr, next);
        }
      }
    }
    // console.log("***end of iteration***");

    currIteration++;
  }

  const end = performance.now();

  const duration = end - start;
  console.log("🚀 ~ bubbleSort ~ duration:", duration * 1000);

  return a;
};
