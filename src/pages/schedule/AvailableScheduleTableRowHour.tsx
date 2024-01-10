import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { AvailableScheduleTableRowHourProps } from "./types";

export function AvailableScheduleTableRowHour({
  fixedSchedule
}: AvailableScheduleTableRowHourProps) {
  const availableSpots = () => {
    return (
      Number(fixedSchedule.number_of_spots) - fixedSchedule.users_list.length
    );
  };

  return (
    <TableRow key={fixedSchedule.hour_of_the_day}>
      <TableCell component='th' scope='row'>
        {fixedSchedule.hour_of_the_day}
      </TableCell>
      <TableCell align='center'>{fixedSchedule.number_of_spots}</TableCell>
      <TableCell align='center'>{availableSpots()}</TableCell>
      <TableCell align='center'>
        <Button variant='contained' color='success'>
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
