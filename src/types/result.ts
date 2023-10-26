export interface IResult<T> {
  success: boolean;
  payload: T | undefined;
  error: string | undefined;
}
