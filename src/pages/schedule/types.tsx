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
