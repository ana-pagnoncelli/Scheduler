import * as React from "react";
// import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { DrawerItem } from "./DrawerItem";
import { DrawerItemsProps, DrawerItemInfo } from "./types";

const items: DrawerItemInfo[] = [
  {
    name: "Home",
    icon: <InboxIcon />,
    path: "/home"
  },
  {
    name: "Schedule Class",
    icon: <InboxIcon />,
    path: "/schedule-class"
  },
  {
    name: "Cancel Class",
    icon: <InboxIcon />,
    path: "/cancel-class"
  },
  {
    name: "Available Plans",
    icon: <InboxIcon />,
    path: "/available-plans"
  }
];

const secondaryItems: DrawerItemInfo[] = [
  {
    name: "Profile",
    icon: <InboxIcon />,
    path: "/profile"
  },
  {
    name: "Login",
    icon: <InboxIcon />,
    path: "/login"
  },
  {
    name: "Help",
    icon: <InboxIcon />,
    path: "/help"
  }
];

export function DrawerItems({ open }: DrawerItemsProps) {
  return (
    <>
      {items.map((item) => (
        <DrawerItem item={item} open={open} key={item.name} />
      ))}
      <Divider />
      {secondaryItems.map((item) => (
        <DrawerItem item={item} open={open} key={item.name} />
      ))}
    </>
  );
}
