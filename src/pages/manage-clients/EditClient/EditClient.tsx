import React, { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { EditClientBox } from "../styles";
import { buttonStyleSecondaryColor } from "../../styles";
import { SelectPlan } from "./SelectPlan";
import { User } from "../../../types/User";
import { updateUser } from "../../../requests.tsx/User";
import { useClients } from "../../../hooks/useClients";

type EditClientProps = {
  client: User;
};

export function EditClient({ client }: EditClientProps) {
  const { fetchClients } = useClients();
  const [planName, setPlanName] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handlePlanName = (e: ChangeEvent<HTMLInputElement>) => {
    setPlanName(e.target.value);
  };

  const handleSaveButton = () => {
    const clientUpdated = { ...client, plan: planName };
    updateUser(clientUpdated);
    handleClose();
    fetchClients(true);
  };

  return (
    <>
      <IconButton aria-label='edit' onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <EditClientBox>
          <Typography variant='h5'>Edit Client Plan</Typography>
          <SelectPlan planName={planName} handlePlanName={handlePlanName} />
          <Button
            variant='contained'
            style={buttonStyleSecondaryColor}
            onClick={handleSaveButton}
          >
            Save
          </Button>
        </EditClientBox>
      </Dialog>
    </>
  );
}
