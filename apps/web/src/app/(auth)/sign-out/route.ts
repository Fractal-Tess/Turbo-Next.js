import { ENV } from '$/env';
import { invalidateSession, validateRequest } from '$/server/auth';
import { revalidatePath } from 'next/cache';

export async function GET(): Promise<Response> {
  const { session } = await validateRequest();
  if (session) {
    await invalidateSession(session);
  }

  revalidatePath('/', 'layout');
  return Response.redirect(ENV.FQDN);
}
