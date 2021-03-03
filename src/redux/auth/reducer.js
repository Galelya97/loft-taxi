import { actions } from "./actions";

const initialState = {
  isLoggedIn: false,
  loading: false,
  token: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.LOG_IN_EVENT: {
      return {
        ...state,
        isLoggedIn: true,
        token: action.payload,
      };
    }
    case actions.LOG_OUT_EVENT: {
      return {
        ...state,
        isLoggedIn: false,
        token: "",
      };
    }
    case actions.LOADING: {
      return {
        ...state,
        loading: action.payload,
      };
    }
    default:
      return state;
  }
}
