import React from "react";
import { render, screen } from "@testing-library/react";
import { NotFound } from "./NotFound";

test("renders not found page", () => {
  render(<NotFound />);
  const linkElement = screen.getByText("Sorry, page not found!");
  expect(linkElement).toBeInTheDocument();
});
