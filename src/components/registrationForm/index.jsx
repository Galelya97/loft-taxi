import React from "react";
import s from "./styles.module.css";
import { Button, CircularProgress, Link, TextField } from "@material-ui/core";
import { toast } from "react-toastify";

export class RegistrationForm extends React.Component {
  state = { login: "", password: "", name: "", isLoading: false };

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

    if (!this.state.name) {
      toast.error("Введите имя");
      return;
    }
    // а есть ли такой
    // <- true / false
    // if () {}

    // TODO reggistration
    // this.props.onLogin(this.state.login);

    this.setState({ isLoading: true });

    setTimeout(() => {
      this.setState({ isLoading: false });
      toast.info("Вы зарегистрированы");
      this.props.toggleForm();
    }, 5000);
  };

  onLoginChange = (event) => {
    this.setState({ login: event.target.value });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value });
  };
  render() {
    return (
      <>
        <h1 className={s.title}>Регистрация</h1>
        <Link href="#" onClick={this.props.toggleForm}>
          Вход
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
            disabled={this.state.isLoading}
          />

          <TextField
            label="Имя:"
            onChange={this.onNameChange}
            id="name"
            type="text"
            name="name"
            fullWidth
            margin="normal"
            disabled={this.state.isLoading}
          />

          <TextField
            label="Пароль:"
            onChange={this.onPasswordChange}
            id="password"
            type="password"
            name="password"
            fullWidth
            margin="normal"
            disabled={this.state.isLoading}
          />

          <Button
            style={{ marginTop: 20 }}
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            disabled={this.state.isLoading}
            startIcon={
              this.state.isLoading && (
                <CircularProgress size={14} color="#fff" />
              )
            }
          >
            Регистрация
          </Button>
        </form>
      </>
    );
  }
}
