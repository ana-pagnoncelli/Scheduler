import React from "react";
import IconButton from "@mui/material/IconButton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { AvailableScheduleTableRowDayProps } from "./types";
import { AvailableScheduleTableHour } from "./AvailableScheduleTableHour";

export function AvailableScheduleTableRowDay({
  fixedSchedulesByDay
}: AvailableScheduleTableRowDayProps) {
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
        <TableCell component='th' scope='row' align='left'>
          {fixedSchedulesByDay.dayOfTheWeek}
        </TableCell>
        <TableCell component='th' scope='row' align='center'>
          {fixedSchedulesByDay.numberOfSpots}
        </TableCell>
        <TableCell component='th' scope='row' align='center'>
          {fixedSchedulesByDay.availableSpots}
        </TableCell>
      </TableRow>
      <AvailableScheduleTableHour
        open={open}
        fixedSchedules={fixedSchedulesByDay.fixedSchedules}
      />
    </>
  );
}
