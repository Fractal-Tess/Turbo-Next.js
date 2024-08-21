import { createEnv } from '@t3-oss/env-nextjs';
import { z } from 'zod';

// https://env.t3.gg/docs/introduction
export const ENV = createEnv({
  server: {
    MYSQL_DB_HOST: z.string(),
    MYSQL_DB_PORT: z.string().transform(Number),
    MYSQL_DB_USER: z.string(),
    MYSQL_DB_PASSWORD: z.string(),
    MYSQL_DB_DATABASE: z.string(),

    DISCORD_CLIENT_ID: z.string(),
    DISCORD_CLIENT_SECRET: z.string(),

    FQDN: z.string().url(),

    NODE_ENV: z.enum(['development', 'test', 'production']).default('development')
  },

  client: {
    NEXT_PUBLIC_EXAMPLE: z.string()
  },

  runtimeEnv: {
    MYSQL_DB_HOST: process.env.MYSQL_DB_HOST,
    MYSQL_DB_PORT: process.env.MYSQL_DB_PORT,
    MYSQL_DB_USER: process.env.MYSQL_DB_USER,
    MYSQL_DB_PASSWORD: process.env.MYSQL_DB_PASSWORD,
    MYSQL_DB_DATABASE: process.env.MYSQL_DB_DATABASE,

    DISCORD_CLIENT_ID: process.env.DISCORD_CLIENT_ID,
    DISCORD_CLIENT_SECRET: process.env.DISCORD_CLIENT_SECRET,

    NEXT_PUBLIC_EXAMPLE: process.env.NEXT_PUBLIC_EXAMPLE,

    FQDN: process.env.FQDN,

    NODE_ENV: process.env.NODE_ENV
  },

  /*
   * If you want to skip the validation of the environment variables, you can set the SKIP_ENV_VALIDATION to true
   * This is useful for CI/CD environments where you don't want to set all the environment variables
   * */
  skipValidation: process.env.SKIP_ENV_VALIDATION === 'true',
  emptyStringAsUndefined: true
});
