import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {Master} from "../../shared/model/master";
import {environment} from "../../../environments/environment";

@Injectable()
export class MastersHttpService {

  public constructor(private readonly http: HttpClient) {
  }

  public getAllMasters(): Observable<Master[]> {
    return this.http.get<Master[]>(`${environment.api}/masters`);
  }

}
