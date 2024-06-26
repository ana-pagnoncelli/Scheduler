import React, { ReactNode, createContext, useState, useMemo } from "react";
import { Plan } from "../pages/available-plans-admin/types";
import { getPlans } from "../pages/available-plans-admin/requests";

type PlanContextType = {
  plans: Plan[];
  fetchPlans: (forceUpdate?: boolean) => void;
};

const initialValue = {
  plans: [],
  fetchPlans: () => {}
};

export const PlanContext = createContext<PlanContextType>(initialValue);

type PlanProviderProps = {
  children: ReactNode;
};

export function PlanProvider({ children }: PlanProviderProps) {
  const [plans, setPlans] = useState<Plan[]>([]);

  const fetchPlans = (forceUpdate?: boolean) => {
    const callGetPlans = async () => {
      const newPlans: Plan[] = await getPlans();
      setPlans(newPlans);
    };

    if (plans.length === 0 || forceUpdate) callGetPlans();
  };

  const PlansValue = useMemo(
    () => ({ plans, fetchPlans }),
    [plans, fetchPlans]
  );

  return (
    <PlanContext.Provider value={PlansValue}>{children}</PlanContext.Provider>
  );
}
