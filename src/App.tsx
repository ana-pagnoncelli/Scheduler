import React, { useState } from "react";
import { Box, CssBaseline, GlobalStyles } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { LoginOrSignUp } from "./pages/login";
import { appStyle } from "./styles";
import {
  UserContext,
  UserContextType,
  defaultUserContext
} from "./providers/userProvider";
import { DrawerHeader, Header } from "./header";
import Router from "./routes";

function App() {
  const [userContext, setUserContext] =
    useState<UserContextType>(defaultUserContext);

  // const shouldShowLoginOrSignUpPage = () => {
  //   // change this to be the click on the button on the header
  //   return window.location.pathname === "login";
  // };

  const userIsLogged = () => {
    return userContext?.email !== "";
  };

  const handleUserLogin = (newUserContext: UserContextType) => {
    console.log(userContext);
    setUserContext(newUserContext);
  };

  // use the showLoginOrSignUp to don't show the drawer

  return (
    <>
      <GlobalStyles styles={appStyle} />
      {userIsLogged() ? (
        <Box sx={{ display: "flex" }}>
          <UserContext.Provider value={userContext}>
            <BrowserRouter>
              <CssBaseline />
              <Header />
              <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
                <DrawerHeader />
                <Router />
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
