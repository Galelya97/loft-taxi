import { all, fork } from "@redux-saga/core/effects";
import authSaga from "./auth";
import routeSaga from "./route";
import paymentSaga from "./payment";

export default function* rootSaga() {
  yield all([
    // fork(addressListSaga),
    fork(authSaga),
    fork(paymentSaga),
    fork(routeSaga),
  ]);
}
