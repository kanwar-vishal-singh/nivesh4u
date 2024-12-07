"use client";

import Footer from "@/components/footer/Footer";
import Hero from "@/components/sections/hero/Hero";
import ServiceGrid from "@/components/sections/services/ServiceGrid";
import BusinessLoanSection from "@/components/BusinessLoanSection";
import StatsSection from "@/components/StatsSection";
import FeatureSection from "@/components/FeatureSection";
import ToolsSection from "@/components/ToolsSection";
import TestimonialSection from "@/components/TestimonialSection";
import TradingSection from "@/components/sections/trading/TradingSection";
import PropertySection from "@/components/sections/property/PropertySection";
import NewsSection from "@/components/sections/news/NewsSection";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-background">
        <Hero />
        <ServiceGrid />
        <TradingSection />
        <PropertySection />
        <NewsSection />
        <BusinessLoanSection />
        <StatsSection />
        <FeatureSection />
        <ToolsSection />
        <TestimonialSection />
      </main>
      <Footer />
    </>
  );
}