export const actions = {
  LOADING: "AUTH/LOADING",
  LOG_IN_EVENT: "AUTH/_LOG_IN_EVENT",
  LOG_OUT_EVENT: "AUTH/_LOG_OUT_EVENT",
};

export const setAuthLoading = (value) => ({
  type: actions.LOADING,
  payload: value,
});

export const authLogIn = (value) => ({
  type: actions.LOG_IN_EVENT,
  payload: value,
});

export const authLogOut = (value) => ({
  type: actions.LOG_OUT_EVENT,
  payload: value,
});
