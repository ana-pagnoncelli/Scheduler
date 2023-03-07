import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });
  test("renders home page", () => {
    const linkElement = screen.getByText("This is the home page");
    expect(linkElement).toBeInTheDocument();
  });

  describe("all the components are rendering", () => {
    it("should render Header", () => {});
    it("should render Drawer", () => {});
  });

  describe("all the items on the drawer are redirecting to the right page when clicked", () => {
    // try to implement a it.each here
    it("should redirect to login page when clicking on Login item", () => {});
    it("should redirect to profile page when clicking on Profile item", () => {});
  });
});
