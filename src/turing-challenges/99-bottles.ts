// * Write a programme to print this song to no bottles left

// 99 bottles of water on the wall, 99 bottles of water.
// Take one down and pass it around, 98 bottles of water on the wall.
// 98 bottles of water on the wall, 98 bottles of water.
// Take one down and pass it around, 97 bottles of water on the wall.
// 97 bottles of water on the wall, 97 bottles of water.
// Take one down and pass it around, 96 bottles of water on the wall.
// ...
// 1 bottle of water on the wall, 1 bottle of water.
// Take one down and pass it around, no more bottles of water on the wall.
// No more bottles of water on the wall, no more bottles of water.
// Go to the store and buy some more, 99 bottles of water on the wall.

export function _99bottles() {
  let bottlesCount = 99;

  while (bottlesCount >= 1) {
    console.log(
      `${bottlesCount} bottles of water on the wall, ${bottlesCount} bottles of water.\nTake one down and pass it around, ${
        bottlesCount === 1
          ? "no more bottles of water on the wall.\nGo to the store and buy some more, 99 bottles of water on the wall."
          : "bottles of water on the wall."
      }`
    );

    bottlesCount--;
  }
}
