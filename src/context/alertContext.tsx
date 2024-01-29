import { AlertColor } from "@mui/material";
import React, { ReactNode, createContext, useState, useMemo } from "react";

type AlertType = AlertColor | undefined;

type AlertContextType = {
  text: string;
  type: AlertType;
  open: boolean;
  setOpenAlert: (open: boolean) => void;
  setAlert: (newText: string, newType: AlertType) => void;
};

const initialValue = {
  text: "",
  open: false,
  type: undefined as AlertType,
  setAlert: () => {},
  setOpenAlert: () => {}
};

export const AlertContext = createContext<AlertContextType>(initialValue);

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
