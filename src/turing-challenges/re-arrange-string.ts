// * You are given a string str consisting of letters and numbers.
// * You need to find a combination of the string where one letter is not adjacent to another letter and filled by number.
// * Return the string in ascending order with above combinations or return blank string if it is not possible to create the result.
// * Rules:
// * O. If letters and numbers are equally distributed, number will get first preference.
// * O. Higher character count will get preference

// * Example 1:
// * Input: str = "z3b1a2"
// * Output: "1a2b3z"
// * Explanation: No two adjacent characters have the same type in "1a2b3z".

// * Example 2:
// * Input: str = "q56"
// * Output: "5q6"
// * Explanation: No two adjacent characters have the same type in "5q6".
// * Constraints:
// * • 1 <= str.length <= 500
// * • str consists of only letters and/or numbers.
