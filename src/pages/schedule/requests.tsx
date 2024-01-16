import axios from "axios";
import { FixedSchedule } from "./types";
import { MessageDisplayType, SUCCESS_MESSAGE } from "../../components";

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

export const createSchedule = async (schedule: FixedSchedule) => {
  let message: MessageDisplayType = {
    text: "",
    type: SUCCESS_MESSAGE
  };

  await axios
    .post(`/schedules/`, schedule)
    .then((response) => {
      const successMessage = "success";
      message = { text: successMessage, type: SUCCESS_MESSAGE };
      console.log(response.data);
    })
    .catch((err) => {
      // message = { text: singUpErrorCreatingUser, type: FAIL_MESSAGE };
      console.log(err);
    });

  return message;
};
