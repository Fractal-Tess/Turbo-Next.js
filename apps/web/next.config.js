import createJiti from 'jiti';
import { fileURLToPath } from 'node:url';

const jiti = createJiti(fileURLToPath(import.meta.url));

// Import env here to validate during build. Using jiti we can import .ts files
/*
 * If you want to skip the validation of the environment variables, you can set the SKIP_ENV_VALIDATION to true
 * This is useful for CI/CD environments where you don't want to set all the environment variables
 * */
jiti('./src/env.ts');

/** @type {import("next").NextConfig} */
const config = {
  transpilePackages: ['@repo/ui', '@repo/drizzle', '@repo/trpc'],
  output: 'standalone'
};

export default config;
