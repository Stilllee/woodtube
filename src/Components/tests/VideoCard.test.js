import React from "react";
import { Route } from "react-router-dom";
import VideoCard from "../VideoCard";
import { formatAgo } from "../../util/date";
import { render } from "@testing-library/react";
import { screen } from "@testing-library/dom";
import { useLocation } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { fakeVideo as video } from "../../tests/videos";
import { withRouter } from "../../tests/utils";

describe("VideoCard", () => {
  const { title, channelTitle, publishedAt, thumbnails } = video.snippet;

  it("그리드 type을 올바르게 렌더링", () => {
    const { asFragment } = render(
      withRouter(<Route path="/" element={<VideoCard video={video} />} />)
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("리스트 type을 올바르게 렌더링", () => {
    const { asFragment } = render(
      withRouter(
        <Route path="/" element={<VideoCard video={video} type="list" />} />
      )
    );

    expect(asFragment()).toMatchSnapshot();
  });

  it("비디오 항목을 렌더링", () => {
    render(
      withRouter(<Route path="/" element={<VideoCard video={video} />} />)
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
      withRouter(
        <>
          <Route path="/" element={<VideoCard video={video} />} />
          <Route
            path={`/videos/watch/${video.id}`}
            element={<LocationStateDisplay />}
          />
        </>
      )
    );

    const card = screen.getByRole("listitem");
    await userEvent.click(card);

    expect(screen.getByText(JSON.stringify({ video }))).toBeInTheDocument();
  });
});
