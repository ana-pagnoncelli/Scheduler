import axios from "axios";
import {
  CancelScheduleInfo,
  DateWithWeekDay,
  FixedSchedule,
  MyScheduleType,
  ScheduleDay,
  VariableScheduleInfo
} from "./types";
import {
  scheduleCancelled,
  scheduleCreated,
  scheduleDeleted
} from "../../components/AlertPopup/messages";
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

export const getSchedulesForAListOfDays = async (
  listOfDays: DateWithWeekDay[]
): Promise<ScheduleDay[]> => {
  let schedules: ScheduleDay[] = [];

  await axios
    .post(`/variableSchedules/get/forAListOfDays/`, listOfDays)
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

export const getMySchedule = async (email: string, referenceDate: string) => {
  let mySchedule: MyScheduleType | null = null;

  await axios
    .get(`users/my-schedule/${email}/${referenceDate}`)
    .then((response) => {
      mySchedule = response.data;
      console.log(mySchedule);
    });

  return mySchedule;
};

export const cancelScheduleRequest = async (
  cancelSheduleInfo: CancelScheduleInfo
) => {
  let message: AlertMessage = {
    text: "",
    type: AlertColors.SUCCESS
  };

  await axios
    .post(`/canceledSchedules/`, cancelSheduleInfo)
    .then(() => {
      message = { text: scheduleCancelled, type: AlertColors.SUCCESS };
    })
    .catch((err) => {
      message = { text: err.response.data.message, type: AlertColors.ERROR };
    });

  return message;
};

export const createVariableScheduleRequest = async (
  variableSheduleInfo: VariableScheduleInfo
) => {
  let message: AlertMessage = {
    text: "",
    type: AlertColors.SUCCESS
  };

  await axios
    .post(`/variableSchedules/`, variableSheduleInfo)
    .then(() => {
      message = { text: scheduleCreated, type: AlertColors.SUCCESS };
    })
    .catch((err) => {
      message = { text: err.response.data.message, type: AlertColors.ERROR };
    });

  return message;
};
