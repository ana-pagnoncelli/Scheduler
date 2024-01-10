import React, { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { ScheduleClass } from "./ScheduleClass/ScheduleClass";
import { getSchedules } from "./requests";
import { AvailableSchedule } from "./AvailableSchedule/AvailableSchedule";
import { FixedSchedule } from "./types";

export function ScheduleAdmin() {
  const [fixedSchedules, setFixedSchedules] = useState<FixedSchedule[]>([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      const schedules: FixedSchedule[] = await getSchedules();
      setFixedSchedules(schedules);
    };
    fetchSchedules();
  }, []);

  return (
    <>
      <AvailableSchedule fixedSchedules={fixedSchedules} />

      <Button variant='contained'>Add Schedule</Button>
      <ScheduleClass />
    </>
  );
}
