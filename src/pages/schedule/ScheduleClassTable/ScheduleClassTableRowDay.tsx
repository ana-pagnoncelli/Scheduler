import React from "react";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { ScheduleDay } from "../types";
import { ScheduleClassTableHour } from "./ScheduleClassTableHour";

type ScheduleClassTableRowDayProps = {
  scheduleDay: ScheduleDay;
};

export function ScheduleClassTableRowDay({
  scheduleDay
}: ScheduleClassTableRowDayProps) {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label='expand row'
            size='small'
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component='th' scope='row'>
          {scheduleDay.day}
        </TableCell>
        <TableCell align='center'>{scheduleDay.numberOfSpots}</TableCell>
        <TableCell align='center'>{scheduleDay.availableSpots}</TableCell>
      </TableRow>
      <ScheduleClassTableHour open={open} scheduleDay={scheduleDay} />
    </>
  );
}
