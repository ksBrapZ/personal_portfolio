// Add this at the very top of server/index.ts, before other imports
import 'dotenv/config';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// index.ts - Main server application file
// This file sets up the web server that powers the website's backend
// It handles incoming requests, manages API endpoints, and serves the frontend application

import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

// Add this right after the dotenv import
log('Environment loaded, database configured');

// Create the main application server
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Request logging middleware
// This tracks and logs all API requests for monitoring and debugging
app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  // Capture JSON responses for logging
  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  // Log request details when the response is complete
  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      // Truncate long log lines for readability
      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

// Self-executing async function to start the server
(async () => {
  // Set up API routes and create the server instance
  const server = await registerRoutes(app);

  // Global error handling middleware
  // Catches any errors and sends appropriate responses
  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // Configure development or production server setup
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // Start the server on the specified port
  const port = process.env.PORT || 5000;
  const startServer = (portNumber: number) => {
    server.listen(portNumber, '0.0.0.0', () => {
      log(`Server running on port ${portNumber}`);
    }).on('error', (err: NodeJS.ErrnoException) => {
      if (err.code === 'EADDRINUSE') {
        const nextPort = portNumber + 1;
        log(`Port ${portNumber} is already in use, trying ${nextPort}`);
        startServer(nextPort);
      } else {
        log('Server error:', err.message);
        process.exit(1);
      }
    });
  };

  startServer(typeof port === 'string' ? parseInt(port) : port);
})();