import React, { ReactNode, createContext, useState, useMemo } from "react";

export type UserContextType = {
  email: string;
  isAdmin: boolean;
  setUser: (newEmail: string, newIsAdmin: boolean) => void;
};

export const initialValue = {
  email: "",
  isAdmin: false,
  setUser: () => {}
};

export const UserContext = createContext<UserContextType>(initialValue);

type UserProviderProps = {
  children: ReactNode;
};

export function UserProvider({ children }: UserProviderProps) {
  const [email, setEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);

  const setUser = (newEmail: string, newIsAdmin: boolean) => {
    setEmail(newEmail);
    setIsAdmin(newIsAdmin);
  };

  const userValue = useMemo(
    () => ({ email, isAdmin, setUser }),
    [email, isAdmin]
  );

  return (
    <UserContext.Provider value={userValue}>{children}</UserContext.Provider>
  );
}
