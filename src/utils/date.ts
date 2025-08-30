export function getWeekDay(date: Date) {
  const weekday = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
  ];
  return weekday[date.getDay()];
}

export function getCurrentDate(date: Date, separator = "") {
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${day < 10 ? `0${day}` : `${day}`}`;
}

export function dateWithWeekDayForNext7Days() {
  const dates = [];
  const currentDate = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(currentDate);
    date.setDate(currentDate.getDate() + i);

    dates.push({
      week_day: getWeekDay(date),
      date: getCurrentDate(date)
    });
  }
  return dates;
}
