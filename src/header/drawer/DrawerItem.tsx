import * as React from "react";
import { useNavigate } from "react-router-dom";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { DrawerItemProps } from "./types";

export function DrawerItem({ item, open }: DrawerItemProps) {
  const navigate = useNavigate();
  const redirectToItemPath = () => {
    navigate(item.path);
  };

  return (
    <ListItem
      key={item.name}
      disablePadding
      sx={{ display: "block" }}
      onClick={redirectToItemPath}
    >
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? "initial" : "center",
          px: 2.5
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : "auto",
            justifyContent: "center"
          }}
        >
          {item.icon}
        </ListItemIcon>
        <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
}
