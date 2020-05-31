import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {SharedModule} from "../shared/shared.module";
import {MastersComponent} from "./component/masters/masters.component";
import {MastersHttpService} from "./service/masters-http.service";


@NgModule({
  imports: [
    BrowserModule,
    SharedModule
  ],
  declarations: [
    MastersComponent
  ],
  providers: [
    MastersHttpService
  ],
  exports: [
    MastersComponent
  ]
})
export class MastersModule {

}
