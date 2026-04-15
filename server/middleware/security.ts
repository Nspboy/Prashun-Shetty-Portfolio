import { Request, Response, NextFunction } from "express";
import rateLimit from "express-rate-limit";

// Rate limiting middleware for general API calls
export const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
});

// Stricter rate limiting for login and sensitive endpoints
export const strictLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many attempts, please try again later.",
  skipSuccessfulRequests: true, // Don't count successful requests
});

// Rate limiting for lead submissions
export const leadLimiter = rateLimit({
  windowMs: 60 * 60 * 1000, // 1 hour
  max: 10, // limit each IP to 10 leads per hour
  message: "Too many lead submissions, please try again later.",
});

// Rate limiting for newsletter subscriptions
export const newsletterLimiter = rateLimit({
  windowMs: 24 * 60 * 60 * 1000, // 24 hours
  max: 3, // limit each IP to 3 subscriptions per day
  message: "Too many subscription attempts, please try again later.",
});

// Security headers middleware
export function securityHeaders(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Prevent clickjacking
  res.setHeader("X-Frame-Options", "DENY");

  // Prevent MIME type sniffing
  res.setHeader("X-Content-Type-Options", "nosniff");

  // Enable XSS protection
  res.setHeader("X-XSS-Protection", "1; mode=block");

  // Referrer policy
  res.setHeader("Referrer-Policy", "strict-origin-when-cross-origin");

  // Feature policy / Permissions policy
  res.setHeader(
    "Permissions-Policy",
    "geolocation=(), microphone=(), camera=()",
  );

  next();
}

// Input sanitization middleware
export function inputSanitization(
  req: Request,
  res: Response,
  next: NextFunction,
) {
  // Sanitize string inputs to prevent XSS
  const sanitizeValue = (value: unknown): unknown => {
    if (typeof value === "string") {
      return value
        .replace(/[<>]/g, "") // Remove angle brackets
        .trim();
    }
    if (typeof value === "object" && value !== null) {
      return Object.entries(value).reduce(
        (acc, [key, val]) => {
          acc[key] = sanitizeValue(val);
          return acc;
        },
        {} as Record<string, unknown>,
      );
    }
    return value;
  };

  // Only sanitize body, query might have special structures
  if (req.body && typeof req.body === "object") {
    req.body = sanitizeValue(req.body) as Record<string, unknown>;
  }

  next();
}
