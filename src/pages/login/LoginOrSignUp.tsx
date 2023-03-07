import React, { useState } from "react";
import { SignUp } from "./SignUp";
import { Login } from "./Login";

export function LoginOrSignUp() {
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
        <Login setUserHasAccountToFalse={setUserHasAccountToFalse} />
      ) : (
        <SignUp setUserHasAccountToTrue={setUserHasAccountToTrue} />
      )}
    </div>
  );
}
