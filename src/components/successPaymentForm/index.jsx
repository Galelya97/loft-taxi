import React from "react";
import s from "./styles.module.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

const SuccessPayment = () => {
  return (
    <div className={s.profileCard}>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>Профиль</h1>
        <p className={s.desc}>
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </p>
        <Link to="/map">
          <Button
            variant="contained"
            color="primary"
            data-testid="login-button"
          >
            Перейти на карту
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default SuccessPayment;
