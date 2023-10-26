/**
 * if passed a null value returns undefined otherwise returns value
 * it's useful to turn scylla db null columns to undefined
 * @param value
 * @returns undefined, value
 */
export declare function nullToUndefined<T>(value: T): (T & {}) | undefined;
