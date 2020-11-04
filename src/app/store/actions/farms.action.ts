import { Action } from "@ngrx/store";

export const CARGANDO_FARMS = "[Farms] Cargando Farms";
export const CARGANDO_FARMS_SUCCESS = "[Farms] Cargando Farms success";
export const CARGANDO_FARMS_FAIL = "[Farms] Cargando Farms fail";

export class CargarFarms implements Action {
  readonly type = CARGANDO_FARMS;
}

export class CargarFarmsSucesss implements Action {
  readonly type = CARGANDO_FARMS_SUCCESS;

  constructor(public payload: any) {}
}

export class CargarFarmsFail implements Action {
  readonly type = CARGANDO_FARMS_FAIL;

  constructor(public payload: any) {}
}

export type farmsActions = CargarFarms | CargarFarmsSucesss | CargarFarmsFail;
