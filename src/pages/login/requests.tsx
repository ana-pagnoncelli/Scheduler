import axios from "axios";
import { singUpSuccess, singUpErrorCreatingUser } from "./messages";
import { User } from "./types";

export const createUserRequest = (user: User) => {
  let message = "";

  axios
    .post("/users", user)
    .then((response) => {
      const successMessage = singUpSuccess(user.name);
      message = successMessage;
      console.log(response.data);
    })
    .catch((err) => {
      message = singUpErrorCreatingUser;
      console.log(err);
    });

  return message;
};

export const loginRequest = async (
  email: string,
  password: string
): Promise<Boolean> => {
  const loginInfo = { email, password };
  let loginSuccess = false;

  await axios
    .post("/users/login", loginInfo)
    .then((response) => {
      loginSuccess = true;
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return loginSuccess;
};
