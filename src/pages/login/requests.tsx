import axios from "axios";
import {
  singUpSuccess,
  singUpErrorCreatingUser
} from "../../components/AlertPopup/messages";
import { User } from "../../types/User";
import { AlertColors, AlertMessage } from "../../components/AlertPopup";

export const createUserRequest = async (user: User) => {
  let message: AlertMessage = {
    text: "",
    type: AlertColors.SUCCESS
  };

  await axios
    .post("/users", user)
    .then(() => {
      const successMessage = singUpSuccess(user.name);
      message = { text: successMessage, type: AlertColors.SUCCESS };
    })
    .catch((err) => {
      message = { text: singUpErrorCreatingUser, type: AlertColors.ERROR };
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
