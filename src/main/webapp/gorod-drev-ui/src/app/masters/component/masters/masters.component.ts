import {Component, OnInit} from '@angular/core';
import {MastersHttpService} from "../../service/masters-http.service";
import {Observable} from "rxjs/Observable";
import {Master} from "../../../shared/model/master";

@Component({
  selector: 'app-masters',
  templateUrl: './masters.component.html',
  styleUrls: ['./masters.component.css']
})
export class MastersComponent implements OnInit {

  public readonly displayedColumns: string[] = ['id', 'name', 'surname', 'phoneNumber'];

  public masters$: Observable<Master[]>;
  public masters: Master[];

  public constructor(private readonly mastersHttpService: MastersHttpService) {
  }

  public ngOnInit(): void {
    this.masters$ = this.mastersHttpService.getAllMasters();
    this.masters$.subscribe((masters: Master[]) => this.masters = masters);
  }

}
