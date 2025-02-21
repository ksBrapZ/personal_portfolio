import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

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
  // Admin routes
  app.post("/api/admin/login", (req, res) => {
    const { username, password } = req.body;

    const { username, password } = req.body;
    if (username === ADMIN_CREDENTIALS.username && password === ADMIN_CREDENTIALS.password) {
      res.status(200).json({ message: "Login successful" });
    } else {
      res.status(403).json({ message: "Invalid credentials" });
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