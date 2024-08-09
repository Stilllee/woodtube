import { MemoryRouter, Routes } from "react-router-dom";

import React from "react";

export function withRouter(routes, initialEntries = "/") {
  return (
    <MemoryRouter initialEntries={[initialEntries]}>
      <Routes>{routes}</Routes>
    </MemoryRouter>
  );
}
