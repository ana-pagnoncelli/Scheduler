import axios from "axios";
import { Profile } from "./types";

export const getProfile = async (email: string): Promise<Profile | null> => {
  let profile = null;
  const getProfileUrl = `/users/${email}`;

  await axios
    .get(getProfileUrl)
    .then((response) => {
      profile = response.data;
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return profile;
};

// export const createUserRequest = async (user: User) => {
//   let message: MessageDisplayType = {
//     text: "",
//     type: SUCCESS_MESSAGE
//   };

//   await axios
//     .post("/users", user)
//     .then((response) => {
//       const successMessage = singUpSuccess(user.name);
//       message = { text: successMessage, type: SUCCESS_MESSAGE };
//       console.log(response.data);
//     })
//     .catch((err) => {
//       message = { text: singUpErrorCreatingUser, type: FAIL_MESSAGE };
//       console.log(err);
//     });

//   return message;
// };

// export const loginRequest = async (
//   email: string,
//   password: string
// ): Promise<User | null> => {
//   const loginInfo = { email, password };
//   let user = null;

//   await axios
//     .post("/users/login", loginInfo)
//     .then((response) => {
//       user = response.data;
//       console.log(user);
//     })
//     .catch((err) => {
//       user = false;
//       console.log(err);
//     });

//   return user;
// };
