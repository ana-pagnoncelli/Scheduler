import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { AddScheduleForm } from "./AddScheduleForm";

export function AddSchedule() {
  const [shouldShowForm, setShouldShowForm] = useState(false);

  const handleAddScheduleButton = () => {
    setShouldShowForm(true);
  };

  return (
    <Box pt={3}>
      {shouldShowForm ? (
        <AddScheduleForm />
      ) : (
        <Button onClick={handleAddScheduleButton} variant='contained'>
          Add Schedule
        </Button>
      )}
    </Box>
  );
}
