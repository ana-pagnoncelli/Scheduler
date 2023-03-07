import React, { useState } from "react";
import {
  Label,
  Input,
  SubmitButton,
  Message,
  HasAccountButton
} from "./styles";

type SignUpProps = {
  setUserHasAccountToTrue: () => void;
};

export function SignUp({ setUserHasAccountToTrue }: SignUpProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);

  const handleName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    setSubmitted(false);
  };

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
    if (name === "" || email === "" || password === "") {
      setError(true);
    } else {
      setSubmitted(true);
      setError(false);
    }
  };

  const successMessage = () => {
    return (
      <Message showMessage={submitted}>
        <span>User {name} successfully registered!!</span>
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

        <div className='messages'>
          {errorMessage()}
          {successMessage()}
        </div>

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
