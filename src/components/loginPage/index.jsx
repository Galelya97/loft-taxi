import React, { useState } from "react";
import style from "./login.module.css";
import logo from "../../assets/logo.png";
import LoginForm from "../loginForm";
import RegistrationForm from "../registrationForm";

const LoginPage = () => {
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
            <LoginForm toggleForm={toggleForm} />
          ) : (
            <RegistrationForm toggleForm={toggleForm} />
          )}
        </div>
      </div>
    </section>
  );
};

export default LoginPage;
