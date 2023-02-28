import React from "react";
import { render, screen } from "@testing-library/react";
import { Expenses } from "./Expenses";

test("renders expenses page", () => {
  render(<Expenses />);
  const linkElement = screen.getByText("This is the expenses page");
  expect(linkElement).toBeInTheDocument();
});
