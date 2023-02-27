import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { Header, DrawerHeader } from "./header";
import Router from "./routes";

function App() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <Header />

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Box>
    </Box>
  );
}

export default App;
