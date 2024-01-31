import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";

import { Button, TextField, Typography } from "@mui/material";
import { LoginApp, LoginForm } from "./styles";
import {
  loginError,
  missingFields,
  AlertPopup,
  AlertColors
} from "../../components/AlertPopup";
import { loginRequest } from "./requests";
import { UserContextType } from "../../context/userContext";
import { PasswordField } from "./PasswordField";
import { useAlert } from "../../hooks/useAlert";

type LoginProps = {
  setUserHasAccountToFalse: () => void;
  handleUserLogin: (newUserContext: UserContextType) => void;
};

export function Login({
  setUserHasAccountToFalse,
  handleUserLogin
}: LoginProps) {
  // const navigate = useNavigate();

  const { setAlert } = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };
  // TODO
  // const redirectToHome = () => {
  //   navigate("/home");
  // };

  const userLogin = async () => {
    const user = await loginRequest(email, password);
    if (user) {
      handleUserLogin({ email: user.email, isAdmin: user.admin });
      // redirectToHome();
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
