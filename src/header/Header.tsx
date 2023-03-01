import * as React from "react";
import { Toolbar, Typography, Button, Box, CssBaseline } from "@mui/material";
import AppBar from "./styles";

import { DrawerButton, Drawer } from "./drawer";

export function Header() {
  const [isDrawerOpen, setDrawerOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
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
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Scheduler Header
          </Typography>
          <Button color='inherit'>Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer open={isDrawerOpen} handleDrawerClose={handleDrawerClose} />
    </Box>
  );
}
