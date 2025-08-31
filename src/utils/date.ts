import { DateWithWeekDay, DayOfTheWeek } from "../pages/schedule/types";

export function getWeekDay(date: Date): DayOfTheWeek {
  const weekday = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
  ] as DayOfTheWeek[];
  return weekday[date.getDay()];
}

export function getCurrentDate(date: Date, separator = ""): string {
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${day < 10 ? `0${day}` : `${day}`}`;
}

export function todayDate(): string {
  const date = new Date();
  return getCurrentDate(date, "-");
}

export function dateWithWeekDayForNext7Days(): DateWithWeekDay[] {
  const dates = [];
  const currentDate = new Date();
  for (let i = 0; i < 7; i += 1) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);

    dates.push({
      week_day: getWeekDay(date),
      date: getCurrentDate(date, "-")
    } as DateWithWeekDay);
  }
  return dates;
}
