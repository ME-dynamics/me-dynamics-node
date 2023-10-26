import { ErrorFactory } from "../errorFactory";

export function daysFromNow(days: number): number {
  if (days < 1 || !Number.isInteger(days))
    throw new ErrorFactory({
      name: "time_not_valid",
      message: "day must be integer and cannot be zero or less",
      detail: `${days < 1 ? "! day is less than zero:" + `${days}` : ""} \n ${
        !Number.isInteger(days) ? "! days must be integer:" + `${days}` : ""
      } `,
      nativeError: undefined,
    });
  return Date.now() + days * 86400000; // every day is 1000 * 60 * 60 * 24 milliseconds
}
