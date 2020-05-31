import {Product} from "./product";

export class WarehouseProductInfo {

  public constructor(private _product: Product,
                     private _totalCount: number,
                     private _bookedCount: number,
                     private _leftCount: number,
                     private _lastDeliveryDate: Date) {
  }

  get product(): Product {
    return this._product;
  }

  set product(value: Product) {
    this._product = value;
  }

  get totalCount(): number {
    return this._totalCount;
  }

  set totalCount(value: number) {
    this._totalCount = value;
  }

  get bookedCount(): number {
    return this._bookedCount;
  }

  set bookedCount(value: number) {
    this._bookedCount = value;
  }

  get leftCount(): number {
    return this._leftCount;
  }

  set leftCount(value: number) {
    this._leftCount = value;
  }

  get lastDeliveryDate(): Date {
    return this._lastDeliveryDate;
  }

  set lastDeliveryDate(value: Date) {
    this._lastDeliveryDate = value;
  }
}
