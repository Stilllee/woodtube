import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Outlet } from "react-router-dom";
import React from "react";
import SearchHeader from "./Components/SearchHeader";
import { YoutubeApiProvider } from "./context/YoutubeProvider";

const queryClient = new QueryClient();
export default function App() {
  return (
    <>
      <SearchHeader />
      <YoutubeApiProvider>
        <QueryClientProvider client={queryClient}>
          <Outlet />
        </QueryClientProvider>
      </YoutubeApiProvider>
    </>
  );
}
