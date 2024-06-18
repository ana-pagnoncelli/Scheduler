import * as React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  IconButton,
  Dialog,
  DialogActions,
  Button,
  Typography
} from "@mui/material";
import { deletePlan } from "../requests";
import { DeletePlanProps } from "../types";
import { AlertColors } from "../../../components/AlertPopup";
import { useAlert } from "../../../hooks/useAlert";
import { usePlans } from "../../../hooks/usePlan";
import { planToHtml } from "../functions";
import { DeletePlanBox } from "../styles";

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
        fetchPlans(true);
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
        <DeletePlanBox>
          <Typography variant='h5' id='delete-plan-dialog-title'>
            Delete this plan?
          </Typography>
          <Typography variant='body1' id='delete-plan-dialog-title'>
            {planToHtml(plan)}
          </Typography>
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
        </DeletePlanBox>
      </Dialog>
    </>
  );
}
