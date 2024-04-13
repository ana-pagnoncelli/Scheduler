import React, { useContext, useEffect } from "react";
import { AvailableSchedule } from "./AvailableScheduleTable/AvailableSchedule";
import { AddSchedule } from "./AddSchedule/AddSchedule";
import { ScheduleApp, ScheduleBox } from "./styles";
import { ScheduleContext } from "../../context/scheduleContext";

export function ScheduleAdmin() {
  const { fetchSchedules } = useContext(ScheduleContext);

  useEffect(() => {
    fetchSchedules();
  }, []);

  return (
    <ScheduleApp>
      <ScheduleBox>
        <AvailableSchedule />
        <AddSchedule />
      </ScheduleBox>
    </ScheduleApp>
  );
}
