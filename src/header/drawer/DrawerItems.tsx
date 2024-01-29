import React, { useContext } from "react";
// import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { DrawerItem } from "./DrawerItem";
import { DrawerItemsProps, DrawerItemInfo } from "./types";
import { UserContext } from "../../context/userContext";

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
    name: "Help",
    icon: <InboxIcon />,
    path: "/help"
  }
];

export function DrawerItems({ open }: DrawerItemsProps) {
  const user = useContext(UserContext);
  const itemsWithLogin = () => {
    const item: DrawerItemInfo = {
      name: "Login",
      icon: <InboxIcon />,
      path: "/login"
    };

    return [...secondaryItems, item];
  };

  const itemsWithLogout = () => {
    const item: DrawerItemInfo = {
      name: "Logout",
      icon: <InboxIcon />,
      path: "/logout"
    };

    return [...secondaryItems, item];
  };

  const getSecondaryItems = () => {
    if (!user) {
      return itemsWithLogin();
    }
    return itemsWithLogout();
  };

  return (
    <>
      {items.map((item) => (
        <DrawerItem item={item} open={open} key={item.name} />
      ))}
      <Divider />
      {getSecondaryItems().map((item) => (
        <DrawerItem item={item} open={open} key={item.name} />
      ))}
    </>
  );
}
