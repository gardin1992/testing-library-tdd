// eslint-disable-next-line no-shadow
export enum HttpStatusCode {
  ok = 200,
  noContent = 204,
  badRequest = 400,
  unauthorized = 401,
  forbidden = 403,
  notFound = 404,
  serverError = 500,
}

export type HttpMethod = "post" | "get" | "put" | "delete";

export type HttpRequest = {
  url: string;
  method: HttpMethod;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  body?: any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  headers?: any;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type HttpResponse<T = any> = {
  statusCode: HttpStatusCode;
  body?: T;
};
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface HttpClient<R = any> {
  request: (data: HttpRequest) => Promise<HttpResponse<R>>;
}
