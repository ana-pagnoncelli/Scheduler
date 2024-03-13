import React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Typography from "@mui/material/Typography";
import { ScheduleHour } from "../types";
import { ScheduleClassTableRowHour } from "./ScheduleClassTableRowHour";

type ScheduleClassTableHourProps = {
  scheduleHours: ScheduleHour[];
  open: boolean;
};

export function ScheduleClassTableHour({
  scheduleHours,
  open
}: ScheduleClassTableHourProps) {
  return (
    <TableRow>
      <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
        <Collapse in={open} timeout='auto' unmountOnExit>
          <Box sx={{ margin: 1 }}>
            <Typography variant='h6' gutterBottom component='div'>
              Working Hours
            </Typography>
            <Table size='small' aria-label='purchases'>
              <TableHead>
                <TableRow>
                  <TableCell>Hour</TableCell>
                  <TableCell align='center'>Number Of Spots</TableCell>
                  <TableCell align='center'>Available Spots</TableCell>
                  <TableCell align='center'>Schedule</TableCell>
                  <TableCell align='center'>Cancel</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {scheduleHours.map((scheduleHour) => (
                  <ScheduleClassTableRowHour
                    key={scheduleHour.hour}
                    scheduleHour={scheduleHour}
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
