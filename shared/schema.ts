import { pgTable, text, serial, integer, boolean, jsonb } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
  isAdmin: boolean("is_admin").notNull().default(false),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
  isAdmin: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export const posts = pgTable("posts", {
  id: serial("id").primaryKey(),
  title: text("title").notNull(),
  content: text("content").notNull(),
  slug: text("slug").notNull().unique(),
  authorId: integer("author_id").references(() => users.id).notNull(),
  publishedAt: text("published_at"),
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
  featuredImage: text("featured_image"),
  excerpt: text("excerpt"),
});

export const insertPostSchema = createInsertSchema(posts).pick({
  title: true,
  content: true,
  slug: true,
  authorId: true,
  publishedAt: true,
  featuredImage: true,
  excerpt: true,
});

export type InsertPost = z.infer<typeof insertPostSchema>;
export type Post = typeof posts.$inferSelect;

export const favorites = pgTable("favorites", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  description: text("description").notNull(),
  category: text("category").notNull(), // 'tools', 'products', 'books', 'people'
  type: text("type").notNull(), // e.g., 'Development', 'Design', etc.
  hyperlink: text("hyperlink"),
  metadata: jsonb("metadata"), // For category-specific fields (e.g., author for books)
  createdAt: text("created_at").notNull().default(new Date().toISOString()),
});

export const insertFavoriteSchema = createInsertSchema(favorites).pick({
  name: true,
  description: true,
  category: true,
  type: true,
  hyperlink: true,
  metadata: true,
});

export type InsertFavorite = z.infer<typeof insertFavoriteSchema>;
export type Favorite = typeof favorites.$inferSelect;

// Validation schemas for the admin panel
export const blogPostSchema = insertPostSchema.extend({
  title: z.string().min(1, "Title is required"),
  content: z.string().min(1, "Content is required"),
  slug: z.string().min(1, "Slug is required").regex(/^[a-z0-9-]+$/, "Slug must contain only lowercase letters, numbers, and hyphens"),
  excerpt: z.string().max(300, "Excerpt must be less than 300 characters").optional(),
  featuredImage: z.string().url("Featured image must be a valid URL").optional(),
});

export const favoriteItemSchema = insertFavoriteSchema.extend({
  name: z.string().min(1, "Name is required"),
  description: z.string().min(1, "Description is required"),
  category: z.enum(["tools", "products", "books", "people"], {
    required_error: "Category is required",
  }),
  type: z.string().min(1, "Type is required"),
  hyperlink: z.string().url("Must be a valid URL").optional(),
  metadata: z.record(z.string(), z.string()).optional(),
});