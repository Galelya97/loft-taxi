import React, { useCallback } from "react";
import style from "./styles.module.css";
import { Button, TextField, CircularProgress } from "@material-ui/core";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";

const logInSchema = Yup.object().shape({
  email: Yup.string().email().trim().required(" "),
  password: Yup.string()
    .trim()
    .min(3, "Пароль меньше 3 символов")
    .required(" "),
});

const LoginForm = ({ toggleForm, logIn, loading }) => {
  const onSubmit = useCallback(
    (values) => {
      logIn(values.email.trim(), values.password.trim());
    },
    [logIn]
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: logInSchema,
    onSubmit,
  });

  return (
    <>
      <h1 className={style.title}>Войти</h1>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <TextField
          label="Email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.email ? formik.errors.email : ""}
          error={formik.errors.email && formik.touched.email}
          id="email"
          type="email"
          name="email"
          fullWidth
          disabled={loading}
          margin="normal"
          data-testid="login-input"
        />

        <TextField
          label="Пароль"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.password ? formik.errors.password : ""}
          error={formik.errors.password && formik.touched.password}
          id="password"
          type="password"
          name="password"
          fullWidth
          disabled={loading}
          margin="normal"
          data-testid="password-input"
        />

        <Button
          className={style.buttonStyle}
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={loading}
          startIcon={loading && <CircularProgress size={14} color="primary" />}
          data-testid="login-button"
        >
          Войти
        </Button>
        <div className={style.newRegistration}>
          <span>Новый пользователь?</span>
          <span className={style.toggleButton} onClick={toggleForm}>
            Регистрация
          </span>
        </div>
      </form>
    </>
  );
};

LoginForm.propTypes = {
  toggleForm: PropTypes.func,
  logIn: PropTypes.func,
  loading: PropTypes.bool,
};

export default LoginForm;
