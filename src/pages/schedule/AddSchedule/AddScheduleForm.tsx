import React, { ChangeEvent, useState } from "react";
import { Button, TextField } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { AddScheduleFormProps, DayOfTheWeek, FixedSchedule } from "../types";
import { getEmailsList, getHourAsString } from "./functions";
import { createSchedule } from "../requests";
import {
  FAIL_MESSAGE,
  MessageDisplay,
  SUCCESS_MESSAGE
} from "../../../components";
import { missingFields } from "../../../messages";
import { User } from "../../types/User";
import { SelectUsers } from "./SelectUsers";
import { SelectDayOfTheWeek } from "./SelectDayOfTheWeek";

export function AddScheduleForm({
  updateAvailableSchedules
}: AddScheduleFormProps) {
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");
  const [hour, setHour] = useState<Dayjs | null>(null);
  const [numberOfSpots, setNumberOfSpots] = useState("");
  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState("");
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

  const setEmptyFieldsMessage = () => {
    setMessageText(missingFields);
    setMessageType(FAIL_MESSAGE);
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
    setMessageText(message.text);
    setMessageType(message.type);

    if (message.type === SUCCESS_MESSAGE) {
      clearFields();
      updateAvailableSchedules();
    }
  };

  const handleCreateButton = () => {
    if (hasEmptyFields()) {
      setEmptyFieldsMessage();
    } else {
      sendRequestCreateSchedule();
    }
  };

  return (
    <div>
      <h2>Create new schedule</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker"]}>
          <DemoItem>
            <TimePicker
              value={hour}
              ampm={false}
              onChange={(newValue) => setHour(newValue)}
              sx={{ width: 200 }}
            />
          </DemoItem>
          <TextField
            sx={{ width: 200 }}
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
          <Button
            variant='contained'
            color='success'
            onClick={handleCreateButton}
          >
            Create
          </Button>
        </DemoContainer>
      </LocalizationProvider>
      <MessageDisplay text={messageText} type={messageType} />
    </div>
  );
}
