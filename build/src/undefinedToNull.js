"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.undefinedToNull = void 0;
/**
 * if passed a undefined value returns null otherwise returns value
 * it's useful to to unset scylla db table values
 * @param value
 * @returns undefined, value
 */
function undefinedToNull(value) {
    if (value === undefined) {
        return null;
    }
    return value;
}
exports.undefinedToNull = undefinedToNull;
