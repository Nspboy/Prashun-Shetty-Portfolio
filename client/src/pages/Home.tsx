import { useEffect } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import CompaniesSection from "@/components/CompaniesSection";
import BusinessListingsSection from "@/components/BusinessListingsSection";
import PricingSection from "@/components/PricingSection";
import YouTubeSection from "@/components/YouTubeSection";
import ContactForm from "@/components/ContactForm";
import Newsletter from "@/components/Newsletter";
import Footer from "@/components/Footer";
import { setPageMeta, SEO_DEFAULTS, generateBreadcrumbs } from "@/services/seo";

export default function Home() {
  useEffect(() => {
    // Set SEO meta tags for home page
    setPageMeta(SEO_DEFAULTS.home);

    // Set canonical URL
    const fullMeta = {
      ...SEO_DEFAULTS.home,
      canonicalUrl: window.location.origin,
    };
    setPageMeta(fullMeta);

    // Generate breadcrumb schema
    generateBreadcrumbs([{ name: "Home", url: "/" }]);
  }, []);

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <CompaniesSection />
        <BusinessListingsSection />
        <PricingSection />
        <YouTubeSection />
        <ContactForm />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
}
