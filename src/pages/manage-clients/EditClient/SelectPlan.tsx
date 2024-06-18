import React, { useEffect } from "react";
import { MenuItem, TextField } from "@mui/material";
import { usePlans } from "../../../hooks/usePlan";

type SelectPlanProps = {
  planName: string;
  handlePlanName: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function SelectPlan({ planName, handlePlanName }: SelectPlanProps) {
  const { plans, fetchPlans } = usePlans();

  useEffect(() => {
    fetchPlans();
  }, []);

  return (
    <TextField
      id='outlined-select-day'
      select
      label='Select day'
      value={planName}
      variant='outlined'
      onChange={handlePlanName}
      sx={{ flex: 1 }}
    >
      {plans.map((plan) => (
        <MenuItem key={plan.id} value={plan.name}>
          {plan.name}
        </MenuItem>
      ))}
    </TextField>
  );
}
