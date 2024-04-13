import React from "react";
import { TableCell, TableRow } from "@mui/material";
import { AvailableScheduleTableRowHourProps } from "../types";
import { tableInnerItemStyle } from "../styles";
import { availableSpots, displayUsersList } from "../functions";
import { DeleteSchedule } from "./DeleteSchedule";

export function AvailableScheduleTableRowHour({
  fixedSchedule
}: AvailableScheduleTableRowHourProps) {
  return (
    <TableRow key={fixedSchedule.hour_of_the_day} style={tableInnerItemStyle}>
      <TableCell component='th' scope='row'>
        {fixedSchedule.hour_of_the_day}
      </TableCell>
      <TableCell align='center'>{fixedSchedule.number_of_spots}</TableCell>
      <TableCell align='center'>{availableSpots(fixedSchedule)}</TableCell>
      <TableCell align='center'>
        {displayUsersList(fixedSchedule.users_list)}
      </TableCell>
      <TableCell align='center'>
        <DeleteSchedule fixedSchedule={fixedSchedule} />
      </TableCell>
    </TableRow>
  );
}
