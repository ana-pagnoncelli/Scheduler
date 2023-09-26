import React from "react";
import { Input, Label } from "./styles";

type InputFieldType = {
  fieldName: string;
  fieldValue: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function InputField({
  fieldName,
  fieldValue,
  onChange
}: InputFieldType) {
  return (
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
  );
}
