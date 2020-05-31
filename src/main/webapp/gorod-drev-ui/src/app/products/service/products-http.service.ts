import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Product} from "../../shared/model/product";
import {environment} from "../../../environments/environment";
import {TableApi} from "../../shared/model/dto/table-api";
import {ProductsSearchParams} from "../model/products-search-params";
import {TableSearchParams} from "../../shared/model/dto/table-search-params";
import {Master} from "../../shared/model/master";

@Injectable()
export class ProductsHttpService {

  public constructor(private readonly http: HttpClient) {
  }

  public getAllProducts(productsSearchParams: TableSearchParams<ProductsSearchParams>): Observable<TableApi<Product>> {
    let params = new HttpParams();
    params = params.append('id', productsSearchParams.searchParams.id);
    params = params.append('name', productsSearchParams.searchParams.name);
    params = params.append('masterId', productsSearchParams.searchParams.masterId.toString());
    params = params.append('sort', productsSearchParams.sort);
    params = params.append('order', productsSearchParams.order);
    params = params.append('pageIndex', productsSearchParams.pageIndex.toString());
    params = params.append('pageSize', productsSearchParams.pageSize.toString());

    return this.http.get<TableApi<Product>>(`${environment.api}/products`, {params: params});
  }

  public saveProduct(product: Product): void {
    this.http.post(`${environment.api}/product/save`, product).subscribe();
  }

  public getAllMasters(): Observable<Master[]> {
    return this.http.get<Master[]>(`${environment.api}/masters`);
  }

}
