export default class CustomArray {
  private _arr: any[];
  private _flattened: any[] = [];

  constructor(arr: any[]) {
    this._arr = arr;
  }

  private _flatten(arr: any[]): any {
    for (let item of arr) {
      if (Array.isArray(item)) {
        this._flatten(item);
      } else {
        this._flattened.push(item);
      }
    }
  }

  public flatten() {
    this._flatten(this._arr);

    return this._flattened;
  }
}
