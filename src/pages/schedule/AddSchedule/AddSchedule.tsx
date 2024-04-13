import React, { useState } from "react";
import { Button } from "@mui/material";
import { AddScheduleForm } from "./AddScheduleForm";
import { buttonStyleSecondaryColor } from "../styles";

export function AddSchedule() {
  const [shouldShowForm, setShouldShowForm] = useState(false);

  const handleAddScheduleButton = () => {
    setShouldShowForm(true);
  };

  return (
    <div>
      {shouldShowForm ? (
        <AddScheduleForm />
      ) : (
        <Button
          onClick={handleAddScheduleButton}
          variant='contained'
          style={buttonStyleSecondaryColor}
        >
          Create new schedule
        </Button>
      )}
    </div>
  );
}
