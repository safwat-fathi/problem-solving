/**
 * @param {number[]} height
 * @return {number}
 */
function maxArea(height = []) {
  let firstLine = height[0];
  let lastLine = height[height.length - 1];

  let currWidth =
    height.indexOf(lastLine, height.indexOf(firstLine) + 1) -
    height.indexOf(firstLine);

  let currMaxArea = null;

  for (let i = 0; i < height.length; i++) {
    console.log("firstLine:", firstLine);
    console.log("lastLine:", lastLine);
    const currLine = height[i];
    const currLineWidth =
      height.indexOf(lastLine, height.indexOf(i) + 1) -
      height.indexOf(currLine);

    if (currLine > firstLine && i < height.indexOf(lastLine)) {
      // console.log("larger than first currLine:", line);
      firstLine = currLine;
    }

    if (
      currLine > lastLine &&
      i > height.indexOf(firstLine) &&
      currLineWidth * currLine < currWidth * lastLine
    ) {
      // console.log("larger than last currLine:", line);
      lastLine = currLine;
    }

    currWidth =
      height.indexOf(lastLine, height.indexOf(i) + 1) -
      height.indexOf(firstLine);
  }

  currMaxArea = currWidth * (lastLine > firstLine ? firstLine : lastLine);

  console.log("**", "current first line:", firstLine);
  console.log("**", "current last line:", lastLine);
  console.log("***", "curr width:", currWidth);
  console.log("****", "curr max area:", currMaxArea);

  return currMaxArea;
}

const testCase0 = [1, 8, 6, 2, 5, 4, 8, 3, 7];
const testCase1 = [1, 8, 3, 7];
const testCase2 = [3, 9, 3, 4, 7, 2, 12, 6];
const testCase3 = [1, 2];
const testCase4 = [1, 1];
// edge cases
const testCase5 = [2, 1];
const testCase6 = [0, 2];

console.log(maxArea(testCase5));
