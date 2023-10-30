import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HasAccountButton } from "./styles";
import { loginError, missingFields } from "../../messages";
import { loginRequest } from "./requests";
import {
  InputField,
  SubmitButton,
  MessageDisplay,
  FAIL_MESSAGE
} from "../../components";

type LoginProps = {
  setUserHasAccountToFalse: () => void;
  // eslint-disable-next-line no-unused-vars
  handleUserLogin: (userEmail: string) => void;
};

export function Login({
  setUserHasAccountToFalse,
  handleUserLogin
}: LoginProps) {
  const navigate = useNavigate();

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

  const redirectToHome = () => {
    navigate("/home");
  };

  const userLogin = async () => {
    const user = await loginRequest(email, password);
    if (user) {
      handleUserLogin(user.email);
      redirectToHome();
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
    <div className='form'>
      <div>
        <h1>Login</h1>
      </div>

      <form>
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
        onClick={setUserHasAccountToFalse}
        className='btn'
        type='submit'
      >
        Do not have an account? Register here.
      </HasAccountButton>
    </div>
  );
}
