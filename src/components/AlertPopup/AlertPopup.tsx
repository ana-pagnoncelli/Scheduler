import React from "react";
import { Alert, Snackbar } from "@mui/material";
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
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={clearAlert}
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
    >
      <Alert severity={type} onClose={clearAlert} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
}
