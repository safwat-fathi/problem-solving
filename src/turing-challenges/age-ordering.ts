// https://github.com/turingschool-examples/challenges/blob/master/collections.markdown

// const exData: TData = [
//   ["Frank", 33],
//   ["Stacy", 15],
//   ["Juan", 24],
//   ["Dom", 32],
//   ["Steve", 24],
//   ["Jill", 24],
// ];

// Level 1: Write code that'll output the names (and only the names) in order by ascending age
// Level 2: Output the name with the age, like Juan (24)
// Level 3: Write code to automatically build a hash with the age as the key and an array of names as the value (all the people who are that age). e.g. {24 => ['Juan', 'Steve', 'Jill']...}

type Tuple = [name: string, age: number];
export type TData = Tuple[];

export default function orderByAge(data: TData) {
  // // sort by ascending age
  // data.sort((a, b) => a[1] - b[1]);
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
