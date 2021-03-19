import React, { useState } from "react";
import style from "./login.module.css";
import logo from "../../assets/logo.png";
import LoginForm from "../loginForm";
import RegistrationForm from "../registrationForm";
import { connect } from "react-redux";
import { logIn, registration } from "../../saga/auth";
import { getAuthLoading } from "../../redux/auth";
import PropTypes from "prop-types";

const LoginPage = ({ logIn, authLoading, registration }) => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <section className={style.flexRow}>
      <div className={style.containerLogo}>
        <img src={logo} alt={"логотип"} />
      </div>
      <div className={style.containerLogin}>
        <div className={style.login}>
          {isLoginForm ? (
            <LoginForm
              loading={authLoading}
              logIn={logIn}
              toggleForm={toggleForm}
            />
          ) : (
            <RegistrationForm
              registration={registration}
              loading={authLoading}
              toggleForm={toggleForm}
            />
          )}
        </div>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  logIn: PropTypes.func,
  authLoading: PropTypes.bool,
  registration: PropTypes.func,
};

export default connect(
  (state) => ({
    authLoading: getAuthLoading(state),
  }),
  (dispatch) => ({
    logIn: (login, password) => {
      dispatch(logIn({ login, password }));
    },
    registration: (email, password, name) => {
      dispatch(registration({ email, password, name }));
    },
  })
)(LoginPage);
