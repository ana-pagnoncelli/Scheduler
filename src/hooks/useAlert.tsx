import { useContext } from "react";
import { AlertContext } from "../context/alertContext";

export const useAlert = () => useContext(AlertContext);
