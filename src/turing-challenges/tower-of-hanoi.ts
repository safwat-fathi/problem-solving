// * https://github.com/turingschool-examples/challenges/blob/master/tower_of_hanoi.markdown

type TPostKeys = "A" | "B" | "C";
type TPostValues = [number, number, number] | number[];

export class TowerOfHanoi {
  private _discs: number[] = [];
  private _posts: Record<TPostKeys, TPostValues>;

  constructor() {
    this._posts = { A: [3, 2, 1], B: [], C: [] };
  }

  public get discs(): number[] {
    return this._discs;
  }

  public addDisc(disc: number): void {
    if (this._discs.length === 0) {
      this._discs.push(disc);
    } else if (this._discs[this._discs.length - 1] > disc) {
      this._discs.push(disc);
    } else {
      throw new Error("Disc must be smaller than the top disc");
    }
  }

  public removeDisc(): number {
    return this._discs.pop() as number;
  }
}
