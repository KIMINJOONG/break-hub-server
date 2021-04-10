export interface IBasicResponse<T> {
  statusCode: number;
  message: string;
  data: T;
}
export function BasicResponseFormat<T>(
  statusCode: number,
  message: string,
  data: T,
): IBasicResponse<T> {
  return {
    statusCode,
    message,
    data,
  };
}
