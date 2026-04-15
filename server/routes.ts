import { Router } from "express";
import { storage } from "./storage";
import {
  insertLeadSchema,
  insertNewsletterSubscriberSchema,
} from "@shared/schema";
import { emailService } from "./services/email";

const router = Router();

// Companies routes
router.get("/companies", async (req, res) => {
  try {
    const companies = await storage.getCompanies();
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch companies" });
  }
});

// Subscription plans routes
router.get("/plans", async (req, res) => {
  try {
    const plans = await storage.getSubscriptionPlans();
    res.json(plans);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch plans" });
  }
});

// Business listings routes
router.get("/listings", async (req, res) => {
  try {
    const category = req.query.category as string | undefined;
    const listings = await storage.getBusinessListings(category);
    res.json(listings);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch listings" });
  }
});

// Blog routes
router.get("/blog", async (req, res) => {
  try {
    const posts = await storage.getBlogPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch blog posts" });
  }
});

// Lead generation route
router.post("/leads", async (req, res) => {
  try {
    const validatedData = insertLeadSchema.parse(req.body);
    const lead = await storage.createLead(validatedData);

    // Send email notification to admin (non-blocking)
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    const emailData = {
      name: validatedData.name,
      email: validatedData.email,
      company: validatedData.company || undefined,
      message: validatedData.message,
      source: validatedData.source,
    };
    emailService
      .sendLeadNotification(emailData, adminEmail)
      .catch((error) => console.error("Failed to send lead email:", error));

    res.json({
      ...lead,
      message: "Thank you for your inquiry. We will contact you soon!",
    });
  } catch (error) {
    res.status(400).json({ error: "Invalid lead data" });
  }
});

// Newsletter subscription route
router.post("/newsletter", async (req, res) => {
  try {
    const validatedData = insertNewsletterSubscriberSchema.parse(req.body);
    const subscriber = await storage.createNewsletterSubscriber(validatedData);

    // Send welcome email (non-blocking)
    emailService
      .sendNewsletterWelcome(validatedData.email)
      .catch((error) => console.error("Failed to send welcome email:", error));

    // Notify admin of new subscription (non-blocking)
    const adminEmail = process.env.ADMIN_EMAIL || "admin@example.com";
    emailService
      .sendAdminNotification(validatedData.email, adminEmail)
      .catch((error) =>
        console.error("Failed to send admin notification:", error),
      );

    res.json({
      ...subscriber,
      message: "Successfully subscribed! Check your email for confirmation.",
    });
  } catch (error: any) {
    if (error?.message?.includes("unique")) {
      res.status(409).json({ error: "Email already subscribed" });
    } else {
      res.status(400).json({ error: "Invalid email data" });
    }
  }
});

export default router;
