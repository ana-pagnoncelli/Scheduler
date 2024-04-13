import React from "react";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AvailableScheduleTableHourProps } from "../types";
import { AvailableScheduleTableRowHour } from "./AvailableScheduleTableRowHour";
import { tableInnerHeadStyle } from "../styles";

export function AvailableScheduleTableHour({
  fixedSchedules,
  open
}: AvailableScheduleTableHourProps) {
  return (
    <TableRow>
      <TableCell style={{ padding: 0 }} colSpan={6}>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Table size='small' aria-label='purchases'>
            <TableHead style={tableInnerHeadStyle}>
              <TableRow>
                <TableCell>Hour</TableCell>
                <TableCell align='center'>Number Of Spots</TableCell>
                <TableCell align='center'>Available Spots</TableCell>
                <TableCell align='center'>Users</TableCell>
                <TableCell align='center'>Delete Schedule</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {fixedSchedules.map((fixedSchedule) => (
                <AvailableScheduleTableRowHour
                  key={fixedSchedule.hour_of_the_day}
                  fixedSchedule={fixedSchedule}
                />
              ))}
            </TableBody>
          </Table>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
