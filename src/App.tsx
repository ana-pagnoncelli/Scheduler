/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { LoginOrSignUp } from "./pages/login";
import { appStyle } from "./styles";
import { UserContext } from "./providers/userProvider";
import { DrawerHeader, Header } from "./header";
import Router from "./routes";

function App() {
  const [user, setUser] = useState("");

  // const shouldShowLoginOrSignUpPage = () => {
  //   // change this to be the click on the button on the header
  //   return window.location.pathname === "login";
  // };

  const userIsLogged = () => {
    return false;
  };

  const handleUserLogin = (userEmail: string) => {
    console.log(user);
    setUser(userEmail);
  };

  // use the showLoginOrSignUp to don't show the drawer

  return (
    <>
      <GlobalStyles styles={appStyle} />
      {userIsLogged() ? (
        <Box sx={{ display: "flex" }}>
          <UserContext.Provider value={user}>
            <BrowserRouter>
              <CssBaseline />
              <Header />
              <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Router handleUserLogin={handleUserLogin} />
              </Box>
            </BrowserRouter>
          </UserContext.Provider>
        </Box>
      ) : (
        <LoginOrSignUp handleUserLogin={handleUserLogin} />
      )}
    </>
  );
}

export default App;
