import React from "react";
import { ScheduleClass } from "./ScheduleClassTable/ScheduleClass";
import { ScheduleApp, ScheduleBox } from "./styles";
import { MySchedule } from "./MySchedule/MySchedule";

export function ScheduleUser() {
  return (
    <ScheduleApp>
      <MySchedule />
      <ScheduleBox>
        <ScheduleClass />
      </ScheduleBox>
    </ScheduleApp>
  );
}
