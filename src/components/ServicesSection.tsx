"use client";

import React from "react";
import { SERVICES, Locale } from "@/data/content";
import { SpotlightCard } from "./SpotlightCard";
import { CardOrganicCorner } from "./BrandPatterns";
import {
  Code2,
  Workflow,
  Boxes,
  TrendingUp,
  Check,
  Info,
  ArrowUpRight,
} from "lucide-react";

interface ServicesSectionProps {
  locale: Locale;
  onSelectService?: (serviceId: string) => void;
}

export function ServicesSection({
  locale,
  onSelectService,
}: ServicesSectionProps) {
  const isRtl = locale === "ar";

  const getServiceIcon = (iconName: string) => {
    const iconClass =
      "w-6 h-6 text-[#414833] group-hover:text-[#EBE3D2] transition-colors duration-300";
    switch (iconName) {
      case "code":
        return <Code2 className={iconClass} />;
      case "odoo":
        return <Workflow className={iconClass} />;
      case "interactive":
        return <Boxes className={iconClass} />;
      case "marketing":
      default:
        return <TrendingUp className={iconClass} />;
    }
  };

  const handleServiceConsultationClick = (serviceId: string) => {
    onSelectService?.(serviceId);
    if (typeof window !== "undefined") {
      window.dispatchEvent(
        new CustomEvent("athar:select-service", { detail: serviceId })
      );
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16 md:mb-20">
          <h2
            data-ar="حلول تقنية وإبداعية متكاملة لنمو أعمالك"
            data-en="Integrated Technical & Creative Solutions for Sustainable Growth"
            className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#414833] tracking-tight leading-tight"
          >
            {locale === "ar"
              ? "حلول تقنية وإبداعية متكاملة لنمو أعمالك"
              : "Integrated Technical & Creative Solutions for Sustainable Growth"}
          </h2>

          <p
            data-ar="نقدّم في أثر حزمة متكاملة من الخدمات البرمجية، تجارب التفاعل الرقمي، والتسويق الرقمي الفعّال، المصممة خصيصاً لتحقيق أهداف عملك بدقة وكفاءة."
            data-en="At Athar, we deliver an integrated suite of software engineering, interactive digital experiences, and effective digital marketing tailored to achieve your business goals with precision and efficiency."
            className="mt-3.5 sm:mt-4 text-sm sm:text-lg text-[#535b42] leading-relaxed"
          >
            {locale === "ar"
              ? "نقدّم في أثر حزمة متكاملة من الخدمات البرمجية، تجارب التفاعل الرقمي، والتسويق الرقمي الفعّال، المصممة خصيصاً لتحقيق أهداف عملك بدقة وكفاءة."
              : "At Athar, we deliver an integrated suite of software engineering, interactive digital experiences, and effective digital marketing tailored to achieve your business goals with precision and efficiency."}
          </p>
        </div>

        {/* 4 Core Services Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7">
          {SERVICES.map((service, index) => {
            const isLarge = index === 0 || index === 3;
            const colSpan = isLarge ? "lg:col-span-7" : "lg:col-span-5";

            return (
              <div key={service.id} className={colSpan}>
                <SpotlightCard
                  className="h-full flex flex-col justify-between p-6 sm:p-8 md:p-10 border border-[#CBBFA3]/70 hover:border-[#737A5D]/80 relative group"
                  spotlightColor="rgba(164, 172, 134, 0.25)"
                >
                  {/* Ornament strictly flush with the outer border of the card (0px gap) */}
                  <CardOrganicCorner
                    variant="light"
                    align={isRtl ? "left" : "right"}
                    className="w-40 h-20 sm:w-56 sm:h-28 opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  />

                  <div className="relative z-10">
                    {/* Top Row: Icon */}
                    <div className="flex items-center justify-between mb-6">
                      <div className="w-14 h-14 rounded-2xl bg-[#EBE3D2]/80 border border-[#CBBFA3]/80 flex items-center justify-center text-[#414833] shadow-xs group-hover:bg-[#414833] group-hover:border-[#737A5D] group-hover:text-[#EBE3D2] transition-colors duration-300">
                        {getServiceIcon(service.iconName)}
                      </div>
                    </div>

                    {/* Subtitle */}
                    <p
                      data-ar={service.subtitle.ar}
                      data-en={service.subtitle.en}
                      className="text-xs font-bold uppercase tracking-wider text-[#737A5D] mb-2"
                    >
                      {service.subtitle[locale]}
                    </p>

                    {/* Title (H3) */}
                    <h3
                      data-ar={service.title.ar}
                      data-en={service.title.en}
                      className="text-2xl font-bold text-[#414833] mb-3 leading-snug"
                    >
                      {service.title[locale]}
                    </h3>

                    {/* Description */}
                    <p
                      data-ar={service.description.ar}
                      data-en={service.description.en}
                      className="text-sm sm:text-base text-[#535b42] leading-relaxed mb-6"
                    >
                      {service.description[locale]}
                    </p>

                    {/* Capabilities List */}
                    <div className="pt-6 border-t border-[#414833]/10">
                      <p
                        data-ar="أبرز القدرات والمخرجات:"
                        data-en="Key Capabilities:"
                        className="text-xs font-bold uppercase tracking-wider text-[#414833] mb-3.5"
                      >
                        {locale === "ar" ? "أبرز القدرات والمخرجات:" : "Key Capabilities:"}
                      </p>
                      <ul className="space-y-2.5">
                        {service.capabilities.ar.map((capAr, i) => {
                          const capEn = service.capabilities.en[i] || capAr;
                          return (
                            <li
                              key={i}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-[#414833]"
                            >
                              <span className="mt-1 w-4 h-4 rounded-full bg-[#A4AC86]/35 text-[#414833] flex items-center justify-center shrink-0">
                                <Check className="w-2.5 h-2.5 stroke-[3]" />
                              </span>
                              <span data-ar={capAr} data-en={capEn}>
                                {locale === "ar" ? capAr : capEn}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>

                    {/* Optional Note */}
                    {service.note && (
                      <div className="mt-6 p-4 rounded-2xl bg-[#EBE3D2]/65 border border-[#CBBFA3]/75 flex items-start gap-3 text-xs text-[#414833]">
                        <Info className="w-4 h-4 text-[#737A5D] shrink-0 mt-0.5" />
                        <span
                          data-ar={service.note.ar}
                          data-en={service.note.en}
                          className="leading-relaxed font-medium"
                        >
                          {service.note[locale]}
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Card Bottom CTA Button/Link — Auto-selects this service in ContactSection */}
                  <div className="relative z-10 mt-8 pt-5 border-t border-[#414833]/10 flex items-center justify-between">
                    <a
                      href="#contact"
                      data-select-service={service.id}
                      onClick={() => handleServiceConsultationClick(service.id)}
                      className="inline-flex items-center gap-2 px-4 py-2.5 -ms-2 rounded-xl text-xs sm:text-sm font-bold text-[#414833] hover:bg-[#414833] hover:text-[#FDFCF9] transition-all duration-200 cursor-pointer"
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
                        className={`w-4 h-4 transition-transform duration-200 ${
                          locale === "ar" ? "rotate-[-90deg]" : ""
                        }`}
                      />
                    </a>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
