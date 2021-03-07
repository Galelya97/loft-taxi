import React from "react";
import style from "../App/App.module.css";
import Header from "../header";
import Map from "../map";
import { Redirect, Route, Switch } from "react-router-dom";
import RoutePage from "../routePage";
import Profile from "../profile";
import { connect } from "react-redux";
import { authLogOut } from "../../redux/auth";
import { getRoute } from "../../redux/route";
import PropTypes from "prop-types";

const Main = ({ logOut, route }) => {
  return (
    <div className={style.flexWrap}>
      <Header logOut={logOut} />
      <main className={style.main}>
        <Map route={route} className={style.map} />
        <Switch>
          <Route path="/map" component={RoutePage} />
          <Route path="/profile" component={Profile} />
          <Redirect to="/map" />
        </Switch>
      </main>
    </div>
  );
};

Main.propTypes = {
  logOut: PropTypes.func,
  route: PropTypes.array,
};

export default connect(
  (state) => ({
    route: getRoute(state),
  }),
  (dispatch) => ({
    logOut: () => dispatch(authLogOut()),
  })
)(Main);
