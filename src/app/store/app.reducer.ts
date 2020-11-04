import { ActionReducerMap } from "@ngrx/store";

import * as reducers from "./reducers";

export interface AppState {
    farms: reducers.farms
}

export const appReducer: ActionReducerMap<AppState> {
    farms: reducers.farmsReducer
}
