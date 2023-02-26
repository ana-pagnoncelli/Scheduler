import * as React from "react";
import { useTheme } from "@mui/material/styles";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DrawerProps } from "./types";
import { DrawerStyle, DrawerHeader } from "./styles";
import { DrawerItem } from "./DrawerItem";

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
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <DrawerItem index={index} open={open} text={text} />
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <DrawerItem index={index} open={open} text={text} />
        ))}
      </List>
    </DrawerStyle>
  );
}
