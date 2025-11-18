import { useContext } from "react";
import { MyScheduleContext } from "../context/myScheduleContext";

export const useMySchedule = () => useContext(MyScheduleContext);
