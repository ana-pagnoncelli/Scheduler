import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import {
  LoginApp,
  LoginButton,
  LoginForm,
  LoginTextField,
  LoginTitle
} from "./styles";
import { loginError, missingFields } from "../../messages";
import { loginRequest } from "./requests";
import { MessageDisplay, FAIL_MESSAGE } from "../../components";

type LoginProps = {
  setUserHasAccountToFalse: () => void;
  // eslint-disable-next-line no-unused-vars
  handleUserLogin: (userEmail: string) => void;
};

export function Login({
  setUserHasAccountToFalse,
  handleUserLogin
}: LoginProps) {
  // const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  // const redirectToHome = () => {
  //   navigate("/home");
  // };

  const userLogin = async () => {
    const user = await loginRequest(email, password);
    if (user) {
      handleUserLogin(user.email);
      // redirectToHome();
    } else {
      setMessageText(loginError);
      setMessageType(FAIL_MESSAGE);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setMessageText(missingFields);
      setMessageType(FAIL_MESSAGE);
    } else {
      userLogin();
    }
  };

  return (
    <LoginApp>
      <LoginForm>
        <LoginTitle variant='h3'>Login</LoginTitle>
        <LoginTextField label='Email' value={email} onChange={handleEmail} />
        <LoginTextField
          label='Password'
          value={password}
          onChange={handlePassword}
        />

        <MessageDisplay text={messageText} type={messageType} />

        <LoginButton variant='contained' color='success' onClick={handleSubmit}>
          Login
        </LoginButton>
        <LoginButton
          variant='outlined'
          color='secondary'
          onClick={setUserHasAccountToFalse}
        >
          Register
        </LoginButton>
      </LoginForm>
    </LoginApp>
  );
}
