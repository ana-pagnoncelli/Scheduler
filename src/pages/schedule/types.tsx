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
  dayOfTheWeek: DayOfTheWeek;
  fixedSchedules: FixedSchedule[];
};

export type AvailableScheduleProps = {
  fixedSchedules: FixedSchedule[];
};

export type AvailableScheduleTableRowDayProps = {
  fixedSchedulesByDay: FixedSchedulesByDay;
};
