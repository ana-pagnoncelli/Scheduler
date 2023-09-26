import React from "react";
import { Grid } from "@mui/material";
import { Input, Label } from "./styles";

type ProfileFieldType = {
  fieldName: string;
  fieldValue: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function ProfileField({
  fieldName,
  fieldValue,
  onChange
}: ProfileFieldType) {
  return (
    <Grid item xs={4}>
      <Label className='label' htmlFor={fieldName}>
        {fieldName}
        <Input
          onChange={onChange}
          className='input'
          value={fieldValue}
          type={fieldName}
          id={fieldName}
        />
      </Label>
    </Grid>
  );
}
