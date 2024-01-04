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

export type FixedSchedule = {
  week_day: string;
  hour_of_the_day: string;
  number_of_spots: string;
  users_list: string[];
};
