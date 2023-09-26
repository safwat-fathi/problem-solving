// * Given a string s containing just the characters '(',')', '{', '}', '[' and ']', determine if the input string is valid. An input string is valid if:
// * 1. Open brackets must be closed by the same type of brackets.
// * 2. Open brackets must be closed in the correct order.
// * Constraints:
// * 1<s.length <= 104
// * • s consists of parentheses only '() 00'.

// * Example 1:
// * Input: s = "()"
// * Output: valid

// * Example 2:
// * Input: s = "()[]{}"
// * Output: valid

// * Example 3:
// * Input: s = "[]"
// * Output: invalid

// * Example 4:
// * Input: s = "[]"
// * Output: invalid

// * Example 5:
// * Input: s = "{[]}"
// * Output: valid

const isValid = (s = "") => {
  // let openParenthesis = ["(", "{", "["];
  // let closeParenthesis = ["]", ")", "}"];
  let stack = [];

  if (s.length <= 1) return false;

  for (let i in s) {
    if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
      stack.push(s[i]);
    }

    if (
      (s[i] === ")" && stack[stack.length - 1] === "(") ||
      (s[i] === "]" && stack[stack.length - 1] === "[") ||
      (s[i] === "}" && stack[stack.length - 1] === "{")
    ) {
      stack.pop();
    }
  }

  if (stack.length !== 0) return false;

  return true;
};

const str1 = "()"; // valid
const str2 = "()[]{}"; // valid
const str3 = "(]"; // not valid
const str4 = "([)]"; // not valid
const str5 = "{[]}"; // valid

console.log(isValid(str4));
