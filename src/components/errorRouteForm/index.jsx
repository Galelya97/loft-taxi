import React from "react";
import s from "./styles.module.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const ErrorRouteForm = () => {
  return (
    <div className={s.wrapper_card}>
      <div className={s.card}>
        <h1 className={s.title}>Карта не авторизована</h1>
        <p className={s.description}>
          Необходимо заполнить данные платежной карты.
        </p>
        <Link to="/profile">
          <Button
            style={{ marginTop: 14 }}
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
          >
            Перейти в форму
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorRouteForm;
