import type { Metadata } from 'next';
import Link from 'next/link';

import { validateRequest } from '$/server/auth';

import { Button, buttonVariants } from '@ui/components/button';
import { UnderlineStreaks } from '@ui/components/underline-streaks';
import { cn } from '@ui/lib/utils';

export const metadata: Metadata = {
  title: 'NextJS Starter Template',
  description:
    'A powerful NextJS starter template with Tailwind CSS, shadcn/ui, tRPC, Drizzle ORM, Lucia Auth, Turborepo, and more.'
};

export default async function Page() {
  const { user } = await validateRequest();
  const tech = [
    { name: 'Tailwind CSS', url: 'https://tailwindcss.com/' },
    { name: 'shadcn/ui', url: 'https://ui.shadcn.com/' },
    { name: 'tRPC', url: 'https://trpc.io/' },
    { name: 'Drizzle ORM', url: 'https://orm.drizzle.team/' },
    { name: 'Lucia Auth', url: 'https://lucia-auth.com/' },
    { name: 'Turborepo', url: 'https://turbo.build/repo' }
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <header className="py-6 px-4 bg-background">
        <div className="flex items-center justify-end mb-4"></div>

        <nav className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            NextJS Starter
          </Link>
          {user ? (
            <div className="flex items-center mr-4">
              <span className="mr-2">👋</span>
              <span className="font-medium">Hello, {user.username}</span>
            </div>
          ) : null}

          {user ? (
            <Link href="/sign-out" className={cn(buttonVariants({ variant: 'outline' }))}>
              Sign out
            </Link>
          ) : (
            <Link href="/sign-in" className={cn(buttonVariants({ variant: 'outline' }))}>
              Sign in
            </Link>
          )}
        </nav>
      </header>

      <main className="flex-grow container mx-auto px-4 py-12">
        <section className="text-center mb-16">
          <h1 className="text-5xl font-black mb-4 sm:text-7xl md:text-8xl">
            NextJS Starter Template
          </h1>
          <UnderlineStreaks />
          <p className="mt-6 text-xl text-muted-foreground max-w-2xl mx-auto">
            Jumpstart your project with our powerful NextJS starter. Featuring Tailwind CSS,
            shadcn/ui, tRPC, Drizzle ORM, Lucia Auth, Turborepo, and more!
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {tech.map((feature) => (
            <div key={feature.name} className="bg-card p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                <a
                  href={feature.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline">
                  {feature.name}
                </a>
              </h3>
              <p className="text-muted-foreground">
                Powerful tools to enhance your development experience.
              </p>
            </div>
          ))}
        </section>

        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <div className="flex justify-center gap-4">
            <Button variant="default" size="lg" asChild>
              <Link href="https://github.com/your-repo">View on GitHub</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/docs">Read the Docs</Link>
            </Button>
          </div>
        </section>
      </main>

      <footer className="bg-background py-6 px-4">
        <div className="container mx-auto text-center text-muted-foreground">
          &copy; 2023 NextJS Starter Template. Made by Fractal-Tess. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
