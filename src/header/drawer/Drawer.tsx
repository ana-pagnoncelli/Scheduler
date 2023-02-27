import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerProps } from "./types";
import { DrawerStyle, DrawerHeader } from "./styles";
import { DrawerItems } from "./DrawerItems";

export function Drawer({ open, handleDrawerClose }: DrawerProps) {
  const theme = useTheme();

  return (
    <DrawerStyle variant='permanent' open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === "rtl" ? (
            <ChevronRightIcon />
          ) : (
            <ChevronLeftIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <DrawerItems open={open} />
    </DrawerStyle>
  );
}
