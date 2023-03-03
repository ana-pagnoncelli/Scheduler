import React from "react";
import { render, screen } from "@testing-library/react";
import { AvailablePlans } from "./AvailablePlans";

test("renders scheduler page", () => {
  render(<AvailablePlans />);
  const linkElement = screen.getByText("This is the available plans page");
  expect(linkElement).toBeInTheDocument();
});
