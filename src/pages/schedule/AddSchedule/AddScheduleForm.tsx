import React, { ChangeEvent, useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { DayOfTheWeek, FixedSchedule } from "../types";
import { getHourAsString } from "./functions";
import { createSchedule } from "../requests";

export function AddScheduleForm() {
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");
  const [hour, setHour] = useState<Dayjs | null>(null);
  const [numberOfSpots, setNumberOfSpots] = useState("");

  const handleSelectDay = (e: ChangeEvent<HTMLInputElement>) => {
    setDayOfTheWeek(e.target.value);
  };

  const handleNumberOfSpots = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(getHourAsString(hour));
    setNumberOfSpots(e.target.value);
  };

  const selectDayOfTheWeek = () => {
    return (
      <TextField
        id='outlined-select-day'
        select
        label='Select day'
        value={dayOfTheWeek}
        variant='outlined'
        onChange={handleSelectDay}
      >
        {(Object.keys(DayOfTheWeek) as Array<keyof typeof DayOfTheWeek>).map(
          (key) => (
            <MenuItem key={key} value={key}>
              {key}
            </MenuItem>
          )
        )}
      </TextField>
    );
  };

  const hasEmptyFields = () => {
    return !(hour && dayOfTheWeek && numberOfSpots);
  };

  const sendRequestCreateSchedule = async () => {
    const schedule: FixedSchedule = {
      id: crypto.randomUUID(),
      week_day: dayOfTheWeek as DayOfTheWeek,
      hour_of_the_day: getHourAsString(hour),
      number_of_spots: numberOfSpots,
      users_list: []
    };

    const message = await createSchedule(schedule);
    console.log(message);
  };

  const handleCreateButton = () => {
    let message = "";

    if (hasEmptyFields()) {
      message = "Has empty fields";
    } else {
      sendRequestCreateSchedule();
    }

    console.log(message);
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
            />
          </DemoItem>
          <TextField
            label='Number of spots'
            value={numberOfSpots}
            onChange={handleNumberOfSpots}
          />
          {selectDayOfTheWeek()}
          <Button
            variant='contained'
            color='success'
            onClick={handleCreateButton}
          >
            Create
          </Button>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
