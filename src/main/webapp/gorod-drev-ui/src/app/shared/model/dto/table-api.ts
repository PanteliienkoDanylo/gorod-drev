export class TableApi<T> {

  public constructor(private _data: T[],
                     private _totalCount: number) {
  }

  get data(): T[] {
    return this._data;
  }

  get totalCount(): number {
    return this._totalCount;
  }
}
