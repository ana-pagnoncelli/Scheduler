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
