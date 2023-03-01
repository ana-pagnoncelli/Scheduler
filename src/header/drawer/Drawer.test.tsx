import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Drawer } from "./Drawer";

const renderDrawer = () => {
  render(
    <BrowserRouter>
      <Drawer open={false} handleDrawerClose={() => {}} />
    </BrowserRouter>
  );
};

test("renders drawer", () => {
  renderDrawer();
  const linkElement = screen.getByTestId("Drawer");
  expect(linkElement).toBeInTheDocument();
});
