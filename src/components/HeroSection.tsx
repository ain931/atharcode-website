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
      label: { ar: "التسويق الرقمي", en: "Digital Marketing" },
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

                      {/* ── TERMINAL LIVE (code) ── */}
                      {tab.visual === "code" && (
                        <div className="w-full max-w-xs rounded-xl bg-[#0d1117] border border-white/10 overflow-hidden shadow-xl">
                          {/* Terminal chrome bar */}
                          <div className="flex items-center gap-1.5 px-3 py-2 bg-[#161b22] border-b border-white/10">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#febc2e]" />
                            <span className="w-2.5 h-2.5 rounded-full bg-[#28c840]" />
                            <span className="ml-2 text-[10px] text-[#A4AC86] font-mono">athar ~ main</span>
                          </div>
                          {/* Terminal body — always LTR/English, terminals don't have locales */}
                          <div className="p-3 font-mono text-[10px] space-y-1 text-[#EBE3D2]/90" dir="ltr">
                            <p><span className="text-[#A4AC86]">$</span> <span className="text-[#79c0ff]">git</span> <span className="text-[#ffa657]">init</span> <span className="text-[#EBE3D2]/60">athar-platform</span></p>
                            <p className="text-emerald-400 pl-2">✓ Initialized empty repo</p>
                            <p className="mt-1"><span className="text-[#A4AC86]">$</span> <span className="text-[#79c0ff]">npm</span> <span className="text-[#ffa657]">install</span></p>
                            <div className="pl-2 space-y-0.5">
                              <p className="text-[#EBE3D2]/50">added 847 packages</p>
                              <p className="text-emerald-400">✓ ready in 2.1s</p>
                            </div>
                            <p className="mt-1"><span className="text-[#A4AC86]">$</span> <span className="text-[#79c0ff]">npm</span> <span className="text-[#ffa657]">run</span> <span className="text-[#EBE3D2]/80">build</span></p>
                            <div className="pl-2 space-y-0.5">
                              <p className="text-[#A4AC86]">▲ Next.js 15 — Compiling…</p>
                              <p className="text-emerald-400 flex items-center gap-1">
                                ✓ <span className="animate-pulse">Deploy ready</span>
                                <span className="inline-block w-1 h-3 bg-emerald-400 animate-[blink_1s_step-end_infinite]" />
                              </p>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* ── ODOO WORKFLOW FLOW (workflow) ── */}
                      {tab.visual === "workflow" && (
                        <div className="w-full max-w-xs p-4 rounded-xl bg-black/25 border border-white/10">
                          <div className="flex items-center text-[10px] text-[#A4AC86] mb-3">
                            <span className="flex items-center gap-1.5 font-mono">
                              <Workflow className="w-3 h-3 shrink-0" />
                              <span
                                data-ar="تدفق عمليات أودو"
                                data-en="Odoo Business Flow"
                              >
                                {locale === "ar" ? "تدفق عمليات أودو" : "Odoo Business Flow"}
                              </span>
                            </span>
                          </div>
                          {/* Flow nodes */}
                          <div className="flex flex-col items-center gap-0">
                            {[
                              { label: "طلب عرض سعر", en: "Quotation",      color: "#A4AC86" },
                              { label: "أمر البيع",    en: "Sales Order",    color: "#A4AC86" },
                              { label: "التوريد والمخزون", en: "Inventory",  color: "#A4AC86" },
                              { label: "الفوترة والدفع",  en: "Invoice & Pay", color: "#EBE3D2" },
                            ].map((node, i) => (
                              <React.Fragment key={i}>
                                <div
                                  className="w-full px-3 py-1.5 rounded-lg border text-[10px] font-mono flex items-center justify-between"
                                  style={{ background: "rgba(255,255,255,0.07)", borderColor: `${node.color}40` }}
                                >
                                  <span
                                    style={{ color: node.color }}
                                    data-ar={node.label}
                                    data-en={node.en}
                                  >
                                    {locale === "ar" ? node.label : node.en}
                                  </span>
                                  <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
                                </div>
                                {i < 3 && (
                                  <div className="flex flex-col items-center my-0.5">
                                    <div className="w-px h-3 bg-[#A4AC86]/40" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#A4AC86]/60" />
                                  </div>
                                )}
                              </React.Fragment>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* ── VR SCENE GEOMETRIC (interactive) ── */}
                      {tab.visual === "interactive" && (
                        <div className="w-full max-w-xs rounded-xl bg-[#0a0f0a] border border-[#A4AC86]/20 overflow-hidden relative" style={{ minHeight: 140 }}>
                          {/* scan-line overlay */}
                          <div className="absolute inset-0 pointer-events-none"
                            style={{ background: "repeating-linear-gradient(to bottom, transparent, transparent 3px, rgba(164,172,134,0.03) 4px)" }} />
                          {/* horizon grid */}
                          <div className="absolute inset-x-0 bottom-0 h-16 pointer-events-none"
                            style={{
                              backgroundImage: `
                                linear-gradient(to top, rgba(164,172,134,0.12) 0%, transparent 100%),
                                repeating-linear-gradient(90deg, rgba(164,172,134,0.15) 0px, rgba(164,172,134,0.15) 1px, transparent 1px, transparent 28px),
                                repeating-linear-gradient(0deg, rgba(164,172,134,0.15) 0px, rgba(164,172,134,0.15) 1px, transparent 1px, transparent 14px)
                              `,
                            }}
                          />
                          {/* floating geometric shapes */}
                          <div className="relative z-10 p-3 flex flex-col gap-2">
                            <div className="flex items-center text-[10px] font-mono text-[#A4AC86]">
                              <span>VR://scene.load</span>
                            </div>
                            <div className="flex items-center justify-center gap-5 py-3">
                              {/* Octahedron wireframe */}
                              <svg width="52" height="52" viewBox="0 0 52 52" fill="none" className="animate-[spin_16s_linear_infinite]">
                                <polygon points="26,4 48,38 4,38" stroke="#A4AC86" strokeWidth="1" fill="rgba(164,172,134,0.05)" />
                                <polygon points="26,48 48,14 4,14" stroke="#A4AC86" strokeWidth="0.5" strokeDasharray="3 3" fill="none" />
                                <circle cx="26" cy="26" r="2" fill="#EBE3D2" />
                              </svg>
                              {/* Cube wireframe */}
                              <svg width="44" height="44" viewBox="0 0 44 44" fill="none" className="animate-[spin_10s_linear_infinite_reverse]">
                                <rect x="6" y="12" width="24" height="24" stroke="#EBE3D2" strokeWidth="1" fill="rgba(235,227,210,0.04)" />
                                <rect x="14" y="6" width="24" height="24" stroke="#A4AC86" strokeWidth="0.7" strokeDasharray="2 2" fill="none" />
                                <line x1="6" y1="12" x2="14" y2="6" stroke="#A4AC86" strokeWidth="0.7" />
                                <line x1="30" y1="12" x2="38" y2="6" stroke="#A4AC86" strokeWidth="0.7" />
                                <line x1="30" y1="36" x2="38" y2="30" stroke="#A4AC86" strokeWidth="0.7" />
                                <line x1="6" y1="36" x2="14" y2="30" stroke="#A4AC86" strokeWidth="0.7" />
                              </svg>
                            </div>
                            <p
                              data-ar="بيئة واقع افتراضي ثلاثية الأبعاد"
                              data-en="Real-time 3D VR environment"
                              className="text-[10px] text-[#A4AC86]/70 font-mono text-center"
                            >
                              {locale === "ar" ? "بيئة واقع افتراضي ثلاثية الأبعاد" : "Real-time 3D VR environment"}
                            </p>
                          </div>
                        </div>
                      )}

                      {/* ── MARKETING FUNNEL DIAGRAM (growth) ── */}
                      {tab.visual === "growth" && (
                        <div className="w-full max-w-xs p-4 rounded-xl bg-black/25 border border-white/10">
                          <div className="flex items-center justify-between text-[10px] text-[#A4AC86] mb-3">
                            <span className="flex items-center gap-1.5 font-mono">
                              <TrendingUp className="w-3 h-3 shrink-0" />
                              <span
                                data-ar="قمع التسويق"
                                data-en="Marketing Funnel"
                              >
                                {locale === "ar" ? "قمع التسويق" : "Marketing Funnel"}
                              </span>
                            </span>
                            <span className="text-emerald-400">↑ 38% ROI</span>
                          </div>
                          {/* Funnel layers */}
                          <div className="flex flex-col items-center gap-1">
                            {[
                              { label: "الوعي",    en: "Awareness",   w: "100%", opacity: 0.35, users: "12K" },
                              { label: "الاهتمام", en: "Interest",    w: "78%",  opacity: 0.5,  users: "9.3K" },
                              { label: "النية",    en: "Intent",      w: "55%",  opacity: 0.65, users: "6.6K" },
                              { label: "التحويل",  en: "Conversion",  w: "32%",  opacity: 0.85, users: "3.8K" },
                              { label: "الولاء",   en: "Loyalty",     w: "18%",  opacity: 1,    users: "2.1K" },
                            ].map((layer, i) => (
                              <div key={i} className="flex items-center gap-2 w-full">
                                <span
                                  data-ar={layer.label}
                                  data-en={layer.en}
                                  className="text-[9px] text-[#EBE3D2]/60 w-16 shrink-0"
                                  style={{ textAlign: isRtl ? "right" : "left" }}
                                >
                                  {locale === "ar" ? layer.label : layer.en}
                                </span>
                                <div className="flex-1 flex justify-center">
                                  <div
                                    className="h-5 rounded flex items-center justify-center"
                                    style={{ width: layer.w, background: `rgba(164,172,134,${layer.opacity})` }}
                                  >
                                    <span className="text-[9px] font-mono text-[#0d1117] font-bold">{layer.users}</span>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )}

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
