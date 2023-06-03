export type HttpError = { [code: number]: string };

export const httpErrorDict: HttpError = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not found',
  500: 'Internal server error',
};

export const getHttpErrorResponseJson = (code: number, message?: string) => {
  if (httpErrorDict[code]) {
    return { code, error: httpErrorDict[code], message };
  }
  return { code, error: 'Unknown Error', message };
};
