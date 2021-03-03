import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import s from "./styles.module.css";
import CustomSelect from "../customSelect";
import CarSelect from "../carSelect";

const RouteSelect = ({ addressList, requestAddressList, getRoute }) => {
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");

  useEffect(() => {
    requestAddressList();
  }, []);

  const optionsAddresses = addressList.map((item) => ({
    value: item,
    label: item,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!from || !to) {
      toast.error("Выберите точки маршрута");
      return;
    }
    if (from && from === to) {
      toast.error("Точки маршрута не могут совпадать");
      return;
    }

    getRoute(from, to);
  };

  const handleChangeFrom = (e) => {
    setFrom(e.target.value);
  };

  const handleChangeTo = (e) => {
    setTo(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit} className={s.card}>
      <div className={s.form}>
        <CustomSelect
          className={s.formControl}
          value={from}
          options={optionsAddresses}
          label="Откуда"
          clearable={true}
          onChange={handleChangeFrom}
        />
        <CustomSelect
          className={s.formControl}
          value={to}
          options={optionsAddresses}
          label="Куда"
          clearable={true}
          onChange={handleChangeTo}
        />
      </div>

      <CarSelect className={s.carSelect} />
    </form>
  );
};

export default RouteSelect;
