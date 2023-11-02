class MinStack {
  private _stack: number[];
  private _currIndex;
  private _minVal: number | null;
  // private _minVals: Record<number, number>;
  private _minVals: number[];

  constructor() {
    this._stack = [];
    this._currIndex = 0;
    this._minVal = null;
    this._minVals = [];
  }

  push(val: number): void {
    // set min value
    if (!this._minVal || val < this._minVal) {
      this._minVal = val;
      this._minVals[val] = this._currIndex;
    }

    // add new item to stack
    const tempIndex = this._currIndex;
    this._stack[tempIndex] = val;
    this._currIndex++;
  }

  pop(): void {
    const tempIndex = this._currIndex - 1;
    const valToPop = this._stack[tempIndex];
    // const isMinVal = this._stack[tempIndex] === this._minVal;
    // if (this._minVals[valToPop]) {
    //   console.log("popped value is minVal", valToPop);
    //   delete this._minVals[valToPop];
    // }
    // console.log("🚀 ~ this._minVals:", this._minVals);

    this._stack.length = this._stack.length - 1;
    this._currIndex = this._stack.length - 1;
  }

  top(): number {
    return this._stack[this._stack.length - 1];
  }

  getMin(): number {
    console.log("🚀 ~ this._minVals:", this._minVals[this._minVal!]);
    return this._minVal!;
  }
}

export default MinStack;
