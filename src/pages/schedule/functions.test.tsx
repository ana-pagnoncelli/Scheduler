import { separateFixedSchedulesByDayOfTheWeek } from "./functions";
import { DayOfTheWeek, FixedSchedulesByDay } from "./types";

test("separateFixedSchedulesByDayOfTheWeek", () => {
  const fixedSchedules = [
    {
      week_day: DayOfTheWeek.monday,
      hour_of_the_day: "18:00",
      number_of_spots: "2",
      users_list: ["ana"]
    },
    {
      week_day: DayOfTheWeek.monday,
      hour_of_the_day: "17:00",
      number_of_spots: "2",
      users_list: []
    },
    {
      week_day: DayOfTheWeek.monday,
      hour_of_the_day: "16:00",
      number_of_spots: "3",
      users_list: ["ana", "carolina"]
    },
    {
      week_day: DayOfTheWeek.tuesday,
      hour_of_the_day: "18:00",
      number_of_spots: "2",
      users_list: []
    },
    {
      week_day: DayOfTheWeek.friday,
      hour_of_the_day: "18:00",
      number_of_spots: "2",
      users_list: ["ana", "carolina"]
    },
    {
      week_day: DayOfTheWeek.friday,
      hour_of_the_day: "17:00",
      number_of_spots: "2",
      users_list: ["ana", "carolina"]
    }
  ];

  const fixedSchedulesByDayOfTheWeek: FixedSchedulesByDay[] = [
    {
      dayOfTheWeek: DayOfTheWeek.monday,
      numberOfSpots: 7,
      availableSpots: 4,
      fixedSchedules: [
        {
          week_day: DayOfTheWeek.monday,
          hour_of_the_day: "18:00",
          number_of_spots: "2",
          users_list: ["ana"]
        },
        {
          week_day: DayOfTheWeek.monday,
          hour_of_the_day: "17:00",
          number_of_spots: "2",
          users_list: []
        },
        {
          week_day: DayOfTheWeek.monday,
          hour_of_the_day: "16:00",
          number_of_spots: "3",
          users_list: ["ana", "carolina"]
        }
      ]
    },
    {
      dayOfTheWeek: DayOfTheWeek.tuesday,
      numberOfSpots: 2,
      availableSpots: 2,
      fixedSchedules: [
        {
          week_day: DayOfTheWeek.tuesday,
          hour_of_the_day: "18:00",
          number_of_spots: "2",
          users_list: []
        }
      ]
    },
    {
      dayOfTheWeek: DayOfTheWeek.wednesday,
      numberOfSpots: 0,
      availableSpots: 0,
      fixedSchedules: []
    },
    {
      dayOfTheWeek: DayOfTheWeek.thursday,
      numberOfSpots: 0,
      availableSpots: 0,
      fixedSchedules: []
    },
    {
      dayOfTheWeek: DayOfTheWeek.friday,
      numberOfSpots: 4,
      availableSpots: 0,
      fixedSchedules: [
        {
          week_day: DayOfTheWeek.friday,
          hour_of_the_day: "18:00",
          number_of_spots: "2",
          users_list: ["ana", "carolina"]
        },
        {
          week_day: DayOfTheWeek.friday,
          hour_of_the_day: "17:00",
          number_of_spots: "2",
          users_list: ["ana", "carolina"]
        }
      ]
    },
    {
      dayOfTheWeek: DayOfTheWeek.saturday,
      numberOfSpots: 0,
      availableSpots: 0,
      fixedSchedules: []
    },
    {
      dayOfTheWeek: DayOfTheWeek.sunday,
      numberOfSpots: 0,
      availableSpots: 0,
      fixedSchedules: []
    }
  ];

  expect(fixedSchedulesByDayOfTheWeek).toStrictEqual(
    separateFixedSchedulesByDayOfTheWeek(fixedSchedules)
  );
});
