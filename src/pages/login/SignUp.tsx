import React, { useState } from "react";
import { HasAccountButton } from "./styles";
import { missingFields } from "../../messages";
import { createUserRequest } from "./requests";
import { User } from "../types/User";
import {
  InputField,
  SubmitButton,
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

        <MessageDisplay text={messageText} type={messageType} />

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
