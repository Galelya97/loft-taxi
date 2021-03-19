import React from "react";
import { Map } from "./index";
import { render } from "@testing-library/react";

describe("Map", () => {
  it("renders correctly", () => {
    const { container } = render(<Map />);
    expect(container.innerHTML).toMatch("Map");
  });
});
