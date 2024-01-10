/* eslint-disable camelcase */
import { DayOfTheWeek, FixedSchedule, FixedSchedulesByDay } from "./types";

const fixedScheduleOf = (
  dayOfTheWeek: DayOfTheWeek,
  fixedSchedules: FixedSchedule[]
): FixedSchedulesByDay => {
  const filteredSchedule = fixedSchedules.filter(
    (fixedSchedule) => fixedSchedule.week_day === dayOfTheWeek
  );

  const numberOfSpots = Object.values(filteredSchedule).reduce(
    (t, { number_of_spots }) => t + Number(number_of_spots),
    0
  );

  const busySpots = Object.values(filteredSchedule).reduce(
    (t, { users_list }) => t + Number(users_list.length),
    0
  );

  const availableSpots = numberOfSpots - busySpots;

  return {
    dayOfTheWeek,
    fixedSchedules: filteredSchedule,
    numberOfSpots,
    availableSpots
  };
};

// TODO: Refactor this function -> it is not optimized at all
export const separateFixedSchedulesByDayOfTheWeek = (
  fixedSchedules: FixedSchedule[]
) => {
  const fixedSchedulesByDay: FixedSchedulesByDay[] = [
    fixedScheduleOf(DayOfTheWeek.monday, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.tuesday, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.wednesday, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.thursday, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.friday, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.saturday, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.sunday, fixedSchedules)
  ];
  return fixedSchedulesByDay;
};
