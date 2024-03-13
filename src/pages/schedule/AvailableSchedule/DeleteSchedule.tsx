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

export function DeleteSchedule({
  fixedSchedule,
  updateAvailableSchedules
}: DeleteScheduleProps) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteSchedule = () => {
    const requestDeleteSchedule = async () => {
      await deleteScheduleRequest(fixedSchedule.id);
      updateAvailableSchedules();
    };
    requestDeleteSchedule();
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
            If you delete this schedule, the users will have a loosen spot.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            variant='contained'
            color='error'
            onClick={handleDeleteSchedule}
            autoFocus
          >
            DELETE
          </Button>
          <Button variant='outlined' color='success' onClick={handleClose}>
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}
