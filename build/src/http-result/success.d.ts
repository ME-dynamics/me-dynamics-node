import type { IPayloadResult, IPayload } from "../types";
/**
 ** ok
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export declare function ok<T>(args: IPayload<T>): IPayloadResult<T>;
/**
 ** created
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export declare function created<T>(args: IPayload<T>): IPayloadResult<T>;
/**
 ** no content
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export declare function noContent<T>(args: IPayload<T>): IPayloadResult<T>;
/**
 ** accepted
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export declare function accepted<T>(args: IPayload<T>): IPayloadResult<T>;
/**
 ** non authoritative information
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export declare function nonAuthoritativeInformation<T>(args: IPayload<T>): IPayloadResult<T>;
/**
 ** reset content
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export declare function resetContent<T>(args: IPayload<T>): IPayloadResult<T>;
/**
 ** partial content
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export declare function partialContent<T>(args: IPayload<T>): IPayloadResult<T>;
/**
 ** multi status
 * @param args an object containing payload object
 * @returns an object containing code number and payload
 */
export declare function multiStatus<T>(args: IPayload<T>): IPayloadResult<T>;
