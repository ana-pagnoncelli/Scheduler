import React, { ReactNode, createContext, useState, useMemo } from "react";
import { User } from "../types/User";
import { getUsers } from "../requests.tsx/User";

type ClientContextType = {
  clients: User[];
  fetchClients: (forceUpdate?: boolean) => void;
};

const initialValue = {
  clients: [],
  fetchClients: () => {}
};

export const ClientContext = createContext<ClientContextType>(initialValue);

type ClientProviderProps = {
  children: ReactNode;
};

export function ClientProvider({ children }: ClientProviderProps) {
  const [clients, setClients] = useState<User[]>([]);

  const fetchClients = (forceUpdate?: boolean) => {
    const callGetClients = async () => {
      const newClients: User[] = await getUsers();
      setClients(newClients);
      console.log(newClients);
    };

    if (clients.length === 0 || forceUpdate) callGetClients();
  };

  const clientsValue = useMemo(
    () => ({ clients, fetchClients }),
    [clients, fetchClients]
  );

  return (
    <ClientContext.Provider value={clientsValue}>
      {children}
    </ClientContext.Provider>
  );
}
