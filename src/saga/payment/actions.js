export const actions = {
  GET_DATA: "PAYMENT_SAGA/GET_DATA",
  SET_DATA: "ROUTE_SAGA/SET_DATA",
};

export const getPaymentData = () => ({ type: actions.GET_DATA });
export const setPaymentData = (obj) => ({
  type: actions.SET_DATA,
  payload: obj,
});
