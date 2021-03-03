export const actions = {
  SET_CARD_INFO: "PAYMENT/SET_CARD_INFO",
  SET_SUCCESS_CARD: "PAYMENT/SET_SUCCESS_CARD",
};

export const setCardInfo = (cardInfo) => ({
  type: actions.SET_CARD_INFO,
  payload: cardInfo,
});

export const setSuccessCard = (boolean) => ({
  type: actions.SET_SUCCESS_CARD,
  payload: boolean,
});
