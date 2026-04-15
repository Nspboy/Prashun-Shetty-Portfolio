import { useState } from "react";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-lg border-b shadow-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md transition-all"
          >
            <div className="relative w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
              <span className="text-lg lg:text-xl font-bold text-white">
                PS
              </span>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
            </div>
            <div className="font-bold text-xl lg:text-2xl text-foreground tracking-tight">
              <span className="text-primary">Prashun</span>{" "}
              <span className="text-foreground">Shetty</span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            <a
              href="#about"
              className="text-sm font-semibold text-foreground hover:text-primary transition-all px-4 py-2 rounded-lg hover-elevate"
              data-testid="link-about"
            >
              About
            </a>
            <a
              href="#companies"
              className="text-sm font-semibold text-foreground hover:text-primary transition-all px-4 py-2 rounded-lg hover-elevate"
              data-testid="link-companies"
            >
              Companies
            </a>
            <a
              href="#listings"
              className="text-sm font-semibold text-foreground hover:text-primary transition-all px-4 py-2 rounded-lg hover-elevate"
              data-testid="link-listings"
            >
              Business Listings
            </a>
            <a
              href="#videos"
              className="text-sm font-semibold text-foreground hover:text-primary transition-all px-4 py-2 rounded-lg hover-elevate"
              data-testid="link-videos"
            >
              Videos
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a href="#contact">
              <Button
                variant="ghost"
                className="font-semibold"
                data-testid="button-partner"
              >
                Partner With Us
              </Button>
            </a>
            <a href="#pricing" className="-mt-1">
              <Button
                className="bg-accent text-accent-foreground hover:bg-accent/90 font-semibold px-6 rounded-xl transition-all"
                data-testid="button-list-company"
              >
                List Your Company
              </Button>
            </a>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t">
          <div className="px-6 py-4 space-y-4">
            <a
              href="#about"
              className="block text-sm font-medium py-2"
              data-testid="link-mobile-about"
            >
              About
            </a>
            <a
              href="#companies"
              className="block text-sm font-medium py-2"
              data-testid="link-mobile-companies"
            >
              Companies
            </a>
            <a
              href="#listings"
              className="block text-sm font-medium py-2"
              data-testid="link-mobile-listings"
            >
              Business Listings
            </a>
            <a
              href="#videos"
              className="block text-sm font-medium py-2"
              data-testid="link-mobile-videos"
            >
              Videos
            </a>
            <div className="pt-4 space-y-3">
              <a href="#contact" className="block">
                <Button
                  variant="outline"
                  className="w-full font-medium"
                  data-testid="button-mobile-partner"
                >
                  Partner With Us
                </Button>
              </a>
              <a href="#pricing" className="block">
                <Button
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 font-semibold"
                  data-testid="button-mobile-list"
                >
                  List Your Company
                </Button>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
