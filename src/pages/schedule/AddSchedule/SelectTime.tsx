import React from "react";
import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { SelectHourProps } from "../types";
import { selectHourStyle } from "./styles";

export function SelectHour({ hour, setHour }: SelectHourProps) {
  return (
    <DemoContainer components={["TimePicker"]} sx={selectHourStyle}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DemoItem>
          <TimePicker
            value={hour}
            ampm={false}
            onChange={(newValue) => setHour(newValue)}
          />
        </DemoItem>
      </LocalizationProvider>
    </DemoContainer>
  );
}
