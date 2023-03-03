import React from "react";
import { render, screen } from "@testing-library/react";
import { Login } from "./Login";

test("renders scheduler page", () => {
  render(<Login />);
  const linkElement = screen.getByText("User Registration");
  expect(linkElement).toBeInTheDocument();
});
