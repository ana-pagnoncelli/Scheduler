import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { ScheduleHour } from "./types";

type ScheduleClassTableRowHourProps = {
  scheduleHour: ScheduleHour;
};

export function ScheduleClassTableRowHour({
  scheduleHour
}: ScheduleClassTableRowHourProps) {
  return (
    <TableRow key={scheduleHour.hour}>
      <TableCell component='th' scope='row'>
        {scheduleHour.hour}
      </TableCell>
      <TableCell align='center'>{scheduleHour.numberOfSpots}</TableCell>
      <TableCell align='center'>{scheduleHour.availableSpots}</TableCell>
      <TableCell align='center'>schedule</TableCell>
      <TableCell align='center'>cancel</TableCell>
    </TableRow>
  );
}
