import React from "react";
import { render, screen } from "@testing-library/react";
import { Logout } from "./Logout";

test("renders scheduler page", () => {
  render(<Logout />);
  const linkElement = screen.getByText("This is the logout page");
  expect(linkElement).toBeInTheDocument();
});
