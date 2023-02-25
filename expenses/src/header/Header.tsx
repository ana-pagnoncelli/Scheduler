import * as React from "react";

// importing material UI components
import { AppBar, Toolbar, Typography, Button, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "./Header.css";

export function Header() {
  return (
    <AppBar position='static' className='header-bar'>
      <Toolbar color='red'>
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='menu'
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          Expenses Header
        </Typography>
        <Button color='inherit'>Login</Button>
      </Toolbar>
    </AppBar>
  );
}

export const ana = "extra";
