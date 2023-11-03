class MinStack {
  private _stack: number[];
  private _currIndex;
  private _currMinValIndex;
  private _minVal: number | null;
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
    if (this._minVal === null) {
      this._minVal = val;
      this._minVals[this._currMinValIndex] = this._currIndex;
      this._currMinValIndex++;
    } else if (this._minVal !== null && val <= this._minVal) {
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
    const idxToPop = this._stack.length - 1;
    const minValIdx = this._minVals[this._minVals.length - 1];

    if (idxToPop === minValIdx) {
      // console.log("same index to pop as min val");
      this._minVals.length = this._minVals.length - 1;
      this._currMinValIndex = this._minVals.length - 1;
      this._minVal = this._stack[this._currMinValIndex];
    }

    this._stack.length = this._stack.length - 1;
    this._currIndex = idxToPop;
  }

  top(): number {
    return this._stack[this._stack.length - 1];
  }

  getMin(): number | null {
    return this._minVal;
  }
}

export default MinStack;
