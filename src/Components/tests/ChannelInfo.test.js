import { render, screen, waitFor } from "@testing-library/react";
import { withAllContexts, withRouter } from "../../tests/utils";

import ChannelInfo from "../ChannelInfo";
import React from "react";
import { Route } from "react-router-dom";

describe("ChannelInfo", () => {
  const fakeYoutube = {
    channelImageURL: jest.fn(),
  };
  afterEach(() => fakeYoutube.channelImageURL.mockReset());

  it("올바르게 렌더링", async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => "url");
    const { asFragment } = renderChannelInfo();

    await waitFor(() => screen.getByRole("img"));
    expect(asFragment()).toMatchSnapshot();
  });

  it("URL 없이 렌더링", () => {
    fakeYoutube.channelImageURL.mockImplementation(() => {
      throw new Error("error");
    });

    renderChannelInfo();

    expect(screen.queryByRole("img")).toBeNull();
  });

  it("URL이 있을 때 렌더링", async () => {
    fakeYoutube.channelImageURL.mockImplementation(() => "url");

    renderChannelInfo();

    await waitFor(() => expect(screen.getByRole("img")).toBeInTheDocument());
  });

  function renderChannelInfo() {
    return render(
      withAllContexts(
        withRouter(
          <Route path="/" element={<ChannelInfo id="id" name="channel" />} />
        ),
        fakeYoutube
      )
    );
  }
});
