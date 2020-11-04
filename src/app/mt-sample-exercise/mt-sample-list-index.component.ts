import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";
import { SelectedFarmService } from "./selected-farm.service";
import { Observable, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";
import { Farm } from "./farm";

import { CargarFarms } from "./../store/actions/farms.action";
@Component({
  selector: "mt-sample-list",
  templateUrl: "./mt-sample-list-index.component.html",
})
export class MtSampleListIndexComponent implements OnInit {
  farms: Farm[] = [];
  loading: boolean;
  constructor(private store: Store) {}

  ngOnInit() {
        this.store.dispatch(new CargarFarms());
    this.store.select<Farm[]>("farms").subscribe((data) => {
      this.farms = data.farms;
      this.loading = data.loading;
    });
  }
}
