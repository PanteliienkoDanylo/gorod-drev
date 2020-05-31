import {Component, OnDestroy, OnInit} from '@angular/core';
import {ProductsHttpService} from "../../service/products-http.service";
import {Observable} from "rxjs/Observable";
import {Product} from "../../../shared/model/product";
import {TableApi} from "../../../shared/model/dto/table-api";
import {TableSearchParams} from "../../../shared/model/dto/table-search-params";
import {ProductsSearchParams} from "../../model/products-search-params";
import {ProductsSearchParamsService} from "../../service/products-search-params.service";
import {Subscription} from "rxjs/Subscription";
import {FormControl, FormGroup} from "@angular/forms";
import {Master} from "../../../shared/model/master";
import {debounceTime, distinctUntilChanged} from "rxjs/operators";

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit, OnDestroy {

  public formGroup: FormGroup;
  public idFormControl: FormControl;
  public nameFormControl: FormControl;
  public masterIdFormControl: FormControl;

  public productsTableApi$: Observable<TableApi<Product>>;
  public masters$: Observable<Master[]>;

  private productsSearchParams: TableSearchParams<ProductsSearchParams>;
  private productsSearchParamsSubscription: Subscription;

  public constructor(private readonly productHttpService: ProductsHttpService,
                     private readonly productsSearchParamsService: ProductsSearchParamsService) {
  }

  public ngOnInit(): void {
    this.subscribeOnProductSearchParams();
    this.initFormControls();
    this.initFromGroup();
  }

  public ngOnDestroy(): void {
    this.productsSearchParamsSubscription && this.productsSearchParamsSubscription.unsubscribe();
  }

  public subscribeOnProductSearchParams(): void {
    this.masters$ = this.productHttpService.getAllMasters();
    this.productsSearchParamsService.getProductSearchParams().subscribe((psp: TableSearchParams<ProductsSearchParams>) => {
      this.productsSearchParams = psp;
      this.productsTableApi$ = this.productHttpService.getAllProducts(this.productsSearchParams);
    });
  }

  private initFormControls(): void {
    this.idFormControl = new FormControl(this.productsSearchParams.searchParams.id);
    this.idFormControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((id: string) => {
      this.productsSearchParams.searchParams.id = id;
      this.productsSearchParamsService.changeProductsSearchParams(this.productsSearchParams);
    });

    this.nameFormControl = new FormControl(this.productsSearchParams.searchParams.name);
    this.nameFormControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged()
    ).subscribe((name: string) => {
      this.productsSearchParams.searchParams.name = name;
      this.productsSearchParamsService.changeProductsSearchParams(this.productsSearchParams);
    });

    this.masterIdFormControl = new FormControl(this.productsSearchParams.searchParams.masterId);
    this.masterIdFormControl.valueChanges.subscribe((masterId: number) => {
      this.productsSearchParams.searchParams.masterId = masterId;
      this.productsSearchParamsService.changeProductsSearchParams(this.productsSearchParams);
    });
  }

  private initFromGroup(): void {
    this.formGroup = new FormGroup({
      id: this.idFormControl,
      name: this.nameFormControl,
      masterId: this.masterIdFormControl
    });
  }

  public receiveSort(sort: string): void {
    this.productsSearchParams.sort = sort;
    this.productsSearchParamsService.changeProductsSearchParams(this.productsSearchParams);
  }

  public receiveOrder(order: string): void {
    this.productsSearchParams.order = order;
    this.productsSearchParamsService.changeProductsSearchParams(this.productsSearchParams);
  }

  public receivePageSize(pageSize: number): void {
    this.productsSearchParams.pageSize = pageSize;
    this.productsSearchParamsService.changeProductsSearchParams(this.productsSearchParams);
  }

  public receivePageIndex(pageIndex: number): void {
    this.productsSearchParams.pageIndex = pageIndex;
    this.productsSearchParamsService.changeProductsSearchParams(this.productsSearchParams);
  }

  public saveProduct(product: Product): void {
    this.productHttpService.saveProduct(product);
    alert('Saved changes!');
    this.productsTableApi$ = this.productHttpService.getAllProducts(this.productsSearchParams);
  }

}
