import React from "react";
import { render, screen } from "@testing-library/react";
import { Profile } from "./Profile";

test("renders scheduler page", () => {
  render(<Profile />);
  const linkElement = screen.getByText("This is the profile page");
  expect(linkElement).toBeInTheDocument();
});
