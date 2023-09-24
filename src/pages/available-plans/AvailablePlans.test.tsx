import React from "react";
import { render, screen } from "@testing-library/react";
import { AvailablePlans } from "./AvailablePlans";

test("renders available plans page", () => {
  render(<AvailablePlans />);
  const linkElement = screen.getByText("Available plans");
  expect(linkElement).toBeInTheDocument();
});
