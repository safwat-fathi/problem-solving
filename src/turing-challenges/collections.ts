// https://github.com/turingschool-examples/challenges/blob/master/collections.markdown

type Tuple = [name: string, age: number];
export type TData = Tuple[];

// const exData: TData = [
//   ["Frank", 33],
//   ["Stacy", 15],
//   ["Juan", 24],
//   ["Dom", 32],
//   ["Steve", 24],
//   ["Jill", 24],
// ];

export function orderByAge(data: TData) {
  // // sort by ascending age
  // data.sort((a, b) : a[1] - b[1]);
  // // log data
  // for (let person of data) {
  //   console.log(`${person[0]} (${person[1]})`);
  // }

  // build a hash with the age as the key and an array of names as the value
  const ages: Record<number, string[]> = {};

  for (let person of data) {
    const personName = person[0];
    const personAge = person[1];
    if (ages[personAge]) ages[personAge].push(personName);
    else ages[personAge] = [personName];
  }

  console.log("🚀 ~ orderByAge ~ ages:", ages);
}

// *********************************************

const states = {
  Oregon: "OR",
  Alabama: "AL",
  "New Jersey": "NJ",
  Colorado: "CO",
};
type TStates = (typeof states)[keyof typeof states];
const capitals = { OR: "Salem", AL: "Montgomery", NJ: "Trenton", CO: "Denver" };

export function stateCapitals(state: keyof typeof states) {
  // find state abbreviation
  const stateAbbr = states[state] as keyof typeof capitals;
  const capital = capitals[stateAbbr];
  return capital ? capital : null;
}

// *********************************************
const scores = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10,
};

// * Template Literal Types
type TLetters = keyof typeof scores;

export function scrabbleScoring(string: TLetters[]) {
  for (let letter of string) {
    console.log(`${letter} has the value ${scores[letter]}`);
  }
}
