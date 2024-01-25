import React from "react";
import { MenuItem, TextField } from "@mui/material";
import { DayOfTheWeek, SelectDayOfTheWeekProps } from "../types";

export function SelectDayOfTheWeek({
  dayOfTheWeek,
  handleSelectDay
}: SelectDayOfTheWeekProps) {
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
}
