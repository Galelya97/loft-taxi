import { actions as authActions } from "../auth";
import { actions } from "./actions";

const initialState = {
  addresses: [],
  route: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.ADDRESS_LIST: {
      return {
        ...state,
        addresses: action.payload,
      };
    }
    case actions.SET_ROUTE: {
      return {
        ...state,
        route: action.payload,
      };
    }
    case authActions.LOG_OUT_EVENT: {
      return {
        ...state,
        route: [],
      };
    }
    default:
      return state;
  }
}
