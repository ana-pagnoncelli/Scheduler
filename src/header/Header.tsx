import React, { useContext } from "react";
import { Toolbar, Typography, Button, Box, CssBaseline } from "@mui/material";
import { useNavigate } from "react-router-dom";
import AppBar from "./styles";

import { DrawerButton, Drawer } from "./drawer";
import { UserContext } from "../providers/userProvider";

export function Header() {
  const navigate = useNavigate();
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);
  const user = useContext(UserContext);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const redirectToLoginPage = () => {
    navigate("/login");
  };

  const redirectToHomePage = () => {
    navigate("/home");
  };

  const loginButton = (): JSX.Element => {
    return (
      <div>
        {user ? (
          <div>{user}</div>
        ) : (
          <Button color='inherit' onClick={redirectToLoginPage}>
            Login
          </Button>
        )}
      </div>
    );
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position='fixed' isDrawerOpen={isDrawerOpen}>
        <Toolbar color='red'>
          <DrawerButton
            open={isDrawerOpen}
            handleDrawerOpen={handleDrawerOpen}
          />
          <Typography
            variant='h6'
            component='div'
            onClick={redirectToHomePage}
            sx={{ flexGrow: 1 }}
          >
            Scheduler Header
          </Typography>
          {loginButton()}
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} handleDrawerClose={handleDrawerClose} />
    </Box>
  );
}
