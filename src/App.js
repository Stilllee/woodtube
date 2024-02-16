import React from "react";
import { Outlet } from "react-router-dom";
import SearchHeader from "./Components/SearchHeader";

export default function App() {
  return (
    <>
      <SearchHeader />
      <Outlet />
    </>
  );
}
