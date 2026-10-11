"use client";

import React, { useState, useEffect } from "react";
import { Preloader } from "@/components/Preloader";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientsSection } from "@/components/ClientsSection";
import { PortfolioSection } from "@/components/PortfolioSection";
import { ApproachSection } from "@/components/ApproachSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { UnifiedPageCanvas } from "@/components/BrandPatterns";
import { BrandCursor } from "@/components/BrandCursor";
import { Locale, SERVICES } from "@/data/content";

export default function Home({
  initialLocale = "ar",
}: {
  initialLocale?: Locale;
} = {}) {
  const [locale, setLocale] = useState<Locale>(initialLocale);
  const [selectedServiceId, setSelectedServiceId] = useState<string>(
    SERVICES[0].id
  );

  const toggleLocale = () => {
    setLocale((prev) => (prev === "ar" ? "en" : "ar"));
  };

  useEffect(() => {
    if (typeof document !== "undefined") {
      document.documentElement.lang = locale;
      document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    }
  }, [locale]);

  useEffect(() => {
    const handleLocaleChange = (e: Event) => {
      const customEvent = e as CustomEvent<Locale>;
      if (customEvent.detail === "ar" || customEvent.detail === "en") {
        setLocale(customEvent.detail);
      }
    };
    window.addEventListener("athar:locale-change", handleLocaleChange);
    return () =>
      window.removeEventListener("athar:locale-change", handleLocaleChange);
  }, []);

  return (
    <div
      id="athar-page-root"
      className={`min-h-screen flex flex-col font-sans bg-[#FDFCF9] relative overflow-x-hidden ${
        locale === "ar" ? "text-right" : "text-left"
      }`}
    >
      {/* Custom Athar Three-Diamonds Mouse Cursor */}
      <BrandCursor />

      {/* 0. Animated Brand Preloader (1.75s) */}
      <Preloader durationMs={1750} />

      {/* 1. Header / Navbar */}
      <Navbar locale={locale} onToggleLocale={toggleLocale} />

      {/* Main Content with One Continuous, Unbroken Background Canvas */}
      <main className="flex-1 relative">
        {/* Continuous Page Canvas: Unified Diamond Pattern + Scroll-Drawn Decorative Waves + Mouse-Move Parallax */}
        <UnifiedPageCanvas />

        {/* 2. Hero Section */}
        <HeroSection locale={locale} onSelectService={setSelectedServiceId} />

        {/* 3. Services Section */}
        <ServicesSection
          locale={locale}
          onSelectService={setSelectedServiceId}
        />

        {/* 4. Clients & Partners Section (After Services, Before Portfolio) */}
        <ClientsSection locale={locale} />

        {/* 5. Portfolio Section */}
        <PortfolioSection
          locale={locale}
          onSelectService={setSelectedServiceId}
        />

        {/* 6. Work Journey & Brand Philosophy */}
        <ApproachSection locale={locale} />

        {/* 7. Contact CTA Section */}
        <ContactSection
          locale={locale}
          selectedServiceId={selectedServiceId}
          onSelectService={setSelectedServiceId}
        />
      </main>

      {/* 8. Footer */}
      <Footer locale={locale} onSelectService={setSelectedServiceId} />
    </div>
  );
}
