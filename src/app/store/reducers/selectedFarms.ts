import { Farm } from "./../../mt-sample-exercise/farm";
import * as fromSelectedFarm from "../actions";

export interface selectedFarmState {
  farm: Farm | String;
}

const initialState = {
    farm: null
}


export function selectedFarmReducer(state: = initialState, action: fromSelectedFarm.selectedFarmActions): selectedFarmState {
    switch (action.type) {
        default:
            return state;
        case fromSelectedFarm.NO_FARM_SELECTED:
            return {
                ...state,
                farm: 'No hay una granja seleccionada'
            }
        case fromSelectedFarm.FARM_SELECTED:
            return {
                ...state,
                farm: action.payload
            }
    }
}