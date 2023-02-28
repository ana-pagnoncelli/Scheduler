import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { Header, DrawerHeader } from "./header";
import Router from "./routes";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <BrowserRouter>
        <CssBaseline />
        <Header />

        <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
          <DrawerHeader />
          <Router />
        </Box>
      </BrowserRouter>
    </Box>
  );
}

export default App;
