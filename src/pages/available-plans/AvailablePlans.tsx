import React from "react";
import Box from "@mui/material/Box";

type Plan = { name: string; text: string; price: number };

const availablePlansList: Plan[] = [
  {
    name: "Daily",
    text: "Usage: You pay only the day you want, for one hour class.",
    price: 40
  },
  {
    name: "Monthly - one time per week",
    text: "Usage: You pay monthly, for one hour class per week.",
    price: 60
  },
  {
    name: "Monthly - two times per week",
    text: "Usage: You pay monthly, for one hour class two times a week.",
    price: 90
  }
];

// TODO: If admin, add/edit/remove plan
// Create in the backend and retrieve it

export function AvailablePlans() {
  return (
    <>
      <h1> Available plans </h1>
      {availablePlansList.map((plan) => (
        <Box component='fieldset'>
          <legend>{plan.name}</legend>
          {plan.text}
          <br />
          Price: ${plan.price}
        </Box>
      ))}
    </>
  );
}
