import { ChangeEvent } from "react";
import { Dayjs } from "dayjs";
import { User } from "../../types/User";

export type ScheduleHour = {
  hour: string;
  numberOfSpots: string;
  availableSpots: string;
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

export type FixedSchedulesByDay = {
  availableSpots: number;
  numberOfSpots: number;
  dayOfTheWeek: DayOfTheWeek;
  fixedSchedules: FixedSchedule[];
};

export type AvailableScheduleProps = {
  fixedSchedules: FixedSchedule[];
  updateAvailableSchedules: () => void;
};

export type AvailableScheduleTableRowDayProps = {
  fixedSchedulesByDay: FixedSchedulesByDay;
  updateAvailableSchedules: () => void;
};

export type AvailableScheduleTableHourProps = {
  fixedSchedules: FixedSchedule[];
  open: boolean;
  updateAvailableSchedules: () => void;
};

export type AvailableScheduleTableRowHourProps = {
  fixedSchedule: FixedSchedule;
  updateAvailableSchedules: () => void;
};

export type AddScheduleProps = {
  updateAvailableSchedules: () => void;
};

export type AddScheduleFormProps = {
  updateAvailableSchedules: () => void;
};

export type DeleteScheduleProps = {
  updateAvailableSchedules: () => void;
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
