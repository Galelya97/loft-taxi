import React, { useState } from "react";
import style from "./styles.module.css";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import { toast } from "react-toastify";
import PropTypes from "prop-types";

const RegistrationForm = (props) => {
  const { toggleForm } = props;

  const [login, setLogin] = useState("");
  const [loginError, setLoginError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = (event) => {
    event.preventDefault();

    let loginError,
      passwordError,
      nameError = "";

    if (!login) {
      toast.error("Введите логин");
      loginError = "Пустой Логин";
    }

    if (!password) {
      toast.error("Введите пароль");
      passwordError = "Пустой пароль";
    }

    if (!name) {
      toast.error("Введите имя");
      nameError = "Пустое имя";
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

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);

      if (login === "123@qwerty") {
        setLoginError("Такая почта уже занята");
      } else {
        toast.info("Вы зарегистрированы");
        toggleForm();
      }
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
          disabled={isLoading}
          error={!!loginError}
          helperText={loginError}
        />

        <TextField
          label="Как вас зовут?*"
          onChange={onNameChange}
          id="name"
          type="text"
          name="name"
          margin="normal"
          fullWidth
          disabled={isLoading}
          error={!!nameError}
          helperText={nameError}
        />

        <TextField
          label="Придумайте пароль*:"
          onChange={onPasswordChange}
          id="password"
          type="password"
          name="password"
          margin="normal"
          fullWidth
          disabled={isLoading}
          error={!!passwordError}
          helperText={passwordError}
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
          Зарегистрироваться
        </Button>
        <div className={style.alreadyRegistration}>
          <span>Уже зарегистрирован? </span>
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
