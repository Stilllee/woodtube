import FakeYoutubeClient from "../api/fakeYoutubeClient";
import Youtube from "../api/youtube";
import { YoutubeApiContext } from "./YoutubeApiContext";
import YoutubeClient from "../api/youtubeClient";

// const client = new FakeYoutubeClient();
const client = new YoutubeClient();

const youtube = new Youtube(client);

export function YoutubeApiProvider({ children }) {
  return (
    <YoutubeApiContext.Provider value={{ youtube }}>
      {children}
    </YoutubeApiContext.Provider>
  );
}
