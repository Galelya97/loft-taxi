import React, { useCallback } from "react";
import style from "./styles.module.css";
import { Button, CircularProgress, TextField } from "@material-ui/core";
import PropTypes from "prop-types";
import { useFormik } from "formik";
import * as Yup from "yup";

const registrationSchema = Yup.object().shape({
  email: Yup.string().email().trim().required(" "),
  name: Yup.string().trim().required(" "),
  password: Yup.string()
    .trim()
    .min(3, "Пароль меньше 3 символов")
    .required(" "),
});

const RegistrationForm = ({ toggleForm, loading, registration }) => {
  const onSubmit = useCallback(
    (values) => {
      registration(
        values.email.trim(),
        values.password.trim(),
        values.name.trim()
      );
    },
    [registration]
  );

  const formik = useFormik({
    initialValues: {
      email: "",
      name: "",
      password: "",
    },
    validationSchema: registrationSchema,
    onSubmit,
  });

  return (
    <>
      <h1 className={style.title}>Регистрация</h1>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <TextField
          label="Email*"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          helperText={formik.touched.email ? formik.errors.email : ""}
          error={formik.errors.email && formik.touched.email}
          id="email"
          type="email"
          name="email"
          margin="normal"
          fullWidth
          disabled={loading}
        />

        <TextField
          label="Как вас зовут?*"
          placeholder="Имя Фамилия"
          onChange={formik.handleChange}
          value={formik.values.name}
          onBlur={formik.handleBlur}
          helperText={formik.touched.name ? formik.errors.name : ""}
          error={formik.errors.name && formik.touched.name}
          id="name"
          type="text"
          name="name"
          margin="normal"
          fullWidth
          disabled={loading}
        />

        <TextField
          label="Придумайте пароль*"
          onChange={formik.handleChange}
          value={formik.values.password}
          onBlur={formik.handleBlur}
          helperText={formik.touched.password ? formik.errors.password : ""}
          error={formik.errors.password && formik.touched.password}
          id="password"
          type="password"
          name="password"
          margin="normal"
          fullWidth
          disabled={loading}
        />

        <Button
          className={style.button}
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
  loading: PropTypes.bool,
  registration: PropTypes.func,
};

export default RegistrationForm;
