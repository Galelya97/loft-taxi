import React from "react";
import s from "./styles.module.css";
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

const SuccessPayment = () => {
  const history = useHistory();
  const handleClick = () => {
    history.push("/map");
  };

  return (
    <div className={s.profileCard}>
      <div className={s.titleWrapper}>
        <h1 className={s.title}>Профиль</h1>
        <p className={s.desc}>
          Платёжные данные обновлены. Теперь вы можете заказывать такси.
        </p>
        <Button
          onClick={handleClick}
          variant="contained"
          color="primary"
          data-testid="login-button"
        >
          Перейти на карту
        </Button>
      </div>
    </div>
  );
};

export default SuccessPayment;
