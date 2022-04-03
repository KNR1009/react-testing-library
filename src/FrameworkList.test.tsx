import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import { FrameworkList } from "./FrameworkList";

afterEach(() => cleanup);

describe("List props", () => {
  /* propsが入ってない場合に表示されるコンポーネントのテスト */
  it("Should render No data !", () => {
    render(<FrameworkList />);
    expect(screen.getByText("データがありません")).toBeInTheDocument();
  });
  /* propsにデータが入っている場合 */
  it("Should render data", () => {
    const dummyDate = [
      {
        id: 1,
        item: "React dummy",
      },
      {
        id: 2,
        item: "vue dummy",
      },
    ];
    render(<FrameworkList data={dummyDate}></FrameworkList>);
    const frameworkItems = screen
      .getAllByRole("listitem")
      .map((ele) => ele.textContent);
    const dummyItems = dummyDate.map((ele) => ele.item);
    expect(frameworkItems).toEqual(dummyItems);
  });
});
