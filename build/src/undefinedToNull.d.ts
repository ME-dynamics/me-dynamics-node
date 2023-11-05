/**
 * if passed a undefined value returns null otherwise returns value
 * it's useful to to unset scylla db table values
 * @param value
 * @returns undefined, value
 */
export declare function undefinedToNull<T>(value: T): (T & {}) | null;
