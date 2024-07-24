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

export const updateUser = async (user: User): Promise<User | null> => {
  let updateUserResponse = null;
  const updateUserUrl = `/users/${user.email}`;

  await axios
    .put(updateUserUrl, user)
    .then((response) => {
      updateUserResponse = response.data;
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return updateUserResponse;
};
