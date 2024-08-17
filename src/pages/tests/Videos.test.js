import "@testing-library/jest-dom";

import { fakeVideo, fakeVideos } from "../../tests/videos";
import { render, screen, waitFor } from "@testing-library/react";
import { withAllContexts, withRouter } from "../../tests/utils";

import React from "react";
import { Route } from "react-router-dom";
import Videos from "../Videos";

describe("Videos 컴포넌트", () => {
  const fakeYoutube = {
    search: jest.fn(),
  };

  beforeEach(() => {
    fakeYoutube.search.mockImplementation((keyword) => {
      return keyword ? [fakeVideo] : fakeVideos;
    });
  });

  afterEach(() => {
    fakeYoutube.search.mockReset();
  });

  it("키워드가 지정되지 않은 경우 모든 비디오를 렌더링", async () => {
    renderWithPath("/");

    expect(fakeYoutube.search).toHaveBeenCalledWith(undefined);
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(fakeVideos.length);
    });
  });

  it("키워드가 지정된 경우 해당 키워드로 비디오를 검색", async () => {
    const searchKeyword = "fake-keyword";
    renderWithPath(`/${searchKeyword}`);

    expect(fakeYoutube.search).toHaveBeenCalledWith(searchKeyword);
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(1);
    });
  });

  it("항목을 가져올 때 로드 상태를 렌더링", () => {
    renderWithPath("/");

    expect(screen.getByText(/Loading.../i)).toBeInTheDocument();
  });

  it("항목을 가져오지 못했을 때 에러 메시지를 렌더링", async () => {
    fakeYoutube.search.mockImplementation(async () => {
      throw new Error("error");
    });

    renderWithPath("/");

    await waitFor(() => {
      expect(screen.getByText(/Something is wrong 😖/i)).toBeInTheDocument();
    });
  });

  function renderWithPath(path) {
    return render(
      withAllContexts(
        withRouter(
          <>
            <Route path="/" element={<Videos />} />
            <Route path="/:keyword" element={<Videos />} />
          </>,
          path
        ),
        fakeYoutube
      )
    );
  }
});
