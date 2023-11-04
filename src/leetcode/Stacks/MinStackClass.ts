// const minStack = new MinStack();

// minStack.push(-2);
// minStack.push(0);
// minStack.push(-3);
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.top());
// console.log(minStack.getMin());

// minStack.push(2);
// minStack.push(0);
// minStack.push(3);
// minStack.push(0);
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.getMin());
// console.log(minStack.top());

// minStack.push(2147483646);
// minStack.push(2147483646);
// minStack.push(2147483647);
// console.log(minStack.top());
// minStack.pop();
// console.log(minStack.getMin());
// minStack.pop();
// minStack.push(2147483647);
// console.log(minStack.top());
// console.log(minStack.getMin());
// minStack.push(-2147483648);
// console.log(minStack.top());
// console.log(minStack.getMin());
// minStack.pop();
// console.log(minStack.getMin());
class MinStack {
  private _stack: number[];
  private _currIndex;
  private _minStack: number[];

  constructor() {
    this._stack = [];
    this._currIndex = 0;
    this._minStack = [];
  }

  push(val: number): void {
    const lastMinVal = this._minStack[this._minStack.length - 1];

    // set min value
    if (this._minStack.length === 0) this._minStack.push(val);
    else this._minStack.push(val <= lastMinVal ? val : lastMinVal);

    // add new item to stack
    const tempIndex = this._currIndex;
    this._stack[tempIndex] = val;
    this._currIndex++;
  }

  pop(): void {
    this._stack.length = this._stack.length - 1;
    this._minStack.length = this._minStack.length
      ? this._minStack.length - 1
      : this._minStack.length;
    this._currIndex--;
  }

  top(): number {
    return this._stack[this._stack.length - 1];
  }

  getMin(): number {
    return this._minStack[this._minStack.length - 1];
  }
}

export default MinStack;
