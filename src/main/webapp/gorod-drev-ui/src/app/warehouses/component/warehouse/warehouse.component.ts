import {Component, OnInit} from '@angular/core';
import {WarehousesHttpService} from "../../service/warehouses-http.service";
import {Observable} from "rxjs/Observable";
import {Warehouse} from "../../../shared/model/warehouse";
import {ActivatedRoute, Params, Router} from "@angular/router";
import {WarehouseProductInfo} from "../../../shared/model/warehouse-product-info";

@Component({
  selector: 'app-warehouse',
  templateUrl: './warehouse.component.html',
  styleUrls: ['./warehouse.component.css']
})
export class WarehouseComponent implements OnInit {

  public readonly displayedColumns: string[] = ['productId', 'productName', 'totalCount', 'bookedCount', 'leftCount', 'lastDeliveryDate'];

  public warehouse$: Observable<Warehouse>;
  public warehouseProductInfos: WarehouseProductInfo[];

  public constructor(private readonly warehousesHttpService: WarehousesHttpService,
                     private readonly router: Router,
                     private readonly route: ActivatedRoute) {
  }

  public ngOnInit(): void {
    this.subscribeOnRoute();
  }

  private subscribeOnRoute(): void {
    this.route.params.subscribe((params: Params) => {
      if (params.id) {
        this.warehouse$ = this.warehousesHttpService.getWarehouse(params.id);
        this.warehouse$.subscribe((warehouse: Warehouse) => this.warehouseProductInfos = warehouse.warehouseProductsInfos)
      }
    })
  }


}
