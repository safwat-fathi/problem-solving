type TNonEmptyArray<T> = [T, ...T[]];
// type TLimitedLengthArray<T, N extends number> = N extends 0 ? T[] : Array<T> & { length: N };
// type TLimitedLengthArray<T, N extends number> =
//   | T[]
//   | ([T, ...T[]] & {
//       length: N;
//     });
type TFixedLengthArray<T, N extends number> = N extends 0
  ? []
  : [T, ...T[]] & {
      length: N;
    };
type TFixedThreeLengthArray<T> = [T?, T?, T?];
type TReadOnlyArray<T> = readonly T[];
