import { ENV } from '$/env';

import { createClient } from '@repo/drizzle';

/**
 * A Drizzle client for the MySQL database.
 */
export const db = createClient({
  database: ENV.MYSQL_DB_DATABASE,
  user: ENV.MYSQL_DB_USER,
  password: ENV.MYSQL_DB_PASSWORD,
  host: ENV.MYSQL_DB_HOST,
  port: ENV.MYSQL_DB_PORT
});
