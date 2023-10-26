"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.processing = exports.switchingProtocols = exports.continueRequest = void 0;
const http_status_codes_1 = require("http-status-codes");
/**
 * Returns an error object containing an error code and error string for HTTP information responses.
 * @param args - An object that contains request error text.
 * @param code - HTTP status code.
 * @returns An object containing error number and error string.
 */
function information(args, code) {
    const { payload } = args;
    if (!payload)
        throw new Error("HTTP: information payload must be defined");
    return {
        code,
        error: undefined,
        payload,
    };
}
function continueRequest(args) {
    return information(args, http_status_codes_1.StatusCodes.CONTINUE);
}
exports.continueRequest = continueRequest;
function switchingProtocols(args) {
    return information(args, http_status_codes_1.StatusCodes.SWITCHING_PROTOCOLS);
}
exports.switchingProtocols = switchingProtocols;
function processing(args) {
    return information(args, http_status_codes_1.StatusCodes.PROCESSING);
}
exports.processing = processing;
