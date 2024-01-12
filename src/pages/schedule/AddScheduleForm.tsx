import React from "react";
import { TextField } from "@mui/material";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export function AddScheduleForm() {
  return (
    <div>
      <h2>Add Schedule</h2>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoContainer components={["TimePicker"]}>
          <DemoItem>
            <TimePicker />
          </DemoItem>
          <TextField
            required
            id='outlined-required'
            label='Required'
            defaultValue='Hello World'
          />
          <TextField
            disabled
            id='outlined-disabled'
            label='Disabled'
            defaultValue='Hello World'
          />
          <TextField
            id='outlined-password-input'
            label='Password'
            type='password'
            autoComplete='current-password'
          />
          <TextField
            id='outlined-read-only-input'
            label='Read Only'
            defaultValue='Hello World'
            InputProps={{
              readOnly: true
            }}
          />
        </DemoContainer>
      </LocalizationProvider>
    </div>
  );
}
