import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../shared/shared.module";
import {WarehousesHttpService} from "./service/warehouses-http.service";
import {WarehousesComponent} from "./component/warehouses/warehouses.component";
import {WarehouseComponent} from "./component/warehouse/warehouse.component";



@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    WarehousesComponent,
    WarehouseComponent,
  ],
  providers: [
    WarehousesHttpService
  ],
  exports: [
    WarehousesComponent,
    WarehouseComponent
  ]
})
export class WarehousesModule {

}
