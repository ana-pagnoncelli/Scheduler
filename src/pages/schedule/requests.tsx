import axios from "axios";
import { FixedSchedule } from "./types";
import { scheduleCreated } from "../../components/AlertPopup/messages";
import { User } from "../../types/User";
import { AlertColors, AlertMessage } from "../../components/AlertPopup";

export const getSchedules = async (): Promise<FixedSchedule[]> => {
  let schedules: FixedSchedule[] = [];

  await axios
    .get(`/schedules/all`)
    .then((response) => {
      schedules = response.data;
      console.log(schedules);
    })
    .catch((err) => {
      console.log(err);
    });

  return schedules;
};

export const deleteScheduleRequest = async (scheduleId: string) => {
  await axios
    .delete(`/schedules/${scheduleId}`)
    .then(() => {})
    .catch((err) => {
      console.log(err);
    });
};

export const createSchedule = async (schedule: FixedSchedule) => {
  let message: AlertMessage = {
    text: "",
    type: AlertColors.SUCCESS
  };

  await axios
    .post(`/schedules/`, schedule)
    .then((response) => {
      message = { text: scheduleCreated, type: AlertColors.SUCCESS };
      console.log(response.data);
    })
    .catch((err) => {
      message = { text: err.response.data.message, type: AlertColors.ERROR };
      console.log(err);
    });

  return message;
};

export const getUsers = async (): Promise<User[]> => {
  let users: User[] = [];

  await axios
    .get(`/users/`)
    .then((response) => {
      users = response.data;
      console.log("users", response.data);
    })
    .catch((err) => {
      console.log(err);
    });

  return users;
};
