import React from "react";
import RouteSelect from "../routeSelect";
import { connect } from "react-redux";
import { getRoute, setRoute } from "../../redux/route";
import s from "./styles.module.css";
import SuccessRouteForm from "../successRouteForm";
import { getCardNumberInfo } from "../../redux/payment";
import ErrorRouteForm from "../errorRouteForm";
import PropTypes from "prop-types";

const RoutePage = ({ route, setRoute, cardInfo }) => {
  if (!cardInfo) {
    return (
      <div className={s.wrapper}>
        <ErrorRouteForm />
      </div>
    );
  }

  if (route.length) {
    return (
      <div className={s.wrapper}>
        <SuccessRouteForm setRoute={setRoute} />
      </div>
    );
  } else {
    return (
      <div className={s.wrapper}>
        <RouteSelect />
      </div>
    );
  }
};

RoutePage.propTypes = {
  route: PropTypes.array,
  setRoute: PropTypes.func,
  cardInfo: PropTypes.string,
};

export default connect(
  (state) => ({
    route: getRoute(state),
    cardInfo: getCardNumberInfo(state),
  }),
  (dispatch) => ({
    setRoute: (route) => dispatch(setRoute(route)),
  })
)(RoutePage);
