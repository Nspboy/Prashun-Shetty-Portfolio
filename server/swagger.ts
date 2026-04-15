import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Prashun Shetty Portfolio API",
      version: "1.0.0",
      description:
        "API documentation for Prashun Shetty Portfolio and EdTech Platform",
      contact: {
        name: "Prashun Shetty",
        email: "prashun@example.com",
      },
    },
    servers: [
      {
        url: "http://localhost:5000",
        description: "Development server",
      },
      {
        url: "https://api.prashun-shetty.com",
        description: "Production server",
      },
    ],
    components: {
      schemas: {
        Company: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            tagline: { type: "string" },
            description: { type: "string" },
            logo: { type: "string" },
            website: { type: "string" },
            order: { type: "integer" },
          },
        },
        Plan: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            price: { type: "integer" },
            description: { type: "string" },
            features: { type: "array", items: { type: "string" } },
            isPopular: { type: "boolean" },
            stripePriceId: { type: "string" },
          },
        },
        BusinessListing: {
          type: "object",
          properties: {
            id: { type: "integer" },
            name: { type: "string" },
            category: { type: "string" },
            description: { type: "string" },
            banner: { type: "string" },
            logo: { type: "string" },
            contactEmail: { type: "string" },
            website: { type: "string" },
            isFeatured: { type: "boolean" },
            isActive: { type: "boolean" },
          },
        },
        BlogPost: {
          type: "object",
          properties: {
            id: { type: "integer" },
            title: { type: "string" },
            slug: { type: "string" },
            excerpt: { type: "string" },
            content: { type: "string" },
            category: { type: "string" },
            image: { type: "string" },
            readTime: { type: "string" },
            isPublished: { type: "boolean" },
          },
        },
        Lead: {
          type: "object",
          properties: {
            name: { type: "string" },
            email: { type: "string", format: "email" },
            company: { type: "string" },
            message: { type: "string" },
            source: { type: "string" },
          },
          required: ["name", "email", "message", "source"],
        },
        Newsletter: {
          type: "object",
          properties: {
            email: { type: "string", format: "email" },
          },
          required: ["email"],
        },
        Error: {
          type: "object",
          properties: {
            error: { type: "string" },
            message: { type: "string" },
          },
        },
      },
    },
  },
  apis: ["./server/routes.ts", "./server/index.ts"],
};

export const specs = swaggerJsdoc(options);
