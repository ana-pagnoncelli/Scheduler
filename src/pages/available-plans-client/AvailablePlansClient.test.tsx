import React from "react";
import { render, screen } from "@testing-library/react";
import { AvailablePlansClient } from "./AvailablePlansClient";

test("renders available plans page", () => {
  render(<AvailablePlansClient />);
  const linkElement = screen.getByText("Available plans");
  expect(linkElement).toBeInTheDocument();
});
