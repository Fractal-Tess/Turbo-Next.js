import { OAuth2RequestError } from 'arctic';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

import { type DiscordUser, discord } from '$/server/auth/arctic';
import { lucia } from '$/server/auth/lucia';
import { db } from '$/server/db';
import { generateId } from '$/utils';

import { eq } from '@repo/drizzle';
import { users } from '@repo/drizzle';

export async function GET(req: Request): Promise<Response> {
  const url = new URL(req.url);
  const code = url.searchParams.get('code');
  const state = url.searchParams.get('state');

  const storedState = cookies().get('state')?.value ?? null;
  const storedCodeVerifier = cookies().get('code_verifier')?.value ?? null;

  if (!code || !state || !storedCodeVerifier || !storedState || state !== storedState) {
    return new Response(null, {
      status: 400
    });
  }

  try {
    const tokens = await discord.validateAuthorizationCode(code);
    const response = await fetch('https://discord.com/api/users/@me', {
      headers: {
        Authorization: `Bearer ${tokens.accessToken}`
      }
    });

    const userInfo = (await response.json()) as DiscordUser;

    const user = await db.query.users.findFirst({
      where: (users, { eq }) => eq(users.discordSub, userInfo.id)
    });

    if (user) {
      const session = await lucia.createSession(user.id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);

      await db
        .update(users)
        .set({ username: userInfo.username, email: userInfo.email })
        .where(eq(users.discordSub, userInfo.id));

      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      return NextResponse.redirect(new URL('/', req.url));
    } else {
      const id = generateId();
      await db.insert(users).values({
        id,
        discordSub: userInfo.id,
        username: userInfo.username,
        email: userInfo.email
      });

      const session = await lucia.createSession(id, {});
      const sessionCookie = lucia.createSessionCookie(session.id);
      cookies().set(sessionCookie.name, sessionCookie.value, sessionCookie.attributes);
      return NextResponse.redirect(new URL('/', req.url));
    }
  } catch (e) {
    if (e instanceof OAuth2RequestError && e.message === 'bad_verification_code') {
      return new Response(null, {
        status: 400
      });
    }
    return new Response(null, {
      status: 500
    });
  }
}
