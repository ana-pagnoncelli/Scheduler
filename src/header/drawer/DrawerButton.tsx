import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { DrawerButtonProps } from "./types";

export function DrawerButton({ open, handleDrawerOpen }: DrawerButtonProps) {
  return (
    <IconButton
      color='inherit'
      aria-label='open drawer'
      onClick={handleDrawerOpen}
      edge='start'
      sx={{
        marginRight: 5,
        ...(open && { display: "none" })
      }}
    >
      <MenuIcon />
    </IconButton>
  );
}
