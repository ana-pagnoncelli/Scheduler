import axios from "axios";
import { FixedSchedule } from "./types";

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
