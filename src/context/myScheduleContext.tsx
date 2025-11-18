import React, { ReactNode, createContext, useState, useMemo } from "react";
import { getMySchedule } from "../pages/schedule/requests";
import { todayDate } from "../utils/date";
import { MyScheduleType } from "../pages/schedule/types";

type MyScheduleContextType = {
  mySchedule: MyScheduleType | null;
  fetchMySchedule: (userEmail: string) => void;
};

const initialValue = {
  mySchedule: null,
  fetchMySchedule: () => {}
};

export const MyScheduleContext =
  createContext<MyScheduleContextType>(initialValue);

type PlanProviderProps = {
  children: ReactNode;
};

export function MyScheduleProvider({ children }: PlanProviderProps) {
  const [mySchedule, setMySchedule] = useState<MyScheduleType | null>(null);

  const fetchMySchedule = (userEmail: string) => {
    console.log("userEmail oiii", userEmail);
    const callGetMySchedule = async () => {
      const newMySchedule: MyScheduleType | null = await getMySchedule(
        userEmail,
        todayDate()
      );
      console.log("newMySchedule", newMySchedule);
      setMySchedule(newMySchedule);
    };

    callGetMySchedule();
  };

  const MyScheduleValue = useMemo(
    () => ({ mySchedule, fetchMySchedule }),
    [mySchedule, fetchMySchedule]
  );

  return (
    <MyScheduleContext.Provider value={MyScheduleValue}>
      {children}
    </MyScheduleContext.Provider>
  );
}
