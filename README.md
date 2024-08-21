# Turborepo Next.js Starter

This is a powerful and feature-rich starter template for building modern web applications using NextJS and Turborepo. It combines several cutting-edge technologies to provide a robust foundation for your projects.

## Features

- **[NextJS](https://nextjs.org/)**: A React framework for building server-side rendered and statically generated web applications.
- **[Turborepo](https://turbo.build/repo/docs)**: A high-performance build system for JavaScript and TypeScript codebases.
- **[Lucia](https://lucia-auth.com/)**: A simple, flexible, and type-safe authentication library.
- **[Drizzle ORM](https://orm.drizzle.team/)**: A lightweight and type-safe SQL ORM for TypeScript.
- **[Tailwind CSS](https://tailwindcss.com/docs)**: A utility-first CSS framework for rapidly building custom user interfaces.
- **[shadcn/ui](https://ui.shadcn.com/)**: A collection of re-usable components built with Radix UI and Tailwind CSS.
- **[trpc](https://trpc.io/)**: A powerful and type-safe RPC library for TypeScript.

## Getting Started

1. Clone the repository:
   ```
   git clone https://github.com/your-username/your-repo-name.git
   ```

2. Install dependencies:
   ```
   cd your-repo-name
   pnpm install
   ```

3. Run the development server:
   ```
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

This Turborepo includes the following packages/apps:

- `apps/web`: The main NextJS application
- `packages/ui`: A stub React component library shared by applications
- `packages/eslint-config-custom`: ESLint configurations (includes `eslint-config-next` and `eslint-config-prettier`)
- `packages/tsconfig`: `tsconfig.json`s used throughout the monorepo

## Customization

You can start editing the page by modifying `apps/web/app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about the technologies used in this starter, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs)
- [Turborepo Documentation](https://turbo.build/repo/docs)
- [Lucia Documentation](https://lucia-auth.com/)
- [Drizzle ORM Documentation](https://orm.drizzle.team/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
