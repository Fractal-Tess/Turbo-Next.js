import { revalidatePath } from 'next/cache';

import { ENV } from '$/env';
import { invalidateSession, validateRequest } from '$/server/auth';

export async function GET(): Promise<Response> {
  const { session } = await validateRequest();
  if (session) {
    await invalidateSession(session);
  }

  revalidatePath('/', 'layout');
  return Response.redirect(ENV.FQDN);
}
