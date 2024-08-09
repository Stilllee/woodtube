import { MemoryRouter } from "react-router-dom";
import React from "react";
import VideoCard from "../VideoCard";
import { formatAgo } from "../../util/date";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";

describe("VideoCard", () => {
  it("비디오 항목을 렌더링", () => {
    const video = {
      id: 1,
      snippet: {
        title: "제목",
        channelId: "1",
        channelTitle: "채널명",
        publishedAt: new Date(),
        thumbnails: {
          medium: {
            url: "http://example.com/image.jpg",
          },
        },
      },
    };
    const { title, channelId, channelTitle, publishedAt, thumbnails } =
      video.snippet;

    render(
      <MemoryRouter>
        <VideoCard video={video} />
      </MemoryRouter>
    );

    const image = screen.getByRole("img");
    expect(image.src).toBe(thumbnails.medium.url);
    expect(image.alt).toBe(title);
    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(channelTitle)).toBeInTheDocument();
    expect(screen.getByText(formatAgo(publishedAt, "ko"))).toBeInTheDocument();
  });
});
