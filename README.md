# Prashun Shetty Portfolio & EdTech Platform

A modern, full-stack web application showcasing Prashun Shetty's personal brand, companies, and educational offerings. Built with React, TypeScript, Express, and Drizzle ORM for a professional, scalable platform.

## 🌟 Key Features

- **Personal Portfolio** - Showcase your personal brand, achievements, and professional background
- **Company Management** - Display and manage multiple companies with branding and descriptions
- **Business Directory** - Comprehensive business listings with category filtering and search
- **Blog Platform** - Publish and manage articles with SEO optimization
- **Lead Generation** - Capture customer inquiries and manage leads effectively
- **Newsletter System** - Email subscription management for marketing campaigns
- **Pricing Plans** - Integrate and manage subscription tiers with Stripe
- **User Authentication** - Secure login system with Passport.js
- **Responsive Design** - Mobile-friendly UI built with Tailwind CSS
- **Real-time Features** - WebSocket support for live updates

## 📋 Table of Contents

- [Quick Start](#quick-start)
- [Prerequisites](#prerequisites)
- [Installation Steps](#installation-steps)
- [Environment Configuration](#environment-configuration)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [API Documentation](#api-documentation)
- [Technology Stack](#technology-stack)
- [Deployment](#deployment)
- [Roadmap](#roadmap)

## 🚀 Quick Start

```bash
# Clone the repository
git clone <repository-url>
cd Prashun-Shetty-Portfolio

# Install dependencies
npm install --legacy-peer-deps

# Setup environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Access the application at `http://localhost:5000`

## 🔧 Prerequisites

- **Node.js** - Version 18 or higher
- **npm** - Comes with Node.js
- **Git** - For version control
- **PostgreSQL** (optional) - For production database

## 📥 Installation Steps

### Step 1: Clone Repository

```bash
git clone <repository-url>
cd Prashun-Shetty-Portfolio
```

### Step 2: Install Dependencies

```bash
npm install --legacy-peer-deps
```

_Note: Uses `--legacy-peer-deps` due to Vite peer dependency configuration_

### Step 3: Configure Environment Variables

```bash
cp .env.example .env.local
```

Edit `.env.local` with your configuration settings.

### Step 4: Start Development Server

```bash
npm run dev
```

The server starts on **http://localhost:5000** with hot reload enabled.

## 🌍 Environment Configuration

Create a `.env.local` file in the project root with these variables:

```env
# Database Connection
DATABASE_URL=postgresql://user:password@localhost:5432/prashun_portfolio

# Session Security
SESSION_SECRET=your-random-secure-key-here-change-in-production

# Stripe Payment Integration
STRIPE_PUBLIC_KEY=pk_test_your_public_key
STRIPE_SECRET_KEY=sk_test_your_secret_key

# Email Service (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-email-password

# Application Settings
NODE_ENV=development
PORT=5000
FRONTEND_URL=http://localhost:5173
API_URL=http://localhost:5000/api
```

## 📁 Project Structure

```
Prashun-Shetty-Portfolio/
│
├── client/                          # React Frontend Application
│   └── src/
│       ├── components/              # Reusable React components
│       │   ├── ui/                  # Shadcn/ui base components
│       │   ├── Header.tsx           # Navigation header
│       │   ├── Hero.tsx             # Hero section
│       │   ├── CompaniesSection.tsx # Companies showcase
│       │   ├── BusinessListingsSection.tsx
│       │   ├── PricingSection.tsx
│       │   ├── BlogSection.tsx
│       │   ├── ContactForm.tsx
│       │   ├── Newsletter.tsx
│       │   └── Footer.tsx
│       │
│       ├── pages/                   # Page components
│       │   ├── Home.tsx             # Main landing page
│       │   └── not-found.tsx        # 404 error page
│       │
│       ├── constants/               # App configuration
│       │   ├── config.ts            # Feature flags and settings
│       │   ├── messages.ts          # Error and success messages
│       │   └── routes.ts            # Route and API endpoint definitions
│       │
│       ├── types/                   # TypeScript type definitions
│       │   └── index.ts             # All shared data types
│       │
│       ├── services/                # External services
│       │   └── api.ts               # API client wrapper
│       │
│       ├── data/                    # Mock/static data
│       │   ├── blogPosts.ts
│       │   ├── businessListings.ts
│       │   ├── companies.ts
│       │   └── subscriptionPlans.ts
│       │
│       ├── hooks/                   # Custom React hooks
│       │   ├── use-mobile.tsx       # Mobile detection hook
│       │   └── use-toast.ts         # Toast notifications hook
│       │
│       ├── lib/                     # Utility functions
│       │   └── utils.ts
│       │
│       ├── App.tsx                  # Root component
│       ├── main.tsx                 # Application entry point
│       └── index.css                # Global styles
│
├── server/                          # Express Backend
│   ├── middleware/                  # Express middleware
│   │   ├── errorHandler.ts          # Error handling
│   │   └── logging.ts               # Request logging
│   │
│   ├── index.ts                     # Server entry point
│   ├── auth.ts                      # Authentication setup
│   ├── routes.ts                    # API routes definition
│   ├── storage.ts                   # Data storage layer
│   ├── db.ts                        # Database configuration
│   ├── seed.ts                      # Database seeding
│   └── vite.ts                      # Vite integration
│
├── shared/                          # Shared across client & server
│   └── schema.ts                    # Database schemas and types
│
├── attached_assets/                 # Static images and assets
│
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── .replit                          # Replit configuration
├── components.json                  # Shadcn/ui configuration
├── package.json                     # Project dependencies
├── tsconfig.json                    # TypeScript configuration
├── tailwind.config.ts               # Tailwind CSS configuration
├── postcss.config.js                # PostCSS configuration
├── vite.config.ts                   # Vite production config
├── vite.config.local.ts             # Vite development config
└── README.md                        # This file
```

## � Available Scripts

### Development

```bash
# Start development server with hot reload
npm run dev
```

### Type Checking

```bash
# Check TypeScript compilation errors
npm run check
```

### Production Build

```bash
# Build frontend and backend for production
npm run build
```

### Run Production

```bash
# Start production server
npm run start
```

### Database Operations

```bash
# Push database schema changes
npm run db:push
```

## 🔌 API Documentation

### Companies Endpoint

```bash
GET /api/companies
```

Returns all companies with details.

### Subscription Plans Endpoint

```bash
GET /api/plans
```

Returns all available subscription plans.

### Business Listings Endpoint

```bash
GET /api/listings?category=<category>
```

Returns business listings. Optional category parameter to filter results.

### Blog Posts Endpoint

```bash
GET /api/blog
```

Returns all published blog posts.

### Create Lead Endpoint

```bash
POST /api/leads
Content-Type: application/json

{
  "name": "John Doe",
  "email": "john@example.com",
  "company": "Acme Corp",
  "message": "Your message here",
  "source": "website"
}
```

### Newsletter Subscription Endpoint

```bash
POST /api/newsletter
Content-Type: application/json

{
  "email": "user@example.com"
}
```

## 🛠️ Technology Stack

### Frontend Technologies

- **React 18** - Modern UI library with hooks
- **TypeScript** - Type-safe JavaScript
- **Vite** - Lightning-fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Shadcn/ui** - High-quality React components
- **Wouter** - Lightweight routing library
- **React Hook Form** - Efficient form management
- **Zod** - Schema validation library
- **TanStack Query** - Data fetching and caching
- **Framer Motion** - Animation library

### Backend Technologies

- **Express.js** - Web application framework
- **TypeScript** - Type-safe server-side code
- **Drizzle ORM** - Type-safe database queries
- **Passport.js** - Authentication middleware
- **Zod** - Request validation
- **WebSocket** - Real-time communication (ws)

### Database

- **PostgreSQL** - Reliable relational database
- **Drizzle ORM** - Type-safe query builder

### Development Tools

- **tsx** - TypeScript execution environment
- **esbuild** - Fast JavaScript bundler
- **PostCSS** - CSS transformation
- **cross-env** - Cross-platform environment variables

## 🔐 Security Features

✅ **Secure Password Storage** - Uses scrypt hashing algorithm  
✅ **Session Authentication** - Passport.js based user authentication  
✅ **CSRF Protection** - Built-in support for cross-site request forgery prevention  
✅ **Input Validation** - Zod schema validation on all endpoints  
✅ **Type Safety** - Full TypeScript coverage prevents runtime errors  
✅ **Secure Cookies** - Automatic HTTPS cookie configuration in production  
✅ **Environment Secrets** - Sensitive data managed via environment variables

## 📊 Performance Optimization

- ⚡ **Hot Module Replacement** - Fast development with Vite HMR
- 🎯 **Optimized Builds** - esbuild provides minimal bundle sizes
- 🔄 **Code Splitting** - React.lazy() for automatic chunk splitting
- 🖼️ **Image Optimization** - Ready for image lazy loading
- 🎨 **CSS Purging** - Tailwind removes unused styles automatically
- 📦 **Tree Shaking** - Removes unused code during build

## 🚀 Deployment

### Recommended Hosting Platforms

1. **Vercel** - Best for frontend, serverless functions
   - Zero-config deployment from Git
   - Automatic HTTPS
   - Edge network

2. **Render** - Full-stack hosting
   - Native database support
   - Easy backend deployment
   - Auto-scaling available

3. **Railway** - Developer-friendly full-stack
   - Simple Git integration
   - Built-in PostgreSQL
   - Environment management

4. **Heroku** - Classic option
   - Easy setup
   - Add-ons for database and email

### Production Deployment Checklist

- [ ] Set unique `SESSION_SECRET` in production environment
- [ ] Enable secure cookies (`secure: true` in production)
- [ ] Configure database with strong credentials
- [ ] Set up CORS with specific production domain
- [ ] Use Stripe production API keys
- [ ] Enable HTTPS/TLS
- [ ] Configure monitoring and error tracking
- [ ] Set up automated backups
- [ ] Enable rate limiting on APIs
- [ ] Configure logging and alerting

## 🎯 Roadmap

- [ ] **Admin Dashboard** - Manage all content and users
- [ ] **Advanced Analytics** - Visitor stats and conversion tracking
- [ ] **Email Notifications** - Auto-send emails for leads and newsletters
- [ ] **Payment Dashboard** - Subscription and invoice management
- [ ] **Reviews & Ratings** - User feedback system for listings
- [ ] **Advanced Search** - Full-text search with filters
- [ ] **Mobile App** - React Native mobile application
- [ ] **API Documentation** - Interactive API docs with Swagger/OpenAPI

## 💡 Getting Help

### Common Issues

**Issue: Port 5000 already in use**

```bash
# Windows - Find and kill process using port 5000
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# macOS/Linux
lsof -i :5000
kill -9 <PID>
```

**Issue: Dependency conflicts**

```bash
# Reinstall dependencies with legacy peer deps
rm -rf node_modules package-lock.json
npm install --legacy-peer-deps
```

**Issue: TypeScript errors**

```bash
# Run type check
npm run check
```

## 📞 Support & Contact

- **Email**: prashun@example.com
- **Website**: https://prashun-shetty.com
- **GitHub Issues**: Report bugs and request features

## 📄 License

This project is licensed under the **MIT License** - see LICENSE file for details.

This means you can:

- ✅ Use commercially
- ✅ Modify the code
- ✅ Distribute copies
- ✅ Private use

Just include the license notice.

## 🙏 Acknowledgments

- Built with cutting-edge modern web technologies
- Inspired by industry best practices
- Thanks to open-source community

---

**Version**: 1.0.0  
**Last Updated**: April 14, 2026  
**Status**: ✅ Production Ready
