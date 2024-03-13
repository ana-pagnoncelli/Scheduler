import {
  availableSpots,
  displayUsersList,
  separateFixedSchedulesByDayOfTheWeek
} from "./functions";
import { DayOfTheWeek, FixedSchedulesByDay } from "./types";

describe("functions file", () => {
  test("separateFixedSchedulesByDayOfTheWeek", () => {
    const fixedSchedules = [
      {
        id: "1",
        week_day: DayOfTheWeek.MONDAY,
        hour_of_the_day: "18:00",
        number_of_spots: "2",
        users_list: ["ana"]
      },
      {
        id: "2",
        week_day: DayOfTheWeek.MONDAY,
        hour_of_the_day: "17:00",
        number_of_spots: "2",
        users_list: []
      },
      {
        id: "3",
        week_day: DayOfTheWeek.MONDAY,
        hour_of_the_day: "16:00",
        number_of_spots: "3",
        users_list: ["ana", "carolina"]
      },
      {
        id: "4",
        week_day: DayOfTheWeek.TUESDAY,
        hour_of_the_day: "18:00",
        number_of_spots: "2",
        users_list: []
      },
      {
        id: "5",
        week_day: DayOfTheWeek.FRIDAY,
        hour_of_the_day: "18:00",
        number_of_spots: "2",
        users_list: ["ana", "carolina"]
      },
      {
        id: "6",
        week_day: DayOfTheWeek.FRIDAY,
        hour_of_the_day: "17:00",
        number_of_spots: "2",
        users_list: ["ana", "carolina"]
      }
    ];

    const fixedSchedulesByDayOfTheWeek: FixedSchedulesByDay[] = [
      {
        dayOfTheWeek: DayOfTheWeek.MONDAY,
        numberOfSpots: 7,
        availableSpots: 4,
        fixedSchedules: [
          {
            id: "1",
            week_day: DayOfTheWeek.MONDAY,
            hour_of_the_day: "18:00",
            number_of_spots: "2",
            users_list: ["ana"]
          },
          {
            id: "2",
            week_day: DayOfTheWeek.MONDAY,
            hour_of_the_day: "17:00",
            number_of_spots: "2",
            users_list: []
          },
          {
            id: "3",
            week_day: DayOfTheWeek.MONDAY,
            hour_of_the_day: "16:00",
            number_of_spots: "3",
            users_list: ["ana", "carolina"]
          }
        ]
      },
      {
        dayOfTheWeek: DayOfTheWeek.TUESDAY,
        numberOfSpots: 2,
        availableSpots: 2,
        fixedSchedules: [
          {
            id: "4",
            week_day: DayOfTheWeek.TUESDAY,
            hour_of_the_day: "18:00",
            number_of_spots: "2",
            users_list: []
          }
        ]
      },
      {
        dayOfTheWeek: DayOfTheWeek.WEDNESDAY,
        numberOfSpots: 0,
        availableSpots: 0,
        fixedSchedules: []
      },
      {
        dayOfTheWeek: DayOfTheWeek.THURSDAY,
        numberOfSpots: 0,
        availableSpots: 0,
        fixedSchedules: []
      },
      {
        dayOfTheWeek: DayOfTheWeek.FRIDAY,
        numberOfSpots: 4,
        availableSpots: 0,
        fixedSchedules: [
          {
            id: "5",
            week_day: DayOfTheWeek.FRIDAY,
            hour_of_the_day: "18:00",
            number_of_spots: "2",
            users_list: ["ana", "carolina"]
          },
          {
            id: "6",
            week_day: DayOfTheWeek.FRIDAY,
            hour_of_the_day: "17:00",
            number_of_spots: "2",
            users_list: ["ana", "carolina"]
          }
        ]
      },
      {
        dayOfTheWeek: DayOfTheWeek.SATURDAY,
        numberOfSpots: 0,
        availableSpots: 0,
        fixedSchedules: []
      },
      {
        dayOfTheWeek: DayOfTheWeek.SUNDAY,
        numberOfSpots: 0,
        availableSpots: 0,
        fixedSchedules: []
      }
    ];

    expect(fixedSchedulesByDayOfTheWeek).toStrictEqual(
      separateFixedSchedulesByDayOfTheWeek(fixedSchedules)
    );
  });

  test("displayUsersList", () => {
    expect(displayUsersList(["ana", "carolina"])).toBe("ana | carolina");
    expect(displayUsersList(["ana"])).toBe("ana");
    expect(displayUsersList([])).toBe("");
  });

  test("availableSpots", () => {
    const fixedSchedule = {
      id: "1",
      week_day: DayOfTheWeek.MONDAY,
      hour_of_the_day: "18:00",
      number_of_spots: "2",
      users_list: ["ana"]
    };

    expect(availableSpots(fixedSchedule)).toBe(1);
  });
});
