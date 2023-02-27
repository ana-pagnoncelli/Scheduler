import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { DrawerItem } from "./DrawerItem";
import { DrawerItemsProps, DrawerItemInfo } from "./types";

const items: DrawerItemInfo[] = [
  {
    name: "Expenses",
    icon: <InboxIcon />
  },
  {
    name: "Plannings",
    icon: <InboxIcon />
  },
  {
    name: "Graphs",
    icon: <InboxIcon />
  }
];

const secondaryItems: DrawerItemInfo[] = [
  {
    name: "Profile",
    icon: <InboxIcon />
  },
  {
    name: "Settings",
    icon: <InboxIcon />
  },
  {
    name: "Help",
    icon: <InboxIcon />
  }
];

export function DrawerItems({ open }: DrawerItemsProps) {
  return (
    <>
      <List>
        {items.map((item) => (
          <DrawerItem item={item} open={open} />
        ))}
      </List>
      <Divider />
      <List>
        {secondaryItems.map((item) => (
          <DrawerItem item={item} open={open} />
        ))}
      </List>
    </>
  );
}
