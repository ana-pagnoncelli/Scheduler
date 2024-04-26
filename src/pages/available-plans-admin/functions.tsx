import React from "react";
import { Plan } from "./types";

export const planToHtml = (plan: Plan) => {
  return (
    <>
      Name: {plan.name}
      <br />
      Description: {plan.description}
      <br />
      Classes per week: {plan.classes_per_week}
    </>
  );
};
