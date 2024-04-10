import React from "react";
import {
  Typography,
  Table,
  TableBody,
  TableContainer,
  Paper
} from "@mui/material";
import { AvailablePlanApp, AvailablePlanBox } from "./styles";
import { AvailablePlanTableHead } from "./AvailablePlansTableHead";
import { AvailablePlansTableRow } from "./AvailablePlansTableRow";

type Plan = { name: string; description: string; price: number };

const plans: Plan[] = [
  {
    name: "Daily",
    description: "You pay only the day you want, for one hour class.",
    price: 40
  },
  {
    name: "Monthly - one time per week",
    description: "You pay monthly, for one hour class per week.",
    price: 60
  },
  {
    name: "Monthly - two times per week",
    description: "You pay monthly, for one hour class two times a week.",
    price: 90
  }
];

export function AvailablePlansAdmin() {
  return (
    <AvailablePlanApp>
      <AvailablePlanBox>
        <Typography variant='h3'> Available plans</Typography>
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
      </AvailablePlanBox>
    </AvailablePlanApp>
  );
}
