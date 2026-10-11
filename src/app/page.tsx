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
import { Locale, SERVICES, CONTACT_INFO } from "@/data/content";

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

      {/* 9. Floating WhatsApp Direct Action Button */}
      <a
        href={CONTACT_INFO.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب | WhatsApp Chat"
        className="fixed bottom-6 end-6 z-40 group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20BD5A] text-white p-3.5 sm:px-4 sm:py-3 rounded-full shadow-[0_10px_25px_rgba(37,211,102,0.4)] hover:shadow-[0_12px_30px_rgba(37,211,102,0.6)] hover:scale-105 active:scale-95 transition-all duration-200 cursor-pointer"
      >
        <svg className="w-5 h-5 fill-current shrink-0" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.711 1.456h.005c6.554 0 11.89-5.336 11.893-11.893a11.821 11.821 0 00-3.48-8.414z"/>
        </svg>
        <span
          data-ar="تواصل واتساب"
          data-en="WhatsApp Us"
          className="text-xs sm:text-sm font-bold hidden sm:inline"
        >
          {locale === "ar" ? "تواصل واتساب" : "WhatsApp Us"}
        </span>
      </a>
    </div>
  );
}
