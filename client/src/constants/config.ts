// API Configuration
export const API_BASE_URL =
  import.meta.env.VITE_API_URL || "http://localhost:5000/api";

// Analytics & Tracking
export const ANALYTICS_ID = import.meta.env.VITE_ANALYTICS_ID;

// Stripe
export const STRIPE_PUBLIC_KEY = import.meta.env.VITE_STRIPE_PUBLIC_KEY;

// Feature Flags
export const FEATURES = {
  ENABLE_ANALYTICS: true,
  ENABLE_NEWSLETTER: true,
  ENABLE_BLOG: true,
  ENABLE_LISTINGS: true,
  ENABLE_PRICING: true,
};
