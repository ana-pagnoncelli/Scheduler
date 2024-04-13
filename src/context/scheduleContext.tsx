import React, { ReactNode, createContext, useState, useMemo } from "react";
import { getSchedules } from "../pages/schedule/requests";
import { FixedSchedule } from "../pages/schedule/types";

type ScheduleContextType = {
  fixedSchedules: FixedSchedule[];
  fetchSchedules: () => void;
};

const initialValue = {
  fixedSchedules: [],
  fetchSchedules: () => {}
};

export const ScheduleContext = createContext<ScheduleContextType>(initialValue);

type ScheduleProviderProps = {
  children: ReactNode;
};

export function ScheduleProvider({ children }: ScheduleProviderProps) {
  const [fixedSchedules, setFixedSchedules] = useState<FixedSchedule[]>([]);

  const fetchSchedules = () => {
    const callGetSchedules = async () => {
      const newSchedules: FixedSchedule[] = await getSchedules();
      setFixedSchedules(newSchedules);
    };

    callGetSchedules();
    console.log("provider", fixedSchedules);
  };

  const schedulesValue = useMemo(
    () => ({ fixedSchedules, fetchSchedules }),
    [fixedSchedules, fetchSchedules]
  );

  return (
    <ScheduleContext.Provider value={schedulesValue}>
      {children}
    </ScheduleContext.Provider>
  );
}
