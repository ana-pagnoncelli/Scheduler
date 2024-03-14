import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { ScheduleHour } from "../types";
import { tableInnerItemStyle } from "../styles";

type ScheduleClassTableRowHourProps = {
  scheduleHour: ScheduleHour;
};

export function ScheduleClassTableRowHour({
  scheduleHour
}: ScheduleClassTableRowHourProps) {
  const hasFreeSpots = () => {
    return scheduleHour.availableSpots > "0";
  };

  return (
    <TableRow key={scheduleHour.hour} style={tableInnerItemStyle}>
      <TableCell component='th' scope='row'>
        {scheduleHour.hour}
      </TableCell>
      <TableCell align='center'>{scheduleHour.numberOfSpots}</TableCell>
      <TableCell align='center'>{scheduleHour.availableSpots}</TableCell>
      <TableCell align='center'>
        <Button variant='contained' color='success' disabled={!hasFreeSpots()}>
          Schedule
        </Button>
      </TableCell>
      <TableCell align='center'>
        <Button variant='outlined' color='error'>
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
}
