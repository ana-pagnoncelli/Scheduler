import React, { ChangeEvent, useState } from "react";
import { Button, MenuItem, TextField } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Dayjs } from "dayjs";
import { DayOfTheWeek } from "./types";

export function AddScheduleForm() {
  const [dayOfTheWeek, setDayOfTheWeek] = useState("");
  const [hour, setHour] = useState<Dayjs | null>(null);
  const [numberOfSpots, setNumberOfSpots] = useState("");

  const handleSelectDay = (e: ChangeEvent<HTMLInputElement>) => {
    setDayOfTheWeek(e.target.value);
  };

  const handleNumberOfSpots = (e: ChangeEvent<HTMLInputElement>) => {
    // returns in 24h mode uhul
    console.log("hour", hour?.hour());
    console.log("minute", hour?.minute());
    console.log("minute", hour);
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

  return (
    <div>
      <h2>Add Schedule</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker"]}>
          <DemoItem>
            <TimePicker
              value={hour}
              onChange={(newValue) => setHour(newValue)}
            />
          </DemoItem>
          <TextField
            label='Number of spots'
            value={numberOfSpots}
            onChange={handleNumberOfSpots}
          />
          {selectDayOfTheWeek()}
          <Button variant='contained' color='success'>
            Schedule
          </Button>
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
