// console.log(
//   "cb".split("").forEach(s =>
//     "bcd".split("").forEach(l => {
//       console.log("s:", s);
//       console.log("l:", l);
//       console.log(l.includes(s));
//     })
//   )

import { validWords } from "./turing-challenges/valid-words";

// );
const s = "ssa";
const k = ["ads", "sss", "svb", "sasssa", "s"];
const nonDuplicated = (s: string) => console.log(...new Set("ccb"));
// nonDuplicated(s);

console.log(validWords(s, k));
