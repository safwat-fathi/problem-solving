export const oddFrequencySearch = (arr: number[]): number => {
  const numsFreq: Record<number, number> = {};
  const numsCat: Record<"odd" | "even", number[]> = { even: [], odd: [] };

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];

    if (numsFreq[num]) numsFreq[num]++;
    else numsFreq[num] = 1;

    if (numsFreq[num] % 2 === 0) {
      // add even num to even array and remove from odd array
      numsCat["even"] = [...numsCat["even"], num];
      numsCat["odd"].splice(numsCat["odd"].indexOf(num), 1);
    } else {
      numsCat["odd"].push(num);
    }
  }

  return numsCat.odd[0];
};
