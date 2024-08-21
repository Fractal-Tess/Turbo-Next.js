import { generateCodeVerifier, generateState } from 'arctic';
import { cookies } from 'next/headers';

import { ENV } from '$/env';
import { discord } from '$/server/auth/arctic';

export const dynamic = 'force-dynamic';

export async function GET() {
  const state = generateState();
  const codeVerifier = generateCodeVerifier();
  const url = await discord.createAuthorizationURL(state, {
    scopes: ['identify', 'email']
  });

  cookies().set('state', state, {
    path: '/',
    secure: ENV.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'lax'
  });

  cookies().set('code_verifier', codeVerifier, {
    path: '/',
    secure: ENV.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60 * 10,
    sameSite: 'lax'
  });

  return Response.redirect(url);
}
