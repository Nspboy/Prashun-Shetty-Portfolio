# Prashun Shetty Portfolio & EdTech Platform

A modern, full-stack web application showcasing Prashun Shetty's personal brand, companies, and educational offerings. Built with React, TypeScript, Express, and Drizzle ORM.

## 🌟 Features

- **Personal Portfolio**: Showcase your personal brand and achievements
- **Company Management**: Display multiple companies with descriptions and branding
- **Business Listings Directory**: Full-featured business directory with categorization
- **Blog Platform**: Publish articles with SEO optimization
- **Lead Generation**: Capture and manage customer leads
- **Newsletter Subscription**: Email subscription management
- **Pricing Plans**: Stripe-integrated subscription plans
- **Authentication**: Secure user authentication with Passport.js
- **Responsive Design**: Mobile-first design with Tailwind CSS
- **Real-time Updates**: WebSocket support for live features

## 📋 Table of Contents

- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Environment Variables](#environment-variables)
- [Project Structure](#project-structure)
- [Development](#development)
- [Building](#building)
- [API Endpoints](#api-endpoints)
- [Technologies](#technologies)
- [Contributing](#contributing)
- [License](#license)

## 🔧 Prerequisites

- Node.js 18+
- npm or yarn
- Git

## 📥 Installation

1. **Clone the repository**

```bash
git clone <repository-url>
cd Prashun-Shetty-Portfolio
```

2. **Install dependencies**

```bash
npm install --legacy-peer-deps
```

3. **Set up environment variables**

```bash
cp .env.example .env.local
# Edit .env.local with your configuration
```

4. **Start the development server**

```bash
npm run dev
```

The application will be available at `http://localhost:5000`

## 🌍 Environment Variables

Create a `.env.local` file with the following variables:

```env
# Database
DATABASE_URL=postgresql://user:password@localhost:5432/prashun_portfolio

# Session
SESSION_SECRET=your-secure-session-secret-here

# Stripe Integration
STRIPE_PUBLIC_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Email (Optional)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-password

# Node Environment
NODE_ENV=development
```

## 📁 Project Structure

```
Prashun-Shetty-Portfolio/
├── client/                          # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/                 # Shadcn/ui components
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── CompaniesSection.tsx
│   │   │   ├── BusinessListingsSection.tsx
│   │   │   ├── PricingSection.tsx
│   │   │   ├── BlogSection.tsx
│   │   │   ├── ContactForm.tsx
│   │   │   ├── Newsletter.tsx
│   │   │   └── Footer.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx            # Main landing page
│   │   │   └── not-found.tsx       # 404 page
│   │   ├── data/
│   │   │   ├── blogPosts.ts
│   │   │   ├── businessListings.ts
│   │   │   ├── companies.ts
│   │   │   └── subscriptionPlans.ts
│   │   ├── hooks/
│   │   │   ├── use-mobile.tsx
│   │   │   └── use-toast.ts
│   │   ├── lib/
│   │   │   └── utils.ts
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── public/
│
├── server/                          # Express backend
│   ├── index.ts                     # Main server file
│   ├── auth.ts                      # Authentication setup
│   ├── routes.ts                    # API routes
│   ├── storage.ts                   # Data storage layer
│   ├── db.ts                        # Database configuration
│   ├── seed.ts                      # Database seeding
│   └── vite.ts                      # Vite integration
│
├── shared/
│   └── schema.ts                    # Shared database schemas
│
├── attached_assets/                 # Static images and assets
├── dist/                            # Production build output
├── node_modules/                    # Dependencies
│
├── .env.example                     # Environment variables template
├── .gitignore                       # Git ignore rules
├── components.json                  # Shadcn/ui config
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── postcss.config.js
├── vite.config.ts
├── vite.config.local.ts
└── README.md
```

## 🚀 Development

### Start Development Server

```bash
npm run dev
```

Starts the development server with hot module replacement (HMR).

### Type Checking

```bash
npm run check
```

Run TypeScript compiler to check for type errors.

### Database Operations

```bash
npm run db:push
```

Push database schema changes to your database.

## 🏗️ Building

### Production Build

```bash
npm run build
```

Creates optimized production builds for both frontend and backend.

### Run Production Build

```bash
npm run start
```

Runs the production server.

## 🔌 API Endpoints

### Companies

- `GET /api/companies` - Get all companies

### Subscription Plans

- `GET /api/plans` - Get all subscription plans

### Business Listings

- `GET /api/listings?category=<category>` - Get business listings (optional category filter)

### Blog

- `GET /api/blog` - Get all blog posts

### Leads

- `POST /api/leads` - Create a new lead
  ```json
  {
    "name": "string",
    "email": "string",
    "company": "string (optional)",
    "message": "string",
    "source": "string"
  }
  ```

### Newsletter

- `POST /api/newsletter` - Subscribe to newsletter
  ```json
  {
    "email": "string"
  }
  ```

## 🛠️ Technologies

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Component library
- **Wouter** - Lightweight routing
- **React Hook Form** - Form handling
- **Zod** - Schema validation
- **TanStack Query** - Data fetching
- **Framer Motion** - Animations

### Backend

- **Express.js** - Web framework
- **TypeScript** - Type safety
- **Drizzle ORM** - Database ORM
- **Passport.js** - Authentication
- **Zod** - Schema validation
- **ws** - WebSocket support

### Database

- **PostgreSQL** - Primary database (with Neon serverless support)
- **Drizzle ORM** - Type-safe ORM

### DevTools

- **Vite** - Fast build tool
- **tsx** - TypeScript executor
- **ESBuild** - JavaScript bundler
- **PostCSS** - CSS processing
- **Tailwind CSS** - Utility-first CSS

## 🔐 Security Features

- ✅ Secure password hashing with scrypt
- ✅ Session-based authentication with Passport.js
- ✅ CSRF protection ready
- ✅ Input validation with Zod schemas
- ✅ Type-safe database queries with Drizzle ORM
- ✅ Secure cookie handling

## 📊 Performance

- Fast development with Vite HMR
- Optimized production builds with esbuild
- React lazy loading support
- Efficient CSS with Tailwind purging
- Image optimization capabilities

## 🚀 Deployment

### Recommended Platforms

- **Vercel** - Frontend hosting with Serverless functions
- **Render** - Backend and database hosting
- **Railway** - Full-stack deployment
- **Heroku** - Traditional hosting option

### Environment Setup for Production

1. Set secure SESSION_SECRET
2. Enable secure cookies in production
3. Configure database with strong credentials
4. Set up CORS for production domain
5. Use Stripe production keys
6. Enable HTTPS

## 📝 Contributing

1. Create a feature branch (`git checkout -b feature/AmazingFeature`)
2. Commit your changes (`git commit -m 'Add AmazingFeature'`)
3. Push to the branch (`git push origin feature/AmazingFeature`)
4. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Support

For support, email prashun@example.com or open an issue on GitHub.

## 🎯 Roadmap

- [ ] Admin Dashboard
- [ ] Advanced Analytics
- [ ] Email Notifications
- [ ] Payment Dashboard
- [ ] Listing Reviews & Ratings
- [ ] Advanced Search & Filtering
- [ ] Mobile App (React Native)
- [ ] API Documentation

## 🙏 Acknowledgments

- Built with modern web technologies
- Inspired by best practices in full-stack development
- Community packages and open-source libraries

---

**Last Updated**: April 14, 2026
**Version**: 1.0.0
