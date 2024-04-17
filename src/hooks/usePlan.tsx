import { useContext } from "react";
import { PlanContext } from "../context/planContext";

export const usePlans = () => useContext(PlanContext);
