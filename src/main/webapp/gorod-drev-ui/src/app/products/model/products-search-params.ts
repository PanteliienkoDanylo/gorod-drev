export class ProductsSearchParams {

  public constructor(private _id: string,
                     private _name: string,
                     private _masterId: number) {
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

  get masterId(): number {
    return this._masterId;
  }

  set masterId(value: number) {
    this._masterId = value;
  }
}
