export const actions = {
  LOGIN: "AUTH_SAGA/LOGIN",
  REGISTRATION: "AUTH_SAGA/REGISTRATION",
};

// {login: string, password: string}
export const logIn = (object) => ({
  type: actions.LOGIN,
  payload: object,
});

//{email: "email@example.com", password: "password", name: "Name"}
export const registration = (object) => ({
  type: actions.REGISTRATION,
  payload: object,
});
