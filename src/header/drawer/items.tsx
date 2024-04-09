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
  const items: DrawerItemInfo[] = [
    {
      name: "Manage Schedules",
      icon: <InboxIcon />,
      path: "/schedule-admin"
    },
    {
      name: "Manage Plans",
      icon: <InboxIcon />,
      path: "/available-plans-admin"
    }
  ];

  return [...primaryBaseItems, ...items];
};

export const itemsWithClient = () => {
  const items: DrawerItemInfo[] = [
    {
      name: "Schedule Class",
      icon: <InboxIcon />,
      path: "/schedule-class"
    },
    {
      name: "Available Plans",
      icon: <InboxIcon />,
      path: "/available-plans"
    }
  ];

  return [...primaryBaseItems, ...items];
};
