// * https://github.com/turingschool-examples/challenges/blob/master/odd_frequency_search.mdown

// const arr1 = [4, 1, 2, 3, 4, 2, 1, 3, 4];
// const arr2 = [4, 2, 3, 4, 2, 1, 3];
// const arr3 = [4, 2, 3, 4, 2];

export const oddFrequencySearch = (arr: number[]): number => {
  const numsFreq: Record<number, number> = {};
  const numsCat: Record<"odd" | "even", number[]> = { even: [], odd: [] };

  for (let i in arr) {
    const num = arr[i];

    if (numsFreq[num]) numsFreq[num]++;
    else numsFreq[num] = 1;

    if (numsFreq[num] % 2 === 0) {
      // add even num to even array
      numsCat["even"] = [...numsCat["even"], num];
      // and remove it from odd array
      numsCat["odd"].splice(numsCat["odd"].indexOf(num), 1);
    } else {
      numsCat["odd"].push(num);
    }
  }

  return numsCat.odd[0];
};
