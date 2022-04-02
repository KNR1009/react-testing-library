import React from "react";
import { render, screen } from "@testing-library/react";
import { Render } from "./Render";

// describe("Rendering", () => {
//   it("Should render all elements collect", () => {
//     render(<Render />);
//     screen.debug(screen.getByRole("heading"));
//   });
// });

describe("Rendering", () => {
  it("should render all elements collect", () => {
    render(<Render />);
    expect(screen.getByRole("heading")).toBeTruthy();
    expect(screen.getByRole("textbox")).toBeTruthy();
    expect(screen.getAllByRole("button")[0]).toBeTruthy();
    expect(screen.getAllByRole("button")[1]).toBeTruthy();
    screen.debug(screen.getByText("Test"));
    expect(screen.getByTestId("copyright")).toBeTruthy();
  });
});
