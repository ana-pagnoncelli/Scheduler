import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { HasAccountButton } from "./styles";
import { loginError, missingFields } from "../../messages";
import { loginRequest } from "./requests";
import { InputField, SubmitButton } from "../../components";
import { MessageDisplay } from "../../components/MessageDisplay";

type LoginProps = {
  setUserHasAccountToFalse: () => void;
};

export function Login({ setUserHasAccountToFalse }: LoginProps) {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [message, setMessage] = useState("");

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
    const success = await loginRequest(email, password);
    if (success) {
      redirectToHome();
    } else {
      setMessage(loginError);
    }
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

        <MessageDisplay message={message} />

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
