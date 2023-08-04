import React, { useState } from "react";
import {
  HasAccountButton,
  Input,
  Label,
  Message,
  SubmitButton
} from "./styles";
import { missingFields } from "./messages";

type LoginProps = {
  setUserHasAccountToFalse: () => void;
};

export function Login({ setUserHasAccountToFalse }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const userLogin = () => {};

  const messageDisplay = () => {
    return (
      <Message>
        <span>{message}</span>
      </Message>
    );
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setMessage(missingFields);
    } else {
      userLogin();
    }
  };

  return (
    <div className='form'>
      <div>
        <h1>Login</h1>
      </div>

      <form>
        <Label className='label' htmlFor='email'>
          Email
          <Input
            onChange={handleEmail}
            className='input'
            value={email}
            type='email'
            id='email'
          />
        </Label>

        <Label className='label' htmlFor='password'>
          Password
          <Input
            onChange={handlePassword}
            className='input'
            value={password}
            type='password'
            id='password'
          />
        </Label>

        {messageDisplay()}

        <SubmitButton onClick={handleSubmit} className='btn' type='submit'>
          Submit
        </SubmitButton>
      </form>
      <HasAccountButton
        onClick={setUserHasAccountToFalse}
        className='btn'
        type='submit'
      >
        Do not have an account? Register here.
      </HasAccountButton>
    </div>
  );
}
