"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.daysFromNow = void 0;
const errorFactory_1 = require("../errorFactory");
function daysFromNow(days) {
    if (days < 1 || !Number.isInteger(days))
        throw new errorFactory_1.ErrorFactory({
            name: "time_not_valid",
            message: "day must be integer and cannot be zero or less",
            detail: `${days < 1 ? "! day is less than zero:" + `${days}` : ""} \n ${!Number.isInteger(days) ? "! days must be integer:" + `${days}` : ""} `,
            nativeError: undefined,
        });
    return Date.now() + days * 86400000; // every day is 1000 * 60 * 60 * 24 milliseconds
}
exports.daysFromNow = daysFromNow;
