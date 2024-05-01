import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { tableHeadItemStyle, tableHeadStyle } from "../../styles";

export function ManageClientsTableHead() {
  return (
    <TableHead style={tableHeadStyle}>
      <TableRow>
        <TableCell style={tableHeadItemStyle} align='center'>
          Email
        </TableCell>
        <TableCell style={tableHeadItemStyle} align='center'>
          Plan
        </TableCell>
        <TableCell style={tableHeadItemStyle} align='center'>
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
