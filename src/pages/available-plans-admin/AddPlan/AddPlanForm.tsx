import React, { ChangeEvent, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
// import { missingFields } from "../../../components/AlertPopup/messages";
// import { useAlert } from "../../../hooks/useAlert";
// import { AlertColors } from "../../../components/AlertPopup";
import { AddElementBox, buttonStyleSecondaryColor } from "../../styles";
import { InputBox } from "./styles";

export function AddPlanForm() {
  // const { setAlert } = useAlert();
  const [numberOfSpots, setNumberOfSpots] = useState("");

  const handleNumberOfSpots = (e: ChangeEvent<HTMLInputElement>) => {
    setNumberOfSpots(e.target.value);
  };

  // const hasEmptyFields = () => {
  //   return !(hour && dayOfTheWeek && numberOfSpots);
  // };

  // const clearFields = () => {
  //   setSelectedUsers([]);
  //   setDayOfTheWeek("");
  //   setHour(null);
  //   setNumberOfSpots("");
  // };

  // const sendRequestCreateSchedule = async () => {
  //   const schedule: FixedSchedule = {
  //     id: crypto.randomUUID(),
  //     week_day: dayOfTheWeek as DayOfTheWeek,
  //     hour_of_the_day: getHourAsString(hour),
  //     number_of_spots: numberOfSpots,
  //     users_list: getEmailsList(selectedUsers)
  //   };

  //   const message = await createSchedule(schedule);
  //   setAlert(message.text, message.type);

  //   if (message.type === AlertColors.SUCCESS) {
  //     clearFields();
  //     fetchSchedules();
  //   }
  // };

  const handleCreateButton = () => {
    // if (hasEmptyFields()) {
    //   setAlert(missingFields, AlertColors.ERROR);
    // } else {
    //   sendRequestCreateSchedule();
    // }
  };

  return (
    <AddElementBox>
      <Typography variant='h4'>Create new plan</Typography>
      <InputBox>
        <TextField
          sx={{ flex: 1 }}
          label='Number of spots'
          value={numberOfSpots}
          onChange={handleNumberOfSpots}
        />

        <TextField
          sx={{ flex: 1 }}
          label='Number of spots'
          value={numberOfSpots}
          onChange={handleNumberOfSpots}
        />

        <TextField
          sx={{ flex: 1 }}
          label='Number of spots'
          value={numberOfSpots}
          onChange={handleNumberOfSpots}
        />

        <TextField
          sx={{ flex: 1 }}
          label='Number of spots'
          value={numberOfSpots}
          onChange={handleNumberOfSpots}
        />
      </InputBox>

      <Button
        variant='contained'
        onClick={handleCreateButton}
        style={buttonStyleSecondaryColor}
      >
        Create Plan
      </Button>
    </AddElementBox>
  );
}
