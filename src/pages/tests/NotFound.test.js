import NotFound from "../NotFound";
import React from "react";
import { Route } from "react-router-dom";
import { render } from "@testing-library/react";
import { withRouter } from "../../tests/utils";

describe("NotFound", () => {
  it("올바르게 렌더링", () => {
    const { asFragment } = render(
      withRouter(<Route path="/" element={<NotFound />} />)
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
