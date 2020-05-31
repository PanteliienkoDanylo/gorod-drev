import {Master} from "./master";

export class Product {

  public constructor(private _id: string,
                     private _name: string,
                     private _salePrice: number,
                     private _masterPrice: number,
                     private _master: Master) {

  }

  get id(): string {
    return this._id;
  }

  set id(value: string) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get salePrice(): number {
    return this._salePrice;
  }

  set salePrice(value: number) {
    this._salePrice = value;
  }

  get masterPrice(): number {
    return this._masterPrice;
  }

  set masterPrice(value: number) {
    this._masterPrice = value;
  }

  get master(): Master {
    return this._master;
  }

  set master(value: Master) {
    this._master = value;
  }
}
