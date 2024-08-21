import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import { createConnection } from 'mysql2/promise';
import path from 'node:path';
import { z } from 'zod';

const { data, error, success } = z
  .object({
    MYSQL_DB_DATABASE: z.string(),
    MYSQL_DB_USER: z.string(),
    MYSQL_DB_PASSWORD: z.string(),
    MYSQL_DB_HOST: z.string(),
    MYSQL_DB_PORT: z.string().transform(Number),
    MYSQL_MIGRATOR_RETRIES: z.string().transform(Number).default('5')
  })
  .safeParse(process.env);

if (!success) {
  console.error('Failed to parse environment veriables');
  console.log(error.flatten());
  process.exit(1);
}

const ENV = data;

for (let i = 0; i <= 5; i++) {
  try {
    const connection = await createConnection({
      database: ENV.MYSQL_DB_DATABASE,
      user: ENV.MYSQL_DB_USER,
      password: ENV.MYSQL_DB_PASSWORD,
      host: ENV.MYSQL_DB_HOST,
      port: ENV.MYSQL_DB_PORT
    });

    const db = drizzle(connection);
    console.log('Applying migrations... Try:', i);
    await migrate(db, {
      migrationsFolder: path.join(import.meta.dirname, './migrations')
    });
    console.log('Migrations applied successfully!');
    await connection.end();
    process.exit(0);
  } catch (error) {
    console.error('Failed to apply migrations', error);
    console.log('Retrying in 5 seconds...');
    await new Promise((resolve) => setTimeout(resolve, 5_000));
  }
}
