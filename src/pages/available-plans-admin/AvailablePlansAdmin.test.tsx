import React from "react";
import { render, screen } from "@testing-library/react";
import { AvailablePlansAdmin } from "./AvailablePlansAdmin";

test("renders available plans page", () => {
  render(<AvailablePlansAdmin />);
  const linkElement = screen.getByText("Available plans");
  expect(linkElement).toBeInTheDocument();
});
