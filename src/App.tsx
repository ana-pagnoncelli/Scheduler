/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { Header, DrawerHeader } from "./header";
import Router from "./routes";
import { UserContext } from "./providers/userProvider";
import { LoginOrSignUp } from "./pages/login";

function App() {
  const [user, setUser] = useState("");

  const shouldShowLoginOrSignUpPage = () => {
    // change this to be the click on the button on the header
    return window.location.pathname === "login";
  };

  const handleUserLogin = (userEmail: string) => {
    setUser(userEmail);
  };

  // use the showLoginOrSignUp to don't show the drawer

  return (
    <Box sx={{ display: "flex" }}>
      <UserContext.Provider value={user}>
        <BrowserRouter>
          <CssBaseline />
          <Header />
          <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            {shouldShowLoginOrSignUpPage() ? (
              <LoginOrSignUp handleUserLogin={handleUserLogin} />
            ) : (
              <Router handleUserLogin={handleUserLogin} />
            )}
          </Box>
        </BrowserRouter>
      </UserContext.Provider>
    </Box>
  );
}

export default App;
