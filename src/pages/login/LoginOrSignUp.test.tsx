import React from "react";
import { render, screen } from "@testing-library/react";
import { LoginOrSignUp } from "./LoginOrSignUp";

describe("LoginOrSignUp", () => {
  beforeEach(() => {
    render(<LoginOrSignUp />);
  });
  it("renders LoginOrSignUp component", () => {
    const linkElement = screen.getByText("This is the Login form component");
    expect(linkElement).toBeInTheDocument();
  });
});
