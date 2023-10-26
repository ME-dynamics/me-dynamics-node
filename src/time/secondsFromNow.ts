import { ErrorFactory } from "../errorFactory";

export function secondsFromNow(seconds: number): number {
  if (seconds < 1 || !Number.isInteger(seconds))
    throw new ErrorFactory({
      name: "time_not_valid",
      message: "day must be integer and cannot be zero or less",
      detail: `${
        seconds < 1 ? "! seconds is less than zero:" + `${seconds}` : ""
      } \n ${
        !Number.isInteger(seconds)
          ? "! seconds must be integer:" + `${seconds}`
          : ""
      } `,
      nativeError: undefined,
    });
  return Date.now() + seconds * 1000; // every second is 1000 milliseconds
}
