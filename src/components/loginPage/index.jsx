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
    return (
      <section className={s.flexRow}>
        <div className={s.containerLogo}>
          <img src={logo} className={s.logo} />
        </div>
        <div className={s.containerLogin}>
          <div className={s.login}>
            {this.state.isLoginForm ? (
              <LoginForm
                onLogin={this.props.onLogin}
                toggleForm={this.toggleForm}
              />
            ) : (
              <RegistrationForm toggleForm={this.toggleForm} />
            )}
          </div>
        </div>
      </section>
    );
  }
}
