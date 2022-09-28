import { NextApiRequest, NextApiResponse } from 'next';
import { createMocks, RequestMethod } from 'node-mocks-http';

import helloAPI from '@/pages/api/hello';

describe('/api/hello API Endpoint', () => {
  function mockRequestResponse(method: RequestMethod = 'GET') {
    const { req, res } = createMocks<NextApiRequest, NextApiResponse>({
      method,
      headers: { 'content-type': 'application/json' },
      url: 'api/',
    });
    return { req, res };
  }

  it('should return a successful response', async () => {
    const { req, res } = mockRequestResponse();
    await helloAPI(req, res);

    expect(res.statusCode).toBe(200);
    expect(res.getHeaders()).toEqual({ 'content-type': 'application/json' });
    expect(res.statusMessage).toEqual('OK');
  });

  it('should return a correct name response', async () => {
    const { req, res } = mockRequestResponse();
    await helloAPI(req, res);

    expect(res._getJSONData()).toEqual({ name: 'Arif Waram' });
  });
});
