import React from "react";
import { Typography } from "@mui/material";
import { AvailablePlanApp, AvailablePlanBox } from "./styles";
import { AvailablePlansTable } from "./AvailablePlansTable";

export function AvailablePlansAdmin() {
  return (
    <AvailablePlanApp>
      <AvailablePlanBox>
        <Typography variant='h3'>Available plans</Typography>
        <AvailablePlansTable />
      </AvailablePlanBox>
    </AvailablePlanApp>
  );
}
