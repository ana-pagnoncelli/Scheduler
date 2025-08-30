import React, { useEffect, useState } from "react";

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

import { ScheduleClassTableRowDay } from "./ScheduleClassTableRowDay";
import { DateWithWeekDay, DayOfTheWeek, ScheduleDay } from "../types";
import { tableHeadItemStyle, tableHeadStyle } from "../../styles";
import { getSchedulesForAListOfDays } from "../requests";
import { dateWithWeekDayForNext7Days } from "../../../utils/date";

export function ScheduleClass() {
  const listOfDays = dateWithWeekDayForNext7Days();

  const [schedulesForAListOfDays, setSchedulesForAListOfDays] = useState<
    ScheduleDay[]
  >([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      setSchedulesForAListOfDays(await getSchedulesForAListOfDays(listOfDays));
    };

    fetchSchedules();
  }, []);

  return (
    <>
      <Typography variant='h3'>Schedule a Class </Typography>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead style={tableHeadStyle}>
            <TableRow>
              <TableCell />
              <TableCell style={tableHeadItemStyle} align='left'>
                Day
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
            {schedulesForAListOfDays.map((scheduleDay) => (
              <ScheduleClassTableRowDay
                key={scheduleDay.day}
                scheduleDay={scheduleDay}
              />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
