import React from "react";
import { render } from "@testing-library/react";
import { Context, AppProvider } from "./context";
import { act } from "react-dom/test-utils";

describe("Context", () => {
  describe("#logIn", () => {
    it('sets "isLoggedIn" to false', () => {
      let isLoggedIn;
      let logIn;

      render(
        <AppProvider>
          <Context.Consumer>
            {(value) => {
              isLoggedIn = value.isLoggedIn;
              logIn = value.logIn;
              return null;
            }}
          </Context.Consumer>
        </AppProvider>
      );

      expect(isLoggedIn).toBe(false);
      act(() => {
        logIn("asd@asd", "123123");
      });
      expect(isLoggedIn).toBe(true);
    });
  });
});
