import * as React from "react";
// import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { DrawerItem } from "./DrawerItem";
import { DrawerItemsProps, DrawerItemInfo } from "./types";

const items: DrawerItemInfo[] = [
  {
    name: "Expenses",
    icon: <InboxIcon />,
    path: "/expenses"
  },
  {
    name: "Plannings",
    icon: <InboxIcon />,
    path: "/plannings"
  },
  {
    name: "Graphs",
    icon: <InboxIcon />,
    path: "/graphs"
  }
];

const secondaryItems: DrawerItemInfo[] = [
  {
    name: "Profile",
    icon: <InboxIcon />,
    path: "/profile"
  },
  {
    name: "Settings",
    icon: <InboxIcon />,
    path: "/settings"
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
