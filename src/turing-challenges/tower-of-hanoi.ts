// * https://github.com/turingschool-examples/challenges/blob/master/tower_of_hanoi.markdown

type TDisc = TFixedThreeLengthArray<number>;
type TPostKeys = "A" | "B" | "C";
type TPostValues = TDisc;

export class TowerOfHanoi {
  // private _discs: TDisc;
  private _posts: Record<TPostKeys, TPostValues>;

  constructor() {
    // this._discs = [];
    this._posts = { A: [3, 2, 1], B: [], C: [] };
  }

  getPost(post: TPostKeys): TDisc {
    return this._posts[post];
  }

  public addDisc(post: TPostKeys, disc: number): void {
    const selectedPost = this._posts[post];
    const lastDisc = selectedPost[selectedPost.length - 1];

    if (selectedPost.length === 0) {
      selectedPost.push(disc);
    } else if (lastDisc && lastDisc > disc) {
      selectedPost.push(disc);
    } else {
      throw new Error("Disc must be smaller than the top disc");
    }
  }

  public removeDisc(post: TPostKeys): number | null {
    const selectedPost = this._posts[post];
    const lastDisc = selectedPost[selectedPost.length - 1];

    return lastDisc ? lastDisc : null;
  }

  // private _isNotEmpty() {
  //   return this._discs.length > 0;
  // }
}
