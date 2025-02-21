import { users, type User, type InsertUser } from "@shared/schema";
import { posts, type Post, type InsertPost } from "@shared/schema";
import { favorites, type Favorite, type InsertFavorite } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;

  // Blog post methods
  getAllPosts(): Promise<Post[]>;
  getPostBySlug(slug: string): Promise<Post | undefined>;
  createPost(post: InsertPost): Promise<Post>;

  // Favorites methods
  getAllFavorites(): Promise<Favorite[]>;
  getFavoritesByCategory(category: string): Promise<Favorite[]>;
  createFavorite(favorite: InsertFavorite): Promise<Favorite>;
}

export class DatabaseStorage implements IStorage {
  // User methods
  async getUser(id: number): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.id, id));
    return user;
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [user] = await db.select().from(users).where(eq(users.username, username));
    return user;
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const [user] = await db.insert(users).values(insertUser).returning();
    return user;
  }

  // Blog post methods
  async getAllPosts(): Promise<Post[]> {
    return await db.select().from(posts);
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    const [post] = await db.select().from(posts).where(eq(posts.slug, slug));
    return post;
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const now = new Date().toISOString();
    const [post] = await db
      .insert(posts)
      .values({ ...insertPost, createdAt: now })
      .returning();
    return post;
  }

  // Favorites methods
  async getAllFavorites(): Promise<Favorite[]> {
    return await db.select().from(favorites);
  }

  async getFavoritesByCategory(category: string): Promise<Favorite[]> {
    return await db
      .select()
      .from(favorites)
      .where(eq(favorites.category, category));
  }

  async createFavorite(insertFavorite: InsertFavorite): Promise<Favorite> {
    const now = new Date().toISOString();
    const [favorite] = await db
      .insert(favorites)
      .values({ ...insertFavorite, createdAt: now })
      .returning();
    return favorite;
  }
}

export const storage = new DatabaseStorage();