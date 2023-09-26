import React from "react";
import { render, screen } from "@testing-library/react";
import { Profile } from "./Profile";

test("renders scheduler page", () => {
  render(<Profile />);
  const linkElement = screen.getByText("Profile Page");
  expect(linkElement).toBeInTheDocument();
});
