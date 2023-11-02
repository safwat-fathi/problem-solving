class MinStack {
  private _stack: number[];
  private _currIndex;
  private _currMinValIndex;
  private _minVal: number | null;
  // private _minVals: Record<number, number>;
  private _minVals: number[];

  constructor() {
    this._stack = [];
    this._currIndex = 0;
    this._currMinValIndex = 0;
    this._minVal = null;
    this._minVals = [];
  }

  push(val: number): void {
    // set min value
    if (!this._minVal) this._minVal = val;
    if (val < this._minVal!) {
      this._minVal = val;
      this._minVals[this._currMinValIndex] = this._currIndex;
      this._currMinValIndex++;
    }

    // add new item to stack
    const tempIndex = this._currIndex;
    this._stack[tempIndex] = val;
    this._currIndex++;
  }

  pop(): void {
    const currTempIndex = this._currIndex;
    const isMinVal =
      this._stack[this._currMinValIndex] === this._stack[currTempIndex];

    if (isMinVal) {
      this._minVals.length = this._minVals.length - 1;
      this._currMinValIndex = this._minVals.length - 1;
      this._minVal = this._stack[this._currMinValIndex];
    }

    this._stack.length = this._stack.length - 1;
    this._currIndex = this._stack.length - 1;
  }

  top(): number {
    return this._stack[this._stack.length - 1];
  }

  getMin(): number | null {
    console.log("this._stack", this._stack);
    // console.log("🚀 ~ this._minVals:", this._minVals);
    const a = this._minVals[this._minVals.length - 1];
    // console.log("🚀 ~ a:", a);
    console.log("awdawd", this._stack[a]);

    // console.log("🚀 ~ this._currMinValIndex:", this._currMinValIndex);
    // console.log(
    //   "🚀 ~ this._minVals[this._minVals.length - 1]:",
    //   this._minVals[this._minVals.length - 1]
    // );

    return this._minVal;
  }
}

export default MinStack;
