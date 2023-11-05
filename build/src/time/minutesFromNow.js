"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minutesFromNow = void 0;
const errorFactory_1 = require("../errorFactory");
function minutesFromNow(minutes) {
    if (minutes < 1 || !Number.isInteger(minutes))
        throw new errorFactory_1.ErrorFactory({
            name: "time_not_valid",
            message: "day must be integer and cannot be zero or less",
            detail: `${minutes < 1 ? "! minutes is less than zero:" + `${minutes}` : ""} \n ${!Number.isInteger(minutes)
                ? "! minutes must be integer:" + `${minutes}`
                : ""} `,
            nativeError: undefined,
        });
    return Date.now() + minutes * 60000; // every minute is 60 * 1000 milliseconds
}
exports.minutesFromNow = minutesFromNow;
