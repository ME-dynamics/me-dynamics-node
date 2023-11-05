"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.result = void 0;
/**
 * general function to return results in one structure across code
 * for http results use http-result's functions
 * @param args an object containing success boolean, payload , error string
 */
function result(args) {
    return {
        success: args.success,
        payload: args.payload,
        error: args.error
    };
}
exports.result = result;
