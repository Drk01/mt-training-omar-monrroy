import { Injectable } from "@angular/core";
import { Effect, Actions, ofType } from "@ngrx/effects";

import * as farmsActions from "../actions";
import { of } from "rxjs";
import { map, switchMap, catchError } from "rxjs/operators";
import { DataService } from "./../../mt-sample-exercise/data.service";

@Injectable()
export class FarmsEffects {
  constructor(private farmsService: DataService, private actions$: Actions) {}

  @Effect()
  cargarFarms$ = this.actions$.pipe(
    ofType(farmsActions.CARGANDO_FARMS),
    switchMap(() => {
      return this.farmsService.fetchFarms().pipe(
        map((data) => new farmsActions.CargarFarmsSucesss(data)),
        catchError((error) => of(new farmsActions.CargarFarmsFail(error)))
      );
    })
  );
}
