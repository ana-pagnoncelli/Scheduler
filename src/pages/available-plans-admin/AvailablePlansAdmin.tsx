import React from "react";
import { Typography } from "@mui/material";
import { AvailablePlanApp, AvailablePlanBox } from "./styles";
import { AvailablePlansTable } from "./AvailablePlansTable/AvailablePlansTable";
import { AddPlan } from "./AddPlan/AddPlan";

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
