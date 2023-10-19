export function isPalindrome(s: string): boolean {
  let sCopy = s
    .toLowerCase()
    .replace(/\W/gi, "")
    .replace(/\_/g, "")
    .replace(/\-/g, "");

  let first = 0;
  let last = sCopy.length - 1;

  while (first <= last) {
    if (sCopy[first] !== sCopy[last]) return false;

    first++;
    last--;
  }

  return true;
}
