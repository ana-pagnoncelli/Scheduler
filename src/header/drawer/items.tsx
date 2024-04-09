import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import { DrawerItemInfo } from "./types";

export const primaryBaseItems: DrawerItemInfo[] = [
  {
    name: "Home",
    icon: <InboxIcon />,
    path: "/home"
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

const secondaryBaseItems: DrawerItemInfo[] = [
  {
    name: "Help",
    icon: <InboxIcon />,
    path: "/help"
  }
];

export const itemsWithLogin = () => {
  const items: DrawerItemInfo[] = [
    {
      name: "Logout",
      icon: <InboxIcon />,
      path: "/logout"
    },

    { name: "Profile", icon: <InboxIcon />, path: "/profile" }
  ];

  return [...secondaryBaseItems, ...items];
};

export const itemsWithLogout = () => {
  const item: DrawerItemInfo = {
    name: "Login",
    icon: <InboxIcon />,
    path: "/login"
  };

  return [...secondaryBaseItems, item];
};

export const itemsWithAdmin = () => {
  const item: DrawerItemInfo = {
    name: "Manage Schedules",
    icon: <InboxIcon />,
    path: "/schedule-admin"
  };

  return [...primaryBaseItems, item];
};

export const itemsWithClient = () => {
  const item: DrawerItemInfo = {
    name: "Schedule Class",
    icon: <InboxIcon />,
    path: "/schedule-class"
  };

  return [...primaryBaseItems, item];
};
