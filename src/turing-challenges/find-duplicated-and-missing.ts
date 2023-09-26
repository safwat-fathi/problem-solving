// const n1 = [1, 2, 3, 2]; // [2,4]
// const n2 = [1, 2, 3, 4, 3]; // [3, 5]

export const findDuplicatedAndMissing = (a: number[]) => {
  let counter = 0;
  const results = [];

  for (const i in a) {
    counter++;
    const currNum = a[i];
    const isDuplicated = a.indexOf(currNum, +i + 1) > -1;

    if (counter !== currNum) results.push(counter);

    if (isDuplicated) results.push(currNum);
  }

  return results;
};
