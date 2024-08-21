import { InferInsertModel, InferSelectModel, relations } from 'drizzle-orm';
import { index, mysqlTable, varchar } from 'drizzle-orm/mysql-core';

import { sessions } from './sessions';

export const users = mysqlTable(
  'users',
  {
    id: varchar('id', { length: 255 }).primaryKey(),
    username: varchar('username', { length: 255 }).notNull(),
    email: varchar('email', { length: 255 }).notNull().unique(),
    discordSub: varchar('discord_sub', { length: 255 }).notNull().unique()
  },
  (table) => ({
    idIdx: index('id_idx').on(table.id)
  })
);

export const usersRelations = relations(users, ({ many }) => ({
  sessions: many(sessions)
}));

export type SelectUser = InferSelectModel<typeof users>;
export type InsertUser = InferInsertModel<typeof users>;
