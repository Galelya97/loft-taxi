import React from "react";
import LoginPage from "../loginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Switch } from "react-router-dom";
import PrivateRoute from "../privetComponent";
import Main from "../main";
import { connect } from "react-redux";

const App = ({ isLoggedIn }) => {
  return (
    <>
      <Switch>
        <PrivateRoute
          path="/login"
          show={!isLoggedIn}
          component={LoginPage}
          redirectTo="/"
          exact
        />
        <PrivateRoute
          path="/"
          show={isLoggedIn}
          component={Main}
          redirectTo="/login"
          exact={false}
        />
      </Switch>

      <ToastContainer hideProgressBar />
    </>
  );
};

export default connect(
  (state) => ({
    isLoggedIn: state.auth.isLoggedIn,
  }),
  null
)(App);
