export const actions = {
  ADDRESS_LIST: "ROUTE/ADDRESS_LIST",
  SET_ROUTE: "ROUTE/SET_ROUTE",
};

export const setAddressList = (addresses) => ({
  type: actions.ADDRESS_LIST,
  payload: addresses,
});

export const setRoute = (route) => ({
  type: actions.SET_ROUTE,
  payload: route,
});
