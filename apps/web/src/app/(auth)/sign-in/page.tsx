import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { buttonVariants } from '@ui/components/button';
import { IconArrowLeft, IconBrandDiscordFilled } from '@ui/icons/tabler';
import { cn } from '@ui/lib/utils';

export const metadata = {
  title: 'Sign-In',
  description:
    'Log in to access your dashboard, manage your account settings, and stay connected with the latest updates.'
} satisfies Metadata;

export default function AuthenticationPage() {
  return (
    <section className="grid h-full md:grid-cols-2">
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute top-4 md:left-[calc(50%+2rem)] md:top-8'
        )}>
        <IconArrowLeft className="h-8 w-8" />
      </Link>
      <div className="hidden h-full md:block dark:border-r">
        <Image
          width={3000}
          height={1500}
          src="/sign-in-splash.jpg"
          alt="sign-in screen splash art of abstract yellow like streaks"
          className="h-full object-cover"
        />
      </div>

      <div className="relative mx-auto flex w-80 flex-col items-center justify-center space-y-6 text-center">
        <h1 className="text-2xl font-semibold tracking-tight">Sign In</h1>
        <Link
          href="/sign-in/discord"
          className={cn(
            buttonVariants({
              variant: 'outline'
            }),
            'w-full text-lg py-6'
          )}>
          <IconBrandDiscordFilled className="mr-2 h-5 w-5" />
          Discord
        </Link>
        <p className="text-muted-foreground text-sm">
          By continuing, you agree to our{' '}
          <Link href="/terms" className="hover:text-foreground underline underline-offset-4">
            Terms of Service
          </Link>{' '}
          and{' '}
          <Link href="/privacy" className="hover:text-foreground underline underline-offset-4">
            Privacy Policy
          </Link>
        </p>
      </div>
    </section>
  );
}
