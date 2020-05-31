import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {SharedModule} from "./shared/shared.module";
import {MastersModule} from "./masters/masters.module";
import {ProductsModule} from "./products/products.module";
import {CoreModule} from "./core/core.module";
import {RoutingModule} from "./core/routing.module";
import {WarehousesModule} from "./warehouses/warehouses.module";


@NgModule({
  imports: [
    BrowserModule,
    SharedModule,

    CoreModule,
    RoutingModule,
    MastersModule,
    ProductsModule,
    WarehousesModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
