"use client";

import React, { useState } from "react";
import { HERO_CONTENT, stats, Locale } from "@/data/content";
import { ImpactDiamonds } from "./BrandLogo";
import { SpotlightCard } from "./SpotlightCard";
import { DiamondLatticePattern, CardOrganicCorner } from "./BrandPatterns";
import {
  Code2,
  Workflow,
  Boxes,
  TrendingUp,
  ArrowUpRight,
  CheckCircle2,
  Layers,
  Cpu,
  Eye,
} from "lucide-react";

interface HeroSectionProps {
  locale: Locale;
  onSelectService?: (serviceId: string) => void;
}

export function HeroSection({ locale, onSelectService }: HeroSectionProps) {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      id: "software",
      serviceId: "custom-software",
      icon: Code2,
      label: { ar: "تطوير البرمجيات", en: "Custom Software" },
      subtitle: {
        ar: "هندسة برمجية ومنصات سحابية عالية الأداء",
        en: "High-performance bespoke web architectures",
      },
      visual: "code",
    },
    {
      id: "odoo",
      serviceId: "odoo-solutions",
      icon: Workflow,
      label: { ar: "أنظمة أودو (Odoo)", en: "Odoo ERP" },
      subtitle: {
        ar: "تخصيص موديولات وأتمتة دورات العمل للشركات",
        en: "Enterprise workflows & custom Odoo modules",
      },
      visual: "workflow",
    },
    {
      id: "interactive",
      serviceId: "interactive-experiences",
      icon: Boxes,
      label: { ar: "تجارب تفاعلية و AR/VR", en: "Interactive & AR/VR" },
      subtitle: {
        ar: "برمجيات الشاشات التفاعلية والواقع المعزز والافتراضي",
        en: "Interactive screens, real-time 3D & AR/VR software",
      },
      visual: "interactive",
    },
    {
      id: "marketing",
      serviceId: "digital-marketing",
      icon: TrendingUp,
      label: { ar: "التسويق الرقمي", en: "Digital Growth" },
      subtitle: {
        ar: "استراتيجيات نمو رقمي وحملات موجهة بالبيانات",
        en: "Data-driven acquisition & performance marketing",
      },
      visual: "growth",
    },
  ];

  const isRtl = locale === "ar";
  const hasAllStats =
    stats.projectsCompleted !== null &&
    stats.clientsCount !== null &&
    stats.satisfactionRate !== null &&
    stats.yearsExperience !== null;

  return (
    <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-24 md:pt-40 md:pb-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Centered Header Content */}
        <div className="text-center max-w-4xl mx-auto flex flex-col items-center">
          {/* High-Impact Centered Headline (Single H1 on the page) */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif text-[#414833] tracking-tight leading-[1.25] sm:leading-[1.2]">
            <span
              data-ar={HERO_CONTENT.headlineMain.ar}
              data-en={HERO_CONTENT.headlineMain.en}
            >
              {HERO_CONTENT.headlineMain[locale]}
            </span>{" "}
            <span
              data-ar={HERO_CONTENT.headlineAccent.ar}
              data-en={HERO_CONTENT.headlineAccent.en}
              className="block mt-2 font-sans font-bold text-[#737A5D] text-2xl sm:text-4xl lg:text-5xl"
            >
              {HERO_CONTENT.headlineAccent[locale]}
            </span>
          </h1>

          {/* Supporting Copy */}
          <p
            data-ar={HERO_CONTENT.description.ar}
            data-en={HERO_CONTENT.description.en}
            className="mt-5 sm:mt-6 text-sm sm:text-lg text-[#535b42] leading-relaxed max-w-2xl text-center px-1"
          >
            {HERO_CONTENT.description[locale]}
          </p>

          {/* Action CTAs: Button 1 -> #contact, Button 2 -> #services */}
          <div className="mt-7 sm:mt-9 w-full sm:w-auto flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4">
            <a
              href="#contact"
              data-animated-btn="dark"
              data-dark-zone="true"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3.5 rounded-xl text-sm font-bold text-[#FDFCF9] bg-[#414833] hover:bg-[#2e3324] border border-[#565f44] shadow-md hover:shadow-xl transition-all duration-200 group cursor-pointer"
            >
              <span
                data-btn-sheen="true"
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200"
              />
              <span
                data-ar={HERO_CONTENT.primaryCta.ar}
                data-en={HERO_CONTENT.primaryCta.en}
                className="relative z-10"
              >
                {HERO_CONTENT.primaryCta[locale]}
              </span>
              <ArrowUpRight
                data-dir-arrow="true"
                className={`relative z-10 w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  locale === "ar" ? "rotate-[-90deg] group-hover:-translate-x-0.5" : ""
                }`}
              />
            </a>

            <a
              href="#services"
              data-animated-btn="light"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl text-sm font-bold text-[#414833] bg-[#EBE3D2]/80 hover:bg-[#EBE3D2] border border-[#CBBFA3] shadow-xs hover:shadow-md transition-all duration-200 group cursor-pointer"
            >
              <span
                data-btn-sheen="true"
                className="pointer-events-none absolute inset-0 rounded-xl opacity-0 transition-opacity duration-200"
              />
              <Eye className="relative z-10 w-4 h-4 text-[#737A5D] transition-transform duration-200 group-hover:scale-110" />
              <span
                data-ar={HERO_CONTENT.secondaryCta.ar}
                data-en={HERO_CONTENT.secondaryCta.en}
                className="relative z-10"
              >
                {HERO_CONTENT.secondaryCta[locale]}
              </span>
            </a>
          </div>
        </div>

        {/* Interactive Lighting Showcase Deck — SpotlightCard with Mouse Pattern & Tilt */}
        <div className="mt-10 sm:mt-14 max-w-5xl mx-auto">
          <SpotlightCard
            tiltScale={0.45}
            className="p-4 sm:p-7 border border-[#CBBFA3]/85 shadow-[0_25px_60px_rgba(65,72,51,0.08)]"
          >
            {/* Top Deck Header — Main Box Heading */}
            <div className="relative z-10 flex items-center justify-between gap-4 pb-4 sm:pb-5 border-b border-[#414833]/10">
              <h2
                data-ar="استكشف المجالات التخصصية والتجارب البرمجية"
                data-en="Explore Core Software & Experience Realms"
                className="text-sm sm:text-lg font-bold text-[#414833] text-start"
              >
                {locale === "ar"
                  ? "استكشف المجالات التخصصية والتجارب البرمجية"
                  : "Explore Core Software & Experience Realms"}
              </h2>
            </div>

            {/* Domain Switcher Tabs with iPhone Liquid Glass Glider */}
            <div
              data-liquid-bar="hero"
              style={{ "--liquid-radius": "16px" } as React.CSSProperties}
              className="athar-liquid-bar relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-2.5 my-4 sm:my-5"
              role="tablist"
            >
              <span data-liquid-pill="true" className="athar-liquid-pill" aria-hidden="true" />
              {tabs.map((tab, idx) => {
                const Icon = tab.icon;
                const isActive = activeTab === idx;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    role="tab"
                    aria-selected={isActive}
                    data-hero-tab={idx}
                    data-liquid-item="true"
                    data-active={isActive ? "true" : "false"}
                    onClick={() => setActiveTab(idx)}
                    className={`athar-liquid-item relative p-2.5 sm:p-3 rounded-2xl text-start cursor-pointer border ${
                      isActive
                        ? "bg-[#414833] text-[#FDFCF9] border-[#414833] shadow-md"
                        : "bg-[#FDFCF9] text-[#414833] border-[#CBBFA3]/65"
                    }`}
                  >
                    <div className="relative z-10 flex items-center gap-2 pointer-events-none">
                      <Icon
                        data-hero-tab-icon={idx}
                        className={`w-4 h-4 shrink-0 ${
                          isActive ? "text-[#EBE3D2]" : "text-[#737A5D]"
                        }`}
                      />
                      <span
                        data-ar={tab.label.ar}
                        data-en={tab.label.en}
                        className="text-[11px] sm:text-xs font-bold truncate"
                      >
                        {tab.label[locale]}
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Showcase Stage — All 4 panels rendered in DOM for instant switching */}
            <div className="relative z-10 rounded-2xl bg-gradient-to-br from-[#414833] via-[#333a27] to-[#252a1d] text-[#FDFCF9] p-5 sm:p-9 overflow-hidden shadow-inner min-h-[240px] flex flex-col justify-center">
              <DiamondLatticePattern variant="dark" />

              {/* Edge-aligned Organic Corner placed on the opposite side of the text */}
              <CardOrganicCorner
                variant="dark"
                align={isRtl ? "left" : "right"}
                className="w-44 h-28 sm:w-72 sm:h-44 opacity-85"
              />

              {tabs.map((tab, idx) => {
                const isActive = activeTab === idx;
                return (
                  <div
                    key={tab.id}
                    data-hero-panel={idx}
                    className={`relative z-10 grid-cols-1 md:grid-cols-12 gap-6 items-center ${
                      isActive
                        ? "grid opacity-100 athar-stage-enter"
                        : "hidden opacity-0"
                    }`}
                  >
                    {/* Realm Text (7 cols) */}
                    <div className="md:col-span-7 text-start">
                      <span
                        data-ar="نطاق العمل الرئيسي"
                        data-en="Core Engineering Domain"
                        className="text-xs font-mono tracking-wider text-[#A4AC86] uppercase mb-1 block"
                      >
                        {locale === "ar" ? "نطاق العمل الرئيسي" : "Core Engineering Domain"}
                      </span>
                      <h3
                        data-ar={tab.label.ar}
                        data-en={tab.label.en}
                        className="text-xl sm:text-2xl font-bold text-[#EBE3D2] mb-2 font-serif"
                      >
                        {tab.label[locale]}
                      </h3>
                      <p
                        data-ar={tab.subtitle.ar}
                        data-en={tab.subtitle.en}
                        className="text-xs sm:text-sm text-[#EBE3D2]/85 leading-relaxed max-w-lg mb-4"
                      >
                        {tab.subtitle[locale]}
                      </p>
                      <a
                        href="#contact"
                        data-select-service={tab.serviceId}
                        onClick={() => {
                          onSelectService?.(tab.serviceId);
                          if (typeof window !== "undefined") {
                            window.dispatchEvent(
                              new CustomEvent("athar:select-service", {
                                detail: tab.serviceId,
                              })
                            );
                          }
                        }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EBE3D2]/15 hover:bg-[#EBE3D2] text-[#EBE3D2] hover:text-[#414833] border border-[#EBE3D2]/30 text-xs font-bold transition-all duration-200 cursor-pointer"
                      >
                        <span
                          data-ar="اطلب استشارة في هذه الخدمة"
                          data-en="Inquire About This Service"
                        >
                          {locale === "ar"
                            ? "اطلب استشارة في هذه الخدمة"
                            : "Inquire About This Service"}
                        </span>
                        <ArrowUpRight
                          data-dir-arrow="true"
                          className={`w-3.5 h-3.5 ${
                            locale === "ar" ? "rotate-[-90deg]" : ""
                          }`}
                        />
                      </a>
                    </div>

                    {/* Animated Diagram / Wireframe (5 cols) */}
                    <div className="md:col-span-5 flex justify-center">
                      <div className="w-full max-w-xs p-4 rounded-xl bg-black/25 border border-white/15">
                        {tab.visual === "interactive" && (
                          <div className="space-y-3">
                            <div className="flex items-center justify-between text-xs text-[#A4AC86]">
                              <span className="flex items-center gap-1.5">
                                <Cpu className="w-3.5 h-3.5" />
                                <span>Real-time 3D Engine</span>
                              </span>
                              <span className="text-[10px] text-emerald-400">60 FPS</span>
                            </div>
                            <div className="h-20 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden">
                              <div className="w-12 h-12 border border-[#A4AC86] rotate-45 animate-spin duration-[12000ms] rounded-md flex items-center justify-center">
                                <div className="w-6 h-6 border border-[#EBE3D2] -rotate-45 rounded-sm"></div>
                              </div>
                            </div>
                            <p
                              data-ar="برمجيات تفاعلية (شاشات، محاكاة وواقع معزز)"
                              data-en="Interactive software & simulator engine"
                              className="text-[11px] text-[#EBE3D2]/75 text-center"
                            >
                              {locale === "ar"
                                ? "برمجيات تفاعلية (شاشات، محاكاة وواقع معزز)"
                                : "Interactive software & simulator engine"}
                            </p>
                          </div>
                        )}

                        {tab.visual === "workflow" && (
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between text-xs text-[#A4AC86]">
                              <span className="flex items-center gap-1.5">
                                <Workflow className="w-3.5 h-3.5" />
                                <span>Odoo Automation</span>
                              </span>
                              <span className="text-[10px] text-emerald-400">Synced</span>
                            </div>
                            <div className="space-y-1.5 text-[11px]">
                              <div className="p-1.5 rounded bg-white/10 flex items-center justify-between">
                                <span>Inventory & Sales</span>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              </div>
                              <div className="p-1.5 rounded bg-white/10 flex items-center justify-between">
                                <span>Finance & Accounting</span>
                                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                              </div>
                            </div>
                          </div>
                        )}

                        {tab.visual === "code" && (
                          <div className="space-y-2">
                            <div className="flex items-center justify-between text-xs text-[#A4AC86]">
                              <span className="flex items-center gap-1.5">
                                <Layers className="w-3.5 h-3.5" />
                                <span>Modern Stack</span>
                              </span>
                              <span className="text-[10px] text-emerald-400">Next.js + APIs</span>
                            </div>
                            <div className="p-2.5 rounded-lg bg-white/5 font-mono text-[10px] text-[#EBE3D2]/85 space-y-1">
                              <p className="text-[#A4AC86]">{">"} architecture: scalable</p>
                              <p>{">"} security: enterprise</p>
                              <p>{">"} status: operational</p>
                            </div>
                          </div>
                        )}

                        {tab.visual === "growth" && (
                          <div className="space-y-2.5">
                            <div className="flex items-center justify-between text-xs text-[#A4AC86]">
                              <span className="flex items-center gap-1.5">
                                <TrendingUp className="w-3.5 h-3.5" />
                                <span>Growth Funnel</span>
                              </span>
                              <span className="text-[10px] text-emerald-400">Optimized</span>
                            </div>
                            <div className="h-16 flex items-end gap-1.5 pt-2">
                              <div className="w-1/4 h-[40%] bg-[#A4AC86]/50 rounded-t"></div>
                              <div className="w-1/4 h-[65%] bg-[#A4AC86]/70 rounded-t"></div>
                              <div className="w-1/4 h-[85%] bg-[#A4AC86] rounded-t"></div>
                              <div className="w-1/4 h-[100%] bg-[#EBE3D2] rounded-t"></div>
                            </div>
                            <p
                              data-ar="حملات موجهة وعائد نمو مستدام"
                              data-en="Data-driven ROI campaigns"
                              className="text-[11px] text-[#EBE3D2]/75 text-center"
                            >
                              {locale === "ar" ? "حملات موجهة وعائد نمو مستدام" : "Data-driven ROI campaigns"}
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </SpotlightCard>
        </div>

        {/* 3) Trust Bar — Rendered only when real numeric stats are configured */}
        {hasAllStats && (
          <div className="mt-10 sm:mt-14 pt-8 border-t border-[#414833]/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-5 sm:gap-6">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#EBE3D2] border border-[#CBBFA3] text-[#414833] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {stats.projectsCompleted}+
                </span>
                <div className="text-start">
                  <p
                    data-ar="مشروع مكتمل"
                    data-en="Completed Projects"
                    className="text-xs sm:text-sm font-bold text-[#414833]"
                  >
                    {locale === "ar" ? "مشروع مكتمل" : "Completed Projects"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#EBE3D2] border border-[#CBBFA3] text-[#414833] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {stats.clientsCount}+
                </span>
                <div className="text-start">
                  <p
                    data-ar="عميل حول المنطقة"
                    data-en="Clients Across the Region"
                    className="text-xs sm:text-sm font-bold text-[#414833]"
                  >
                    {locale === "ar" ? "عميل حول المنطقة" : "Clients Across the Region"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#EBE3D2] border border-[#CBBFA3] text-[#414833] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {stats.satisfactionRate}%
                </span>
                <div className="text-start">
                  <p
                    data-ar="رضا العملاء"
                    data-en="Client Satisfaction"
                    className="text-xs sm:text-sm font-bold text-[#414833]"
                  >
                    {locale === "ar" ? "رضا العملاء" : "Client Satisfaction"}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-[#EBE3D2] border border-[#CBBFA3] text-[#414833] font-serif font-bold text-sm flex items-center justify-center shrink-0">
                  {stats.yearsExperience}+
                </span>
                <div className="text-start">
                  <p
                    data-ar="سنوات خبرة"
                    data-en="Years of Experience"
                    className="text-xs sm:text-sm font-bold text-[#414833]"
                  >
                    {locale === "ar" ? "سنوات خبرة" : "Years of Experience"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
