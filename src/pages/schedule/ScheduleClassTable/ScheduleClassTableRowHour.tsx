import React, { useContext, useEffect, useState } from "react";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";
import {
  CancelScheduleInfo,
  ScheduleHour,
  VariableScheduleInfo
} from "../types";
import { tableInnerItemStyle } from "../styles";
import { UserContext } from "../../../context/userContext";
import {
  cancelScheduleRequest,
  createVariableScheduleRequest
} from "../requests";
import { useAlert } from "../../../hooks/useAlert";
import { AlertColors } from "../../../components/AlertPopup";

type ScheduleClassTableRowHourProps = {
  day: string;
  scheduleHour: ScheduleHour;
};

export function ScheduleClassTableRowHour({
  day,
  scheduleHour
}: ScheduleClassTableRowHourProps) {
  const { email } = useContext(UserContext);
  const { setAlert } = useAlert();
  const [isUserInSchedule, setIsUserInSchedule] = useState(false);
  const [numberOfSpots, setNumberOfSpots] = useState(
    scheduleHour.numberOfSpots
  );
  const [availableSpots, setAvailableSpots] = useState(
    scheduleHour.availableSpots
  );

  // TODO check if this is needed
  useEffect(() => {
    setIsUserInSchedule(scheduleHour.usersList.includes(email));
    setNumberOfSpots(scheduleHour.numberOfSpots);
    setAvailableSpots(scheduleHour.availableSpots);
  }, [scheduleHour.usersList, email]);

  const canSchedule = () => {
    return scheduleHour.availableSpots > "0" && !isUserInSchedule;
  };

  const canCancel = () => {
    return isUserInSchedule;
  };

  const updateScheduleAfterCancel = () => {
    setAvailableSpots((parseInt(availableSpots, 10) + 1).toString());
    setIsUserInSchedule(false);
  };

  const cancelSchedule = async () => {
    const cancelScheduleInfo: CancelScheduleInfo = {
      day,
      hour: scheduleHour.hour,
      userEmail: email
    };
    const message = await cancelScheduleRequest(cancelScheduleInfo);
    setAlert(message.text, message.type);

    if (message.type === AlertColors.SUCCESS) {
      updateScheduleAfterCancel();
    }
  };

  const updateScheduleAfterCreate = () => {
    setAvailableSpots((parseInt(availableSpots, 10) - 1).toString());
    setIsUserInSchedule(true);
  };

  const createVariableSchedule = async () => {
    const variableScheduleInfo: VariableScheduleInfo = {
      day,
      hour: scheduleHour.hour,
      userEmail: email
    };
    const message = await createVariableScheduleRequest(variableScheduleInfo);
    setAlert(message.text, message.type);

    if (message.type === AlertColors.SUCCESS) {
      updateScheduleAfterCreate();
    }
  };

  return (
    <TableRow key={scheduleHour.hour} style={tableInnerItemStyle}>
      <TableCell component='th' scope='row'>
        {scheduleHour.hour}
      </TableCell>
      <TableCell align='center'>{numberOfSpots}</TableCell>
      <TableCell align='center'>{availableSpots}</TableCell>
      <TableCell align='center'>
        <Button
          variant='contained'
          color='success'
          disabled={!canSchedule()}
          onClick={createVariableSchedule}
        >
          Schedule
        </Button>
      </TableCell>
      <TableCell align='center'>
        <Button
          variant='outlined'
          color='error'
          disabled={!canCancel()}
          onClick={cancelSchedule}
        >
          Cancel
        </Button>
      </TableCell>
    </TableRow>
  );
}
