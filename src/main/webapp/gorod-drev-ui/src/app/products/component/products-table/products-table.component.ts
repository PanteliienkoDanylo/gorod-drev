import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {Product} from "../../../shared/model/product";
import {TableApi} from "../../../shared/model/dto/table-api";
import {MatDialog, MatPaginator, MatSort, MatSortable} from "@angular/material";
import {Subscription} from "rxjs/Subscription";
import {ProductsEditorDialog} from "../products-editor-dialog/products-editor-dialog";
import {Master} from "../../../shared/model/master";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-products-table',
  templateUrl: './products-table.component.html',
  styleUrls: ['./products-table.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductsTableComponent implements OnInit, OnDestroy {

  @Input('productsTableApi') productsTableApi: TableApi<Product>;
  @Input('masters$') masters$: Observable<Master[]>;
  @Input('initSort') initSort: string;
  @Input('initOrder') initOrder: string;
  @Input('pageIndex') pageIndex: number;
  @Input('pageSize') pageSize: number;

  @Output('sortEvent') sortEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output('orderEvent') orderEvent: EventEmitter<string> = new EventEmitter<string>();
  @Output('pageSizeEvent') pageSizeEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('pageIndexEvent') pageIndexEvent: EventEmitter<number> = new EventEmitter<number>();
  @Output('saveProductEvent') saveProductEvent: EventEmitter<Product> = new EventEmitter<Product>();

  public displayedColumns: string[] = ['id', 'name', 'salePrice', 'masterPrice', 'master', 'edit'];
  public pageSizeOptions: number[] = [15, 25, 50];

  public products: Product[] = [];
  public totalCount: number = 0;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  private sortSubscription: Subscription;
  private paginatorSubscription: Subscription;

  public constructor(public dialog: MatDialog) {
  }

  public ngOnInit(): void {
    this.subscribeOnSort();
    this.subscribeOnPaginator();
    this.initData();
  }

  public ngOnDestroy(): void {
    this.sortSubscription && this.sortSubscription.unsubscribe();
    this.paginatorSubscription && this.paginatorSubscription.unsubscribe();
  }

  private subscribeOnSort(): void {
    this.sort.sort(<MatSortable>({id: this.initSort, start: this.initOrder}));
    this.sortSubscription = this.sort.sortChange.subscribe(() => {
      this.sortEvent.emit(this.sort.active);
      this.orderEvent.emit(this.sort.direction);
      this.pageIndexEvent.emit(0);
    });
  }

  private subscribeOnPaginator(): void {
    this.paginator.pageIndex = this.pageIndex;
    this.paginatorSubscription = this.paginator.page.subscribe(() => {
      this.pageIndexEvent.emit(this.paginator.pageIndex);
      this.pageSizeEvent.emit(this.pageSize);
    });
  }

  private initData(): void {
    this.products = this.productsTableApi.data;
    this.totalCount = this.productsTableApi.totalCount;
  }

  public onPaginateChange(event): void {
    this.pageSize = event.pageSize;
  }

  public openDialog(product: Product): void {
    if (!product) product = new Product('', '', 0, 0, new Master(-1, '', '', ''));
    const dialogRef = this.dialog.open(ProductsEditorDialog, {
      width: '350px',
      height: '500px',
      data: {product: product, masters: this.masters$}
    });

    dialogRef.afterClosed().subscribe((product: Product) => {
      console.log(product);
      if (product) {
        this.saveProductEvent.emit(product);
      }
    });
  }

}
