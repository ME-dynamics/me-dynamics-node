"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiStatus = exports.partialContent = exports.resetContent = exports.nonAuthoritativeInformation = exports.accepted = exports.noContent = exports.created = exports.ok = void 0;
const http_status_codes_1 = require("http-status-codes");
/**
 ** general function for success http result
 * @param args an object containing payload object
 * @param code http status code number
 * @returns an object containing code number and payload
 */
function success(args, code) {
    const { payload } = args;
    if (!payload)
        throw new Error("HTTP: payload must be defined");
    return {
        code,
        payload,
        error: undefined,
    };
}
/**
 ** ok
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
function ok(args) {
    return success(args, http_status_codes_1.StatusCodes.OK);
}
exports.ok = ok;
/**
 ** created
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
function created(args) {
    return success(args, http_status_codes_1.StatusCodes.CREATED);
}
exports.created = created;
/**
 ** no content
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
function noContent(args) {
    return success(args, http_status_codes_1.StatusCodes.NO_CONTENT);
}
exports.noContent = noContent;
/**
 ** accepted
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
function accepted(args) {
    return success(args, http_status_codes_1.StatusCodes.ACCEPTED);
}
exports.accepted = accepted;
/**
 ** non authoritative information
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
function nonAuthoritativeInformation(args) {
    return success(args, http_status_codes_1.StatusCodes.NON_AUTHORITATIVE_INFORMATION);
}
exports.nonAuthoritativeInformation = nonAuthoritativeInformation;
/**
 ** reset content
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
function resetContent(args) {
    return success(args, http_status_codes_1.StatusCodes.RESET_CONTENT);
}
exports.resetContent = resetContent;
/**
 ** partial content
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
function partialContent(args) {
    return success(args, http_status_codes_1.StatusCodes.PARTIAL_CONTENT);
}
exports.partialContent = partialContent;
/**
 ** multi status
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
function multiStatus(args) {
    return success(args, http_status_codes_1.StatusCodes.MULTI_STATUS);
}
exports.multiStatus = multiStatus;
