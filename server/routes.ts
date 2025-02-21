import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertPostSchema, insertFavoriteSchema } from "@shared/schema";

declare global {
  namespace Express {
    interface Request {
      isAdminDomain?: boolean;
    }
  }
}

const ADMIN_CREDENTIALS = {
  username: "admin",
  password: "password"
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Admin authentication
  app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(403).json({ message: "Invalid credentials" });
    }
  });

  // Blog post endpoints
  app.get("/api/posts", async (req, res) => {
    try {
      const posts = await storage.getAllPosts();
      res.json(posts);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch posts" });
    }
  });

  app.get("/api/posts/:slug", async (req, res) => {
    try {
      const post = await storage.getPostBySlug(req.params.slug);
      if (!post) {
        return res.status(404).json({ message: "Post not found" });
      }
      res.json(post);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch post" });
    }
  });

  app.post("/api/posts", async (req, res) => {
    if (!req.isAdminDomain) {
      return res.status(403).json({ message: "Access denied" });
    }

    try {
      const validatedData = insertPostSchema.parse(req.body);
      const post = await storage.createPost(validatedData);
      res.status(201).json(post);
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid post data", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Favorites endpoints
  app.get("/api/favorites", async (req, res) => {
    try {
      const category = req.query.category as string | undefined;
      const favorites = category 
        ? await storage.getFavoritesByCategory(category)
        : await storage.getAllFavorites();
      res.json(favorites);
    } catch (error) {
      res.status(500).json({ message: "Failed to fetch favorites" });
    }
  });

  app.post("/api/favorites", async (req, res) => {
    if (!req.isAdminDomain) {
      return res.status(403).json({ message: "Access denied" });
    }

    try {
      const validatedData = insertFavoriteSchema.parse(req.body);
      const favorite = await storage.createFavorite(validatedData);
      res.status(201).json(favorite);
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid favorite data", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.post("/api/admin/update-content", (req, res) => {
    if (!req.isAdminDomain) {
      return res.status(403).json({ message: "Access denied. Please use the admin subdomain." });
    }

    const { content } = req.body;
    if (!content) {
      return res.status(400).json({ message: "Content is required" });
    }

    // Here you would typically update your content storage
    // For now, we'll just acknowledge the request
    res.status(200).json({ message: "Content updated successfully" });
  });


  const httpServer = createServer(app);
  return httpServer;
}