import axios from "axios";
import { ProfileType } from "./types";

export const getProfile = async (
  email: string
): Promise<ProfileType | null> => {
  let profileResponse = null;
  const profileUrl = `/users/${email}`;

  await axios
    .get(profileUrl)
    .then((response) => {
      profileResponse = response.data;
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return profileResponse;
};

export const updateProfile = async (
  email: string,
  profile: ProfileType
): Promise<ProfileType | null> => {
  let profileResponse = null;
  const profileUrl = `/users/${email}`;

  await axios
    .put(profileUrl, profile)
    .then((response) => {
      profileResponse = response.data;
      console.log(response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return profileResponse;
};
