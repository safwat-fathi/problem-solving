// * Implement a Stack which can...

// push an element onto the stack
// pop remove the top element from the stack and return the element
// count the number of elements on the stack
// peek at the top element without removing it
// max find the largest value in the stack

// * You can assume that this stack only holds integers.

// * don't use the built-in methods on Array (push, shift, unshift, pop, length, ...)
// * And, for an added challenge, can you do it without using negative array indexes?

export default class BasicStack {
  private _stack: number[] = [];
  private _length = 0;
  // consider this the pointer of last item in stack
  // every push it updates this index
  // every pop updates this index
  // every peek depend on this index
  // this is the stack limit
  private _index = 0;

  public push(item: number) {
    this._stack[this._index] = item;

    this._length++;
    this._index++;
  }

  public pop() {
    const lastItem = this._stack[this._index];

    this._index--;
    this._length--;

    return lastItem;
  }

  public peek() {
    return this._stack[this._index];
  }

  public count() {
    return this._length; // or should i use index only and get rid of length?
  }
}
