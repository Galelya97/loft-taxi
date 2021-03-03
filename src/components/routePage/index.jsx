import React from "react";
import RouteSelect from "../routeSelect";
import { connect } from "react-redux";
import { getAddressList, getRoute, setRoute } from "../../redux/route";
import { getRoute as requestRoute, requestAddressList } from "../../saga/route";
import s from "./styles.module.css";
import SuccessRouteForm from "../successRouteForm";
import { getCardNumberInfo } from "../../redux/payment";
import ErrorRouteForm from "../errorRouteForm";

const RoutePage = ({
  addressList,
  getRoute,
  requestAddressList,
  route,
  setRoute,
  cardInfo,
}) => {
  return (
    <div className={s.wrapper}>
      {cardInfo ? (
        route.length ? (
          <SuccessRouteForm setRoute={setRoute} />
        ) : (
          <RouteSelect
            addressList={addressList}
            getRoute={getRoute}
            requestAddressList={requestAddressList}
          />
        )
      ) : (
        <ErrorRouteForm />
      )}

      {/*{route.length ? (*/}
      {/*  <SuccessRouteForm setRoute={setRoute} />*/}
      {/*) : (*/}
      {/*  <RouteSelect*/}
      {/*    addressList={addressList}*/}
      {/*    getRoute={getRoute}*/}
      {/*    requestAddressList={requestAddressList}*/}
      {/*  />*/}
      {/*)}*/}
    </div>
  );
};

export default connect(
  (state) => ({
    addressList: getAddressList(state),
    route: getRoute(state),
    cardInfo: getCardNumberInfo(state),
  }),
  (dispatch) => ({
    requestAddressList: () => dispatch(requestAddressList()),
    getRoute: (address1, address2) =>
      dispatch(requestRoute({ address1, address2 })),
    setRoute: (route) => dispatch(setRoute(route)),
  })
)(RoutePage);
