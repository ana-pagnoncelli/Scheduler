import React, { useEffect } from "react";
import { Table, TableBody, TableContainer, Paper } from "@mui/material";
import { ManageClientsTableHead } from "./ManageClientsTableHead";
import { ManageClientsTableRow } from "./ManageClientsTableRow";
import { useClients } from "../../../hooks/useClients";

export function ManageClientsTable() {
  const { clients, fetchClients } = useClients();

  useEffect(() => {
    fetchClients();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table aria-label='simple table'>
        <ManageClientsTableHead />
        <TableBody>
          {clients.map((client) => (
            <ManageClientsTableRow client={client} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
