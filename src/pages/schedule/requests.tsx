import axios from "axios";
import { FixedSchedule } from "./types";
import {
  FAIL_MESSAGE,
  MessageDisplayType,
  SUCCESS_MESSAGE
} from "../../components";
import { errorMessage, scheduleCreated, scheduleDeleted } from "../../messages";

export const getSchedules = async (): Promise<Array<FixedSchedule>> => {
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

export const deleteSchedule = async (scheduleId: string) => {
  let message: MessageDisplayType = {
    text: "",
    type: SUCCESS_MESSAGE
  };

  await axios
    .delete(`/schedules/${scheduleId}`)
    .then((response) => {
      message = { text: scheduleDeleted, type: SUCCESS_MESSAGE };
      console.log(response.data);
    })
    .catch((err) => {
      message = { text: errorMessage, type: FAIL_MESSAGE };
      console.log(err);
    });

  return message;
};

export const createSchedule = async (schedule: FixedSchedule) => {
  let message: MessageDisplayType = {
    text: "",
    type: SUCCESS_MESSAGE
  };

  await axios
    .post(`/schedules/`, schedule)
    .then((response) => {
      message = { text: scheduleCreated, type: SUCCESS_MESSAGE };
      console.log(response.data);
    })
    .catch((err) => {
      message = { text: err.response.data.message, type: FAIL_MESSAGE };
      console.log(err);
    });

  return message;
};
