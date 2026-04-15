/**
 * SEO Helper Utilities
 */

export interface SEOMetaData {
  title: string;
  description: string;
  image?: string;
  url?: string;
  author?: string;
  keywords?: string[];
  type?: "website" | "article" | "product";
  canonicalUrl?: string;
}

export function setPageMeta(meta: SEOMetaData): void {
  // Set title
  document.title = `${meta.title} | Prashun Shetty`;

  // Set or update meta tags
  updateMeta("description", meta.description);
  updateMeta("keywords", meta.keywords?.join(", ") || "");
  updateMeta("author", meta.author || "Prashun Shetty");

  // Open Graph tags for social sharing
  updateMeta("og:title", meta.title, "property");
  updateMeta("og:description", meta.description, "property");
  updateMeta("og:type", meta.type || "website", "property");
  if (meta.image) {
    updateMeta("og:image", meta.image, "property");
  }
  if (meta.url) {
    updateMeta("og:url", meta.url, "property");
  }

  // Twitter Card tags
  updateMeta("twitter:card", "summary_large_image");
  updateMeta("twitter:title", meta.title);
  updateMeta("twitter:description", meta.description);
  if (meta.image) {
    updateMeta("twitter:image", meta.image);
  }

  // Canonical URL
  if (meta.canonicalUrl) {
    updateCanonical(meta.canonicalUrl);
  }
}

function updateMeta(
  name: string,
  content: string | undefined,
  type: "name" | "property" = "name",
): void {
  if (!content) return;

  let element = document.querySelector(
    `meta[${type}="${name}"]`,
  ) as HTMLMetaElement;

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(type, name);
    document.head.appendChild(element);
  }

  element.content = content;
}

function updateCanonical(url: string): void {
  let link = document.querySelector("link[rel='canonical']") as HTMLLinkElement;

  if (!link) {
    link = document.createElement("link");
    link.rel = "canonical";
    document.head.appendChild(link);
  }

  link.href = url;
}

/**
 * Generate structured data (Schema markup) for SEO
 */
export function generateStructuredData(
  type: "Organization" | "BreadcrumbList" | "Article" | "Product",
  data: Record<string, unknown>,
): void {
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": type,
    ...data,
  });
  document.head.appendChild(script);
}

/**
 * Common SEO meta data for pages
 */
export const SEO_DEFAULTS = {
  home: {
    title: "Prashun Shetty - EdTech Leader & SAP S/4 HANA Mentor",
    description:
      "Personal portfolio of Prashun Shetty showcasing companies, educational offerings, and professional expertise in EdTech and SAP technology.",
    keywords: [
      "Prashun Shetty",
      "EdTech",
      "SAP S/4 HANA",
      "Education",
      "Companies",
    ],
    type: "website" as const,
  },
  blog: {
    title: "Blog - Prashun Shetty",
    description:
      "Latest articles and insights on education, technology, and business.",
    keywords: ["Blog", "Articles", "Education", "Technology", "Business"],
    type: "website" as const,
  },
  listings: {
    title: "Business Listings - Prashun Shetty",
    description: "Explore business listings and opportunities.",
    keywords: ["Business", "Listings", "Opportunities", "Directory"],
    type: "website" as const,
  },
  pricing: {
    title: "Pricing Plans - Prashun Shetty",
    description: "Choose the perfect subscription plan for your needs.",
    keywords: ["Pricing", "Plans", "Subscription"],
    type: "website" as const,
  },
};

/**
 * Generate SEO-friendly URL slug
 */
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Remove special characters
    .replace(/\s+/g, "-") // Replace spaces with hyphens
    .replace(/-+/g, "-"); // Replace multiple hyphens with single hyphen
}

/**
 * Generate breadcrumb schema
 */
export function generateBreadcrumbs(
  items: Array<{ name: string; url: string }>,
): void {
  generateStructuredData("BreadcrumbList", {
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${window.location.origin}${item.url}`,
    })),
  });
}
