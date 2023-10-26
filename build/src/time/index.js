"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time = void 0;
const secondsFromNow_1 = require("./secondsFromNow");
const minutesFromNow_1 = require("./minutesFromNow");
const hoursFromNow_1 = require("./hoursFromNow");
const daysFromNow_1 = require("./daysFromNow");
exports.time = {
    secondsFromNow: secondsFromNow_1.secondsFromNow,
    minutesFromNow: minutesFromNow_1.minutesFromNow,
    hoursFromNow: hoursFromNow_1.hoursFromNow,
    daysFromNow: daysFromNow_1.daysFromNow,
};
