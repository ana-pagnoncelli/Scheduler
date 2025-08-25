import React, { useContext } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import { ScheduleHour } from "../types";
import { tableInnerItemStyle } from "../styles";
import { UserContext } from "../../../context/userContext";

type ScheduleClassTableRowHourProps = {
  scheduleHour: ScheduleHour;
};

export function ScheduleClassTableRowHour({
  scheduleHour
}: ScheduleClassTableRowHourProps) {
  const { email } = useContext(UserContext);

  const isUserInList = scheduleHour.usersList.includes(email);

  const canSchedule = () => {
    return scheduleHour.availableSpots > "0" && !isUserInList;
  };

  const canCancel = () => {
    return isUserInList;
  };

  return (
    <TableRow key={scheduleHour.hour} style={tableInnerItemStyle}>
      <TableCell component='th' scope='row'>
        {scheduleHour.hour}
      </TableCell>
      <TableCell align='center'>{scheduleHour.numberOfSpots}</TableCell>
      <TableCell align='center'>{scheduleHour.availableSpots}</TableCell>
      <TableCell align='center'>
        <Button variant='contained' color='success' disabled={!canSchedule()}>
          Schedule
        </Button>
      </TableCell>
      <TableCell align='center'>
        <Button variant='outlined' color='error' disabled={!canCancel()}>
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
}
