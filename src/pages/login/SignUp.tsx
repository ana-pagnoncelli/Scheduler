import React, { useState } from "react";
import { Button, TextField, Typography } from "@mui/material";
import { LoginApp, LoginForm } from "./styles";
import { missingFields } from "../../components/AlertPopup/messages";
import { createUserRequest } from "./requests";
import { User } from "../../types/User";
import { AlertColors, AlertPopup } from "../../components/AlertPopup";
import { useAlert } from "../../hooks/useAlert";
import { PasswordField } from "./PasswordField";

type SignUpProps = {
  setUserHasAccountToTrue: () => void;
};

export function SignUp({ setUserHasAccountToTrue }: SignUpProps) {
  const { setAlert } = useAlert();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // TODO add a button to login in the alert message for this case

  const handleCreateUser = async () => {
    const user: User = {
      name,
      email,
      password,
      admin: false
    };
    const alertMessage = await createUserRequest(user);
    setAlert(alertMessage.text, alertMessage.type);

    if (alertMessage.type === AlertColors.SUCCESS) {
      setUserHasAccountToTrue();
    }
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setAlert(missingFields, AlertColors.ERROR);
    } else {
      handleCreateUser();
    }
  };

  return (
    <LoginApp>
      <LoginForm>
        <Typography variant='h3'>Register</Typography>
        <TextField label='Name' value={name} onChange={handleName} />
        <TextField label='Email' value={email} onChange={handleEmail} />
        <PasswordField password={password} handlePassword={handlePassword} />
        <Button variant='contained' color='success' onClick={handleSubmit}>
          Register
        </Button>

        <Button
          variant='outlined'
          color='secondary'
          onClick={setUserHasAccountToTrue}
        >
          Login
        </Button>
        <AlertPopup />
      </LoginForm>
    </LoginApp>
  );
}
