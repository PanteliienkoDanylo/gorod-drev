import {Injectable} from '@angular/core';
import {TableSearchParams} from "../../shared/model/dto/table-search-params";
import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Observable} from "rxjs/Observable";
import {ProductsSearchParams} from "../model/products-search-params";


@Injectable()
export class ProductsSearchParamsService {

  private productsSearchParamsSources$: BehaviorSubject<TableSearchParams<ProductsSearchParams>>;

  public constructor() {
    this.productsSearchParamsSources$ = new BehaviorSubject(new TableSearchParams(new ProductsSearchParams('', '', -1), 'id', 'asc', 0, 25));
  }

  public changeProductsSearchParams(productsSearchParams: TableSearchParams<ProductsSearchParams>) {
    this.productsSearchParamsSources$.next(productsSearchParams);
  }

  public getProductSearchParams(): Observable<TableSearchParams<ProductsSearchParams>> {
    return this.productsSearchParamsSources$.asObservable();
  }

}
