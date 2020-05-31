import {Component, OnInit} from '@angular/core';
import {WarehousesHttpService} from "../../service/warehouses-http.service";
import {Observable} from "rxjs/Observable";
import {Warehouse} from "../../../shared/model/warehouse";
import {Router} from "@angular/router";

@Component({
  selector: 'app-warehouses',
  templateUrl: './warehouses.component.html',
  styleUrls: ['./warehouses.component.css']
})
export class WarehousesComponent implements OnInit {

  public readonly displayedColumns: string[] = ['id', 'name', 'address'];

  public warehouses$: Observable<Warehouse[]>;
  public warehouses: Warehouse[];

  public constructor(private readonly warehousesHttpService: WarehousesHttpService,
                     private readonly router: Router) {
  }

  public ngOnInit(): void {
    this.warehouses$ = this.warehousesHttpService.getAllWarehouses();
    this.warehouses$.subscribe((warehouses: Warehouse[]) => this.warehouses = warehouses);
  }

  public clickRow(warehouse: Warehouse) {
    this.router.navigate(['warehouses/' + warehouse.id]);
  }

}
