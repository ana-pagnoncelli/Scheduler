import axios from "axios";
import { User } from "../types/User";

export const getUsers = async (): Promise<User[]> => {
  let users: User[] = [];

  await axios
    .get(`/users/`)
    .then((response) => {
      users = response.data;
    })
    .catch((err) => {
      console.log(err);
    });

  return users;
};
