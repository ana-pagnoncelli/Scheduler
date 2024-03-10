import React from "react";
import { Alert, Snackbar } from "@mui/material";
import { useAlert } from "../../hooks/useAlert";

const ALERT_DURATION = 8000;

export function AlertPopup() {
  const { text, type, open, setOpenAlert } = useAlert();

  const clearAlert = () => {
    setOpenAlert(false);
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={ALERT_DURATION}
      onClose={clearAlert}
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
    >
      <Alert severity={type} onClose={clearAlert} sx={{ width: "100%" }}>
        {text}
      </Alert>
    </Snackbar>
  );
}
