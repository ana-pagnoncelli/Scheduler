import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Header } from "../../src/header/Header";

describe("<Header />", () => {
  it("renders", () => {
    cy.mount(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    );
  });
});
