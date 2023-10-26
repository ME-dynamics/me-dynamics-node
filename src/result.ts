import type { IResult } from "./types"



/**
 * general function to return results in one structure across code
 * for http results use http-result's functions
 * @param args an object containing success boolean, payload , error string
 */
export function result<T>(args: IResult<T>): IResult<T> {
    return {
        success: args.success,
        payload: args.payload,
        error: args.error
    }
}
