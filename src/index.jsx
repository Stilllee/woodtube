import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import App from "./App";
import NotFound from "./pages/NotFound";
import React from "react";
import ReactDOM from "react-dom/client";
import VideoDetail from "./pages/VideoDetail";
import Videos from "./pages/Videos";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Videos /> },
      { path: "videos", element: <Videos /> },
      { path: "videos/:keyword", element: <Videos /> },
      { path: "videos/watch/:videoId", element: <VideoDetail /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
