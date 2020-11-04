import { Farm } from "./../../mt-sample-exercise/farm";
import * as fromFarms from "../actions";

export interface FarmsState {
  farms: Farm[];
  loaded: boolean;
  loading: boolean;
  error: any;
}

const initialState = {
  farms: null,
  loaded: false,
  loading: false,
  error: null,
};

export function farmsReducer(
  state = initialState,
  action: fromFarms.farmsActions
): FarmsState {
  switch (action.type) {
    default:
      return state;
    case fromFarms.CARGANDO_FARMS:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case fromFarms.CARGANDO_FARMS_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        farms: { ...action.payload },
      };
    case fromFarms.CARGANDO_FARMS_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        error: "There was an error",
      };
  }
}
