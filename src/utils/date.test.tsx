import { getWeekDay, getCurrentDate, dateWithWeekDayForNext7Days } from './date';

describe('Date Utility Functions', () => {
  describe('getWeekDay', () => {
    it('should return correct weekday for Sunday', () => {
      const sunday = new Date(2024, 0, 7); // Sunday (month is 0-indexed)
      expect(getWeekDay(sunday)).toBe('SUNDAY');
    });

    it('should return correct weekday for Monday', () => {
      const monday = new Date(2024, 0, 8); // Monday (month is 0-indexed)
      expect(getWeekDay(monday)).toBe('MONDAY');
    });

    it('should return correct weekday for Tuesday', () => {
      const tuesday = new Date(2024, 0, 9); // Tuesday (month is 0-indexed)
      expect(getWeekDay(tuesday)).toBe('TUESDAY');
    });

    it('should return correct weekday for Wednesday', () => {
      const wednesday = new Date(2024, 0, 10); // Wednesday (month is 0-indexed)
      expect(getWeekDay(wednesday)).toBe('WEDNESDAY');
    });

    it('should return correct weekday for Thursday', () => {
      const thursday = new Date(2024, 0, 11); // Thursday (month is 0-indexed)
      expect(getWeekDay(thursday)).toBe('THURSDAY');
    });

    it('should return correct weekday for Friday', () => {
      const friday = new Date(2024, 0, 12); // Friday (month is 0-indexed)
      expect(getWeekDay(friday)).toBe('FRIDAY');
    });

    it('should return correct weekday for Saturday', () => {
      const saturday = new Date(2024, 0, 13); // Saturday (month is 0-indexed)
      expect(getWeekDay(saturday)).toBe('SATURDAY');
    });

    it('should handle edge case of year boundary', () => {
      const newYearEve = new Date(2023, 11, 31); // Sunday (month is 0-indexed)
      expect(getWeekDay(newYearEve)).toBe('SUNDAY');
    });

    it('should handle leap year dates', () => {
      const leapYearDate = new Date(2024, 1, 29); // Thursday (month is 0-indexed)
      expect(getWeekDay(leapYearDate)).toBe('THURSDAY');
    });
  });

  describe('getCurrentDate', () => {
    it('should return date in YYYYMMDD format when no separator is provided', () => {
      const date = new Date(2024, 0, 15); // January 15, 2024 (month is 0-indexed)
      expect(getCurrentDate(date)).toBe('20240115');
    });

    it('should return date with custom separator', () => {
      const date = new Date(2024, 0, 15); // January 15, 2024 (month is 0-indexed)
      expect(getCurrentDate(date, '-')).toBe('2024-01-15');
    });

    it('should return date with slash separator', () => {
      const date = new Date(2024, 0, 15); // January 15, 2024 (month is 0-indexed)
      expect(getCurrentDate(date, '/')).toBe('2024/01/15');
    });

    it('should pad single digit month and day with zeros', () => {
      const date = new Date(2024, 0, 5); // January 5, 2024 (month is 0-indexed)
      expect(getCurrentDate(date)).toBe('20240105');
    });

    it('should handle double digit month and day', () => {
      const date = new Date(2024, 11, 25); // December 25, 2024 (month is 0-indexed)
      expect(getCurrentDate(date)).toBe('20241225');
    });

    it('should handle edge case of year boundary', () => {
      const date = new Date(2023, 11, 31); // December 31, 2023 (month is 0-indexed)
      expect(getCurrentDate(date)).toBe('20231231');
    });

    it('should handle leap year date', () => {
      const date = new Date(2024, 1, 29); // February 29, 2024 (month is 0-indexed)
      expect(getCurrentDate(date)).toBe('20240229');
    });

    it('should handle single digit month and day with separator', () => {
      const date = new Date(2024, 0, 5); // January 5, 2024 (month is 0-indexed)
      expect(getCurrentDate(date, '-')).toBe('2024-01-05');
    });

    it('should handle double digit month and day with separator', () => {
      const date = new Date(2024, 11, 25); // December 25, 2024 (month is 0-indexed)
      expect(getCurrentDate(date, '-')).toBe('2024-12-25');
    });
  });

  describe('dateWithWeekDayForNext7Days', () => {
    beforeEach(() => {
      // Mock the current date to ensure consistent test results
      jest.useFakeTimers();
      jest.setSystemTime(new Date(2024, 0, 15)); // Monday, January 15, 2024 (month is 0-indexed)
    });

    afterEach(() => {
      jest.useRealTimers();
    });

    it('should return array with 7 elements', () => {
      const result = dateWithWeekDayForNext7Days();
      expect(result).toHaveLength(7);
    });

    it('should return correct structure for each element', () => {
      const result = dateWithWeekDayForNext7Days();
      result.forEach(item => {
        expect(item).toHaveProperty('week_day');
        expect(item).toHaveProperty('date');
        expect(typeof item.week_day).toBe('string');
        expect(typeof item.date).toBe('string');
      });
    });

    it('should return correct weekdays starting from current day', () => {
      const result = dateWithWeekDayForNext7Days();
      expect(result[0].week_day).toBe('MONDAY'); // 2024-01-15
      expect(result[1].week_day).toBe('TUESDAY'); // 2024-01-16
      expect(result[2].week_day).toBe('WEDNESDAY'); // 2024-01-17
      expect(result[3].week_day).toBe('THURSDAY'); // 2024-01-18
      expect(result[4].week_day).toBe('FRIDAY'); // 2024-01-19
      expect(result[5].week_day).toBe('SATURDAY'); // 2024-01-20
      expect(result[6].week_day).toBe('SUNDAY'); // 2024-01-21
    });

    it('should return correct dates for next 7 days', () => {
      const result = dateWithWeekDayForNext7Days();
      expect(result[0].date).toBe('20240115'); // 2024-01-15
      expect(result[1].date).toBe('20240116'); // 2024-01-16
      expect(result[2].date).toBe('20240117'); // 2024-01-17
      expect(result[3].date).toBe('20240118'); // 2024-01-18
      expect(result[4].date).toBe('20240119'); // 2024-01-19
      expect(result[5].date).toBe('20240120'); // 2024-01-20
      expect(result[6].date).toBe('20240121'); // 2024-01-21
    });

    it('should handle month boundary correctly', () => {
      // Set date to end of month to test month boundary
      jest.setSystemTime(new Date(2024, 0, 31)); // Wednesday, January 31, 2024 (month is 0-indexed)
      const result = dateWithWeekDayForNext7Days();
      
      expect(result[0].week_day).toBe('WEDNESDAY'); // 2024-01-31
      expect(result[1].week_day).toBe('THURSDAY'); // 2024-02-01
      expect(result[2].week_day).toBe('FRIDAY'); // 2024-02-02
      expect(result[3].week_day).toBe('SATURDAY'); // 2024-02-03
      expect(result[4].week_day).toBe('SUNDAY'); // 2024-02-04
      expect(result[5].week_day).toBe('MONDAY'); // 2024-02-05
      expect(result[6].week_day).toBe('TUESDAY'); // 2024-02-06
    });

    it('should handle year boundary correctly', () => {
      // Set date to end of year to test year boundary
      jest.setSystemTime(new Date(2023, 11, 31)); // Sunday, December 31, 2023 (month is 0-indexed)
      const result = dateWithWeekDayForNext7Days();
      
      expect(result[0].week_day).toBe('SUNDAY'); // 2023-12-31
      expect(result[1].week_day).toBe('MONDAY'); // 2024-01-01
      expect(result[2].week_day).toBe('TUESDAY'); // 2024-01-02
      expect(result[3].week_day).toBe('WEDNESDAY'); // 2024-01-03
      expect(result[4].week_day).toBe('THURSDAY'); // 2024-01-04
      expect(result[5].week_day).toBe('FRIDAY'); // 2024-01-05
      expect(result[6].week_day).toBe('SATURDAY'); // 2024-01-06
    });

    it('should handle leap year correctly', () => {
      // Set date to February 28 in leap year
      jest.setSystemTime(new Date(2024, 1, 28)); // Wednesday, February 28, 2024 (month is 0-indexed)
      const result = dateWithWeekDayForNext7Days();
      
      expect(result[0].week_day).toBe('WEDNESDAY'); // 2024-02-28
      expect(result[1].week_day).toBe('THURSDAY'); // 2024-02-29 (leap day)
      expect(result[2].week_day).toBe('FRIDAY'); // 2024-03-01
      expect(result[3].week_day).toBe('SATURDAY'); // 2024-03-02
      expect(result[4].week_day).toBe('SUNDAY'); // 2024-03-03
      expect(result[5].week_day).toBe('MONDAY'); // 2024-03-04
      expect(result[6].week_day).toBe('TUESDAY'); // 2024-03-05
    });
  });
});
