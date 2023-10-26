import type { IErrorResult, IReqError } from "../types";
/**
 ** internal server error
 * @param args
 * @returns an object containing code number and error string
 */
export declare function internalServerError(args: IReqError): IErrorResult;
/**
 ** not implemented
 * @param args
 * @returns an object containing code number and error string
 */
export declare function notImplemented(args: IReqError): IErrorResult;
/**
 ** bad gateway
 * @param args
 * @returns an object containing code number and error string
 */
export declare function badGateway(args: IReqError): IErrorResult;
/**
 ** service unavailable
 * @param args
 * @returns an object containing code number and error string
 */
export declare function serviceUnavailable(args: IReqError): IErrorResult;
/**
 ** gateway timeout
 * @param args
 * @returns an object containing code number and error string
 */
export declare function gatewayTimeout(args: IReqError): IErrorResult;
/**
 ** http version not supported
 * @param args
 * @returns an object containing code number and error string
 */
export declare function httpVersionNotSupported(args: IReqError): IErrorResult;
/**
 ** insufficient storage
 * @param args
 * @returns an object containing code number and error string
 */
export declare function insufficientStorage(args: IReqError): IErrorResult;
/**
 ** network authentication required
 * @param args
 * @returns an object containing code number and error string
 */
export declare function networkAuthenticationRequired(args: IReqError): IErrorResult;
