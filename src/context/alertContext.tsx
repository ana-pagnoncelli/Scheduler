/* eslint-disable @typescript-eslint/no-unused-vars */
import { AlertColor } from "@mui/material";
import React, { ReactNode, createContext, useState, useMemo } from "react";

export type SUCCESS = "success";
export type ERROR = "error";
export type INFO = "info";
export type WARNING = "warning";
type AlertType = AlertColor | undefined;

const initialState = {
  text: "",
  open: false,
  type: undefined as AlertType
};

export const AlertContext = createContext({
  ...initialState,
  setAlert: (newText: string, newType: AlertType) => {},
  setOpenAlert: (open: boolean) => {}
});

type AlertProviderProps = {
  children: ReactNode;
};

export function AlertProvider({ children }: AlertProviderProps) {
  const [text, setText] = useState("");
  const [type, setType] = useState<AlertType>(undefined);
  const [open, setOpen] = useState(false);

  const setOpenAlert = (newOpen: boolean) => {
    setOpen(newOpen);
  };

  const setAlert = (newText: string, newType: AlertType) => {
    setText(newText);
    setType(newType);
    setOpen(true);
  };

  const alertValue = useMemo(
    () => ({ text, type, open, setOpenAlert, setAlert }),
    [text, type, open, setOpenAlert, setAlert]
  );

  return (
    <AlertContext.Provider value={alertValue}>{children}</AlertContext.Provider>
  );
}
