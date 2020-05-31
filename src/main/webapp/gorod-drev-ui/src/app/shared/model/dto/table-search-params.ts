export class TableSearchParams<T> {

  public constructor(private _searchParams: T,
                     private _sort: string,
                     private _order: string,
                     private _pageIndex: number,
                     private _pageSize: number) {
  }

  get searchParams(): T {
    return this._searchParams;
  }

  set searchParams(value: T) {
    this._searchParams = value;
  }

  get sort(): string {
    return this._sort;
  }

  set sort(value: string) {
    this._sort = value;
  }

  get order(): string {
    return this._order;
  }

  set order(value: string) {
    this._order = value;
  }

  get pageIndex(): number {
    return this._pageIndex;
  }

  set pageIndex(value: number) {
    this._pageIndex = value;
  }

  get pageSize(): number {
    return this._pageSize;
  }

  set pageSize(value: number) {
    this._pageSize = value;
  }
}
