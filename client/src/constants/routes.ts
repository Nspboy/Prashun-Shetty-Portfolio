// Reusable Routes
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  BLOG_POST: "/blog/:slug",
  LISTINGS: "/listings",
  PRICING: "/pricing",
  CONTACT: "/contact",
  NOT_FOUND: "/404",
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  COMPANIES: "/companies",
  PLANS: "/plans",
  LISTINGS: "/listings",
  BLOG: "/blog",
  LEADS: "/leads",
  NEWSLETTER: "/newsletter",
} as const;
