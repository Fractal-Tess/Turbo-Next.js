import { config } from 'dotenv';
import { defineConfig } from 'drizzle-kit';
import { resolve } from 'node:path';
import { z } from 'zod';

const result = config({
  path: resolve('../../apps/web/.env.local')
});

/*
 * Environment variables should automatically be loaded from the .env symlink
 * If using older versions of node you will need to install dotenv and load the .env file
 */
const ENV = z
  .object({
    MYSQL_DB_HOST: z.string(),
    MYSQL_DB_PORT: z.string().transform(Number),
    MYSQL_DB_USER: z.string(),
    MYSQL_DB_PASSWORD: z.string(),
    MYSQL_DB_DATABASE: z.string()
  })
  .parse(result.parsed);

export default defineConfig({
  schema: './src/schema/index.ts',
  out: './migrations',
  dialect: 'mysql',
  dbCredentials: {
    port: ENV.MYSQL_DB_PORT,
    host: ENV.MYSQL_DB_HOST,
    user: ENV.MYSQL_DB_USER,
    password: ENV.MYSQL_DB_PASSWORD,
    database: ENV.MYSQL_DB_DATABASE
  }
});
