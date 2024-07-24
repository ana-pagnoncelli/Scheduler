import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { EditClientBox } from "../styles";
import { buttonStyleSecondaryColor } from "../../styles";
import { User } from "../../../types/User";
import { deleteUser } from "../../../requests.tsx/User";
import { useClients } from "../../../hooks/useClients";

type DeleteClientProps = {
  client: User;
};

export function DeleteClient({ client }: DeleteClientProps) {
  const { fetchClients } = useClients();
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSaveButton = () => {
    deleteUser(client);
    handleClose();
    fetchClients(true);
  };

  return (
    <>
      <IconButton aria-label='edit' onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <EditClientBox>
          <Typography variant='h5'>
            Are you sure you want to delete the client {client.email}?
          </Typography>
          <Button
            variant='contained'
            style={buttonStyleSecondaryColor}
            onClick={handleSaveButton}
          >
            Delete client
          </Button>
        </EditClientBox>
      </Dialog>
    </>
  );
}
