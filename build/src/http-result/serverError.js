"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.networkAuthenticationRequired = exports.insufficientStorage = exports.httpVersionNotSupported = exports.gatewayTimeout = exports.serviceUnavailable = exports.badGateway = exports.notImplemented = exports.internalServerError = void 0;
const http_status_codes_1 = require("http-status-codes");
/**
 ** general function for server error
 * @param args
 * @param code
 * @returns an object containing code number and error string
 */
function serverError(args, code) {
    const { error } = args;
    if (!error)
        throw new Error("HTTP: server error must be defined");
    return {
        code,
        error,
        payload: undefined,
    };
}
/**
 ** internal server error
 * @param args
 * @returns an object containing code number and error string
 */
function internalServerError(args) {
    return serverError(args, http_status_codes_1.StatusCodes.INTERNAL_SERVER_ERROR);
}
exports.internalServerError = internalServerError;
/**
 ** not implemented
 * @param args
 * @returns an object containing code number and error string
 */
function notImplemented(args) {
    return serverError(args, http_status_codes_1.StatusCodes.NOT_IMPLEMENTED);
}
exports.notImplemented = notImplemented;
/**
 ** bad gateway
 * @param args
 * @returns an object containing code number and error string
 */
function badGateway(args) {
    return serverError(args, http_status_codes_1.StatusCodes.BAD_GATEWAY);
}
exports.badGateway = badGateway;
/**
 ** service unavailable
 * @param args
 * @returns an object containing code number and error string
 */
function serviceUnavailable(args) {
    return serverError(args, http_status_codes_1.StatusCodes.SERVICE_UNAVAILABLE);
}
exports.serviceUnavailable = serviceUnavailable;
/**
 ** gateway timeout
 * @param args
 * @returns an object containing code number and error string
 */
function gatewayTimeout(args) {
    return serverError(args, http_status_codes_1.StatusCodes.GATEWAY_TIMEOUT);
}
exports.gatewayTimeout = gatewayTimeout;
/**
 ** http version not supported
 * @param args
 * @returns an object containing code number and error string
 */
function httpVersionNotSupported(args) {
    return serverError(args, http_status_codes_1.StatusCodes.HTTP_VERSION_NOT_SUPPORTED);
}
exports.httpVersionNotSupported = httpVersionNotSupported;
/**
 ** insufficient storage
 * @param args
 * @returns an object containing code number and error string
 */
function insufficientStorage(args) {
    return serverError(args, http_status_codes_1.StatusCodes.INSUFFICIENT_STORAGE);
}
exports.insufficientStorage = insufficientStorage;
/**
 ** network authentication required
 * @param args
 * @returns an object containing code number and error string
 */
function networkAuthenticationRequired(args) {
    return serverError(args, http_status_codes_1.StatusCodes.NETWORK_AUTHENTICATION_REQUIRED);
}
exports.networkAuthenticationRequired = networkAuthenticationRequired;
