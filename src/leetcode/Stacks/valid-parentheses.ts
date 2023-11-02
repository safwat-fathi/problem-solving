// https://leetcode.com/problems/valid-parentheses/

export const isValidParentheses = (s: string): boolean => {
  if (s.length === 1) return false;

  const chars: string[] = [];

  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    const prevChar = chars.length > 0 ? chars[chars.length - 1] : null;

    // check if opening bracket add it to stack
    if (char === "(" || char === "[" || char === "{") chars.push(char);

    // check if closing bracket
    if (char === ")" || char === "]" || char === "}") {
      // if closing bracket with correct same type open bracket
      if (
        (prevChar && prevChar === "(" && char === ")") ||
        (prevChar && prevChar === "[" && char === "]") ||
        (prevChar && prevChar === "{" && char === "}")
      )
        chars.pop();

      // if closing bracket with wrong same type open bracket
      if (
        (prevChar && prevChar === "(" && char !== ")") ||
        (prevChar && prevChar === "[" && char !== "]") ||
        (prevChar && prevChar === "{" && char !== "}")
      )
        return false;
    }
  }

  return chars.length > 0 ? false : true;
};
