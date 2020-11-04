import { Action } from "@ngrx/store";

export const NO_FARM_SELECTED = "[Farm] No farm selected";

export const FARM_SELECTED = "[Farm] Farm selected";

export class NoFarmSelected implements Action {
  readonly type = NO_FARM_SELECTED;
}

export class FarmSelected implements Action {
  readonly type = FARM_SELECTED;

  constructor(public payload: any) {}
}

export type selectedFarmActions = NoFarmSelected | FarmSelected;
