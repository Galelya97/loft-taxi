import { put, takeEvery } from "@redux-saga/core/effects";
import { actions } from "./actions";
import { setAddressList, setRoute } from "../../redux/route";
import axios from "axios";
import { toast } from "react-toastify";

function* addressListSaga() {
  try {
    const { data } = yield axios.get("https://loft-taxi.glitch.me/addressList");

    yield put(setAddressList(data.addresses));
  } catch (e) {}
}

function* getRouteSaga({ payload: { address1, address2 } }) {
  try {
    const { data } = yield axios.get("https://loft-taxi.glitch.me/route", {
      params: {
        address1,
        address2,
      },
    });

    if (!data.length) {
      toast.error("Маршрут не может быть построен");
    }
    yield put(setRoute(data));
  } catch (e) {}
}

export default function* () {
  yield takeEvery(actions.ADDRESS_LIST, addressListSaga);
  yield takeEvery(actions.GET_ROUTE, getRouteSaga);
}
