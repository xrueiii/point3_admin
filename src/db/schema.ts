import { relations, sql } from "drizzle-orm";
import {
  index,
  pgTable,
  serial,
  uuid,
  varchar,
} from "drizzle-orm/pg-core";

export const usersTable = pgTable(
  "users",
  {
    id: serial("id").primaryKey(),
    displayId: uuid("display_id").defaultRandom().notNull().unique(),
    name: varchar("name", { length: 100 }).notNull().unique(),
    hashedPassword: varchar("hashed_password", { length: 100 }),
  },
  (table) => ({
    displayIdIndex: index("display_id_index").on(table.displayId),
  }),
);

