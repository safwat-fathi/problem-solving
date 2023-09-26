function countingValleys(steps, path) {
  // Write your code here
  let i;
  let seaLevel = 0;
  let valleyCounter = 0;

  for (i = 0; i < steps; i++) {
    if (path[i] === "U") {
      seaLevel++;
    }

    if (path[i] === "D") {
      seaLevel--;
    }

    if (seaLevel === 0 && path[i] === "U") {
      valleyCounter++;
    }
  }

  return valleyCounter;
}

console.log(countingValleys(8, "UDDDUDUU"));
