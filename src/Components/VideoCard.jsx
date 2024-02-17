import React from "react";
import { formatAgo, formatViewCount } from "../util/date";
import { useNavigate } from "react-router-dom";

export default function VideoCard({ video, type }) {
  const { title, thumbnails, channelTitle, publishedAt } = video.snippet;
  const navigate = useNavigate();
  const isList = type === "list";
  return (
    <li
      className={`${
        isList ? "flex gap-1" : ""
      } cursor-pointer hover:scale-105 transition-transform rounded-xl`}
      onClick={() => {
        navigate(`/videos/watch/${video.id}`, { state: { video } });
      }}
    >
      <img
        className={`${isList ? "w-60 mr-2" : "w-full"} rounded-xl`}
        src={thumbnails.medium.url}
        alt={title}
      />
      <div>
        <p className="my-2 font-semibold line-clamp-2" title={title}>
          {title}
        </p>
        <p className="text-sm opacity-80">{channelTitle}</p>
        <p className="text-sm opacity-80">{formatAgo(publishedAt, "ko")}</p>
      </div>
    </li>
  );
}
