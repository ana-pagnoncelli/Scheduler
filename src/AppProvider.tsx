import React, { ReactNode } from "react";
import { AlertProvider } from "./context/alertContext";
import { UserProvider } from "./context/userContext";
import { ScheduleProvider } from "./context/scheduleContext";
import { PlanProvider } from "./context/planContext";
import { ClientProvider } from "./context/clientsContext";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AlertProvider>
      <ScheduleProvider>
        <PlanProvider>
          <ClientProvider>
            <UserProvider>{children}</UserProvider>
          </ClientProvider>
        </PlanProvider>
      </ScheduleProvider>
    </AlertProvider>
  );
}
