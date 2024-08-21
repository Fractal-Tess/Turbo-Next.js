import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import type { NextRequest } from 'next/server';

import { ENV } from '$/env';
import { validateRequest } from '$/server/auth';
import { db } from '$/server/db';

import { appRouter, createTRPCContext } from '@repo/trpc';

const createContext = async (req: NextRequest) => {
  return createTRPCContext({
    headers: req.headers,
    validateRequest,
    db
  });
};

const handler = (req: NextRequest) =>
  fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: () => createContext(req),
    onError:
      ENV.NODE_ENV === 'development'
        ? ({ path, error }) => {
            console.error(`❌ tRPC failed on ${path ?? '<no-path>'}: ${error.message}`);
          }
        : undefined
  });

export { handler as GET, handler as POST };
