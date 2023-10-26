/**
 * if passed a null value returns undefined otherwise returns value
 * it's useful to turn scylla db null columns to undefined
 * @param value
 * @returns undefined, value
 */
export function nullToUndefined<T>(value: T) {
  if (value === null) {
    return undefined;
  }
  return value;
}
