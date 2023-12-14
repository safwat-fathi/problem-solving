// * https://leetcode.com/problems/check-if-two-string-arrays-are-equivalent/

export function arrayStringsAreEqual(
  word1: string[],
  word2: string[]
): boolean {
  // ? bad runtime score 58 ms
  // ? best memory score
  // return word1.join("") === word2.join("");

  // ? better runtime score 56 ms
  // ? bad memory score
  // let wordOne = "";
  // let wordTwo = "";

  // for (let i = 0; i < word1.length; i++) {
  //   const substringWord1 = word1[i];
  //   wordOne += substringWord1;
  // }

  // for (let i = 0; i < word2.length; i++) {
  //   const substringWord2 = word2[i];
  //   wordTwo += substringWord2;
  // }

  // return wordOne === wordTwo;

  // ? best runtime score 50 ms
  // ? bad memory score
  let wordOne = "";
  let wordTwo = "";
  let pointerOne = 0;
  let pointerTwo = 0;

  while (pointerOne < word1.length || pointerTwo < word2.length) {
    if (pointerOne < word1.length) {
      wordOne += word1[pointerOne];
      pointerOne++;
    }

    if (pointerTwo < word2.length) {
      wordTwo += word2[pointerTwo];
      pointerTwo++;
    }
  }

  return wordOne === wordTwo;
}
