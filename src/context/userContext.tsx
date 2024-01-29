import { createContext } from "react";

export type UserContextType = {
  email: string;
  isAdmin: boolean;
};

export const defaultUserContext = {
  email: "",
  isAdmin: false
};

export const UserContext = createContext<UserContextType>(defaultUserContext);
