export interface IError {
  name: string;
  message: string;
  detail: string | undefined;
  nativeError: any;
}
