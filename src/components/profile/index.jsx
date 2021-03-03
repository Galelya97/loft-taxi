import React, { useEffect } from "react";
import * as Yup from "yup";
import s from "./styles.module.css";
import { Button, TextField } from "@material-ui/core";
import CustomInput from "../customInput";
import logo from "../../assets/logo-card.png";
import forCard from "../../assets/forCard.png";
import masterCard from "../../assets/mastercard.svg";
import { useFormik } from "formik";
import { connect } from "react-redux";
import {
  getCardInfo,
  getSuccessCard,
  setSuccessCard,
} from "../../redux/payment";
import { setPaymentData } from "../../saga/payment";
import SuccessPayment from "../successPaymentForm";

const cardSchema = Yup.object().shape({
  name: Yup.string()
    .uppercase(" ")
    .matches(/\w+ \w+/, "Неверный формат")
    .required(" "),
  number: Yup.string().trim().length(19, " ").required(" "),
  date: Yup.string().trim().length(5, " ").required(" "),
  cvv: Yup.string().trim().length(3, " ").required(" "),
});

const Profile = ({
  cardInfo: { cardNumber, expiryDate, cardName, cvc },
  setPaymentData,
  isSuccessCard,
  setSuccessCard,
}) => {
  const formik = useFormik({
    initialValues: {
      name: cardName,
      number: cardNumber,
      date: expiryDate,
      cvv: cvc,
    },
    validationSchema: cardSchema,
    onSubmit: ({ number, date, name, cvv }) => {
      setPaymentData({
        cardName: name,
        cardNumber: number,
        expiryDate: date,
        cvc: cvv,
      });
    },
  });

  useEffect(() => {
    return () => {
      setSuccessCard(false);
    };
  }, []);

  useEffect(() => {
    formik.setValues({
      name: cardName,
      number: cardNumber,
      date: expiryDate,
      cvv: cvc,
    });
  }, [cardName, cardNumber, expiryDate, cvc]);

  return (
    <div className={s.profileWrapper}>
      {isSuccessCard ? (
        <SuccessPayment />
      ) : (
        <form onSubmit={formik.handleSubmit} className={s.profileCard}>
          <div className={s.titleWrapper}>
            <h1 className={s.title}>Профиль</h1>
            <span className={s.desc}>Введите платежные данные</span>
          </div>
          <div className={s.cardWrapper}>
            <div className={s.cardForm}>
              <TextField
                label="Имя владельца"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={(e) => {
                  e.target.value = e.target.value.toUpperCase();
                  formik.handleChange(e);
                }}
                onBlur={formik.handleBlur}
                helperText={formik.touched.name ? formik.errors.name : ""}
                error={formik.errors.name && formik.touched.name}
                fullWidth
                margin="normal"
                data-testid="password-input"
              />
              <CustomInput
                label="Номер карты"
                id="number"
                name="number"
                value={formik.values.number}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                helperText={formik.touched.number ? formik.errors.number : ""}
                error={formik.errors.number && formik.touched.number}
                fullWidth
                margin="normal"
                data-testid="password-input"
                mask="9999 9999 9999 9999"
              />
              <div className={s.inputRow}>
                <CustomInput
                  label="MM/YY"
                  id="date"
                  name="date"
                  value={formik.values.date}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.date ? formik.errors.date : ""}
                  error={formik.errors.date && formik.touched.date}
                  margin="normal"
                  mask="99/99"
                />
                <CustomInput
                  label="CVV"
                  id="cvv"
                  name="cvv"
                  value={formik.values.cvv}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  helperText={formik.touched.cvv ? formik.errors.cvv : ""}
                  error={formik.errors.cvv && formik.touched.cvv}
                  margin="normal"
                  mask="999"
                />
              </div>
            </div>
            <div className={s.cardInfo}>
              <div className={s.row}>
                <img src={logo} className={s.icon} />
                <div className={s.date}>
                  {formik.values.date.trim() === "/"
                    ? "00/00"
                    : formik.values.date.replace(/ /g, "0")}
                </div>
              </div>
              <div className={s.number}>
                {formik.values.number.trim()
                  ? formik.values.number.trim() +
                    "0000 0000 0000 0000".substr(
                      formik.values.number.trim().length
                    )
                  : "0000 0000 0000 0000"}
              </div>
              <div className={s.row}>
                <img src={forCard} className={s.icon} />
                <img src={masterCard} className={s.icon} />
              </div>
            </div>
          </div>
          <div className={s.buttonRow}>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              data-testid="login-button"
            >
              Сохранить
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default connect(
  (state) => ({
    cardInfo: getCardInfo(state),
    isSuccessCard: getSuccessCard(state),
  }),
  (dispatch) => ({
    setPaymentData: (cardInfo) => dispatch(setPaymentData(cardInfo)),
    setSuccessCard: (bool) => dispatch(setSuccessCard(bool)),
  })
)(Profile);
