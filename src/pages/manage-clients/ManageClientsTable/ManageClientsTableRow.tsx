import React from "react";
import { TableRow, TableCell } from "@mui/material";
import { ManageClientsTableRowProps } from "./types";
import { EditClient } from "../EditClient/EditClient";
import { DeleteClient } from "../DeleteClient/DeleteClient";

export function ManageClientsTableRow({ client }: ManageClientsTableRowProps) {
  return (
    <TableRow key={client.email}>
      <TableCell align='center'>{client.email}</TableCell>
      <TableCell align='center'>{client.plan}</TableCell>
      <TableCell align='center'>
        <EditClient client={client} />
        <DeleteClient client={client} />
      </TableCell>
    </TableRow>
  );
}
