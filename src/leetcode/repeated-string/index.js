function repeatedString(s = "", n = 0) {
  const as = s.split("").filter((c) => c === "a").length;
  const times = Math.floor(n / s.length);
  const rest = n % s.length;

  const totalAs =
    times * as +
    s
      .slice(0, rest)
      .split("")
      .filter((c) => c === "a").length;

  return totalAs;
}

console.log(
  repeatedString(
    "ebcdddafdfeffaddbceddebafbbebebbbcefcbcdfbaabecfaaeeaaffdfccffbdeeaabcfeecfcecbfebacefebdfaeedadebdf",
    561984209086
  )
);

console.log(repeatedString("aba", 10));
