import React, { useState } from "react";
import { Button } from "@mui/material";
import { buttonStyleSecondaryColor } from "../../styles";
import { AddPlanForm } from "./AddPlanForm";

export function AddPlan() {
  const [shouldShowForm, setShouldShowForm] = useState(false);

  const handleAddPlanButton = () => {
    setShouldShowForm(true);
  };

  return (
    <div>
      {shouldShowForm ? (
        <AddPlanForm />
      ) : (
        <Button
          onClick={handleAddPlanButton}
          variant='contained'
          style={buttonStyleSecondaryColor}
        >
          Create new plan
        </Button>
      )}
    </div>
  );
}
