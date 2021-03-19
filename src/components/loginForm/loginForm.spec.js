import React from "react";
import { fireEvent, render } from "@testing-library/react";
import LoginForm from "./index";

const setup = () => {
  const utils = render(<LoginForm />);
  const submit = utils.getByTestId("login-button");
  const login = utils.getByTestId("login-input");
  const loginInput = login.getElementsByTagName("input")[0];
  const password = utils.getByTestId("password-input");
  const passwordInput = password.getElementsByTagName("input")[0];
  return {
    submit,
    login,
    password,
    loginInput,
    passwordInput,
    ...utils,
  };
};

describe("LoginForm", () => {
  describe("#onSubmit", () => {
    const { submit, loginInput, passwordInput, queryByText } = setup();

    it("should enter Errors", function () {
      expect(queryByText("Пустой логин")).toBeNull();
      expect(queryByText("Пустой пароль")).toBeNull();

      submit.click();

      expect(queryByText("Пустой логин")).toBeTruthy();
      expect(queryByText("Пустой пароль")).toBeTruthy();

      fireEvent.change(loginInput, { target: { value: "asd@asd" } });
      fireEvent.change(passwordInput, { target: { value: "123123" } });

      expect(queryByText("Пустой логин")).toBeNull();
      expect(queryByText("Пустой пароль")).toBeNull();

      expect(loginInput.getAttributeNode("disabled")).toBeNull();
      expect(passwordInput.getAttributeNode("disabled")).toBeNull();

      submit.click();

      expect(queryByText("Пустой логин")).toBeNull();
      expect(queryByText("Пустой пароль")).toBeNull();

      expect(loginInput.getAttributeNode("disabled")).toBeTruthy();
      expect(passwordInput.getAttributeNode("disabled")).toBeTruthy();
    });
    it("should", function () {
      expect(loginInput.getAttributeNode("disabled")).toBeNull();
      expect(passwordInput.getAttributeNode("disabled")).toBeNull();

      submit.click();
    });
  });
});
