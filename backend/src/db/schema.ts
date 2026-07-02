import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

// =========================
// Tasks Table
// =========================

export const tasks = sqliteTable("tasks", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  title: text("title").notNull(),

  description: text("description"),
  
  status: text("status", {
    enum: ["todo", "in_progress", "done"],
  })
    .default("todo")
    .notNull(),

  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type Task = typeof tasks.$inferSelect;
export type NewTask = typeof tasks.$inferInsert;

// =========================
// Users Table
// =========================

export const users = sqliteTable("users", {
  id: integer("id").primaryKey({ autoIncrement: true }),

  name: text("name").notNull(),

  email: text("email").notNull().unique(),

  password: text("password").notNull(),

  createdAt: integer("created_at", { mode: "timestamp" })
    .notNull()
    .$defaultFn(() => new Date()),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;