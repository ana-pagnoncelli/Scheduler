import React from "react";
import { Typography } from "@mui/material";
import { ManageClientsTable } from "./ManageClientsTable";
import { ManageClientApp, ManageClientBox } from "./styles";

// admin can see all users and change their plans and the days they have fixed classes
export function ManageClients() {
  return (
    <ManageClientApp>
      <ManageClientBox>
        <Typography variant='h3'>Manage Clients</Typography>
        <ManageClientsTable />
      </ManageClientBox>
    </ManageClientApp>
  );
}
