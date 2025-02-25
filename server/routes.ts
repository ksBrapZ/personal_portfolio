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

// Use environment variables if available, otherwise fall back to default credentials
const ADMIN_CREDENTIALS = {
  username: process.env.ADMIN_USERNAME || "admin",
  password: process.env.ADMIN_PASSWORD || "password"
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

  // New endpoints for editing and deleting favorites
  app.patch("/api/favorites/:id", async (req, res) => {
    if (!req.isAdminDomain) {
      return res.status(403).json({ message: "Access denied" });
    }

    try {
      const id = parseInt(req.params.id);
      const validatedData = insertFavoriteSchema.parse(req.body);
      const favorite = await storage.updateFavorite(id, validatedData);
      if (!favorite) {
        return res.status(404).json({ message: "Favorite not found" });
      }
      res.json(favorite);
    } catch (error) {
      res.status(400).json({ 
        message: "Invalid favorite data", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  app.delete("/api/favorites/:id", async (req, res) => {
    if (!req.isAdminDomain) {
      return res.status(403).json({ message: "Access denied" });
    }

    try {
      const id = parseInt(req.params.id);
      const success = await storage.deleteFavorite(id);
      if (!success) {
        return res.status(404).json({ message: "Favorite not found" });
      }
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to delete favorite", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  // Protected endpoint to seed the database with initial favorites data
  // This is a temporary solution for the production environment
  app.post("/api/admin/seed-favorites", async (req, res) => {
    // Check admin credentials
    const { username, password } = req.body;
    if (username !== ADMIN_CREDENTIALS.username || password !== ADMIN_CREDENTIALS.password) {
      return res.status(403).json({ message: "Invalid credentials" });
    }

    try {
      // Get current count of favorites
      const existingFavorites = await storage.getAllFavorites();
      
      // Only seed if the favorites table is empty
      if (existingFavorites.length > 0) {
        return res.status(200).json({ 
          message: "Database already has favorites data", 
          count: existingFavorites.length 
        });
      }

      // Import seed data
      const { default: seedModule } = await import("./seed-data.js");
      const seedData = seedModule.seedData;
      
      // Add sample tools to the favorites collection
      for (const tool of seedData.tools) {
        const favorite = {
          name: tool.name,
          description: tool.description,
          category: "tools",
          type: tool.type,
        };
        await storage.createFavorite(favorite);
      }

      // Add sample products to the favorites collection
      for (const product of seedData.products) {
        const favorite = {
          name: product.name,
          description: product.description,
          category: "products",
          type: product.type,
        };
        await storage.createFavorite(favorite);
      }

      // Add sample books to the favorites collection
      for (const book of seedData.books) {
        const favorite = {
          name: book.name,
          description: book.description,
          category: "books",
          type: book.type,
          metadata: { author: book.description.replace("By ", "") }
        };
        await storage.createFavorite(favorite);
      }

      // Add sample influential people to the favorites collection
      for (const person of seedData.people) {
        const favorite = {
          name: person.name,
          description: person.description,
          category: "people",
          type: person.type,
        };
        await storage.createFavorite(favorite);
      }

      res.status(200).json({ 
        message: "Database seeded successfully with favorites data" 
      });
    } catch (error) {
      res.status(500).json({ 
        message: "Failed to seed database", 
        error: error instanceof Error ? error.message : "Unknown error" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}