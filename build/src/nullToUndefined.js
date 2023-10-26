"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nullToUndefined = void 0;
/**
 * if passed a null value returns undefined otherwise returns value
 * it's useful to turn scylla db null columns to undefined
 * @param value
 * @returns undefined, value
 */
function nullToUndefined(value) {
    if (value === null) {
        return undefined;
    }
    return value;
}
exports.nullToUndefined = nullToUndefined;
