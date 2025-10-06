import { ChangeEvent } from "react";
import { Dayjs } from "dayjs";
import { User } from "../../types/User";

export type ScheduleHour = {
  day: string;
  hour: string;
  numberOfSpots: string;
  availableSpots: string;
  usersList: string[];
};

export type ScheduleDay = {
  day: string;
  numberOfSpots: string;
  availableSpots: string;
  hours: ScheduleHour[];
};

export enum DayOfTheWeek {
  MONDAY = "MONDAY",
  TUESDAY = "TUESDAY",
  WEDNESDAY = "WEDNESDAY",
  THURSDAY = "THURSDAY",
  FRIDAY = "FRIDAY",
  SATURDAY = "SATURDAY",
  SUNDAY = "SUNDAY"
}

export type FixedSchedule = {
  id: string;
  week_day: DayOfTheWeek;
  hour_of_the_day: string;
  number_of_spots: string;
  users_list: string[];
};

export type MyScheduleType = {
  nextClass: string;
  fixedSchedulesDays: string[];
  numberOfClassesToRecover: string;
};

export type DateWithWeekDay = {
  week_day: DayOfTheWeek;
  date: string;
};

export type FixedSchedulesByDay = {
  availableSpots: number;
  numberOfSpots: number;
  dayOfTheWeek: DayOfTheWeek;
  fixedSchedules: FixedSchedule[];
};

export type AvailableScheduleTableRowDayProps = {
  fixedSchedulesByDay: FixedSchedulesByDay;
};

export type AvailableScheduleTableHourProps = {
  fixedSchedules: FixedSchedule[];
  open: boolean;
};

export type AvailableScheduleTableRowHourProps = {
  fixedSchedule: FixedSchedule;
};

export type DeleteScheduleProps = {
  fixedSchedule: FixedSchedule;
};

export type SelectUsersProps = {
  handleUserSelection: (value: User[]) => void;
  selectedUsers: User[];
};

export type SelectDayOfTheWeekProps = {
  handleSelectDay: (e: ChangeEvent<HTMLInputElement>) => void;
  dayOfTheWeek: string;
};

export type SelectHourProps = {
  setHour: React.Dispatch<React.SetStateAction<Dayjs | null>>;
  hour: Dayjs | null;
};

export type CancelScheduleInfo = {
  hour: string;
  day: string;
  userEmail: string;
};

export type VariableScheduleInfo = {
  hour: string;
  day: string;
  userEmail: string;
};
