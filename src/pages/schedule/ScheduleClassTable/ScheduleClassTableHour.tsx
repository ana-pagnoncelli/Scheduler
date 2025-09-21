import React from "react";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { ScheduleDay, ScheduleHour } from "../types";
import { ScheduleClassTableRowHour } from "./ScheduleClassTableRowHour";
import { tableInnerHeadStyle } from "../styles";

type ScheduleClassTableHourProps = {
  scheduleDay: ScheduleDay;
  open: boolean;
};

export function ScheduleClassTableHour({
  scheduleDay,
  open
}: ScheduleClassTableHourProps) {
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
                <TableCell align='center'>Schedule</TableCell>
                <TableCell align='center'>Cancel</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {scheduleDay.hours.map((scheduleHour: ScheduleHour) => (
                <ScheduleClassTableRowHour
                  key={scheduleHour.hour}
                  scheduleHour={scheduleHour}
                />
              ))}
            </TableBody>
          </Table>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
