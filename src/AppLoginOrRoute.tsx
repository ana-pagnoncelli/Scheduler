import React from "react";
import { Box, CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { LoginOrSignUp } from "./pages/login";
import { DrawerHeader, Header } from "./header";
import Router from "./routes";
import { useUser } from "./hooks/useUser";

export function AppLoginOrRoute() {
  const { email } = useUser();

  const userIsLogged = (): boolean => {
    return email !== "";
  };

  return (
    <div>
      {userIsLogged() ? (
        <Box sx={{ display: "flex" }}>
          <BrowserRouter>
            <CssBaseline />
            <Header />
            <Box component='main' sx={{ flexGrow: 1 }}>
              <DrawerHeader />
              <Router />
            </Box>
          </BrowserRouter>
        </Box>
      ) : (
        <LoginOrSignUp />
      )}
    </div>
  );
}
