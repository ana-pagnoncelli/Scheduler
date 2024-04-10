import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from "@mui/material";
import { AvailableScheduleProps } from "../types";
import { separateFixedSchedulesByDayOfTheWeek } from "../functions";
import { AvailableScheduleTableRowDay } from "./AvailableScheduleTableRowDay";
import { tableHeadItemStyle, tableHeadStyle } from "../../styles";

export function AvailableSchedule({
  fixedSchedules,
  updateAvailableSchedules
}: AvailableScheduleProps) {
  const fixedSchedulesByDayOfTheWeek =
    separateFixedSchedulesByDayOfTheWeek(fixedSchedules);

  return (
    <>
      <Typography variant='h3'>Available Schedules</Typography>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead style={tableHeadStyle}>
            <TableRow>
              <TableCell size='small' />
              <TableCell style={tableHeadItemStyle} align='left'>
                Day of the week
              </TableCell>
              <TableCell style={tableHeadItemStyle} align='center'>
                Number of spots
              </TableCell>
              <TableCell style={tableHeadItemStyle} align='center'>
                Number of available spots
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fixedSchedulesByDayOfTheWeek.map((fixedSchedulesOneDay) => (
              <AvailableScheduleTableRowDay
                key={fixedSchedulesOneDay.dayOfTheWeek}
                fixedSchedulesByDay={fixedSchedulesOneDay}
                updateAvailableSchedules={updateAvailableSchedules}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
