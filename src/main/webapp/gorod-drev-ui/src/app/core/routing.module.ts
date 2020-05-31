import {NgModule} from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {ProductsComponent} from "../products/component/products/products.component";
import {MastersComponent} from "../masters/component/masters/masters.component";
import {ErrorComponent} from "./components/error/error.component";
import {WarehouseComponent} from "../warehouses/component/warehouse/warehouse.component";
import {WarehousesComponent} from "../warehouses/component/warehouses/warehouses.component";


const ROUTES: Routes = [
  {path: 'masters', component: MastersComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'warehouses', component: WarehousesComponent},
  {path: 'warehouses/:id', component: WarehouseComponent},
  {path: 'error', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class RoutingModule {
}
