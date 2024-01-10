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
  monday = "MONDAY",
  tuesday = "TUESDAY",
  wednesday = "WEDNESDAY",
  thursday = "THURSDAY",
  friday = "FRIDAY",
  saturday = "SATURDAY",
  sunday = "SUNDAY"
}

export type FixedSchedule = {
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
