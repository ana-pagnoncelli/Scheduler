import React from "react";
import { Button } from "@mui/material";
import { AddScheduleForm } from "./AddScheduleForm";

export function AddSchedule() {
  return (
    <>
      <h2>Add Schedule</h2>

      <AddScheduleForm />
      <Button variant='contained'>Add Schedule</Button>
    </>
  );
}
