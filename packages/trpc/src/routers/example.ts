import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

let counter = 0;
export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return `Hello World - the counter is at ${counter}`;
  }),

  protected: protectedProcedure.mutation(({ ctx }) => {
    console.log(`The user ${ctx.user.username} incremented the counter`);
    counter++;
  })
});
