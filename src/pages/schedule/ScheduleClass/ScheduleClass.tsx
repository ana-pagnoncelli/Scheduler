import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { ScheduleClassTableRowDay } from "./ScheduleClassTableRowDay";
import { ScheduleDay } from "../types";
import { tableHeadStyle } from "../styles";

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
      <h1>Schedule a Class </h1>
      <TableContainer component={Paper}>
        <Table aria-label='collapsible table'>
          <TableHead style={tableHeadStyle}>
            <TableRow>
              <TableCell />
              <TableCell align='left'>Day</TableCell>
              <TableCell align='center'>Number of spots</TableCell>
              <TableCell align='center'>Number of available spots</TableCell>
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
