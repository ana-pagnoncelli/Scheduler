import { DayOfTheWeek, FixedSchedule, FixedSchedulesByDay } from "./types";

// TODO: Refactor this function
export const separateFixedSchedulesByDayOfTheWeek = (
  fixedSchedules: FixedSchedule[]
) => {
  const fixedSchedulesMonday: FixedSchedulesByDay = {
    dayOfTheWeek: DayOfTheWeek.monday,
    fixedSchedules: fixedSchedules.filter(
      (fixedSchedule) => fixedSchedule.week_day === DayOfTheWeek.monday
    )
  };

  const fixedSchedulesTuesday: FixedSchedulesByDay = {
    dayOfTheWeek: DayOfTheWeek.tuesday,
    fixedSchedules: fixedSchedules.filter(
      (fixedSchedule) => fixedSchedule.week_day === DayOfTheWeek.tuesday
    )
  };

  const fixedSchedulesWednesday: FixedSchedulesByDay = {
    dayOfTheWeek: DayOfTheWeek.wednesday,
    fixedSchedules: fixedSchedules.filter(
      (fixedSchedule) => fixedSchedule.week_day === DayOfTheWeek.wednesday
    )
  };

  const fixedSchedulesThursday: FixedSchedulesByDay = {
    dayOfTheWeek: DayOfTheWeek.thursday,
    fixedSchedules: fixedSchedules.filter(
      (fixedSchedule) => fixedSchedule.week_day === DayOfTheWeek.thursday
    )
  };

  const fixedSchedulesFriday: FixedSchedulesByDay = {
    dayOfTheWeek: DayOfTheWeek.friday,
    fixedSchedules: fixedSchedules.filter(
      (fixedSchedule) => fixedSchedule.week_day === DayOfTheWeek.friday
    )
  };

  const fixedSchedulesSaturday: FixedSchedulesByDay = {
    dayOfTheWeek: DayOfTheWeek.saturday,
    fixedSchedules: fixedSchedules.filter(
      (fixedSchedule) => fixedSchedule.week_day === DayOfTheWeek.saturday
    )
  };

  const fixedSchedulesSunday: FixedSchedulesByDay = {
    dayOfTheWeek: DayOfTheWeek.sunday,
    fixedSchedules: fixedSchedules.filter(
      (fixedSchedule) => fixedSchedule.week_day === DayOfTheWeek.sunday
    )
  };

  const fixedSchedulesByDay: FixedSchedulesByDay[] = [
    fixedSchedulesMonday,
    fixedSchedulesTuesday,
    fixedSchedulesWednesday,
    fixedSchedulesThursday,
    fixedSchedulesFriday,
    fixedSchedulesSaturday,
    fixedSchedulesSunday
  ];
  return fixedSchedulesByDay;
};
