import { TRPCError, initTRPC } from '@trpc/server';
import superjson from 'superjson';
import { ZodError } from 'zod';

import type { DB } from '@repo/drizzle';

import type { ValidateRequest } from './types';

/*
 * Options for creating the TRPC context.
 */
type CreateTRPCContextOptions = {
  headers: Headers;
  db: DB;
  validateRequest: ValidateRequest;
};

/*
 * Creates the TRPC context for an incoming request.
 */
export async function createTRPCContext(opts: CreateTRPCContextOptions) {
  return opts;
}

/*
 * This is where the tRPC API is initialized, connecting the context and transformer.
 * We also parse ZodErrors so that we get typesafety on the frontend if out procedure fails due to validation errors on the backend.
 */
const t = initTRPC.context<typeof createTRPCContext>().create({
  transformer: superjson,
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError: error.cause instanceof ZodError ? error.cause.flatten() : null
      }
    };
  }
});

// Server-side caller
export const createCallerFactory = t.createCallerFactory;

// Router
export const createTRPCRouter = t.router;

// Procedures
export const publicProcedure = t.procedure;

export const protectedProcedure = t.procedure.use(async ({ ctx, next }) => {
  const { user, session } = await ctx.validateRequest();

  if (!session || !user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      session: session,
      user: user
    }
  });
});
