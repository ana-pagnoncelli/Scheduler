import React, { useState } from "react";
import { Box, Button } from "@mui/material";
import { AddScheduleForm } from "./AddScheduleForm";
import { AddScheduleProps } from "../types";

export function AddSchedule({ updateAvailableSchedules }: AddScheduleProps) {
  const [shouldShowForm, setShouldShowForm] = useState(false);

  const handleAddScheduleButton = () => {
    setShouldShowForm(true);
  };

  return (
    <Box pt={3}>
      {shouldShowForm ? (
        <AddScheduleForm updateAvailableSchedules={updateAvailableSchedules} />
      ) : (
        <Button onClick={handleAddScheduleButton} variant='contained'>
          Create new schedule
        </Button>
      )}
    </Box>
  );
}
