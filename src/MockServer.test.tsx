import React from "react";
import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

import { rest } from "msw";
import { setupServer } from "msw/node";
import { MockServer } from "./MockServer";

// mockサーバー
const server = setupServer(
  rest.get("https://jsonplaceholder.typicode.com/users/1", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json({ username: "Bred dummy" }));
  })
);

// mockサーバーを起動
beforeAll(() => server.listen());
// クリーンナップ(mockサーバーの定型分)
afterEach(() => {
  server.resetHandlers();
  cleanup();
});
// 最後に1回だけ呼ばれる
afterAll(() => server.close());
describe("Mocking API", () => {
  it("[Fetch success]Should display fetched data correctly and button disable", async () => {
    render(<MockServer />);
    userEvent.click(screen.getByRole("button"));
    expect(await screen.findByRole("heading")).toHaveTextContent("Bred dummy");
    // fetch後はbuttonがdisabledになっている
    expect(screen.getByRole("button")).toHaveAttribute("disabled");
  });
});
