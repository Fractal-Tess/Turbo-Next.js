import type { Adapter, DatabaseSession, UserId } from 'lucia';

import { db } from '$/server/db';

import { eq, lt } from '@repo/drizzle';
import { sessions } from '@repo/drizzle';

/**
 * The lucia adapter for the session database.
 *
 * The adapter can be modified to use different kind of database if drizzle is not preferred.
 * The adapter can be modified to feature something like a redis cache for sessions for even faster performance.
 */
export const adapter = {
  /**
   * Deletes all expired sessions from the database.
   *
   * This method removes sessions that have passed their expiration time, ensuring that only
   * valid sessions are retained in the database.
   *
   * @returns A promise that resolves when the expired sessions have been deleted.
   */
  async deleteExpiredSessions() {
    await db.delete(sessions).where(lt(sessions.expiresAt, new Date()));
  },

  /**
   * Deletes a specific session by its ID.
   *
   * @param sessionId - The ID of the session to delete.
   * @returns A promise that resolves when the session has been deleted.
   */
  async deleteSession(sessionId: string) {
    await db.delete(sessions).where(eq(sessions.id, sessionId));
  },

  /**
   * Deletes all sessions associated with a specific user.
   *
   * @param userId - The ID of the user whose sessions should be deleted.
   * @returns A promise that resolves when the user's sessions have been deleted.
   */
  async deleteUserSessions(userId: UserId) {
    await db.delete(sessions).where(eq(sessions.userId, userId));
  },

  /**
   * Retrieves a session and its associated user by session ID.
   *
   * @param sessionId - The ID of the session to retrieve.
   * @returns A promise that resolves to a tuple where the first element is the session object
   *          (or `null` if not found) and the second element is the user object (or `null` if not found).
   */
  async getSessionAndUser(sessionId: string) {
    const res = await db.query.sessions.findFirst({
      where: (sessions, { eq }) => eq(sessions.id, sessionId),
      with: {
        user: true
      }
    });

    if (!res) {
      return [null, null];
    }

    const { user, ...session } = res;

    return [
      // Session object
      {
        ...session,
        attributes: {}
      },
      // User object
      {
        id: user.id,
        attributes: res.user
      }
    ];
  },

  /**
   * Retrieves all sessions associated with a specific user.
   *
   * @param userId - The ID of the user whose sessions should be retrieved.
   * @returns A promise that resolves to an array of session objects.
   */
  async getUserSessions(userId: UserId) {
    const res = await db.query.sessions.findMany({
      where: (sessions, { eq }) => eq(sessions.userId, userId)
    });

    if (res) {
      return res.map((session) => ({ ...session, attributes: {} }));
    }
    return [];
  },

  /**
   * Sets (creates) a new session in the database.
   *
   * @param userSession - The session object to be inserted into the database.
   * @returns A promise that resolves when the session has been created.
   */
  async setSession(userSession: DatabaseSession) {
    await db.insert(sessions).values({
      id: userSession.id,
      userId: userSession.userId,
      expiresAt: userSession.expiresAt
    });
  },

  /**
   * Updates the expiration time of an existing session.
   *
   * @param sessionId - The ID of the session to update.
   * @param expiresAt - The new expiration time for the session.
   * @returns A promise that resolves when the session expiration time has been updated.
   */
  async updateSessionExpiration(sessionId: string, expiresAt: Date) {
    await db
      .update(sessions)
      .set({
        expiresAt: expiresAt
      })
      .where(eq(sessions.id, sessionId));
  }
} satisfies Adapter;
