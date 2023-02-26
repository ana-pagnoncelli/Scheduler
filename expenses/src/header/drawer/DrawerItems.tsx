import * as React from "react";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { DrawerItem } from "./DrawerItem";
import { DrawerItemsProps } from "./types";

export function DrawerItems({ open }: DrawerItemsProps) {
  return (
    <>
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
    </>
  );
}
