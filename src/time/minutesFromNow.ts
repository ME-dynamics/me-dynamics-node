import { ErrorFactory } from "../errorFactory";

export function minutesFromNow(minutes: number): number {
  if (minutes < 1 || !Number.isInteger(minutes))
    throw new ErrorFactory({
      name: "time_not_valid",
      message: "day must be integer and cannot be zero or less",
      detail: `${
        minutes < 1 ? "! minutes is less than zero:" + `${minutes}` : ""
      } \n ${
        !Number.isInteger(minutes)
          ? "! minutes must be integer:" + `${minutes}`
          : ""
      } `,
      nativeError: undefined,
    });
  return Date.now() + minutes * 60000; // every minute is 60 * 1000 milliseconds
}
