import { exampleRouter } from './routers/example';
import { createCallerFactory, createTRPCRouter } from './trpc';

// TRPC Router
export const appRouter = createTRPCRouter({
  example: exampleRouter
});

// Type definition for the router
// Could be used in the client-side to create a caller
// Also could be improted in other apps to create TRCP typeafe client
export type AppRouter = typeof appRouter;

// Server-side caller
export const createCaller = createCallerFactory(appRouter);
