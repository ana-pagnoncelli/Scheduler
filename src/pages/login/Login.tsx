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
import { UserContextType } from "../../context/userContext";
import { PasswordField } from "./PasswordField";
import { AlertPopup } from "../../components/AlertPopup";
import { useAlert } from "../../hooks/useAlert";

type LoginProps = {
  setUserHasAccountToFalse: () => void;
  handleUserLogin: (newUserContext: UserContextType) => void;
};

export function Login({
  setUserHasAccountToFalse,
  handleUserLogin
}: LoginProps) {
  // const navigate = useNavigate();

  const { setAlert } = useAlert();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

  const userLogin = async () => {
    const user = await loginRequest(email, password);
    if (user) {
      handleUserLogin({ email: user.email, isAdmin: user.admin });
      // redirectToHome();
    } else {
      setAlert(loginError, "error");
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setAlert(missingFields, "error");
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
        <AlertPopup />
      </LoginForm>
    </LoginApp>
  );
}
