import React, { useEffect, useState } from "react";
import { getSchedules } from "./requests";
import { AvailableSchedule } from "./AvailableSchedule/AvailableSchedule";
import { FixedSchedule } from "./types";
import { AddSchedule } from "./AddSchedule/AddSchedule";

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

      <AddSchedule />
    </>
  );
}
