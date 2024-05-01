import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ManageClientsTableRowProps } from "./types";

export function ManageClientsTableRow({ client }: ManageClientsTableRowProps) {
  return (
    <TableRow key={client.email}>
      <TableCell align='center'>{client.email}</TableCell>
      <TableCell align='center'>{client.plan}</TableCell>
      <TableCell align='center'>actions</TableCell>
    </TableRow>
  );
}
