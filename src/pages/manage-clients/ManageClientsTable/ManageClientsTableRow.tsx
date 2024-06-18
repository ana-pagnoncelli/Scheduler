import React from "react";
import { IconButton, TableRow, TableCell } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { ManageClientsTableRowProps } from "./types";
import { EditClient } from "../EditClient/EditClient";

export function ManageClientsTableRow({ client }: ManageClientsTableRowProps) {
  return (
    <TableRow key={client.email}>
      <TableCell align='center'>{client.email}</TableCell>
      <TableCell align='center'>{client.plan}</TableCell>
      <TableCell align='center'>
        <EditClient />
        <IconButton aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
