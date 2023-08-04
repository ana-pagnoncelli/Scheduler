import React, { useState } from "react";
import {
  Label,
  Input,
  SubmitButton,
  HasAccountButton,
  Message
} from "./styles";
import { missingFields } from "./messages";
import { createUserRequest } from "./requests";
import { User } from "./types";

type SignUpProps = {
  setUserHasAccountToTrue: () => void;
};

export function SignUp({ setUserHasAccountToTrue }: SignUpProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const messageDisplay = () => {
    return (
      <Message>
        <span>{message}</span>
      </Message>
    );
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      setMessage(missingFields);
    } else {
      const user: User = {
        name,
        email,
        password
      };
      createUserRequest(user);
    }
  };

  return (
    <div className='form'>
      <div>
        <h1>Sing Up</h1>
      </div>

      <form>
        <Label className='label' htmlFor='name'>
          Name
          <Input
            onChange={handleName}
            className='input'
            value={name}
            type='text'
            id='name'
          />
        </Label>

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
        onClick={setUserHasAccountToTrue}
        className='btn'
        type='submit'
      >
        Already have an account? Enter here.
      </HasAccountButton>
    </div>
  );
}
