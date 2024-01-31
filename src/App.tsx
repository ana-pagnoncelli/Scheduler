import React from "react";
import { GlobalStyles } from "@mui/material";
import { appStyle } from "./styles";
import { AppProvider } from "./AppProvider";
import { AppLoginOrRoute } from "./AppLoginOrRoute";

function App() {
  return (
    <AppProvider>
      <GlobalStyles styles={appStyle} />
      <AppLoginOrRoute />
    </AppProvider>
  );
}

export default App;
