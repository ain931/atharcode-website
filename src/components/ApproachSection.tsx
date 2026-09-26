"use client";

import React, { useState } from "react";
import { PHILOSOPHY_PILLARS, Locale } from "@/data/content";
import { ImpactDiamonds, PhilosophySymbol, BrandLogo } from "./BrandLogo";
import { SpotlightCard } from "./SpotlightCard";
import { DiamondLatticePattern, CardOrganicCorner } from "./BrandPatterns";
import { ArrowRight, ArrowLeft, CheckCircle2 } from "lucide-react";

interface ApproachSectionProps {
  locale: Locale;
}

export function ApproachSection({ locale }: ApproachSectionProps) {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const isRtl = locale === "ar";
  const ArrowIcon = isRtl ? ArrowLeft : ArrowRight;

  return (
    <section id="philosophy" className="py-16 sm:py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-16 md:mb-20">
          <h2
            data-ar="أكثر من مجرد كود.. نترك أثراً حقيقياً"
            data-en="More Than Code.. We Leave a Lasting Impact"
            className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#414833] tracking-tight leading-tight"
          >
            {locale === "ar"
              ? "أكثر من مجرد كود.. نترك أثراً حقيقياً"
              : "More Than Code.. We Leave a Lasting Impact"}
          </h2>

          <p
            data-ar="لم نستلهم هوية وهندسة عمل من عناصر الحضارة الأولى، لنصنع رحلة متكاملة تبدأ من الفكرة الأولى وتصل إلى قيمة مستدامة."
            data-en="Inspired by the four core elements of our brand mark, we craft an integrated journey starting from the very first spark to delivering sustainable value."
            className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#535b42] leading-relaxed"
          >
            {locale === "ar"
              ? "لم نستلهم هوية وهندسة عمل من عناصر الحضارة الأولى، لنصنع رحلة متكاملة تبدأ من الفكرة الأولى وتصل إلى قيمة مستدامة."
              : "Inspired by the four core elements of our brand mark, we craft an integrated journey starting from the very first spark to delivering sustainable value."}
          </p>
        </div>

        {/* Interactive Step Navigator (1, 2, 3, 4) with iPhone Liquid Glass Glider */}
        <div
          data-liquid-bar="philosophy"
          style={{ "--liquid-radius": "16px" } as React.CSSProperties}
          className="athar-liquid-bar grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5 max-w-4xl mx-auto mb-8 sm:mb-12"
          role="tablist"
        >
          <span data-liquid-pill="true" className="athar-liquid-pill" aria-hidden="true" />
          {PHILOSOPHY_PILLARS.map((pillar, idx) => {
            const isActive = activeStepIndex === idx;
            return (
              <button
                key={pillar.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                data-step-btn={idx}
                data-liquid-item="true"
                data-active={isActive ? "true" : "false"}
                onClick={() => setActiveStepIndex(idx)}
                className={`athar-liquid-item relative p-3 sm:p-4 rounded-xl sm:rounded-2xl text-start cursor-pointer border ${
                  isActive
                    ? "bg-[#414833] text-[#FDFCF9] border-[#414833] shadow-lg"
                    : "bg-[#FDFCF9] text-[#414833] border-[#CBBFA3]/65"
                }`}
              >
                <div className="relative z-10 flex items-center justify-between mb-1 sm:mb-1.5 pointer-events-none">
                  <span
                    data-step-badge={idx}
                    data-ar={`المرحلة ${pillar.step}`}
                    data-en={`Phase ${pillar.step}`}
                    className={`text-[11px] sm:text-xs font-bold uppercase tracking-wider ${
                      isActive ? "text-[#A4AC86]" : "text-[#737A5D]"
                    }`}
                  >
                    {locale === "ar" ? `المرحلة ${pillar.step}` : `Phase ${pillar.step}`}
                  </span>
                  <span
                    data-step-dot={idx}
                    className={`w-2 h-2 rounded-full ${
                      isActive ? "bg-[#A4AC86] animate-pulse" : "bg-[#CBBFA3]"
                    }`}
                  />
                </div>
                <h3
                  data-ar={pillar.title.ar}
                  data-en={pillar.title.en}
                  className="relative z-10 text-xs sm:text-base font-bold truncate pointer-events-none"
                >
                  {pillar.title[locale]}
                </h3>
                <p
                  data-step-sub={idx}
                  data-ar={pillar.subtitle.ar}
                  data-en={pillar.subtitle.en}
                  className={`relative z-10 text-[10px] sm:text-[11px] truncate mt-0.5 pointer-events-none ${
                    isActive ? "text-[#EBE3D2]/80" : "text-[#737A5D]"
                  }`}
                >
                  {pillar.subtitle[locale]}
                </p>
              </button>
            );
          })}
        </div>

        {/* Central Illuminated Stage — All 4 panels rendered in DOM for instant switching */}
        <div className="max-w-4xl mx-auto">
          <SpotlightCard
            className="p-5 sm:p-8 md:p-12 border border-[#CBBFA3]/75 shadow-[0_20px_50px_rgba(65,72,51,0.06)] relative overflow-hidden"
            spotlightColor="rgba(164, 172, 134, 0.16)"
          >
            <CardOrganicCorner
              variant="light"
              align={isRtl ? "left" : "right"}
              className="w-40 h-28 sm:w-56 sm:h-36 opacity-70"
            />

            {PHILOSOPHY_PILLARS.map((pillar, idx) => {
              const isActive = activeStepIndex === idx;
              return (
                <div
                  key={pillar.id}
                  data-step-panel={idx}
                  className={`relative z-10 grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 items-center ${
                    isActive
                      ? "grid opacity-100 athar-stage-enter"
                      : "hidden opacity-0"
                  }`}
                >
                  {/* Left Visual Symbol Stage (5 cols) */}
                  <div className="md:col-span-5 flex flex-col items-center justify-center p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-[#F4EFE3] border border-[#CBBFA3]/75">
                    <div className="w-24 h-20 sm:w-28 sm:h-24 rounded-2xl bg-[#FDFCF9] shadow-sm border border-[#CBBFA3]/65 flex items-center justify-center mb-3">
                      <PhilosophySymbol symbol={pillar.symbol} variant="dark" />
                    </div>
                    <p
                      data-ar={`${pillar.step}. ${pillar.title.ar} — ${pillar.subtitle.ar}`}
                      data-en={`${pillar.step}. ${pillar.title.en} — ${pillar.subtitle.en}`}
                      className="text-xs font-bold text-[#414833] tracking-wider text-center"
                    >
                      {pillar.step}. {pillar.title[locale]} — {pillar.subtitle[locale]}
                    </p>
                  </div>

                  {/* Right Text Description (7 cols) */}
                  <div className="md:col-span-7 text-start">
                    <span
                      data-ar={`المرحلة ${pillar.step} • ${pillar.title.ar}`}
                      data-en={`Step ${pillar.step} • ${pillar.title.en}`}
                      className="text-xs font-bold uppercase tracking-wider text-[#737A5D] mb-1.5 block"
                    >
                      {locale === "ar" ? `المرحلة ${pillar.step} • ${pillar.title[locale]}` : `Step ${pillar.step} • ${pillar.title[locale]}`}
                    </span>
                    <h3
                      data-ar={pillar.subtitle.ar}
                      data-en={pillar.subtitle.en}
                      className="text-xl sm:text-3xl font-bold text-[#414833] font-serif mb-3 sm:mb-4"
                    >
                      {pillar.subtitle[locale]}
                    </h3>
                    <p
                      data-ar={pillar.description.ar}
                      data-en={pillar.description.en}
                      className="text-xs sm:text-base text-[#535b42] leading-relaxed mb-5 sm:mb-6"
                    >
                      {pillar.description[locale]}
                    </p>

                    <div className="p-3.5 sm:p-4 rounded-xl sm:rounded-2xl bg-[#EBE3D2]/55 border border-[#CBBFA3]/65 flex items-center justify-between gap-3">
                      <div>
                        <p
                          data-ar={pillar.processPhase.ar}
                          data-en={pillar.processPhase.en}
                          className="text-xs sm:text-sm font-bold text-[#414833]"
                        >
                          {pillar.processPhase[locale]}
                        </p>
                      </div>
                      <CheckCircle2 className="w-5 h-5 text-[#737A5D] shrink-0" />
                    </div>
                  </div>
                </div>
              );
            })}
          </SpotlightCard>
        </div>

        {/* 8) Bottom Callout Banner */}
        <div className="mt-10 sm:mt-14 max-w-4xl mx-auto rounded-2xl sm:rounded-3xl bg-[#414833] text-[#FDFCF9] p-6 sm:p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden">
          <DiamondLatticePattern variant="dark" />
          <CardOrganicCorner
            variant="dark"
            align={isRtl ? "left" : "right"}
            className="w-48 h-32 sm:w-72 sm:h-44 opacity-90"
          />

          <div className="relative z-10 max-w-xl text-center md:text-start">
            <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#A4AC86] mb-2.5 sm:mb-3 uppercase tracking-wider">
              <ImpactDiamonds className="w-4 h-3.5" color="#A4AC86" />
              <span data-ar="التزامنا الراسخ" data-en="Our Core Promise">
                {locale === "ar" ? "التزامنا الراسخ" : "Our Core Promise"}
              </span>
            </div>
            <h3
              data-ar="نؤمن بأن التقنية والإبداع يمكن أن يتركا أثراً حقيقياً ومستداماً في المنطقة وأثارك بأعمالك."
              data-en="We believe technology and creativity can leave a real, sustainable impact across the region and in your business."
              className="text-lg sm:text-2xl font-serif font-bold text-[#EBE3D2] leading-snug"
            >
              {locale === "ar"
                ? "نؤمن بأن التقنية والإبداع يمكن أن يتركا أثراً حقيقياً ومستداماً في المنطقة وأثارك بأعمالك."
                : "We believe technology and creativity can leave a real, sustainable impact across the region and in your business."}
            </h3>
          </div>

          <div className="relative z-10 flex flex-col items-center gap-3.5 sm:gap-4 shrink-0 w-full sm:w-auto">
            <BrandLogo variant="light" size="sm" />
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#EBE3D2] text-[#414833] hover:bg-[#FDFCF9] text-xs sm:text-sm font-bold shadow-md transition-all duration-200 cursor-pointer"
            >
              <span data-ar="ابدأ رحلتك معنا" data-en="Start Your Journey">
                {locale === "ar" ? "ابدأ رحلتك معنا" : "Start Your Journey"}
              </span>
              <ArrowIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
