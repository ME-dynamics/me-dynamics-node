import type { IError } from "./types";
/**
 * Builds an Error Class
 */
export declare class ErrorFactory extends Error {
    readonly name: string;
    readonly message: string;
    readonly detail: string | undefined;
    readonly nativeError?: Error | undefined;
    readonly timestamp: number;
    constructor(args: IError);
}
