import { useContext } from "react";
import { ClientContext } from "../context/clientsContext";

export const useClients = () => useContext(ClientContext);
