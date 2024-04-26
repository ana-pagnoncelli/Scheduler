import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button
} from "@mui/material";
import { deletePlan } from "../requests";
import { DeletePlanProps } from "../types";
import { AlertColors } from "../../../components/AlertPopup";
import { useAlert } from "../../../hooks/useAlert";
import { usePlans } from "../../../hooks/usePlan";
import { planToHtml } from "../functions";

export function DeletePlan({ plan }: DeletePlanProps) {
  const { fetchPlans } = usePlans();
  const { setAlert } = useAlert();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeletePlan = () => {
    const callDeletePlan = async () => {
      const message = await deletePlan(plan.id);
      setAlert(message.text, message.type);

      if (message.type === AlertColors.SUCCESS) {
        fetchPlans();
      }
    };
    callDeletePlan();
    handleClose();
  };

  return (
    <>
      <IconButton aria-label='delete' onClick={handleClickOpen}>
        <DeleteIcon />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='delete-plan-dialog-title'
        aria-describedby='delete-plan-dialog-description'
      >
        <DialogTitle id='delete-plan-dialog-title'>
          Delete this plan?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='delete-plan-dialog-description'>
            {planToHtml(plan)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='error'
            onClick={handleDeletePlan}
            autoFocus
          >
            Delete
          </Button>
          <Button variant='outlined' color='success' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
