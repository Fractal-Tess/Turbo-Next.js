import type { Session } from 'lucia';
import { cookies } from 'next/headers';
import { cache } from 'react';

import { lucia } from './lucia';

/**
 * Validates the user's session and returns the user and session details if valid.
 * This function is cached to optimize performance.
 **/
export const validateRequest = cache(async () => {
  const sessionId = cookies().get(lucia.sessionCookieName)?.value ?? null;
  if (!sessionId) {
    return {
      user: null,
      session: null
    };
  }

  const result = await lucia.validateSession(sessionId);
  // Nextjs likes to throw errors if we try to set a cookie during page rendering
  try {
    // Extend the session cookie
    if (result.session?.fresh) {
      const sessionCookie = lucia.createSessionCookie(result.session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
    // Session cookie is invalid - set it to blank
    if (!result.session) {
      const sessionCookie = lucia.createBlankSessionCookie();
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
    }
  } catch {
    // Do nothing
  }

  return result;
});

/**
 * Invalidates the current user's session and clears the session cookie.
 *
 * @param {Session} session - The session object to be invalidated.
 */
export async function invalidateSession(session: Session) {
  // Invalidate the session using its ID.
  await lucia.invalidateSession(session.id);

  // Clear the session cookie by setting a blank session cookie.
  const sessionCookie = lucia.createBlankSessionCookie();
  cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
}
