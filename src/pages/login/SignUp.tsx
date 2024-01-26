import React, { useState } from "react";
import {
  LoginApp,
  LoginButton,
  LoginForm,
  LoginTextField,
  LoginTitle
} from "./styles";
import { missingFields } from "../../messages";
import { createUserRequest } from "./requests";
import { User } from "../types/User";
import {
  MessageDisplay,
  MessageDisplayType,
  FAIL_MESSAGE
} from "../../components";

type SignUpProps = {
  setUserHasAccountToTrue: () => void;
};

export function SignUp({ setUserHasAccountToTrue }: SignUpProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [messageText, setMessageText] = useState("");
  const [messageType, setMessageType] = useState("");

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

  const handleSubmit = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setMessageText(missingFields);
      setMessageType(FAIL_MESSAGE);
    } else {
      const user: User = {
        name,
        email,
        password,
        admin: false
      };

      const messageResult: MessageDisplayType = await createUserRequest(user);
      setMessageText(messageResult?.text);
      setMessageType(messageResult?.type);
    }
  };

  return (
    <LoginApp>
      <LoginForm>
        <LoginTitle variant='h3'>Register</LoginTitle>
        <LoginTextField label='Name' value={name} onChange={handleName} />

        <LoginTextField label='Email' value={email} onChange={handleEmail} />

        <LoginTextField
          label='Password'
          value={password}
          onChange={handlePassword}
        />

        <MessageDisplay text={messageText} type={messageType} />

        <LoginButton variant='contained' color='success' onClick={handleSubmit}>
          Register
        </LoginButton>

        <LoginButton
          variant='outlined'
          color='secondary'
          onClick={setUserHasAccountToTrue}
        >
          Login
        </LoginButton>
      </LoginForm>
    </LoginApp>
  );
}
