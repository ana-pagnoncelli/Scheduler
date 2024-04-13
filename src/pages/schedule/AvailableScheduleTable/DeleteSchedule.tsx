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
import { deleteScheduleRequest } from "../requests";
import { DeleteScheduleProps } from "../types";
import { fixedScheduleToHtml } from "../functions";
import { AlertColors } from "../../../components/AlertPopup";
import { useAlert } from "../../../hooks/useAlert";
import { useSchedules } from "../../../hooks/useSchedule";

export function DeleteSchedule({ fixedSchedule }: DeleteScheduleProps) {
  const { fetchSchedules } = useSchedules();
  const { setAlert } = useAlert();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteSchedule = () => {
    const callDeleteSchedule = async () => {
      const message = await deleteScheduleRequest(fixedSchedule.id);
      setAlert(message.text, message.type);

      if (message.type === AlertColors.SUCCESS) {
        fetchSchedules();
      }
    };
    callDeleteSchedule();
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
        aria-labelledby='delete-schedule-dialog-title'
        aria-describedby='delete-schedule-dialog-description'
      >
        <DialogTitle id='delete-schedule-dialog-title'>
          Delete this schedule?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id='delete-schedule-dialog-description'>
            {fixedScheduleToHtml(fixedSchedule)}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='error'
            onClick={handleDeleteSchedule}
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
