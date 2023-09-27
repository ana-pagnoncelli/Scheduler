import axios from "axios";
import { singUpSuccess, singUpErrorCreatingUser } from "../../messages";
import { User } from "./types";
import {
  FAIL_MESSAGE,
  MessageDisplayType,
  SUCCESS_MESSAGE
} from "../../components";

export const createUserRequest = (user: User) => {
  let message: MessageDisplayType = {
    text: "",
    type: SUCCESS_MESSAGE
  };

  axios
    .post("/users", user)
    .then((response) => {
      const successMessage = singUpSuccess(user.name);
      message = { text: successMessage, type: SUCCESS_MESSAGE };
      console.log(response.data);
    })
    .catch((err) => {
      message = { text: singUpErrorCreatingUser, type: FAIL_MESSAGE };
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
