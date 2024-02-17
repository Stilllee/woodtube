import React from "react";
import { useLocation } from "react-router-dom";
import ChannelInfo from "../Components/ChannelInfo";
import RelatedVideos from "../Components/RelatedVideos";

export default function VideoDetail() {
  const {
    state: { video },
  } = useLocation();
  const { title, channelId, channelTitle, description } = video.snippet;
  return (
    <section className="flex flex-col gap-6 p-8 lg:flex-row">
      <article className="basis-4/6">
        <iframe
          className="rounded-xl"
          id="player"
          type="text/html"
          width="100%"
          height="640"
          src={`http://www.youtube.com/embed/${video.id}`}
          frameborder="0"
        />
        <div className="py-4">
          <h2 className="text-xl font-bold">{title}</h2>
          <ChannelInfo id={channelId} name={channelTitle} />
          <pre className="p-4 whitespace-pre-wrap bg-zinc-600 rounded-xl">
            {description}
          </pre>
        </div>
      </article>
      <section className="basis-2/6">
        <RelatedVideos id={channelId} />
      </section>
    </section>
  );
}
