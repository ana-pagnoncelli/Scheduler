/* eslint-disable camelcase */
import React from "react";
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
    fixedScheduleOf(DayOfTheWeek.MONDAY, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.TUESDAY, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.WEDNESDAY, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.THURSDAY, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.FRIDAY, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.SATURDAY, fixedSchedules),
    fixedScheduleOf(DayOfTheWeek.SUNDAY, fixedSchedules)
  ];
  return fixedSchedulesByDay;
};

export const displayUsersList = (usersList: string[]) => {
  return usersList.join(" | ");
};

export const availableSpots = (fixedSchedule: FixedSchedule) => {
  return (
    Number(fixedSchedule.number_of_spots) - fixedSchedule.users_list.length
  );
};

export const fixedScheduleToHtml = (fixedSchedule: FixedSchedule) => {
  const users = displayUsersList(fixedSchedule.users_list);
  return (
    <>
      Day of the week: {fixedSchedule.week_day}
      <br />
      Hour: {fixedSchedule.hour_of_the_day}
      <br />
      Users: {users}
    </>
  );
};
