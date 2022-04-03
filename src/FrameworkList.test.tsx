import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { FrameworkList } from "./FrameworkList";

afterEach(() => cleanup);

describe("List Props", () => {
  // propsが存在しない場合
  it("should render no date !", () => {
    render(<FrameworkList></FrameworkList>);
    expect(screen.getByText("データがありません")).toBeInTheDocument();
  });
  // propsが存在しListComponentが表示される時
  it("should render data !", () => {
    const dummy_data = [
      {
        id: 1,
        item: "React_dummy",
      },
      {
        id: 2,
        item: "Angular_dummy",
      },
      {
        id: 3,
        item: "Vue_dummy",
      },
    ];
    render(<FrameworkList data={dummy_data}></FrameworkList>);
    // HTMLで出力されるテキストを取得し配列に格納
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent);
    const dummyItems = dummy_data.map((item) => item.item);
    expect(frameworkItems).toEqual(dummyItems);
  });
});
