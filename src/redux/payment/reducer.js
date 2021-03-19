import { actions as authActions } from "../auth";
import { actions } from "./actions";

const initCardInfo = {
  cardNumber: "",
  expiryDate: "",
  cardName: "",
  cvc: "",
};

const initialState = {
  cardInfo: initCardInfo,
  successCard: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case actions.SET_CARD_INFO: {
      return {
        ...state,
        cardInfo: {
          ...state.cardInfo,
          ...action.payload,
        },
      };
    }
    case authActions.LOG_OUT_EVENT: {
      return {
        ...state,
        cardInfo: initCardInfo,
      };
    }
    case actions.SET_SUCCESS_CARD: {
      return {
        ...state,
        successCard: action.payload,
      };
    }
    default:
      return state;
  }
}
