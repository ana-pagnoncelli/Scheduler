import React from "react";

import { BrowserRouter } from "react-router-dom";
import { Header } from "../header";

export default {
  title: "Header",
  component: Header
};

export const renderHeader = () => {
  return (
    <BrowserRouter>
      <Header />
    </BrowserRouter>
  );
};
