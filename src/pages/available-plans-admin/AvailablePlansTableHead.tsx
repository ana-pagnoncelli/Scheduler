import React from "react";
import { TableCell, TableHead, TableRow } from "@mui/material";
import { tableHeadItemStyle, tableHeadStyle } from "../styles";

export function AvailablePlanTableHead() {
  return (
    <TableHead style={tableHeadStyle}>
      <TableRow>
        <TableCell style={tableHeadItemStyle} align='center'>
          Name
        </TableCell>
        <TableCell style={tableHeadItemStyle} align='center'>
          Description
        </TableCell>
        <TableCell style={tableHeadItemStyle} align='center'>
          Price
        </TableCell>
        <TableCell style={tableHeadItemStyle} align='center'>
          Actions
        </TableCell>
      </TableRow>
    </TableHead>
  );
}
