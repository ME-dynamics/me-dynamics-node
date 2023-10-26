


/**
 * if passed a undefined value returns null otherwise returns value
 * it's useful to to unset scylla db table values 
 * @param value 
 * @returns undefined, value
 */
 export function undefinedToNull<T>(value: T) {
    if(value === undefined) {
        return null 
    } 
    return value;
}