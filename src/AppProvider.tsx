import React, { ReactNode } from "react";
import { AlertProvider } from "./context/alertContext";
import { UserProvider } from "./context/userContext";

type AppProviderProps = {
  children: ReactNode;
};

export function AppProvider({ children }: AppProviderProps) {
  return (
    <AlertProvider>
      <UserProvider>{children}</UserProvider>
    </AlertProvider>
  );
}
