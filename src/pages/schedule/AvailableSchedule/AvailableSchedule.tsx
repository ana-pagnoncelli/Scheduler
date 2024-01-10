import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { AvailableScheduleProps } from "../types";
import { separateFixedSchedulesByDayOfTheWeek } from "../functions";
import { AvailableScheduleTableRowDay } from "./AvailableScheduleTableRowDay";

export function AvailableSchedule({ fixedSchedules }: AvailableScheduleProps) {
  const fixedSchedulesByDayOfTheWeek =
    separateFixedSchedulesByDayOfTheWeek(fixedSchedules);
  return (
    <>
      <h1>Available Schedules</h1>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead>
            <TableRow>
              <TableCell size='small' />
              <TableCell align='left'>Day of the week</TableCell>
              <TableCell align='center'>Number of spots</TableCell>
              <TableCell align='center'>Number of available spots</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {fixedSchedulesByDayOfTheWeek.map((fixedSchedulesOneDay) => (
              <AvailableScheduleTableRowDay
                key={fixedSchedulesOneDay.dayOfTheWeek}
                fixedSchedulesByDay={fixedSchedulesOneDay}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
