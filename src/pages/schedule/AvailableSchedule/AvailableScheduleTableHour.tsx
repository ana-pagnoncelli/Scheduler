import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { AvailableScheduleTableHourProps } from "../types";
import { AvailableScheduleTableRowHour } from "./AvailableScheduleTableRowHour";
import { tableHeadItemStyle, tableHeadStyle } from "../styles";

export function AvailableScheduleTableHour({
  fixedSchedules,
  open,
  updateAvailableSchedules
}: AvailableScheduleTableHourProps) {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Table size='small' aria-label='purchases'>
              <TableHead style={tableHeadStyle}>
                <TableRow>
                  <TableCell style={tableHeadItemStyle}>Hour</TableCell>
                  <TableCell style={tableHeadItemStyle} align='center'>
                    Number Of Spots
                  </TableCell>
                  <TableCell style={tableHeadItemStyle} align='center'>
                    Available Spots
                  </TableCell>
                  <TableCell style={tableHeadItemStyle} align='center'>
                    Schedule
                  </TableCell>
                  <TableCell style={tableHeadItemStyle} align='center'>
                    Delete Schedule
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {fixedSchedules.map((fixedSchedule) => (
                  <AvailableScheduleTableRowHour
                    key={fixedSchedule.hour_of_the_day}
                    fixedSchedule={fixedSchedule}
                    updateAvailableSchedules={updateAvailableSchedules}
                  />
                ))}
              </TableBody>
            </Table>
          </Box>
        </Collapse>
      </TableCell>
    </TableRow>
  );
}
