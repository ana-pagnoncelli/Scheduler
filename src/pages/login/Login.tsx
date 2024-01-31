import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { LoginApp, LoginForm } from "./styles";
import {
  loginError,
  missingFields,
  AlertPopup,
  AlertColors
} from "../../components/AlertPopup";
import { loginRequest } from "./requests";
import { PasswordField } from "./PasswordField";
import { useAlert } from "../../hooks/useAlert";
import { useUser } from "../../hooks/useUser";

type LoginProps = {
  setUserHasAccountToFalse: () => void;
};

export function Login({ setUserHasAccountToFalse }: LoginProps) {
  const { setAlert } = useAlert();
  const { setUser } = useUser();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const userLogin = async () => {
    const user = await loginRequest(email, password);
    if (user) {
      setUser(user.email, user.admin);
    } else {
      setAlert(loginError, AlertColors.ERROR);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert(missingFields, AlertColors.ERROR);
    } else {
      userLogin();
    }
  };

  return (
    <LoginApp>
      <LoginForm>
        <Typography variant='h3'>Login</Typography>
        <TextField label='Email' value={email} onChange={handleEmail} />
        <PasswordField password={password} handlePassword={handlePassword} />
        <Button variant='contained' color='success' onClick={handleSubmit}>
          Login
        </Button>
        <Button
          variant='outlined'
          color='secondary'
          onClick={setUserHasAccountToFalse}
        >
          Register
        </Button>
        <AlertPopup />
      </LoginForm>
    </LoginApp>
  );
}
