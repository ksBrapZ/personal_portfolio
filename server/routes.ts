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
  // Middleware to check for admin subdomain
  app.use((req, res, next) => {
    const host = req.get('host');
    if (host?.startsWith('admin.') || req.path.startsWith('/admin')) {
      req.isAdminDomain = true;
    }
    next();
  });

  // Admin routes - only accessible on admin subdomain
  app.post("/api/admin/login", (req, res) => {
    if (!req.isAdminDomain) {
      return res.status(403).json({ message: "Access denied. Please use the admin subdomain." });
    }

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