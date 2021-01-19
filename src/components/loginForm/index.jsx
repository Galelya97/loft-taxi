import React from "react";
import s from "./styles.module.css";
import { Button, Link, TextField } from "@material-ui/core";
import { toast } from "react-toastify";

export class LoginForm extends React.Component {
  state = { login: "", password: "" };

  onSubmit = (event) => {
    event.preventDefault();

    if (!this.state.login) {
      toast.error("Введите логин");
      return;
    }

    if (!this.state.password) {
      toast.error("Введите пароль");
      return;
    }
    // а есть ли такой
    // <- true / false
    // if () {}

    this.props.onLogin(this.state.login);
  };

  onLoginChange = (event) => {
    const inputValue = event.target.value;

    this.setState({ login: inputValue });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };
  render() {
    return (
      <>
        <h1 className={s.title}>Войти</h1>
        <Link href="#" onClick={this.props.toggleForm}>
          Регистрация
        </Link>
        <form onSubmit={this.onSubmit} className={s.form}>
          <TextField
            label="Email:"
            onChange={this.onLoginChange}
            id="email"
            type="email"
            name="email"
            fullWidth
            margin="normal"
          />

          <TextField
            label="Пароль:"
            onChange={this.onPasswordChange}
            id="password"
            type="password"
            name="password"
            fullWidth
            margin="normal"
          />
          <Button
            style={{ marginTop: 20 }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Войти
          </Button>
        </form>
      </>
    );
  }
}
