import axios from "axios";
import { singUpSuccess, singUpErrorCreatingUser } from "../../messages";
import { User } from "./types";
import {
  FAIL_MESSAGE,
  MessageDisplayType,
  SUCCESS_MESSAGE
} from "../../components";

export const createUserRequest = async (user: User) => {
  let message: MessageDisplayType = {
    text: "",
    type: SUCCESS_MESSAGE
  };

  await axios
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
): Promise<User | null> => {
  const loginInfo = { email, password };
  let user = null;

  await axios
    .post("/users/login", loginInfo)
    .then((response) => {
      user = response.data;
      console.log(user);
    })
    .catch((err) => {
      user = false;
      console.log(err);
    });

  return user;
};

export const getUser = async (email: string): Promise<User | null> => {
  let user = null;

  await axios
    .get(`/users/${email}`)
    .then((response) => {
      user = response.data;
      console.log(user);
    })
    .catch((err) => {
      user = false;
      console.log(err);
    });

  return user;
};
