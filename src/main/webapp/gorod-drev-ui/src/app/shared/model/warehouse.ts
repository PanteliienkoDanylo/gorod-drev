import {WarehouseProductInfo} from "./warehouse-product-info";

export class Warehouse {

  public constructor(private _id: number,
                     private _name: string,
                     private _address: string,
                     private _warehouseProductsInfos: WarehouseProductInfo[]) {
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get warehouseProductsInfos(): WarehouseProductInfo[] {
    return this._warehouseProductsInfos;
  }

  set warehouseProductsInfos(value: WarehouseProductInfo[]) {
    this._warehouseProductsInfos = value;
  }
}
