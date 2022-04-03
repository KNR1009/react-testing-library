import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { RenderInput } from "./RenderInput";
import userEvent from "@testing-library/user-event";

afterEach(() => cleanup);
// describe("Input", () => {
//   /* 要素のレンダリングテスト */
//   it("should render input", () => {
//     render(<RenderInput />);
//     expect(screen.getByRole("textbox")).toBeTruthy();
//     expect(screen.getByRole("button")).toBeTruthy();
//   });
// });
// describe("Input event", () => {
//   /* 入力フォーム用テスト */
//   it("should form onChange event", () => {
//     render(<RenderInput />);
//     const inputValue = screen.getByPlaceholderText("Enter") as HTMLInputElement;
//     userEvent.type(inputValue, "test");
//     expect(inputValue.value).toBe("test");
//   });
// });
describe("Output element", () => {
  /* 入力フォーム用テスト */
  it("Output element functions", () => {
    const outPutConsole = jest.fn();
    render(<RenderInput onClick={outPutConsole} />);
    /* valueに値が入っていない場合は発火されない */
    userEvent.click(screen.getByRole("button"));
    expect(outPutConsole).not.toHaveBeenCalled();
    /* valueに値が入っている場合は発火する */
    const inputValue = screen.getByPlaceholderText("Enter") as HTMLInputElement;
    userEvent.type(inputValue, "test");
    userEvent.click(screen.getByRole("button"));
    expect(outPutConsole).toHaveBeenCalled();
  });
});
