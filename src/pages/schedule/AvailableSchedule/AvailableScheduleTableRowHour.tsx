import React from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { AvailableScheduleTableRowHourProps } from "../types";
import { deleteSchedule } from "../requests";
import { tableInnerItemStyle } from "../styles";

export function AvailableScheduleTableRowHour({
  fixedSchedule,
  updateAvailableSchedules
}: AvailableScheduleTableRowHourProps) {
  const availableSpots = () => {
    return (
      Number(fixedSchedule.number_of_spots) - fixedSchedule.users_list.length
    );
  };

  const handleDeleteSchedule = () => {
    const requestDeleteSchedule = async () => {
      await deleteSchedule(fixedSchedule.id);
      updateAvailableSchedules();
    };

    requestDeleteSchedule();
  };

  return (
    <TableRow
      key={fixedSchedule.hour_of_the_day}
      style={tableInnerItemStyle}
      sx={{ margin: 0, padding: 0 }}
    >
      <TableCell component='th' scope='row'>
        {fixedSchedule.hour_of_the_day}
      </TableCell>
      <TableCell align='center'>{fixedSchedule.number_of_spots}</TableCell>
      <TableCell align='center'>{availableSpots()}</TableCell>
      <TableCell align='center'>
        <h3>sdhasuidhuasdh | saduihusiad</h3>
      </TableCell>
      <TableCell align='center'>
        <Button variant='outlined' color='error' onClick={handleDeleteSchedule}>
          Delete
        </Button>
      </TableCell>
    </TableRow>
  );
}
