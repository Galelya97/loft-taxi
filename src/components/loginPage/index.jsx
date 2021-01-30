import React, { useState } from "react";
import s from "./login.module.css";
import logo from "../../assets/logo.png";
import LoginForm from "../loginForm";
import RegistrationForm from "../registrationForm";
import PropTypes from "prop-types";

const LoginPage = () => {
  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };

  return (
    <section className={s.flexRow}>
      <div className={s.containerLogo}>
        <img src={logo} alt={"логотип"} />
      </div>
      <div className={s.containerLogin}>
        <div className={s.login}>
          {isLoginForm ? (
            <LoginForm toggleForm={toggleForm} />
          ) : (
            <RegistrationForm toggleForm={toggleForm} />
          )}
        </div>
      </div>
    </section>
  );
};

LoginPage.propTypes = {
  onLogin: PropTypes.func,
};

export default LoginPage;
