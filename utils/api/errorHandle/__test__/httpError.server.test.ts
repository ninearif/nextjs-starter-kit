import { getHttpErrorResponseJson, httpErrorDict } from '../httpError';

describe('httpError util test', () => {
  it('should return correct error response ', () => {
    expect(getHttpErrorResponseJson(400)).toEqual({
      code: 400,
      error: httpErrorDict[400],
    });
  });

  it('should return correct error response with message', () => {
    const message = 'test';
    expect(getHttpErrorResponseJson(400, message)).toEqual({
      code: 400,
      error: httpErrorDict[400],
      message,
    });
  });

  it('should return correct message on unknown code', () => {
    expect(getHttpErrorResponseJson(999)).toEqual({
      code: 999,
      error: 'Unknown Error',
    });
  });
});
