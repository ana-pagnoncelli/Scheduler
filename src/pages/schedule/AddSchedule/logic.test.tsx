import dayjs from "dayjs";
import { formatToTwoDigitString, getHourAsString } from "./logic";

describe("testing functions", () => {
  describe("formatToTwoDigitString", () => {
    test("if number has two digits", () => {
      expect(formatToTwoDigitString(10)).toBe("10");
    });
    test("if number has less than two digits", () => {
      expect(formatToTwoDigitString(1)).toBe("01");
    });
  });

  describe("getHourAsString", () => {
    test("hour of 24h format", () => {
      const newDayjs = dayjs().hour(16).minute(30);
      expect(getHourAsString(newDayjs)).toBe("16:30");
    });
    test("hour with one digit", () => {
      const newDayjs = dayjs().hour(1).minute(5);
      expect(getHourAsString(newDayjs)).toBe("01:05");
    });
    test("hour null", () => {
      expect(getHourAsString(null)).toBe("00:00");
    });
  });
});
