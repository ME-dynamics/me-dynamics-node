import type { IPayloadResult, IUrl } from "../types";
/**
 ** multiple choices
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
export declare function multipleChoices(args: IUrl): IPayloadResult<IUrl>;
/**
 ** moved permanently
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
export declare function movedPermanently(args: IUrl): IPayloadResult<IUrl>;
/**
 ** moved temporarily
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
export declare function movedTemporarily(args: IUrl): IPayloadResult<IUrl>;
/**
 ** see other
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
export declare function seeOther(args: IUrl): IPayloadResult<IUrl>;
/**
 ** not modified
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
export declare function notModified(args: IUrl): IPayloadResult<IUrl>;
/**
 ** temporary redirect
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
export declare function temporaryRedirect(args: IUrl): IPayloadResult<IUrl>;
/**
 ** permanent redirect
 * @param args an object containing a url string
 * @returns an object containing code number, and payload object ( with url key )
 */
export declare function permanentRedirect(args: IUrl): IPayloadResult<IUrl>;
