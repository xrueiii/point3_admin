import {
  index,
  integer,
  pgTable,
  serial,
  unique,
  uuid,
  varchar
} from "drizzle-orm/pg-core";

export const usersTable = pgTable(
  "Admins",
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

export const ReservationTable = pgTable(
  "Reservation",
  {
      id: serial("id").primaryKey(),
      displayName: varchar("name").notNull(),
      email: varchar("email").notNull(),
      date: varchar("date", {length: 15}).notNull(),
      span: integer("span").notNull(),
      phone: varchar("phone").notNull(),
      roomId: uuid("roomId").notNull().references(() => RoomInfoTable.roomId, {
          onDelete: "cascade",
          onUpdate: "cascade",
        }),
  },
  (table) => ({
      emailIndex: index("email_index").on(table.email),
      roomIndex: index("room_index").on(table.roomId),
      uniqReservation: unique().on(table.roomId, table.date, table.span),
  })
);

export const RoomInfoTable = pgTable(
  "RoomInfo",
  {
      id: serial("id").primaryKey(),
      roomId: uuid("roomId").notNull().defaultRandom().unique(),
      roomName: varchar("roomName").notNull(),
      content: varchar("content").notNull(),
  },
  (table) => ({
      roomIdIndex: index("RoomIdIndex").on(table.roomId)
  })

);
