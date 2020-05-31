import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../shared/shared.module";
import {ProductsComponent} from "./component/products/products.component";
import {ProductsHttpService} from "./service/products-http.service";
import {ProductsTableComponent} from "./component/products-table/products-table.component";
import {ProductsSearchParamsService} from "./service/products-search-params.service";
import {ProductsEditorDialog} from "./component/products-editor-dialog/products-editor-dialog";


@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    ProductsComponent,
    ProductsTableComponent,
    ProductsEditorDialog
  ],
  providers: [
    ProductsHttpService,
    ProductsSearchParamsService
  ],
  exports: [
    ProductsComponent,
    ProductsTableComponent,
    ProductsEditorDialog
  ],
  entryComponents: [
    ProductsEditorDialog
  ]
})
export class ProductsModule {

}
