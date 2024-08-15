import {
  render,
  screen,
  waitFor,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import { withAllContexts, withRouter } from "../../tests/utils";

import React from "react";
import RelatedVideos from "../RelatedVideos";
import { Route } from "react-router-dom";
import { fakeVideos } from "../../tests/videos";

describe("RelatedVideos", () => {
  const fakeYoutube = {
    relatedVideos: jest.fn(),
  };

  afterEach(() => fakeYoutube.relatedVideos.mockReset());

  it("올바르게 렌더링", async () => {
    fakeYoutube.relatedVideos.mockImplementation(() => fakeVideos);
    const { asFragment } = renderRelatedVideos();

    await waitForElementToBeRemoved(screen.getByText("Loading..."));
    expect(asFragment()).toMatchSnapshot();
  });

  it("연관 비디오를 올바르게 렌더링", async () => {
    fakeYoutube.relatedVideos.mockImplementation(() => fakeVideos);
    renderRelatedVideos();

    expect(fakeYoutube.relatedVideos).toHaveBeenCalledWith("id");
    await waitFor(() => {
      expect(screen.getAllByRole("listitem")).toHaveLength(fakeVideos.length);
    });
  });

  it("로딩 렌더링", () => {
    fakeYoutube.relatedVideos.mockImplementation(() => fakeVideos);
    renderRelatedVideos();

    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  it("에러 렌더링", async () => {
    fakeYoutube.relatedVideos.mockImplementation(() => {
      throw new Error("error");
    });

    renderRelatedVideos();
    await waitFor(() => {
      expect(screen.getByText("Something is wrong 😖")).toBeInTheDocument();
    });
  });

  function renderRelatedVideos() {
    return render(
      withAllContexts(
        withRouter(<Route path="/" element={<RelatedVideos id="id" />} />),
        fakeYoutube
      )
    );
  }
});
