import React from "react";
import s from "./login.module.css";
import logo from "../../assets/logo.png";
import { LoginForm } from "../loginForm";
import { RegistrationForm } from "../registrationForm";

export class LoginPage extends React.Component {
  state = { isLoginForm: true };

  toggleForm = () => {
    this.setState({ isLoginForm: !this.state.isLoginForm });
  };

  render() {
    const { isLoginForm } = this.state;
    const { onLogin } = this.props;

    return (
      <section className={s.flexRow}>
        <div className={s.containerLogo}>
          <img src={logo} className={s.logo} />
        </div>
        <div className={s.containerLogin}>
          <div className={s.login}>
            {isLoginForm ? (
              <LoginForm onLogin={onLogin} toggleForm={this.toggleForm} />
            ) : (
              <RegistrationForm toggleForm={this.toggleForm} />
            )}
          </div>
        </div>
      </section>
    );
  }
}
