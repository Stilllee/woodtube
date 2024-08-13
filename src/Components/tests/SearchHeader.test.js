import { render, screen } from "@testing-library/react";

import React from "react";
import { Route } from "react-router-dom";
import SearchHeader from "../SearchHeader";
import { userEvent } from "@testing-library/user-event";
import { withRouter } from "../../tests/utils";

describe("SearchHeader", () => {
  it("올바르게 렌더링", () => {
    const { asFragment } = render(
      withRouter(<Route path="/" element={<SearchHeader />} />)
    );
    expect(asFragment()).toMatchSnapshot();
  });

  it("키워드로 올바르게 렌더링", async () => {
    render(
      withRouter(
        <Route path="/:keyword" element={<SearchHeader />} />,
        "/newjeans"
      )
    );
    expect(screen.getByDisplayValue("newjeans")).toBeInTheDocument();
  });

  it("검색 버튼 클릭 시 결과 페이지로 이동", async () => {
    const user = userEvent.setup();
    const searchKeyword = "fake-keyword";

    render(
      withRouter(
        <>
          <Route path="home" element={<SearchHeader />} />
          <Route
            path={`/videos/${searchKeyword}`}
            element={<p>{`${searchKeyword}에 대한 검색 결과`}</p>}
          />
        </>,
        "/home"
      )
    );

    const searchButton = screen.getByRole("button");
    const searchInput = screen.getByRole("textbox");

    await user.type(searchInput, searchKeyword);
    await user.click(searchButton);

    expect(
      screen.getByText(`${searchKeyword}에 대한 검색 결과`)
    ).toBeInTheDocument();
  });
});
