// * Count characters in a string

// const s1 = 'aaabbc'
// const s2 = 'I really want to work for Wingspan'

export const countAndSortChars = (s: string) => {
  let obj: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // if already stored
    if (obj[char] !== undefined) obj[char] = obj[char] + 1;
    // if not stored
    else obj[char] = 1;
  }

  const toEntriesSorted = Object.entries(obj).sort((a, b) => b[1] - a[1]);

  const toObjFromEntries = Object.fromEntries(toEntriesSorted);

  return toObjFromEntries;
};
