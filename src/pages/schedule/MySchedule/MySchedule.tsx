import React, { useContext, useEffect, useState } from "react";
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
import { getMySchedule } from "../requests";
import { UserContext } from "../../../context/userContext";
import { MyScheduleType } from "../types";

export function MySchedule() {
  const { email } = useContext(UserContext);
  const [mySchedule, setMySchedule] = useState<MyScheduleType | null>(null);

  useEffect(() => {
    const fetchMySchedule = async () => {
      const myScheduleResponse = await getMySchedule(email);
      if (myScheduleResponse) setMySchedule(myScheduleResponse);
    };

    if (email) fetchMySchedule();
  }, []);

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
            secondary={mySchedule?.nextClass}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <CalendarMonthIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Fixed schedules'
            secondary={mySchedule?.fixedSchedulesDays.join(", ")}
          />
        </ListItem>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <RestoreIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary='Number of classes to recover'
            secondary={mySchedule?.numberOfClassesToRecover}
          />
        </ListItem>
      </List>
    </ScheduleBox>
  );
}
