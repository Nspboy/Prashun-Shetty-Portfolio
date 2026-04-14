// Common Types
export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}

export interface PaginatedResponse<T> {
  items: T[];
  total: number;
  page: number;
  pageSize: number;
}

// Company Types
export interface Company {
  id: number;
  name: string;
  tagline: string;
  description: string;
  logo: string;
  website?: string;
  order: number;
}

// Plan Types
export interface SubscriptionPlan {
  id: number;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular: boolean;
  stripePriceId?: string;
}

// Listing Types
export interface BusinessListing {
  id: number;
  name: string;
  category: string;
  description: string;
  banner: string;
  logo: string;
  contactEmail: string;
  website?: string;
  planId?: number;
  isFeatured: boolean;
  isActive: boolean;
  expiresAt?: Date;
}

// Blog Types
export interface BlogPost {
  id: number;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  image: string;
  readTime: string;
  isPublished: boolean;
  publishedAt?: Date;
  createdAt: Date;
}

// Lead Types
export interface Lead {
  id: number;
  name: string;
  email: string;
  company?: string;
  message: string;
  source: string;
  status: string;
  createdAt: Date;
}

export interface CreateLeadInput {
  name: string;
  email: string;
  company?: string;
  message: string;
  source: string;
}

// Newsletter Types
export interface NewsletterSubscriber {
  id: number;
  email: string;
  isActive: boolean;
  subscribedAt: Date;
}

export interface CreateNewsletterInput {
  email: string;
}

// User Types
export interface User {
  id: number;
  username: string;
  createdAt: Date;
}

// Form submission states
export type FormStatus = "idle" | "loading" | "success" | "error";
