import React, { useContext } from "react";
import Divider from "@mui/material/Divider";
import { DrawerItem } from "./DrawerItem";
import { DrawerItemsProps } from "./types";
import { UserContext } from "../../context/userContext";
import {
  itemsWithAdmin,
  itemsWithClient,
  itemsWithLogin,
  itemsWithLogout
} from "./items";

export function DrawerItems({ open }: DrawerItemsProps) {
  const { email, isAdmin } = useContext(UserContext);

  const getSecondaryItems = () => {
    if (email) {
      return itemsWithLogin();
    }
    return itemsWithLogout();
  };

  const getPrimaryItems = () => {
    if (isAdmin) {
      return itemsWithAdmin();
    }
    return itemsWithClient();
  };

  return (
    <>
      {getPrimaryItems().map((item) => (
        <DrawerItem item={item} open={open} key={item.name} />
      ))}
      <Divider />
      {getSecondaryItems().map((item) => (
        <DrawerItem item={item} open={open} key={item.name} />
      ))}
    </>
  );
}
