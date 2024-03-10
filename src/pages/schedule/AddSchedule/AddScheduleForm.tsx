import React, { ChangeEvent, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import { AddScheduleFormProps, DayOfTheWeek, FixedSchedule } from "../types";
import { getEmailsList, getHourAsString } from "./logic";
import { createSchedule } from "../requests";
import { missingFields } from "../../../components/AlertPopup/messages";
import { User } from "../../../types/User";
import { SelectUsers } from "./SelectUsers";
import { SelectDayOfTheWeek } from "./SelectDayOfTheWeek";
import { useAlert } from "../../../hooks/useAlert";
import { AddScheduleBox, InputBox } from "./styles";
import { AlertColors } from "../../../components/AlertPopup";
import { SelectHour } from "./SelectTime";
import { buttonStyleSecondaryColor } from "../styles";

export function AddScheduleForm({
  updateAvailableSchedules
}: AddScheduleFormProps) {
  const { setAlert } = useAlert();
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");
  const [hour, setHour] = useState<Dayjs | null>(null);
  const [numberOfSpots, setNumberOfSpots] = useState("");
  const [selectedUsers, setSelectedUsers] = useState<User[]>([]);

  const handleUserSelection = (newUsers: User[]) => {
    setSelectedUsers(newUsers);
  };

  const handleSelectDay = (e: ChangeEvent<HTMLInputElement>) => {
    setDayOfTheWeek(e.target.value);
  };

  const handleNumberOfSpots = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfSpots(e.target.value);
  };

  const hasEmptyFields = () => {
    return !(hour && dayOfTheWeek && numberOfSpots);
  };

  const clearFields = () => {
    setSelectedUsers([]);
    setDayOfTheWeek("");
    setHour(null);
    setNumberOfSpots("");
  };

  const sendRequestCreateSchedule = async () => {
    const schedule: FixedSchedule = {
      id: crypto.randomUUID(),
      week_day: dayOfTheWeek as DayOfTheWeek,
      hour_of_the_day: getHourAsString(hour),
      number_of_spots: numberOfSpots,
      users_list: getEmailsList(selectedUsers)
    };

    const message = await createSchedule(schedule);
    setAlert(message.text, message.type);

    if (message.type === AlertColors.SUCCESS) {
      clearFields();
      updateAvailableSchedules();
    }
  };

  const handleCreateButton = () => {
    if (hasEmptyFields()) {
      setAlert(missingFields, AlertColors.ERROR);
    } else {
      sendRequestCreateSchedule();
    }
  };

  return (
    <AddScheduleBox>
      <Typography variant='h4'>Create new schedule</Typography>
      <InputBox>
        <SelectHour hour={hour} setHour={setHour} />

        <TextField
          sx={{ flex: 1 }}
          label='Number of spots'
          value={numberOfSpots}
          onChange={handleNumberOfSpots}
        />
        <SelectDayOfTheWeek
          dayOfTheWeek={dayOfTheWeek}
          handleSelectDay={handleSelectDay}
        />
        <SelectUsers
          handleUserSelection={handleUserSelection}
          selectedUsers={selectedUsers}
        />
      </InputBox>

      <Button
        variant='contained'
        onClick={handleCreateButton}
        style={buttonStyleSecondaryColor}
      >
        Create Schedule
      </Button>
    </AddScheduleBox>
  );
}
