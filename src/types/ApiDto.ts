export type ApiDto<T> = {
  type: string;
  version: number;
  response: T;
};
