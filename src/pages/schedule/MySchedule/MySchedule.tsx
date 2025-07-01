import React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import RestoreIcon from "@mui/icons-material/Restore";
import { ScheduleBox } from "../styles";

export function MySchedule() {
  return (
    <ScheduleBox>
      <Typography variant='h3'>My schedule</Typography>
      <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <AutoAwesomeIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Date and time of next class'
            secondary='Jan 9, 2014'
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CalendarMonthIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Fixed schedules' secondary='Monday, Tuesday' />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <RestoreIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary='Number of classes to recover' secondary='2' />
        </ListItem>
      </List>
    </ScheduleBox>
  );
}
