import React, { useState } from "react";
import style from "./styles.module.css";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const RegistrationForm = ({ toggleForm, loading, registration }) => {
  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();

    let loginError,
      passwordError,
      nameError = "";

    if (!login.trim()) {
      toast.error("Введите логин");
      loginError = "Пустой Логин";
    }

    if (!password.trim()) {
      toast.error("Введите пароль");
      passwordError = "Пустой пароль";
    }

    if (!name.trim()) {
      toast.error("Введите имя и фамилию");
      nameError = "Пустое имя и фамилия";
    }
    if (name && !/\w+ \w+/g.test(name.trim())) {
      toast.error("Введите имя и фамилию");
      nameError = "Не соответствует формату";
    }

    if (loginError || passwordError || nameError) {
      setLoginError(loginError);
      setPasswordError(passwordError);
      setNameError(nameError);
      return;
    }
    // а есть ли такой
    // <- true / false
    // if () {}

    // TODO reggistration

    registration(login.trim(), password.trim(), name.trim());
  };

  const onLoginChange = (event) => {
    setLogin(event.target.value);
    setLoginError("");
  };

  const onPasswordChange = (event) => {
    setPassword(event.target.value);
    setPasswordError("");
  };

  const onNameChange = (event) => {
    setName(event.target.value);
    setNameError("");
  };

  return (
    <>
      <h1 className={style.title}>Регистрация</h1>
      <form onSubmit={onSubmit} className={style.form}>
        <TextField
          label="Email*"
          onChange={onLoginChange}
          id="email"
          type="email"
          name="email"
          margin="normal"
          fullWidth
          disabled={loading}
          error={!!loginError}
          helperText={loginError}
        />

        <TextField
          label="Как вас зовут?*"
          placeholder="Имя Фамилия"
          onChange={onNameChange}
          id="name"
          type="text"
          name="name"
          margin="normal"
          fullWidth
          disabled={loading}
          error={!!nameError}
          helperText={nameError}
        />

        <TextField
          label="Придумайте пароль*"
          onChange={onPasswordChange}
          id="password"
          type="password"
          name="password"
          margin="normal"
          fullWidth
          disabled={loading}
          error={!!passwordError}
          helperText={passwordError}
        />

        <Button
          style={{ marginTop: 20 }}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          startIcon={loading && <CircularProgress size={14} color="primary" />}
        >
          Зарегистрироваться
        </Button>
        <div className={style.alreadyRegistration}>
          <span>Уже зарегистрирован?</span>
          <span className={style.toggleButton} onClick={toggleForm}>
            Войти
          </span>
        </div>
      </form>
    </>
  );
};

RegistrationForm.propTypes = {
  toggleForm: PropTypes.func,
};

export default RegistrationForm;
