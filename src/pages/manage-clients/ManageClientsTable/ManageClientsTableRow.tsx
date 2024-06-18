import React from "react";
import { IconButton, TableRow, TableCell } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { ManageClientsTableRowProps } from "./types";

export function ManageClientsTableRow({ client }: ManageClientsTableRowProps) {
  return (
    <TableRow key={client.email}>
      <TableCell align='center'>{client.email}</TableCell>
      <TableCell align='center'>{client.plan}</TableCell>
      <TableCell align='center'>
        <IconButton aria-label='delete'>
          <EditIcon />
        </IconButton>
        <IconButton aria-label='delete'>
          <DeleteIcon />
        </IconButton>
      </TableCell>
    </TableRow>
  );
}
