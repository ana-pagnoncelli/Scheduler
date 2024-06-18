import React, { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { IconButton, Typography } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { EditClientBox } from "../styles";
import { buttonStyleSecondaryColor } from "../../styles";
import { SelectPlan } from "./SelectPlan";

export function EditClient() {
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

  return (
    <>
      <IconButton aria-label='edit' onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        // PaperProps={{
        //   component: "form",
        //   onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
        //     event.preventDefault();
        //     const formData = new FormData(event.currentTarget);
        //     const formJson = Object.fromEntries((formData as any).entries());
        //     const email = formJson.email;
        //     console.log(email);
        //     handleClose();
        //   }
        // }}
      >
        <EditClientBox>
          <Typography variant='h5'>Edit Client Name</Typography>
          <SelectPlan planName={planName} handlePlanName={handlePlanName} />
          <Button variant='contained' style={buttonStyleSecondaryColor}>
            Save
          </Button>
        </EditClientBox>
      </Dialog>
    </>
  );
}
