import { ErrorFactory } from "../errorFactory";

export function hoursFromNow(hours: number): number {
  if (hours < 1 || !Number.isInteger(hours))
    throw new ErrorFactory({
      name: "time_not_valid",
      message: "day must be integer and cannot be zero or less",
      detail: `${
        hours < 1 ? "! hours is less than zero:" + `${hours}` : ""
      } \n ${
        !Number.isInteger(hours) ? "! hours must be integer:" + `${hours}` : ""
      } `,
      nativeError: undefined,
    });
  return Date.now() + hours * 3600000; // every hour is 60 * 60 * 1000 milliseconds
}
