import type { ISecureRandomNumber } from "../types";
/**
 ** generates random number securely and in an async manner
 * @param args {min, max} minimum number and maximum number to generate random number in between
 * @returns a random number
 */
export declare function secureRandomNumber(args: ISecureRandomNumber): Promise<number>;
