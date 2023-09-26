import React, { useState } from "react";
import { HasAccountButton, Message } from "./styles";
import { missingFields } from "./messages";
import { createUserRequest } from "./requests";
import { User } from "./types";
import { InputField, SubmitButton } from "../../components";

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
      setMessage(createUserRequest(user));
    }
  };

  return (
    <div className='form'>
      <div>
        <h1>Sing Up</h1>
      </div>

      <form>
        <InputField fieldName='Name' fieldValue={name} onChange={handleName} />

        <InputField
          fieldName='Email'
          fieldValue={email}
          onChange={handleEmail}
        />

        <InputField
          fieldName='Password'
          fieldValue={password}
          onChange={handlePassword}
        />

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
