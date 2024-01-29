import React from "react";
import {
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

type PasswordFieldProps = {
  password: string;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export function PasswordField({
  password,
  handlePassword
}: PasswordFieldProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <FormControl variant='outlined'>
      <InputLabel htmlFor='display-name'>Password</InputLabel>
      <OutlinedInput
        type={showPassword ? "text" : "password"}
        label='Password'
        value={password}
        onChange={handlePassword}
        endAdornment={
          <InputAdornment position='end'>
            <IconButton
              aria-label='toggle password visibility'
              onClick={handleShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge='end'
            >
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
