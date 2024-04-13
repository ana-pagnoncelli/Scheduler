import { useContext } from "react";
import { ScheduleContext } from "../context/scheduleContext";

export const useSchedules = () => useContext(ScheduleContext);
