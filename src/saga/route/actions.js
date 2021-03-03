export const actions = {
  ADDRESS_LIST: "ROUTE_SAGA/REQUEST_ADDRESSES_LIST",
  GET_ROUTE: "ROUTE_SAGA/GET_ROUTE",
};

export const requestAddressList = () => ({ type: actions.ADDRESS_LIST });
export const getRoute = (obj) => ({ type: actions.GET_ROUTE, payload: obj });
