import { MemoryRouter, Route, Routes } from "react-router-dom";

import React from "react";
import VideoCard from "../VideoCard";
import { formatAgo } from "../../util/date";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";

describe("VideoCard", () => {
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

  it("비디오 항목을 렌더링", () => {
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

  it("클릭하면 video state와 함께 비디오 상세 페이지로 이동", async () => {
    function LocationStateDisplay() {
      return <pre>{JSON.stringify(useLocation().state)}</pre>;
    }

    render(
      <MemoryRouter initialEntries={["/"]}>
        <Routes>
          <Route path="/" element={<VideoCard video={video} />} />
          <Route
            path={`/videos/watch/${video.id}`}
            element={<LocationStateDisplay />}
          />
        </Routes>
      </MemoryRouter>
    );

    const card = screen.getByRole("listitem");
    await userEvent.click(card);

    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument();
  });
});
