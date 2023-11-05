"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorFactory = void 0;
/**
 * Builds an Error Class
 */
class ErrorFactory extends Error {
    name;
    message;
    detail;
    nativeError;
    timestamp;
    constructor(args) {
        const { name, message, detail = "", nativeError } = args;
        super(message);
        this.name = name;
        this.message = message;
        this.detail = detail;
        this.nativeError = nativeError;
        this.timestamp = Date.now();
        if (Error.captureStackTrace) {
            Error.captureStackTrace(this, ErrorFactory);
        }
    }
}
exports.ErrorFactory = ErrorFactory;
;
