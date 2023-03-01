import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "./Header";

describe("<Header />", () => {
  it("renders", () => {
    cy.mount(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
});
