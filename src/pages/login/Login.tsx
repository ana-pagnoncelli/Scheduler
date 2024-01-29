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
import { UserContextType } from "../../providers/userProvider";
import { PasswordField } from "./PasswordField";

type LoginProps = {
  setUserHasAccountToFalse: () => void;
  handleUserLogin: (newUserContext: UserContextType) => void;
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
  // TODO
  // const redirectToHome = () => {
  //   navigate("/home");
  // };

  const setMissingFieldsMessage = () => {
    setMessageText("");
    setTimeout(() => {
      setMessageText(missingFields);
    }, 0);
    setMessageType(FAIL_MESSAGE);
  };

  const setLoginErrorMessage = () => {
    setMessageText("");
    setTimeout(() => {
      setMessageText(loginError);
    }, 0);
    setMessageType(FAIL_MESSAGE);
  };

  const userLogin = async () => {
    const user = await loginRequest(email, password);
    if (user) {
      handleUserLogin({ email: user.email, isAdmin: user.admin });
      // redirectToHome();
    } else {
      setLoginErrorMessage();
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setMissingFieldsMessage();
    } else {
      userLogin();
    }
  };

  return (
    <LoginApp>
      <LoginForm>
        <LoginTitle variant='h3'>Login</LoginTitle>
        <LoginTextField label='Email' value={email} onChange={handleEmail} />
        <PasswordField password={password} handlePassword={handlePassword} />
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
