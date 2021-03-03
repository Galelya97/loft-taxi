import { applyMiddleware, combineReducers, createStore, compose } from "redux";
import createSagaMiddleware from "redux-saga";
import auth from "./auth";
import route from "./route";
import payment from "./payment";
import rootSaga from "../saga";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  combineReducers({
    auth,
    route,
    payment,
  }),
  composeEnhancers(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
