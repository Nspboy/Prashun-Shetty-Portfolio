import express, { type Request, Response, NextFunction } from "express";
import path from "path";
import { fileURLToPath } from "url";
import helmet from "helmet";
import cors from "cors";
import swaggerUi from "swagger-ui-express";
import { setupVite } from "./vite";
import { setupAuth } from "./auth";
import routes from "./routes";
import { specs } from "./swagger";
import {
  apiLimiter,
  strictLimiter,
  leadLimiter,
  newsletterLimiter,
  securityHeaders,
  inputSanitization,
} from "./middleware/security";
import { requestLogger } from "./middleware/logging";
import { errorHandler } from "./middleware/errorHandler";
import { emailService } from "./services/email";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// ============================================
// SECURITY MIDDLEWARE
// ============================================

// Helmet.js - Security headers
// Disable CSP in development to avoid blocking Vite HMR and inline scripts
app.use(
  helmet({
    contentSecurityPolicy: process.env.NODE_ENV === "production" ? true : false,
  }),
);

// Custom security headers
app.use(securityHeaders);

// CORS configuration
app.use(
  cors({
    origin: process.env.FRONTEND_URL || "http://localhost:5173",
    credentials: true,
  }),
);

// ============================================
// BODY PARSING & LOGGING
// ============================================

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Input sanitization
app.use(inputSanitization);

// Request logging
app.use(requestLogger);

// ============================================
// RATE LIMITING
// ============================================

// Apply general rate limiting to all API routes
app.use("/api/", apiLimiter);

// ============================================
// AUTHENTICATION & ROUTES
// ============================================

// Serve attached assets
app.use(
  "/attached_assets",
  express.static(path.resolve(__dirname, "..", "attached_assets")),
);

setupAuth(app);

// API routes with specific rate limiters
app.use("/api/leads", leadLimiter);
app.use("/api/newsletter", newsletterLimiter);
app.use("/api", routes);

// ============================================
// DOCUMENTATION
// ============================================

// Swagger API documentation
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// API health check endpoint
app.get("/api/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// ============================================
// INITIALIZATION
// ============================================

(async () => {
  // ============================================
  // VITE & SPA ROUTING
  // ============================================

  // Setup Vite for SPA (must come after API routes but before 404 handler)
  await setupVite(app);

  // ============================================
  // ERROR HANDLING
  // ============================================

  // Global error handler
  app.use(errorHandler);

  // 404 handler (catches any remaining unhandled routes)
  app.use((req, res) => {
    res.status(404).json({ error: "Not Found", path: req.path });
  });

  // Verify email service connection
  await emailService.verifyConnection();

  const PORT = parseInt(process.env.PORT || "5000", 10);
  app.listen(PORT, "0.0.0.0", () => {
    console.log(`✅ Server running on port ${PORT}`);
    console.log(`📚 API Documentation: http://localhost:${PORT}/api-docs`);
    console.log("🔒 Security headers enabled");
    console.log("⏱️  Rate limiting active");
    console.log("Using in-memory storage - no database required");
  });
})();
