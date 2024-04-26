import React from "react";
import { Typography } from "@mui/material";
import { AvailablePlanApp, AvailablePlanBox } from "./styles";
import { AddPlan } from "./AddPlan/AddPlan";
import { AvailablePlansTable } from "./AvailablePlansTable";

export function AvailablePlansAdmin() {
  return (
    <AvailablePlanApp>
      <AvailablePlanBox>
        <Typography variant='h3'>Available plans</Typography>
        <AvailablePlansTable />
        <AddPlan />
      </AvailablePlanBox>
    </AvailablePlanApp>
  );
}
