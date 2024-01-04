import axios from "axios";
import { FixedSchedule } from "./types";

export const getSchedules = async (): Promise<Array<FixedSchedule> | null> => {
  let schedules = null;

  await axios
    .get(`/schedules/all`)
    .then((response) => {
      schedules = response.data;
      console.log(schedules);
    })
    .catch((err) => {
      schedules = false;
      console.log(err);
    });

  return schedules;
};
