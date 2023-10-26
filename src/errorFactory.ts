import type { IError } from "./types";

/**
 * Builds an Error Class
 */
export class ErrorFactory extends Error {
  readonly name: string;
  readonly message: string;
  readonly detail: string | undefined;
  readonly nativeError?: Error | undefined;
  readonly timestamp: number;

  constructor(args: IError) {
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
};