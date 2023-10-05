// https://leetcode.com/problems/longest-palindrome/

export const longestPalindrome = (s: string): number => {
  let oddsCount = 0;
  const letters: Record<string, number> = {};

  for (let i = 0; i < s.length; i++) {
    const letter = s[i];

    if (letters[letter]) letters[letter]++;
    else letters[letter] = 1;

    const letterCount = letters[letter];
    const isOdd = letterCount % 2 === 1;

    if (isOdd) oddsCount++;
    else oddsCount--;
  }

  return oddsCount > 0 ? s.length - oddsCount + 1 : s.length;
};
