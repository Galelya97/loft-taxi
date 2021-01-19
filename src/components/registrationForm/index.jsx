import React from "react";
import s from "./styles.module.css";
import { Button, CircularProgress, Link, TextField } from "@material-ui/core";
import { toast } from "react-toastify";

export class RegistrationForm extends React.Component {
  state = {
    login: "",
    loginError: "",
    password: "",
    passwordError: "",
    name: "",
    nameError: "",
    isLoading: false,
  };

  onSubmit = (event) => {
    event.preventDefault();

    let loginError,
      passwordError,
      nameError = "";

    if (!this.state.login) {
      toast.error("Введите логин");
      loginError = "Пустой Логин";
    }

    if (!this.state.password) {
      toast.error("Введите пароль");
      passwordError = "Пустой пароль";
    }

    if (!this.state.name) {
      toast.error("Введите имя");
      nameError = "Пустое имя";
    }

    if (loginError || passwordError || nameError) {
      this.setState({ loginError, passwordError, nameError });
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

      if (this.state.login === "123@qwerty") {
        this.setState({ loginError: "Такая почта уже занята" });
      } else {
        toast.info("Вы зарегистрированы");
        this.props.toggleForm();
      }
    }, 5000);
  };

  onLoginChange = (event) => {
    this.setState({ login: event.target.value, loginError: "" });
  };

  onPasswordChange = (event) => {
    this.setState({ password: event.target.value, passwordError: "" });
  };

  onNameChange = (event) => {
    this.setState({ name: event.target.value, nameError: "" });
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
            disabled={this.state.isLoading}
            error={this.state.loginError}
            helperText={this.state.loginError}
          />

          <TextField
            label="Имя:"
            onChange={this.onNameChange}
            id="name"
            type="text"
            name="name"
            fullWidth
            disabled={this.state.isLoading}
            error={this.state.nameError}
            helperText={this.state.nameError}
          />

          <TextField
            label="Пароль:"
            onChange={this.onPasswordChange}
            id="password"
            type="password"
            name="password"
            fullWidth
            disabled={this.state.isLoading}
            error={this.state.passwordError}
            helperText={this.state.passwordError}
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
