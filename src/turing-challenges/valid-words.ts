// * Given a set of unique characters s, k is an array that contains a set of valid and invalid words.
// * A word is valid if it was only generated from the set of the characters in s.
// * Return the number of valid words. If no valid words are found, return 0.

// * Example:
// * Input: s = "cb", k = ["cd", "bd", "cccb", "bcc", "bcdcb"]
// * Output: 2
// * Explanation: Strings "cccb" and "bcc" are valid since they only contain characters 'c' and 'b'

export const validWords = (s: string, k: string[]) => {
  let wordsValid = 0;

  for (let i = 0; i < k.length; i++) {
    const word = k[i];
    let charsValid = 0;

    for (let j = 0; j < word.length; j++) {
      const character = word[j];

      if (s.includes(character)) {
        charsValid++;
      } else break;
    }

    if (charsValid === word.length) wordsValid++;
  }

  return wordsValid;
};
