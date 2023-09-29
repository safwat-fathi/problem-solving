export const balancedStringSplit = (s: string): number => {
  let substringsCount = 0;
  let i = 0;
  let rCount = 0;
  let lCount = 0;

  while (i < s.length) {
    const char = s[i];
    if (char === "R") rCount++;
    if (char === "L") lCount++;

    if (rCount === lCount) {
      substringsCount++;
      rCount = 0;
      lCount = 0;
    }

    i++;
  }

  return substringsCount;
};
