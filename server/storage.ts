import { users, type User, type InsertUser } from "@shared/schema";
import { posts, type Post, type InsertPost } from "@shared/schema";
import { favorites, type Favorite, type InsertFavorite } from "@shared/schema";

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

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private posts: Map<number, Post>;
  private favorites: Map<number, Favorite>;
  private currentId: { users: number; posts: number; favorites: number };

  constructor() {
    this.users = new Map();
    this.posts = new Map();
    this.favorites = new Map();
    this.currentId = {
      users: 1,
      posts: 1,
      favorites: 1,
    };
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.currentId.users++;
    const user: User = { ...insertUser, id, isAdmin: false };
    this.users.set(id, user);
    return user;
  }

  // Blog post methods
  async getAllPosts(): Promise<Post[]> {
    return Array.from(this.posts.values());
  }

  async getPostBySlug(slug: string): Promise<Post | undefined> {
    return Array.from(this.posts.values()).find(
      (post) => post.slug === slug
    );
  }

  async createPost(insertPost: InsertPost): Promise<Post> {
    const id = this.currentId.posts++;
    const post: Post = { ...insertPost, id };
    this.posts.set(id, post);
    return post;
  }

  // Favorites methods
  async getAllFavorites(): Promise<Favorite[]> {
    return Array.from(this.favorites.values());
  }

  async getFavoritesByCategory(category: string): Promise<Favorite[]> {
    return Array.from(this.favorites.values()).filter(
      (favorite) => favorite.category === category
    );
  }

  async createFavorite(insertFavorite: InsertFavorite): Promise<Favorite> {
    const id = this.currentId.favorites++;
    const favorite: Favorite = { ...insertFavorite, id };
    this.favorites.set(id, favorite);
    return favorite;
  }
}

export const storage = new MemStorage();