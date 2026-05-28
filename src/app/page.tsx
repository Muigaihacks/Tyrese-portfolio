"use client";

import { useCallback, useState } from "react";
import AtomLoader from "@/components/AtomLoader";
import GlassNav from "@/components/GlassNav";
import Hero from "@/components/Hero";
import ScrollToTop from "@/components/ScrollToTop";
import ServicesSection from "@/components/sections/ServicesSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import TechnologiesMarquee from "@/components/sections/TechnologiesMarquee";
import ProcessSection from "@/components/sections/ProcessSection";
import WhyUsSection from "@/components/sections/WhyUsSection";
import WhoWeServeSection from "@/components/sections/WhoWeServeSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import ContactSection from "@/components/sections/ContactSection";
import NewsletterSection from "@/components/sections/NewsletterSection";

/**
 * Kratos Systems homepage.
 *
 * Phase 1: Loader, GlassNav, Hero
 * Phase 2: Services, Process, Why Us, Who We Serve, Technologies, ScrollToTop
 * Phase 3: Portfolio, Testimonials, Contact, Newsletter, Footer
 * Phase 4: `/about`, legal routes (`/privacy`, `/terms`, `/cookies`), KDPA-aligned drafts,
 * cookie consent banner (+ storage key `kratos_cookie_consent_v1`), footer legal links wired.
 */
export default function Home() {
  const [loading, setLoading] = useState(true);
  const onLoaderComplete = useCallback(() => setLoading(false), []);

  return (
    <>
      <AtomLoader onComplete={onLoaderComplete} />
      <div
        style={{
          opacity: loading ? 0 : 1,
          transition: "opacity 0.6s ease-out",
        }}
        className="min-h-screen bg-surface text-white"
      >
        <GlassNav />
        <main>
          <Hero />
          <ServicesSection />
          <PortfolioSection />
          <TechnologiesMarquee />
          <ProcessSection />
          <WhyUsSection />
          <WhoWeServeSection />
          <TestimonialsSection />
          <ContactSection />
          <NewsletterSection />
        </main>
        <ScrollToTop />
      </div>
    </>
  );
}
