import { drizzle } from 'drizzle-orm/mysql2';
import { PoolOptions, createPool } from 'mysql2/promise';

import * as schema from './schema';

export * from 'drizzle-orm';
export * from './schema';

export function createClient(opts: PoolOptions) {
  const client = createPool(opts);

  return drizzle(client, { schema, mode: 'default' });
}

export type DB = ReturnType<typeof createClient>;
