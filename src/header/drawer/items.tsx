import React from "react";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import PeopleIcon from "@mui/icons-material/People";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import AppsIcon from "@mui/icons-material/Apps";
import HomeIcon from "@mui/icons-material/Home";
import HelpIcon from "@mui/icons-material/Help";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { DrawerItemInfo } from "./types";

export const primaryBaseItems: DrawerItemInfo[] = [
  {
    name: "Home",
    icon: <HomeIcon />,
    path: "/home"
  }
  // {
  //   name: "Cancel Class",
  //   icon: <InboxIcon />,
  //   path: "/cancel-class"
  // }
];

const secondaryBaseItems: DrawerItemInfo[] = [
  {
    name: "Help",
    icon: <HelpIcon />,
    path: "/help"
  }
];

export const itemsWithLogin = () => {
  const items: DrawerItemInfo[] = [
    { name: "Profile", icon: <PersonIcon />, path: "/profile" },
    {
      name: "Logout",
      icon: <LogoutIcon />,
      path: "/logout"
    }
  ];

  return [...items, ...secondaryBaseItems];
};

export const itemsWithLogout = () => {
  const item: DrawerItemInfo = {
    name: "Login",
    icon: <InboxIcon />,
    path: "/login"
  };

  return [item, ...secondaryBaseItems];
};

export const itemsWithAdmin = () => {
  const items: DrawerItemInfo[] = [
    {
      name: "Manage Schedules",
      icon: <CalendarMonthIcon />,
      path: "/schedule-admin"
    },
    {
      name: "Manage Plans",
      icon: <AppRegistrationIcon />,
      path: "/available-plans-admin"
    },
    {
      name: "Manage Clients",
      icon: <PeopleIcon />,
      path: "/manage-clients"
    }
  ];

  return [...primaryBaseItems, ...items];
};

export const itemsWithClient = () => {
  const items: DrawerItemInfo[] = [
    {
      name: "Schedule Class",
      icon: <CalendarMonthIcon />,
      path: "/schedule-class"
    },
    {
      name: "Available Plans",
      icon: <AppsIcon />,
      path: "/available-plans"
    }
  ];

  return [...primaryBaseItems, ...items];
};
