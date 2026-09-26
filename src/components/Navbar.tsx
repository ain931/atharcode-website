"use client";

import React, { useState, useEffect } from "react";
import { BrandLogo, BrandStandaloneIcon } from "./BrandLogo";
import { NAV_ITEMS, Locale } from "@/data/content";
import { Menu, X, Globe, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  locale: Locale;
  onToggleLocale: () => void;
}

export function Navbar({ locale, onToggleLocale }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let rafId: number | null = null;

    const updateScrollState = () => {
      rafId = null;
      const scrolled = window.scrollY > 20;
      setIsScrolled((prev) => (prev !== scrolled ? scrolled : prev));
    };

    const handleScroll = () => {
      if (rafId === null) {
        rafId = requestAnimationFrame(updateScrollState);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#FDFCF9]/95 backdrop-blur-md shadow-[0_8px_30px_rgba(65,72,51,0.06)] py-2"
          : "bg-[#FDFCF9]/90 backdrop-blur-sm py-2.5"
      }`}
    >
      {/* Subtle Architectural Bottom Border Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#CBBFA3]/70 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* 1. Brand Logo (Compact xs size) */}
          <a
            href="#"
            className="flex items-center gap-2 group transition-opacity hover:opacity-90 shrink-0"
            aria-label="Athar Home"
          >
            <BrandLogo size="xs" variant="dark" />
          </a>

          {/* 2. Distinct Architectural Website Top Bar */}
          <nav
            data-topbar-nav="true"
            className="relative hidden md:flex items-center gap-5 lg:gap-7 px-5 py-1"
            aria-label="Main Navigation"
          >
            {/* Gliding Architectural Bottom Beam */}
            <span
              data-topbar-beam="true"
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-0.5 left-0 h-[2px] rounded-full bg-gradient-to-r from-transparent via-[#414833] to-transparent opacity-0 transition-all duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]"
            />

            {NAV_ITEMS.map((item, idx) => (
              <a
                key={item.id}
                href={item.href}
                data-topbar-link={idx}
                className="relative px-1.5 py-1 text-[14.5px] lg:text-[15.5px] leading-none font-bold tracking-wide text-[#414833]/90 hover:text-[#414833] transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
              >
                <span
                  data-ar={item.label.ar}
                  data-en={item.label.en}
                  className="relative z-10 pointer-events-none"
                >
                  {item.label[locale]}
                </span>
              </a>
            ))}
          </nav>

          {/* 3. Right Actions: Architectural Language Switch + Animated Geometric CTA */}
          <div className="hidden md:flex items-center gap-3.5 shrink-0">
            <button
              type="button"
              data-toggle-locale="true"
              onClick={onToggleLocale}
              className="group relative inline-flex items-center gap-1.5 px-2.5 py-1.5 text-xs font-bold tracking-wider uppercase text-[#414833] hover:text-[#737A5D] transition-colors duration-200 cursor-pointer"
              aria-label="Switch Language"
            >
              <Globe className="w-3.5 h-3.5 text-[#737A5D] group-hover:rotate-12 transition-transform duration-200 pointer-events-none" />
              <span
                data-ar="EN"
                data-en="عربي"
                className="pointer-events-none"
              >
                {locale === "ar" ? "EN" : "عربي"}
              </span>
              <span className="absolute bottom-1 inset-x-2.5 h-px bg-[#CBBFA3] scale-x-0 group-hover:scale-x-100 transition-transform duration-200 origin-center pointer-events-none" />
            </button>

            {/* Vertical Architectural Divider */}
            <span aria-hidden="true" className="h-4 w-px bg-[#CBBFA3]/65" />

            {/* Architectural CTA Button with Interactive Liquid Glass & Magnetic Hover */}
            <a
              href="#contact"
              data-animated-btn="dark"
              data-dark-zone="true"
              className="athar-animated-btn group relative inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-[#FDFCF9] bg-[#414833] hover:bg-[#2e3324] border border-[#737A5D]/40 shadow-[0_4px_14px_rgba(65,72,51,0.12)] hover:shadow-[0_10px_24px_rgba(65,72,51,0.24)] transition-all duration-200 overflow-hidden cursor-pointer"
            >
              <span
                data-btn-sheen="true"
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 z-0"
              />
              <span className="absolute bottom-0 inset-x-0 h-[1.5px] bg-gradient-to-r from-[#A4AC86]/40 via-[#A4AC86] to-[#A4AC86]/40 pointer-events-none" />
              <span
                data-ar="ابدأ مشروعك"
                data-en="Start a Project"
                className="relative z-10 pointer-events-none"
              >
                {locale === "ar" ? "ابدأ مشروعك" : "Start a Project"}
              </span>
              <span className="relative z-10 w-4 h-4 rounded bg-white/10 flex items-center justify-center group-hover:bg-[#A4AC86] group-hover:text-[#414833] group-hover:scale-110 transition-all duration-300 pointer-events-none">
                <ArrowUpRight
                  data-dir-arrow="true"
                  className={`w-3 h-3 transition-transform duration-300 group-hover:-translate-y-0.5 ${
                    locale === "ar"
                      ? "rotate-[-90deg] group-hover:-translate-x-0.5"
                      : "group-hover:translate-x-0.5"
                  }`}
                />
              </span>
            </a>
          </div>

          {/* Mobile Menu Controls */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              data-toggle-locale="true"
              onClick={onToggleLocale}
              className="px-2.5 py-1.5 rounded-lg text-xs font-bold text-[#414833] bg-[#EBE3D2]/60 border border-[#CBBFA3]/60 cursor-pointer"
              aria-label="Switch Language"
            >
              <span
                data-ar="EN"
                data-en="عربي"
                className="pointer-events-none"
              >
                {locale === "ar" ? "EN" : "عربي"}
              </span>
            </button>
            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#414833] hover:bg-[#EBE3D2]/50 rounded-lg transition-colors cursor-pointer"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 pointer-events-none" />
              ) : (
                <Menu className="w-6 h-6 pointer-events-none" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        id="mobile-menu-overlay"
        className={`absolute top-full inset-x-0 h-[calc(100dvh-100%)] bg-[#FDFCF9] z-40 md:hidden flex-col p-5 sm:p-6 border-t border-[#CBBFA3]/50 overflow-y-auto shadow-2xl ${
          mobileMenuOpen ? "flex" : "hidden"
        }`}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col gap-4 py-2 sm:py-4 flex-1">
          <div className="flex items-center gap-3 p-3.5 rounded-xl bg-[#EBE3D2]/35 border border-[#CBBFA3]/50">
            <BrandStandaloneIcon
              size={40}
              variant="app"
              rounded
              className="shadow-xs shrink-0"
            />
            <div className="min-w-0">
              <p
                data-ar="أثر (Athar)"
                data-en="AtharCode"
                className="text-sm font-bold text-[#414833]"
              >
                {locale === "ar" ? "أثر (Athar)" : "AtharCode"}
              </p>
              <p className="text-xs text-[#737A5D] truncate">
                من الفكرة إلى الأثر — From Idea to Impact
              </p>
            </div>
          </div>

          <nav className="flex flex-col gap-1.5 mt-1 sm:mt-2">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={item.href}
                data-mobile-nav-link="true"
                onClick={() => setMobileMenuOpen(false)}
                className="px-4 py-3 text-base font-semibold text-[#414833] hover:bg-[#EBE3D2]/50 rounded-xl transition-colors flex items-center justify-between"
              >
                <span data-ar={item.label.ar} data-en={item.label.en}>
                  {item.label[locale]}
                </span>
                <span className="w-1.5 h-1.5 rotate-45 bg-[#737A5D]" />
              </a>
            ))}
          </nav>
        </div>

        <div className="pt-4 border-t border-[#CBBFA3]/40 flex flex-col gap-3">
          <a
            href="#contact"
            data-mobile-nav-link="true"
            onClick={() => setMobileMenuOpen(false)}
            className="w-full text-center py-3.5 rounded-xl text-sm font-bold text-[#FDFCF9] bg-[#414833] hover:bg-[#2e3324] shadow-sm transition-colors"
          >
            <span data-ar="ابدأ مشروعك معنا" data-en="Start a Project">
              {locale === "ar" ? "ابدأ مشروعك معنا" : "Start a Project"}
            </span>
          </a>
        </div>
      </div>
    </header>
  );
}
