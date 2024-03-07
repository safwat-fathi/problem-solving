// https://www.youtube.com/watch?v=j3rvizohd0I
// https://leetcode.com/problems/sliding-window-maximum/solutions/3401123/fill-up-the-window-and-make-the-head-value-greater-than-the-rests/

class Dequeue<T> {
  private _dequeue: T[] = [];

  pushFront(item: T): void {
    this._dequeue.unshift(item);
  }

  pushBack(item: T): void {
    this._dequeue.push(item);
  }

  popFront(): T | undefined {
    return this._dequeue.shift();
  }

  popBack(): T | undefined {
    return this._dequeue.pop();
  }

  isEmpty(): boolean {
    return this._dequeue.length === 0;
  }

  public get length(): number {
    return this._dequeue.length;
  }

  front(): T {
    return this._dequeue[0];
  }

  back(): T {
    return this._dequeue[this._dequeue.length - 1];
  }
}
