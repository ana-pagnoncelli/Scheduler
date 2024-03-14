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

import { ScheduleClassTableRowDay } from "./ScheduleClassTableRowDay";
import { ScheduleDay } from "../types";
import { tableHeadItemStyle, tableHeadStyle } from "../styles";

const scheduleList: ScheduleDay[] = [
  {
    day: "2021-03-02",
    numberOfSpots: "2",
    availableSpots: "2",
    hours: [
      {
        hour: "13",
        numberOfSpots: "2",
        availableSpots: "2"
      },
      {
        hour: "14",
        numberOfSpots: "2",
        availableSpots: "1"
      },
      {
        hour: "15",
        numberOfSpots: "2",
        availableSpots: "0"
      },
      {
        hour: "16",
        numberOfSpots: "2",
        availableSpots: "1"
      },
      {
        hour: "17",
        numberOfSpots: "2",
        availableSpots: "2"
      }
    ]
  },
  {
    day: "2021-03-03",
    numberOfSpots: "2",
    availableSpots: "2",
    hours: [
      {
        hour: "13",
        numberOfSpots: "2",
        availableSpots: "2"
      },
      {
        hour: "14",
        numberOfSpots: "2",
        availableSpots: "1"
      },
      {
        hour: "15",
        numberOfSpots: "2",
        availableSpots: "0"
      },
      {
        hour: "16",
        numberOfSpots: "2",
        availableSpots: "1"
      },
      {
        hour: "17",
        numberOfSpots: "2",
        availableSpots: "2"
      }
    ]
  }
];

export function ScheduleClass() {
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
            {scheduleList.map((scheduleDay) => (
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
