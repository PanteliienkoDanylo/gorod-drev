import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../shared/shared.module";
import {HeaderComponent} from "./components/header/header.component";
import {ErrorComponent} from "./components/error/error.component";


@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    HeaderComponent,
    ErrorComponent
  ],
  providers: [],
  exports: [
    HeaderComponent,
    ErrorComponent
  ]
})
export class CoreModule {

}
