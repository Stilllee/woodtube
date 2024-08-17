import "@testing-library/jest-dom";

import { render, screen } from "@testing-library/react";

import ChannelInfo from "../../Components/ChannelInfo";
import React from "react";
import RelatedVideos from "../../Components/RelatedVideos";
import { Route } from "react-router-dom";
import VideoDetail from "../VideoDetail";
import { fakeVideo } from "../../tests/videos";
import { withRouter } from "../../tests/utils";

jest.mock("../../Components/ChannelInfo");
jest.mock("../../Components/RelatedVideos");

describe("VideoDetail", () => {
  afterEach(() => {
    ChannelInfo.mockReset();
    RelatedVideos.mockReset();
  });

  it("비디오 상세 정보 렌더링", () => {
    render(
      withRouter(<Route path="/" element={<VideoDetail />} />, {
        pathname: "/",
        state: { video: fakeVideo },
        key: "fake-key",
      })
    );

    const { title, channelId, channelTitle } = fakeVideo.snippet;
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(RelatedVideos.mock.calls[0][0]).toStrictEqual({
      id: String(fakeVideo.id),
    });
    expect(ChannelInfo.mock.calls[0][0]).toEqual(
      expect.objectContaining({
        id: channelId,
        name: channelTitle,
      })
    );
  });
});
