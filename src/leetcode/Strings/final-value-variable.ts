export const findValueAfterOperations = (operations: string[]): number => {
  let x = 0;

  for (let i = 0; i < operations.length; i++) {
    const operation = operations[i];

    if (operation === "++X" || operation === "X++") x++;
    if (operation === "--X" || operation === "X--") x--;
  }

  return x;
};
