import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

const renderHeader = () => {
  render(
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};

test("renders header", () => {
  renderHeader();
  const linkElement = screen.getByText("Scheduler Header");
  expect(linkElement).toBeInTheDocument();
});
