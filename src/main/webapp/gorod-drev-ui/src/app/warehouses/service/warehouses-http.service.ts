import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Warehouse} from "../../shared/model/warehouse";
import {environment} from "../../../environments/environment";

@Injectable()
export class WarehousesHttpService {

  public constructor(private readonly http: HttpClient) {
  }

  public getAllWarehouses(): Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(`${environment.api}/warehouses`);
  }

  public getWarehouse(id: number): Observable<Warehouse> {
    return this.http.get<Warehouse>(`${environment.api}/warehouses/${id}`);
  }

}
