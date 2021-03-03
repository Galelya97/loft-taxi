import { put, takeEvery } from "@redux-saga/core/effects";
import { actions } from "./actions";
import { toast } from "react-toastify";
import { authLogIn, setAuthLoading } from "../../redux/auth";
import axios from "axios";
import { getPaymentData } from "../payment";

function* authorizationSaga({ payload: { login, password } }) {
  yield put(setAuthLoading(true));

  try {
    const { data } = yield axios.post("https://loft-taxi.glitch.me/auth", {
      email: login,
      password: password,
    });

    if (data.success) {
      yield put(authLogIn(data.token));
      yield put(getPaymentData());
    } else {
      toast.error(data.error);
    }
  } catch (e) {}

  yield put(setAuthLoading(false));
}

function* registrationSaga({ payload: { email, password, name } }) {
  const firstname = name.split(" ")[0];
  const surname = name.split(" ")[1];
  yield put(setAuthLoading(true));

  try {
    //{success: true, token: AUTH_TOKEN}&&{success: false, error: Сообщение об ошибке}
    const { data } = yield axios.post("https://loft-taxi.glitch.me/register", {
      email,
      password,
      name: firstname,
      surname,
    });

    if (data.success) {
      yield put(authLogIn(data.token));
      yield put(getPaymentData());
      toast.success("Регистрация прошла успешно");
    } else {
      toast.error(data.error);
    }
  } catch (e) {}

  yield put(setAuthLoading(false));
}

export default function* () {
  yield takeEvery(actions.LOGIN, authorizationSaga);
  yield takeEvery(actions.REGISTRATION, registrationSaga);
}
