import React, { ReactNode } from "react";
import { AlertProvider } from "./context/alertContext";
import { UserProvider } from "./context/userContext";
import { ScheduleProvider } from "./context/scheduleContext";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AlertProvider>
      <ScheduleProvider>
        <UserProvider>{children}</UserProvider>
      </ScheduleProvider>
    </AlertProvider>
  );
}
