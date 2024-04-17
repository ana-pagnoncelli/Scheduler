import React, { useEffect } from "react";
import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { AvailablePlanTableHead } from "./AvailablePlansTableHead";
import { AvailablePlansTableRow } from "./AvailablePlansTableRow";
import { usePlans } from "../../../hooks/usePlan";

export function AvailablePlansTable() {
  const { plans, fetchPlans } = usePlans();

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <AvailablePlanTableHead />
        <TableBody>
          {plans.map((plan) => (
            <AvailablePlansTableRow plan={plan} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
