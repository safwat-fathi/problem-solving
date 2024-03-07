export class Queue<T> {
  private _queue: T[] = [];

  public enqueue(item: T): void {
    this._queue.push(item);
  }

  public dequeue(): T | undefined {
    return this._queue.shift();
  }

  public peek(): T | undefined {
    return this._queue[0];
  }

  public get length(): number {
    return this._queue.length;
  }

  public isEmpty(): boolean {
    return this._queue.length === 0;
  }

  public clear(): void {
    this._queue = [];
  }
}
