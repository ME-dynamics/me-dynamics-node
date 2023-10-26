"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.permanentRedirect = exports.temporaryRedirect = exports.notModified = exports.seeOther = exports.movedTemporarily = exports.movedPermanently = exports.multipleChoices = void 0;
const http_status_codes_1 = require("http-status-codes");
/**
 ** general function for redirection
 * @param args an object containing a url string
 * @param code http status number
 * @returns an object containing code number, and payload object ( with url key )
 */
function redirection(args, code) {
    const { url } = args;
    if (!url)
        throw new Error("HTTP: client url must be defined");
    return {
        code,
        payload: {
            url,
        },
        error: undefined,
    };
}
/**
 ** multiple choices
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
function multipleChoices(args) {
    return redirection(args, http_status_codes_1.StatusCodes.MULTIPLE_CHOICES);
}
exports.multipleChoices = multipleChoices;
/**
 ** moved permanently
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
function movedPermanently(args) {
    return redirection(args, http_status_codes_1.StatusCodes.MOVED_PERMANENTLY);
}
exports.movedPermanently = movedPermanently;
/**
 ** moved temporarily
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
function movedTemporarily(args) {
    return redirection(args, http_status_codes_1.StatusCodes.MOVED_TEMPORARILY);
}
exports.movedTemporarily = movedTemporarily;
/**
 ** see other
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
function seeOther(args) {
    return redirection(args, http_status_codes_1.StatusCodes.SEE_OTHER);
}
exports.seeOther = seeOther;
/**
 ** not modified
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
function notModified(args) {
    return redirection(args, http_status_codes_1.StatusCodes.NOT_MODIFIED);
}
exports.notModified = notModified;
// export function use_proxy(args: IUrl): IPayloadResult<IUrl> {
//     return redirection(args, StatusCodes.USE_PROXY)
// }
/**
 ** temporary redirect
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
function temporaryRedirect(args) {
    return redirection(args, http_status_codes_1.StatusCodes.TEMPORARY_REDIRECT);
}
exports.temporaryRedirect = temporaryRedirect;
/**
 ** permanent redirect
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
function permanentRedirect(args) {
    return redirection(args, http_status_codes_1.StatusCodes.PERMANENT_REDIRECT);
}
exports.permanentRedirect = permanentRedirect;
