import { rest } from 'msw';
import data from 'mocks/data.json';

export const handlers = [
  rest.get('/api/', (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(data));
  }),
];
