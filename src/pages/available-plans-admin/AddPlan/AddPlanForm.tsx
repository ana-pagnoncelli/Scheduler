import React, { ChangeEvent, useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { useAlert } from "../../../hooks/useAlert";
import { AlertColors, missingFields } from "../../../components/AlertPopup";
import { AddElementBox, buttonStyleSecondaryColor } from "../../styles";
import { InputBox } from "./styles";
import { createPlan } from "../requests";
import { Plan } from "../types";
import { usePlans } from "../../../hooks/usePlan";

export function AddPlanForm() {
  const { fetchPlans } = usePlans();
  const { setAlert } = useAlert();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [classesPerWeek, setClassesPerWeek] = useState("");

  const handleName = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handlePrice = (e: ChangeEvent<HTMLInputElement>) => {
    setPrice(e.target.value);
  };

  const handleDescription = (e: ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleClassesPerWeek = (e: ChangeEvent<HTMLInputElement>) => {
    setClassesPerWeek(e.target.value);
  };

  const hasEmptyFields = () => {
    return !(name && price && classesPerWeek && description);
  };

  const clearFields = () => {
    setName("");
    setPrice("");
    setDescription("");
    setClassesPerWeek("");
  };

  const sendRequestCreateSchedule = async () => {
    const plan: Plan = {
      id: crypto.randomUUID(),
      price: Number(price),
      classes_per_week: Number(classesPerWeek),
      name,
      description
    };
    const message = await createPlan(plan);
    setAlert(message.text, message.type);
    if (message.type === AlertColors.SUCCESS) {
      clearFields();
      fetchPlans(true);
    }
  };

  const handleCreateButton = () => {
    if (hasEmptyFields()) {
      setAlert(missingFields, AlertColors.ERROR);
    } else {
      sendRequestCreateSchedule();
    }
  };

  return (
    <AddElementBox>
      <Typography variant='h4'>Create new plan</Typography>
      <InputBox>
        <TextField
          sx={{ flex: 1 }}
          label='Name'
          value={name}
          onChange={handleName}
        />

        <TextField
          sx={{ flex: 1 }}
          label='Price'
          value={price}
          onChange={handlePrice}
        />

        <TextField
          sx={{ flex: 1 }}
          label='Number of classes per week'
          value={classesPerWeek}
          onChange={handleClassesPerWeek}
        />
      </InputBox>

      <InputBox>
        <TextField
          sx={{ flex: 1 }}
          label='Description'
          value={description}
          onChange={handleDescription}
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
