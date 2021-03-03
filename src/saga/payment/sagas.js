import { put, select, takeEvery } from "@redux-saga/core/effects";
import { actions } from "./actions";
import axios from "axios";
import { toast } from "react-toastify";
import { setCardInfo, setSuccessCard } from "../../redux/payment";
import { getToken } from "../../redux/auth";

function* getPaymentDataSaga() {
  const token = yield select(getToken);
  try {
    const { data } = yield axios.get("https://loft-taxi.glitch.me/card", {
      params: {
        token,
      },
    });

    if (data.success === false) {
      toast.error(data.error);
    } else {
      yield put(setCardInfo(data));
    }
  } catch (e) {}
}

function* setPaymentDataSaga({ payload: card }) {
  const token = yield select(getToken);
  try {
    const { data } = yield axios.post("https://loft-taxi.glitch.me/card", {
      ...card,
      token,
    });

    if (!data.success) {
      toast.error(data.error);
    } else {
      toast.success("Сохранено", { position: "top-center" });
      yield put(setCardInfo(card));
      yield put(setSuccessCard(true));
    }
  } catch (e) {}
}

export default function* () {
  yield takeEvery(actions.GET_DATA, getPaymentDataSaga);
  yield takeEvery(actions.SET_DATA, setPaymentDataSaga);
}
