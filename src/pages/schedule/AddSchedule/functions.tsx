import { Dayjs } from "dayjs";
import { User } from "../../types/User";

export const formatToTwoDigitString = (num: number) => {
  if (num < 10) {
    return `0${num.toString()}`;
  }
  return num.toString();
};

export const getHourAsString = (hour: Dayjs | null) => {
  const defaultHour = "00:00";

  if (hour) {
    const hourAsString = formatToTwoDigitString(hour.hour());
    const minuteAsString = formatToTwoDigitString(hour.minute());
    return `${hourAsString}:${minuteAsString}`;
  }
  return defaultHour;
};

export const getEmailsList = (users: User[]) => {
  const emailsList: string[] = [];

  users.forEach((user) => {
    emailsList.push(user.email);
  });

  return emailsList;
};
