import React, { useState } from "react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";
import { UserContextType } from "../../providers/userProvider";

type LoginOrSignUpProps = {
  handleUserLogin: (newUserContext: UserContextType) => void;
};

export function LoginOrSignUp({ handleUserLogin }: LoginOrSignUpProps) {
  const [userHasAccount, setUserHasAccount] = useState(true);

  const setUserHasAccountToFalse = () => {
    setUserHasAccount(false);
  };

  const setUserHasAccountToTrue = () => {
    setUserHasAccount(true);
  };

  return (
    <div>
      {userHasAccount ? (
        <Login
          setUserHasAccountToFalse={setUserHasAccountToFalse}
          handleUserLogin={handleUserLogin}
        />
      ) : (
        <SignUp setUserHasAccountToTrue={setUserHasAccountToTrue} />
      )}
    </div>
  );
}
