import { Store } from "@ngrx/store";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "mt-sample-detail",
  templateUrl: "./mt-sample-detail.component.html",
})
export class MtSampleDetailComponent implements OnInit {
  farm;

  constructor(private store: Store) {}

  ngOnInit() {
    this.store.select("selectedFarm").subscribe((data) => {
      this.farm = data;
    });
  }
}