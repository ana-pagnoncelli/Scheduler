import axios from "axios";
import { FixedSchedule } from "./types";
import {
  scheduleCreated,
  scheduleDeleted
} from "../../components/AlertPopup/messages";
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
  let message: AlertMessage = {
    text: "",
    type: AlertColors.SUCCESS
  };

  await axios
    .delete(`/schedules/${scheduleId}`)
    .then(() => {
      message = { text: scheduleDeleted, type: AlertColors.SUCCESS };
    })
    .catch((err) => {
      message = { text: err.response.data.message, type: AlertColors.ERROR };
    });

  return message;
};

export const createSchedule = async (schedule: FixedSchedule) => {
  let message: AlertMessage = {
    text: "",
    type: AlertColors.SUCCESS
  };

  await axios
    .post(`/schedules/`, schedule)
    .then(() => {
      message = { text: scheduleCreated, type: AlertColors.SUCCESS };
    })
    .catch((err) => {
      message = { text: err.response.data.message, type: AlertColors.ERROR };
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
