import { ActionReducerMap } from "@ngrx/store";

import * as listReducers from "./reducers/index";

export interface AppState {
  farms: listReducers.FarmsState;
  selectedFarm: listReducers.selectedFarmState;
}

export const appReducer: ActionReducerMap<AppState> = {
  farms: listReducers.farmsReducer,
  selectedFarm: listReducers.selectedFarmReducer,
};
