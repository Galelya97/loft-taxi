import React, { useState, useContext } from "react";
import s from "./styles.module.css";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import { toast } from "react-toastify";
import PropTypes from "prop-types";
import { Context } from "../../state/context";

const LoginForm = (props) => {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { toggleForm } = props;

  const value = useContext(Context);

  const onSubmit = (event) => {
    event.preventDefault();

    let loginError,
      passwordError = "";

    if (!login) {
      toast.error("Введите логин");
      loginError = "Пустой логин";
    }

    if (!password) {
      toast.error("Введите пароль");
      passwordError = "Пустой пароль";
    }
    // а есть ли такой
    // <- true / false
    // if () {}

    if (loginError || passwordError) {
      setLoginError(loginError);
      setPasswordError(passwordError);
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      value.logIn(login, password);
    }, 2500);
  };

  const onLoginChange = (event) => {
    setLogin(event.target.value);
    setLoginError("");
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  return (
    <>
      <h1 className={s.title}>Войти</h1>
      <form onSubmit={onSubmit} className={s.form}>
        <TextField
          label="Email:"
          onChange={onLoginChange}
          id="email"
          type="email"
          name="email"
          error={!!loginError}
          helperText={loginError}
          fullWidth
          disabled={isLoading}
          margin="normal"
        />

        <TextField
          label="Пароль:"
          onChange={onPasswordChange}
          id="password"
          type="password"
          name="password"
          error={!!passwordError}
          helperText={passwordError}
          fullWidth
          disabled={isLoading}
          margin="normal"
        />

        <Button
          style={{ marginTop: 20 }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={isLoading}
          startIcon={
            isLoading && <CircularProgress size={14} color="primary" />
          }
        >
          Войти
        </Button>
        <div className={s.newRegistration}>
          <span>Новый пользователь? </span>
          <span className={s.toggleButton} onClick={toggleForm}>
            Регистрация
          </span>
        </div>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  toggleForm: PropTypes.func,
};

export default LoginForm;
