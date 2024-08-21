import type { SelectUser } from '@repo/drizzle/schema';

export type ValidateRequest = () => Promise<
  | {
      user: SelectUser;
      session: {
        id: string;
        expiresAt: Date;
        fresh: boolean;
        userId: string;
      };
    }
  | { user: null; session: null }
>;