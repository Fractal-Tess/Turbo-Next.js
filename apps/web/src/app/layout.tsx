import type { Metadata } from 'next';
import localFont from 'next/font/local';
import type { PropsWithChildren } from 'react';

import { validateRequest } from '$/server/auth';

import { Sonner } from '@ui/components/sonner';

import '@repo/ui/globals.css';

import { Providers } from './_components/Providers';

const gotham = localFont({
  src: [
    {
      path: '../../../../packages/ui/fonts/Gotham/Gotham-Book.otf',
      weight: '400',
      style: 'light'
    },
    {
      path: '../../../../packages/ui/fonts/Gotham/Gotham-Medium.otf',
      weight: '500',
      style: 'medium'
    },
    {
      path: '../../../../packages/ui/fonts/Gotham/Gotham-Bold.otf',
      weight: '700',
      style: 'bold'
    },
    {
      path: '../../../../packages/ui/fonts/Gotham/Gotham-Bold.otf',
      weight: '900',
      style: 'black'
    }
  ]
});

export const metadata = {
  title: 'Analytics',
  description: 'Analytics platform control',
  icons: [{ rel: 'icon', url: '/favicon.ico' }]
} satisfies Metadata;

export default async function RootLayout({ children }: PropsWithChildren) {
  const { user } = await validateRequest();
  return (
    <html lang="en" className={`${gotham.className}`}>
      <body className="bg-background text-foreground dark h-[100vh]">
        <Providers user={user}>
          <main className="contents">{children}</main>
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
