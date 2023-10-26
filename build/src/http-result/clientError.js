"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unavailableForLegalReasons = exports.requestHeaderFieldsTooLarge = exports.tooManyRequests = exports.preconditionRequired = exports.failedDependency = exports.locked = exports.unProcessableEntity = exports.insufficientSpaceOnResource = exports.imATeapot = exports.expectationFailed = exports.requestedRangeNotSatisfiable = exports.unsupportedMediaType = exports.requestUriTooLong = exports.requestEntityTooLarge = exports.preconditionFailed = exports.lengthRequired = exports.gone = exports.conflict = exports.requestTimeout = exports.proxyAuthenticationRequired = exports.notAcceptable = exports.methodNotAllowed = exports.notFound = exports.forbidden = exports.paymentRequired = exports.unauthorized = exports.badRequest = void 0;
const http_status_codes_1 = require("http-status-codes");
/**
 * Returns an error object containing an error code and error string for HTTP client errors.
 * @param args - An object that contains request error text.
 * @param code - HTTP status code.
 * @returns An object containing error number and error string.
 */
function clientError(args, code) {
    const { error } = args;
    if (!error)
        throw new Error("HTTP: client error must be defined");
    return {
        code,
        error,
        payload: undefined,
    };
}
function badRequest(args) {
    return clientError(args, http_status_codes_1.StatusCodes.BAD_REQUEST);
}
exports.badRequest = badRequest;
function unauthorized(args) {
    return clientError(args, http_status_codes_1.StatusCodes.UNAUTHORIZED);
}
exports.unauthorized = unauthorized;
function paymentRequired(args) {
    return clientError(args, http_status_codes_1.StatusCodes.PAYMENT_REQUIRED);
}
exports.paymentRequired = paymentRequired;
function forbidden(args) {
    return clientError(args, http_status_codes_1.StatusCodes.FORBIDDEN);
}
exports.forbidden = forbidden;
function notFound(args) {
    return clientError(args, http_status_codes_1.StatusCodes.NOT_FOUND);
}
exports.notFound = notFound;
function methodNotAllowed(args) {
    return clientError(args, http_status_codes_1.StatusCodes.METHOD_NOT_ALLOWED);
}
exports.methodNotAllowed = methodNotAllowed;
function notAcceptable(args) {
    return clientError(args, http_status_codes_1.StatusCodes.NOT_ACCEPTABLE);
}
exports.notAcceptable = notAcceptable;
function proxyAuthenticationRequired(args) {
    return clientError(args, http_status_codes_1.StatusCodes.PROXY_AUTHENTICATION_REQUIRED);
}
exports.proxyAuthenticationRequired = proxyAuthenticationRequired;
function requestTimeout(args) {
    return clientError(args, http_status_codes_1.StatusCodes.REQUEST_TIMEOUT);
}
exports.requestTimeout = requestTimeout;
function conflict(args) {
    return clientError(args, http_status_codes_1.StatusCodes.CONFLICT);
}
exports.conflict = conflict;
function gone(args) {
    return clientError(args, http_status_codes_1.StatusCodes.GONE);
}
exports.gone = gone;
function lengthRequired(args) {
    return clientError(args, http_status_codes_1.StatusCodes.LENGTH_REQUIRED);
}
exports.lengthRequired = lengthRequired;
function preconditionFailed(args) {
    return clientError(args, http_status_codes_1.StatusCodes.PRECONDITION_FAILED);
}
exports.preconditionFailed = preconditionFailed;
function requestEntityTooLarge(args) {
    return clientError(args, http_status_codes_1.StatusCodes.REQUEST_TOO_LONG);
}
exports.requestEntityTooLarge = requestEntityTooLarge;
function requestUriTooLong(args) {
    return clientError(args, http_status_codes_1.StatusCodes.REQUEST_URI_TOO_LONG);
}
exports.requestUriTooLong = requestUriTooLong;
function unsupportedMediaType(args) {
    return clientError(args, http_status_codes_1.StatusCodes.UNSUPPORTED_MEDIA_TYPE);
}
exports.unsupportedMediaType = unsupportedMediaType;
function requestedRangeNotSatisfiable(args) {
    return clientError(args, http_status_codes_1.StatusCodes.REQUESTED_RANGE_NOT_SATISFIABLE);
}
exports.requestedRangeNotSatisfiable = requestedRangeNotSatisfiable;
function expectationFailed(args) {
    return clientError(args, http_status_codes_1.StatusCodes.EXPECTATION_FAILED);
}
exports.expectationFailed = expectationFailed;
function imATeapot(args) {
    return clientError(args, http_status_codes_1.StatusCodes.IM_A_TEAPOT);
}
exports.imATeapot = imATeapot;
function insufficientSpaceOnResource(args) {
    return clientError(args, http_status_codes_1.StatusCodes.INSUFFICIENT_SPACE_ON_RESOURCE);
}
exports.insufficientSpaceOnResource = insufficientSpaceOnResource;
function unProcessableEntity(args) {
    return clientError(args, http_status_codes_1.StatusCodes.UNPROCESSABLE_ENTITY);
}
exports.unProcessableEntity = unProcessableEntity;
function locked(args) {
    return clientError(args, http_status_codes_1.StatusCodes.LOCKED);
}
exports.locked = locked;
function failedDependency(args) {
    return clientError(args, http_status_codes_1.StatusCodes.FAILED_DEPENDENCY);
}
exports.failedDependency = failedDependency;
function preconditionRequired(args) {
    return clientError(args, http_status_codes_1.StatusCodes.PRECONDITION_REQUIRED);
}
exports.preconditionRequired = preconditionRequired;
function tooManyRequests(args) {
    return clientError(args, http_status_codes_1.StatusCodes.TOO_MANY_REQUESTS);
}
exports.tooManyRequests = tooManyRequests;
function requestHeaderFieldsTooLarge(args) {
    return clientError(args, http_status_codes_1.StatusCodes.REQUEST_HEADER_FIELDS_TOO_LARGE);
}
exports.requestHeaderFieldsTooLarge = requestHeaderFieldsTooLarge;
function unavailableForLegalReasons(args) {
    return clientError(args, http_status_codes_1.StatusCodes.UNAVAILABLE_FOR_LEGAL_REASONS);
}
exports.unavailableForLegalReasons = unavailableForLegalReasons;
