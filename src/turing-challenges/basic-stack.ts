// * Implement a Stack which can...

// push an element onto the stack
// pop remove the top element from the stack and return the element
// count the number of elements on the stack
// peek at the top element without removing it
// max find the largest value in the stack

// * You can assume that this stack only holds integers.

// * don't use the built-in methods on Array (push, shift, unshift, pop, length, ...)
// * And, for an added challenge, can you do it without using negative array indexes?

class BasicStack {
  private _stack: number[] = [];
  private _length = 0;
  private _maxStack: number[] = [];

  public push(val: number) {
    const tempIndex = this._length;
    const lastMaxVal = this._maxStack[tempIndex - 1];

    if (tempIndex === 0) this._maxStack[tempIndex] = val;
    else this._maxStack[tempIndex] = lastMaxVal < val ? val : lastMaxVal;

    this._stack[tempIndex] = val;
    this._length++;
  }

  public pop() {
    if (this._length === 0) return null;

    const lastItem = this._stack[this._length - 1];

    this._length--;

    return lastItem;
  }

  public peek() {
    return Boolean(this._stack[this._length - 1])
      ? this._stack[this._length - 1]
      : null;
  }

  public count() {
    return this._length;
  }

  public max() {
    return Boolean(this._maxStack[this._length - 1])
      ? this._maxStack[this._length - 1]
      : null;
  }
}

export default BasicStack;
