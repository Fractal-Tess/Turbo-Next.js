import { Lucia } from 'lucia';

import { ENV } from '$/env';

import type { SelectUser } from '@repo/drizzle';

import { adapter } from './adapter';

// Uncomment the following lines if you are using nodejs 18 or lower. Not required in Node.js 20, CloudFlare Workers, Deno, Bun, and Vercel Edge Functions.
// import { webcrypto } from "node:crypto";
// globalThis.crypto = webcrypto as Crypto;

type UserAttributes = SelectUser;
type SessionAttributes = object;

/**
 * Initializes the Lucia authentication library with a custom adapter and configuration.
 *
 * @constant {Lucia} lucia - The Lucia instance configured with custom session cookie settings and attribute mapping.
 */
export const lucia = new Lucia(adapter, {
  sessionCookie: {
    attributes: {
      secure: ENV.NODE_ENV === 'production'
    }
  },

  /**
   * Maps the database user attributes to the user attributes used by Lucia.
   * These attributes are available in the `user` object returned by the `validateSession` function.
   * If you need more/less attributes, you can modify this function, and the functions that provide the user attributes in the adapter.
   */
  getUserAttributes: (attributes) => attributes,

  /**
   * Maps the database session attributes to the session attributes used by Lucia.
   * These attributes are available in the `session` object returned by the `validateSession` function.
   * If you need more/less attributes, you can modify this function, and the functions that provide the session attributes in the adapter.
   */
  getSessionAttributes: (attributes) => attributes
});

/**
 * Extends the Lucia module with custom types for better type checking and intellisense.
 */
declare module 'lucia' {
  interface Register {
    /**
     * Registers the custom Lucia instance.
     */
    Lucia: typeof lucia;

    /**
     * Defines the structure of the database user attributes.
     */
    DatabaseUserAttributes: UserAttributes;

    /**
     * Defines the structure of the database session attributes.
     */
    DatabaseSessionAttributes: SessionAttributes;
  }
}
