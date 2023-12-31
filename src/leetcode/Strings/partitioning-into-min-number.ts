// Partitioning Into Minimum Number Of Deci Binary Numbers
// const n0 = "32";
// const n1 = "82734";
// const n2 = "27346209830709182346";
// const n3 = "33";
// * my solution
export const minPartitions = (n: string): number => {
  const partitions: number[] = [];
  let deciNum = "1";

  for (let i = n.length - 1; i >= 0; i--) {
    const num = +n[i];

    if (num > 0) {
      if (+deciNum === 1) {
        for (let j = 0; j < num; j++) {
          partitions.push(+deciNum);
        }
      } else {
        if (num === partitions.length) {
          for (let j = 0; j < num; j++) {
            partitions[j] = +deciNum + partitions[j];
          }
        }

        if (num > partitions.length) {
          partitions.length = num;

          for (let j = 0; j < num; j++) {
            if (!isNaN(partitions[j])) partitions[j] = +deciNum + partitions[j];
            else partitions[j] = +deciNum;
          }
        }
      }
    }

    deciNum = deciNum + 0;
  }

  return partitions.length;
};

// * solution from discussions
export const minPartitions2 = (n: string): number => {
  let max = 0;

  for (let i = n.length - 1; i >= 0; i--) {
    const num = +n[i];
    if (num > max) max = num;
  }

  return max;
};
