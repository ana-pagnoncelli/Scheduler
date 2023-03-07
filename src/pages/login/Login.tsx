import React, { useState } from "react";
import {
  HasAccountButton,
  Input,
  Label,
  Message,
  SubmitButton
} from "./styles";

type LoginProps = {
  setUserHasAccountToFalse: () => void;
};

export function Login({ setUserHasAccountToFalse }: LoginProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    setSubmitted(false);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setSubmitted(false);
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <Message showMessage={submitted}>
        <span>User name successfully login!!</span>
      </Message>
    );
  };

  const errorMessage = () => {
    return (
      <Message showMessage={error}>
        <span>Please enter all the fields</span>
      </Message>
    );
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

        <div className='messages'>
          {errorMessage()}
          {successMessage()}
        </div>

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
