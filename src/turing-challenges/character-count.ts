// * Report each character on its own line, in descending order based on the number of occurrences. Each line should be formatted as follows:
// <character>: <number of occurrences>

// characters = "I really want to work for Wingspan"

export default function count_characters(characters: string) {
  const chars_count: Record<string, number> = {};

  for (let char of characters) {
    if (chars_count[char]) chars_count[char]++;
    else chars_count[char] = 1;
  }

  for (let key in chars_count) {
    console.log(`${key}: ${chars_count[key]}`);
  }
}
