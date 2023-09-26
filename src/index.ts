// console.log(
//   "cb".split("").forEach(s =>
//     "bcd".split("").forEach(l => {
//       console.log("s:", s);
//       console.log("l:", l);
//       console.log(l.includes(s));
//     })
//   )
// );
const s = "cb";
const k = ["cd", "bd", "cccb", "bcc", "bcdcb"];
const nonDuplicated = (s: string) => console.log(...new Set("ccb"));
nonDuplicated(s);
