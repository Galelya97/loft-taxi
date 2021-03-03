import React from "react";
import s from "./styles.module.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const ErrorRouteForm = () => {
  const history = useHistory();

  const handleClick = () => {
    history.push("/profile");
  };

  return (
    <div className={s.wrapper_card}>
      <div className={s.card}>
        <h1 className={s.title}>Карта не авторизована</h1>
        <p className={s.description}>
          Необходимо заполнить данные платежной карты.
        </p>
        <Button
          onClick={handleClick}
          style={{ marginTop: 14 }}
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Перейти в форму
        </Button>
      </div>
    </div>
  );
};

export default ErrorRouteForm;
