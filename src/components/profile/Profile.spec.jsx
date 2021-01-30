import React from "react";
import { Index } from "./index";
import { render } from "@testing-library/react";

describe("Profile", () => {
  it("renders correctly", () => {
    const { container } = render(<Index />);
    expect(container.innerHTML).toMatch("Profile");
  });
});
