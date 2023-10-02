export const sortTheStudents = (score: number[][], k: number): number[][] => {
  console.log("🚀 ~ sortTheStudents ~ score:", score);
  // let a = score.sort((a, b) => {
  //   return b[k] - a[k];
  // });
  // console.log("🚀 ~ sortTheStudents ~ a:", a);
  for (let i = 0; i < score.length; i++) {
    const student = score[i];
    const exam = score[i][k];
    // console.log("🚀 ~ sortTheStudents ~ exam:", exam);
    // console.log("student", i, student);
  }

  return score.sort((a, b) => {
    return b[k] - a[k];
  });
};
