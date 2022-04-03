import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { UseEffectRender } from "./UseEffectRender";
import userEvent from "@testing-library/user-event";

afterEach(() => cleanup);

describe("useEffect rendering", () => {
  it("should render only after async function", async () => {
    render(<UseEffectRender></UseEffectRender>);
    // 非同期を待たない場合
    expect(screen.getByText("データがないです")).toBeInTheDocument();
    // 非同期を待つ場合
    expect(await screen.findByText(/I am/)).toBeInTheDocument();
  });
});
