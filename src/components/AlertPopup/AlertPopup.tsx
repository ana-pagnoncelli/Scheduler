import React from "react";
import { Alert, Collapse } from "@mui/material";
import { useAlert } from "../../hooks/useAlert";

// const ALERT_TIME = 5000;

export function AlertPopup() {
  const { text, type, open, setOpenAlert } = useAlert();

  const clearAlert = () => {
    setOpenAlert(false);
  };

  // TODO alert timeout with progress bar
  // setTimeout(() => {
  //   setText("");
  //   setType(undefined);
  // }, ALERT_TIME);

  return (
    <Collapse in={open}>
      <Alert severity={type} onClose={clearAlert}>
        {text}
      </Alert>
    </Collapse>
  );
}
