import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import s from "./styles.module.css";
import CustomSelect from "../customSelect";
import CarSelect from "../carSelect";
import { connect } from "react-redux";
import { getAddressList } from "../../redux/route";
import { getRoute as requestRoute, requestAddressList } from "../../saga/route";
import PropTypes from "prop-types";

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

  const clearFrom = (e) => {
    setFrom("");
  };

  const clearTo = (e) => {
    setTo("");
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
          onClear={clearFrom}
        />
        <CustomSelect
          className={s.formControl}
          value={to}
          options={optionsAddresses}
          label="Куда"
          clearable={true}
          onChange={handleChangeTo}
          onClear={clearTo}
        />
      </div>

      <CarSelect className={s.carSelect} />
    </form>
  );
};

RouteSelect.propTypes = {
  addressList: PropTypes.array,
  getRoute: PropTypes.func,
  requestAddressList: PropTypes.func,
};

export default connect(
  (state) => ({
    addressList: getAddressList(state),
  }),
  (dispatch) => ({
    requestAddressList: () => dispatch(requestAddressList()),
    getRoute: (address1, address2) =>
      dispatch(requestRoute({ address1, address2 })),
  })
)(RouteSelect);
