import React from "react";
import s from "./styles.module.css";
import { Button } from "@material-ui/core";

const SuccessRouteForm = ({ setRoute }) => {
  return (
    <div className={s.card_wrapper}>
      <div className={s.card}>
        <h1 className={s.title}>Заказ размещен</h1>
        <p className={s.description}>
          Ваше такси уже едет к вам. Прибудет приблизительно через 10 минут.
        </p>
        <Button
          onClick={() => {
            setRoute([]);
          }}
          style={{ marginTop: 14 }}
          size="large"
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
        >
          Сделать новый заказ
        </Button>
      </div>
    </div>
  );
};

export default SuccessRouteForm;
