# Web

This document provides an overview of the key technologies used in the following Next.js template.

## Project Overview

- **Framework**: Next.js
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Authentication**: Lucia
- **State Management**: Jotai and Zustand
- **API Communication**: tRPC
- **Database ORM**: Drizzle

## Styling and UI

### [Tailwindcss](https://tailwindcss.com/)

[Tailwindcss](https://tailwindcss.com/) is used for utility-first styling.
The Tailwind configuration is imported from the monorepo package `@repo/ui`, which also houses the shadcn components.

### [shadcn/ui](https://ui.shadcn.com/)

Shadcn provides a set of accessible, customizable React components that work seamlessly with Tailwind CSS.

#### Importing `@repo/ui` should be done with just `@ui` it automatically gets resolved by tsconfig

How to use:

1. Import and use a shadcn/ui component:

   ```jsx
   import { Button } from '@ui/components/button';

   function MyComponent() {
     return <Button variant="outline">Click me</Button>;
   }
   ```

`@repo/ui` monorepo package is a react component library that is used to ensure consistency across the application.

#### Component Variants

shadcn/ui components often come with different variants that allow for easy customization of their appearance and behavior. These variants are typically passed as props to the components.

### Button Variants

The Button component, for example, supports several variants:

```tsx
const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        shimmer:
          'animate-shimmer inline-flex h-12 items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors !outline-none !ring-0',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'hover:bg-accent hover:text-accent-foreground',
        link: 'text-primary underline-offset-4 hover:underline'
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10'
      }
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  }
);
```

Using this approach, you can easily customize the appearance and behavior of the component by passing different variants to the component.

```tsx
<Button variant="outline">Click me</Button>
```

or

```tsx
<Button variant="shimmer">Click me</Button>
```

Not only that, but you are also encuraged to use this on other elements that are not buttons but are supposed to be styled in a similar way.

For example the `Link` component:

```tsx
import { buttonVariants } from '@ui/components/button';
import { cn } from '@ui/lib/utils';

<Link
  href="/"
  className={cn(
    buttonVariants({ variant: 'outline', size: 'sm' }),
    'Any additional tailwind classes you want to add'
  )}>
  Click me
</Link>;
```

Any additional tailwind classes you add will be merged with the classes from the button variant. In case of conflicts, the additional classes will take precedence.

## Authentication

Authentication in this template is handled by [Lucia](https://lucia-auth.com/).
The implamentation uses a custom adapter that is responsible for managing the user sessions in the database and on client devices via cookies.

The adapter is implemented in the `./src/server/auth/adapter.ts` file.
The adapter could and should be modified to fit the needs of the application.

For example, making slight changes to the adapter to provide features like session caching (in a in memory database like Redis) or using a different database all together or logging or whatever the application needs.

To use lucia to authenticate users in the application, we only need to cal lthe `validateRequest` function that is exported from `./src/server/auth/index.ts` (can be imported by `$/server/auth`).

The function is a server side only returns a promise that resolve to the current request's user and session if a session is found, otherwise these two objects are null.
Example:

```tsx
import { validateRequest } from '$/server/auth';

const { user, session } = await validateRequest();

if(!user) {
    return new Response('Unauthorized', { status: 401 });
}

// Guarded that user is authenticated and has a session
return <h1>Hello {user.username}</h1>
```

This function should only be used in [Server components](https://nextjs.org/docs/app/building-your-application/rendering/server-components) and [Route handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)

The function is also cached, using the react `cache` function. This means that no matter how many times the function is called, it will always return the same result and be invoked only once per request.

## State Management

### [Jotai](https://jotai.org)

Jotai is the preferred method for simple state management in our React components due to its simplicity and ease of use.

Example:

```tsx
// jotain.ts
import { atom } from 'jotai';

// states can be created using atom API
export const atomCount = atom(5);
```

```tsx
//  Example.client.tsx - a client components
import { useAtom } from 'jotai';

import { atomCount } from '$/client/jotai';

import { Button } from '@ui/components/button';

export function Example() {
  const [count, setCount] = useAtom(atomCount);

  return <Button onClick={() => setCount((count) => count + 1)}>The count is {count}</Button>;
}
```

### !!! Important Note (Foot GUN)!!!: Using Jotai with Next.js

> When using Jotai in a Next.js application, it's crucial to wrap your app with the Jotai provider. This is especially important because Next.js uses server-side rendering (SSR), and without the provider, Jotai's state could be shared across different users' requests on the server, potentially leading to security issues and unexpected behavior.
> https://jotai.org/docs/guides/nextjs#provider

This is already done in the template in the `/src/app/_components/Providers.tsx` file.

### [Zustand](https://zustand-demo.pmnd.rs)

Zustand is a powerful and lightweight state management solution that provides a simple yet effective approach to managing application state. It offers a minimalistic API while still being capable of handling complex state management scenarios.

#### TIP: Try to load initial state from the server whenever possible.

For example:

```tsx
// layout.tsx
export default async function RootLayout({ children }: PropsWithChildren) {

  const { user } = await validateRequest();  /// <---------------

  return (
    <html lang="en" className={`${gotham.className}`}>
      <body className="bg-background text-foreground dark h-[100vh]">
        <Providers user={user}> // <----------------
          <main className="contents">{children}</main>
          <Sonner />
        </Providers>
      </body>
    </html>
  );
}
```

```tsx
// __components/Providers.tsx
'use client';

export function Providers({ children, user }: Props) {
  const storeRef = useRef<StoreAPI>();
  if (!storeRef.current) {
    storeRef.current = createStore({
      user, // <---------------
      count: 0
    });
  }
  return (
    <TRPCReactProvider>
      <JotaiProvider>
        <StoreContext.Provider value={storeRef.current}>{children}</StoreContext.Provider>;
      </JotaiProvider>
    </TRPCReactProvider>
  );
}
```

Now even though any state is client side, the way it was initially loaded was by providing it from a server component streight into the client component. This is probably the most performant way to do it unless some edge cases arise.

## API Communication

### [tRPC](https://trpc.io/)

tRPC is used for end-to-end typesafe API communication between the client and server.

The tRPC logic is defined in the `@repo/trpc` package.

For example the `example.ts` route in the `routers` folder in the `@repo/trpc` package.

```ts
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc';

let counter = 0;
export const exampleRouter = createTRPCRouter({
  hello: publicProcedure.query(() => {
    return `Hello World - the counter is at ${counter}`;
  }),

  protected: protectedProcedure.mutation(({ ctx }) => {
    console.log(`The user ${ctx.user.username} incremented the counter`);
    counter++;
  })
});
```

Two example methods are provided:

- `hello` is a public procedure that can be called by anyone.
- `protected` is a protected procedure that can only be called by authenticated users.

Using these handlers in your application is simple:

#### Querying

#### In the case of server components:

```tsx
import { api } from '$/trpc/server';

const helloResult = await api.example.hello()

return <h1>{helloResult}</h1>
```

#### In the case of client components:

```tsx
import { api } from '$/trpc/react';

const helloResult = api.example.hello.useQuery();

if(helloResult.isLoading) {
    return <h1>Loading...</h1>
}

if(helloResult.isError) {
    return <h1>Error: {helloResult.error.message}</h1>
}

return <h1>{helloResult.data}</h1>
```

This could also be done in a more elegant way using [suspense](https://trpc.io/docs/client/react/suspense) and error boundaries, but this is just an example.

#### Mutations

```tsx
import { api } from '$/trpc/server';

const result = api.example.protected();
```

#### In the case of client components:

```tsx
import { api } from '$/trpc/react';


const mutation = api.example.protected.useMutation();

async function someHandler() {
  const result = await mutation.mutateAsync();
  ...
}
```

For more advanced uses, refer to the [tanstack docs](https://tanstack.com/query/latest)

Any information or functionality is available in the `ctx` object. Things like the current user, the database connection, or anything else that is available in the server component.

When mounting the tRPC server, the package expects some of the functionality to be provided by the application.

For example the context:

```ts
/*
 * Options for creating the TRPC context.
 */
type CreateTRPCContextOptions = {
  headers: Headers;
  db: DB;
  validateRequest: ValidateRequest;
};
```

You can extend or modify the context to fit the needs of the application.

In the current application, the context is created in the `./src/trpc/server.ts` file. Refer to the file for an example of how to create the context.

The context is also cached using the react `cache` function. This means that no matter how many times the tRPC handlers are invoked for a single request, the context will be created only once.

I'm only mentioning this because in case a new application needs to be created, these functions should be provided by the application that mounts the tRPC server.

## Database ORM: Drizzle

[Drizzle ORM](https://orm.drizzle.team/) is a TypeScript ORM that provides a type-safe and performant way to interact with your database. In this project, Drizzle is set up to work with our specific database configuration.

### Key Features

- **Type Safety**: Drizzle generates TypeScript types based on our schema, ensuring type-safe database operations.
- **SQL-like Syntax**: Write queries using a syntax that closely resembles SQL, making it intuitive for SQL users.
- **Performance**: Drizzle is designed to be lightweight and fast, with minimal overhead.
- **Migrations**: Built-in support for database migrations to manage schema changes over time.

### Project Setup

In our project, Drizzle is configured in the `@repo/drizzle` package. This setup includes:

1. **Schema Definition**: Our database schema is defined in `packages/drizzle/src/schema`.
2. **Database Connection**: The database connection is established in `packages/drizzle/src/index.ts`.
3. **Migrations**: Migrating the database is either done by hand by running a script in the `packages/drizzle/drizzle` folder or by using the `pnpm run generate` and `pnpm run migrate` commands, or in production by using the functionality provided by `drizzle-kit` to create a migrator script.

> In the current setup, migrations in production (docker) are automatically done by compiling the migrator (located in packages/drizzzle/src/migrator.ts) and running it as the first thing when the container starts.
> <br>
> <strong>
> !!! This does not work for vercel hosting !!!
> </strong>

### Basic Usage

To use Drizzle in your application:

#### Querying

##### Method 1

```ts
const users = await db.query.users.findMany({
  where: eq(schema.user.id, 1)
});
```

##### Method 2

```ts
const users = await db.select().from(users).where(eq(users.id, 1));
```

#### Inserting

```ts
const user = await db.insert(users).values({
  id: '',
  email: '',
  name: '',
  username: ''
});
```

For more advanced usage and detailed documentation, refer to the [Drizzle ORM documentation](https://orm.drizzle.team/docs/overview).
