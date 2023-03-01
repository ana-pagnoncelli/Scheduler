import React from "react";
import { render, screen } from "@testing-library/react";
import { Schedule } from "./Schedule";

test("renders scheduler page", () => {
  render(<Schedule />);
  const linkElement = screen.getByText("This is the scheduler page");
  expect(linkElement).toBeInTheDocument();
});
