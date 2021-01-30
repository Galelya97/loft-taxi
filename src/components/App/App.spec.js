import React from "react";
import App from "./App";
import { render, fireEvent } from "@testing-library/react";

jest.mock("./Home", () => ({ Home: () => <div>Home component</div> }));
jest.mock("./Map", () => ({ About: () => <div>Map component</div> }));
jest.mock("./Index", () => ({ Profile: () => <div>Profile component</div> }));

describe("App", () => {
  it("renders correctly", () => {
    const { container } = render(<App />);
    expect(container.innerHTML).toMatch("Home component");
  });

  describe("clocked on navigation button", () => {
    it("opens the corresponding page", () => {
      const { getByText, container } = render(<App />);

      fireEvent.click(getByText("Map"));
      expect(container.innerHTML).toMatch("Map component");

      fireEvent.click(getByText("Profile"));
      expect(container.innerHTML).toMatch("Index component");
    });
  });
});
