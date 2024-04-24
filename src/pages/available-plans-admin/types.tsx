export type Plan = {
  id: string;
  name: string;
  description: string;
  price: number;
  classes_per_week: number;
};

export type AvailablePlansTableRowProps = {
  plan: Plan;
};
