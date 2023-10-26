import { time } from "../src/time";

describe("time", () => {
  const dayInMillisecond = 8.64e7;
  const hourInMillisecond = 3.6e6;
  const minuteInMillisecond = 60000;
  const secondInMillisecond = 1000;
  const { daysFromNow, hoursFromNow, minutesFromNow, secondsFromNow } = time;
  it("should return seconds in millisecond from now", () => {
    expect.assertions(3);
    expect(Math.floor(secondsFromNow(2) / 1000)).toBe(
      Math.floor((2 * secondInMillisecond + Date.now()) / 1000)
    );
    expect(Math.floor(secondsFromNow(8) / 1000)).toBe(
      Math.floor((8 * secondInMillisecond + Date.now()) / 1000)
    );
    expect(Math.floor(secondsFromNow(8e12) / 1000)).toBe(
      Math.floor((8e12 * secondInMillisecond + Date.now()) / 1000)
    );
  });
  it("should return minutes in millisecond from now", () => {
    expect.assertions(3);
    expect(Math.floor(minutesFromNow(2) / 1000)).toBe(
      Math.floor((2 * minuteInMillisecond + Date.now()) / 1000)
    );
    expect(Math.floor(minutesFromNow(8) / 1000)).toBe(
      Math.floor((8 * minuteInMillisecond + Date.now()) / 1000)
    );
    expect(Math.floor(minutesFromNow(8e12) / 1000)).toBe(
      Math.floor((8e12 * minuteInMillisecond + Date.now()) / 1000)
    );
  });
  it("should return hours in millisecond from now", () => {
    expect.assertions(3);
    expect(Math.floor(hoursFromNow(2) / 1000)).toBe(
      Math.floor((2 * hourInMillisecond + Date.now()) / 1000)
    );
    expect(Math.floor(hoursFromNow(8) / 1000)).toBe(
      Math.floor((8 * hourInMillisecond + Date.now()) / 1000)
    );
    expect(Math.floor(hoursFromNow(8e12) / 1000)).toBe(
      Math.floor((8e12 * hourInMillisecond + Date.now()) / 1000)
    );
  });
  it("should return days in millisecond from now", () => {
    expect.assertions(3);
    expect(Math.floor(daysFromNow(2) / 1000)).toBe(
      Math.floor((2 * dayInMillisecond + Date.now()) / 1000)
    );
    expect(Math.floor(daysFromNow(8) / 1000)).toBe(
      Math.floor((8 * dayInMillisecond + Date.now()) / 1000)
    );
    expect(Math.floor(daysFromNow(8e12) / 1000)).toBe(
      Math.floor((8e12 * dayInMillisecond + Date.now()) / 1000)
    );
  });
  it("should throw error when time is less than zero", () => {
    expect.assertions(4);
    expect(() => {
      secondsFromNow(0);
    }).toThrow();
    expect(() => {
      minutesFromNow(-1);
    }).toThrow();
    expect(() => {
      hoursFromNow(-80);
    }).toThrow();
    expect(() => {
      daysFromNow(8.25);
    }).toThrow();
  });
});
