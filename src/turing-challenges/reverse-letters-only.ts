// * Given a string S, return the "reversed" string where all characters that are not a letter stay in the same place, and all letters reverse their positions.

const isAlpha = (s: string) => /^[a-zA-Z]+$/gi.test(s);

// const input1 = "#Abc";
// const input2 = "ab-dc";
// const input3 = "a/bC#dEf@a"; // a/fE#dCb@a
// const input4 = "a-bC-dEf=ghlj!!";

export const reverseLettersOnly = (s: string) => {
  const a: string[] = [];
  const b: string[] = [];

  let i = s.length - 1;

  for (i; i >= 0; i--) {
    let currChar = s[i];

    if (isAlpha(currChar)) {
      a.push(currChar);
    } else {
      b[i] = currChar;
    }
  }

  for (const i in b) {
    a.splice(+i, 0, b[i]);
  }

  return a.join("");
};
