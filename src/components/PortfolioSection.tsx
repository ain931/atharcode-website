"use client";

import React, { useState, useEffect } from "react";
import {
  PROJECTS,
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectItem,
  Locale,
} from "@/data/content";
import { ImpactDiamonds } from "./BrandLogo";
import { SpotlightCard } from "./SpotlightCard";
import { DiamondLatticePattern, CardOrganicCorner } from "./BrandPatterns";
import {
  Compass,
  Sparkles,
  Car,
  ScanFace,
  Shirt,
  ShoppingBag,
  X,
  CheckCircle2,
  Eye,
  Layers,
} from "lucide-react";

interface PortfolioSectionProps {
  locale: Locale;
  onSelectService?: (serviceId: string) => void;
}

function ProjectVisualPreview({
  visualType,
}: {
  visualType: ProjectItem["visualType"];
  locale: Locale;
}) {
  return (
    <div className="relative h-48 sm:h-56 w-full bg-gradient-to-br from-[#414833] via-[#313726] to-[#21251a] overflow-hidden flex items-center justify-center p-5 sm:p-6 select-none">
      <DiamondLatticePattern variant="dark" />
      <CardOrganicCorner
        variant="dark"
        align="right"
        className="w-44 h-28 sm:w-56 sm:h-36 opacity-85"
      />

      <svg
        className="absolute inset-0 w-full h-full opacity-55"
        viewBox="0 0 400 220"
        fill="none"
        preserveAspectRatio="none"
      >
        <path
          d="M-20 180 C100 90 260 210 420 80"
          stroke="#EBE3D2"
          strokeWidth="0.75"
          strokeOpacity="0.18"
        />
        <path
          d="M-20 180 C100 90 260 210 420 80"
          stroke="#EBE3D2"
          strokeWidth="1.75"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-1"
        />
        <path
          d="M-20 210 C130 120 280 230 420 110"
          stroke="#A4AC86"
          strokeWidth="1.25"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-2"
        />
      </svg>

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#EBE3D2]/10 border border-[#EBE3D2]/25 flex items-center justify-center text-[#EBE3D2] shadow-lg group-hover:scale-110 group-hover:border-[#A4AC86]/60 transition-all duration-300">
          {visualType === "ports" && <Compass className="w-7 h-7 sm:w-8 sm:h-8 text-[#EBE3D2]" />}
          {visualType === "fashion-ar" && <Sparkles className="w-7 h-7 sm:w-8 sm:h-8 text-[#EBE3D2]" />}
          {visualType === "car-3d" && <Car className="w-7 h-7 sm:w-8 sm:h-8 text-[#EBE3D2]" />}
          {visualType === "ai-vision" && <ScanFace className="w-7 h-7 sm:w-8 sm:h-8 text-[#EBE3D2]" />}
          {visualType === "dressing-room" && <Shirt className="w-7 h-7 sm:w-8 sm:h-8 text-[#EBE3D2]" />}
          {visualType === "ecommerce" && <ShoppingBag className="w-7 h-7 sm:w-8 sm:h-8 text-[#EBE3D2]" />}
        </div>
      </div>

      <div className="absolute top-4 right-4 opacity-50">
        <ImpactDiamonds className="w-5 h-4" color="#EBE3D2" />
      </div>
    </div>
  );
}

export function PortfolioSection({
  locale,
  onSelectService,
}: PortfolioSectionProps) {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProjectId(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const getMappedServiceId = (category: ProjectCategory) => {
    if (category === "interactive") return "interactive-experiences";
    return "custom-software";
  };

  return (
    <section id="work" className="py-16 sm:py-24 md:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <h2
            data-ar="مشاريع وتجارب رقمية تركت أثراً"
            data-en="Selected Projects & Interactive Experiences"
            className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#414833] tracking-tight leading-tight"
          >
            {locale === "ar"
              ? "مشاريع وتجارب رقمية تركت أثراً"
              : "Selected Projects & Interactive Experiences"}
          </h2>

          <p
            data-ar="نماذج مختارة من المشاريع البرمجية، المنصات الرقمية، والتجارب التفاعلية الفاخرة التي نفذناها وطورناها لتُلهم حياة وعلاقات رائدة."
            data-en="A curated selection of software projects, digital platforms, and luxury interactive experiences we engineered to inspire leading organizations."
            className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#535b42] leading-relaxed"
          >
            {locale === "ar"
              ? "نماذج مختارة من المشاريع البرمجية، المنصات الرقمية، والتجارب التفاعلية الفاخرة التي نفذناها وطورناها لتُلهم حياة وعلاقات رائدة."
              : "A curated selection of software projects, digital platforms, and luxury interactive experiences we engineered to inspire leading organizations."}
          </p>
        </div>

        {/* Centered Category Filter Bar with iPhone Liquid Glass Glider */}
        <div className="flex justify-center mt-8 sm:mt-10 mb-10 sm:mb-14">
          <div
            data-liquid-bar="portfolio"
            style={{ "--liquid-radius": "12px" } as React.CSSProperties}
            className="athar-liquid-bar inline-flex flex-wrap sm:flex-nowrap items-center justify-center gap-1.5 p-1.5 rounded-2xl bg-[#EBE3D2] border border-[#CBBFA3]/75 shadow-xs max-w-full"
            role="tablist"
            aria-label="Filter projects by category"
          >
            <span data-liquid-pill="true" className="athar-liquid-pill" aria-hidden="true" />
            {PROJECT_CATEGORIES.map((cat) => {
              const isSelected = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  data-filter-category={cat.id}
                  data-liquid-item="true"
                  data-active={isSelected ? "true" : "false"}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`athar-liquid-item relative whitespace-nowrap px-3.5 sm:px-6 py-2 sm:py-2.5 rounded-xl text-xs sm:text-sm font-semibold cursor-pointer ${
                    isSelected
                      ? "bg-[#414833] text-[#FDFCF9] shadow-md"
                      : "text-[#414833]"
                  }`}
                >
                  <span
                    data-ar={cat.label.ar}
                    data-en={cat.label.en}
                    className="relative z-10 pointer-events-none"
                  >
                    {cat.label[locale]}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid — All 6 cards in DOM for instant category filtering */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-7">
          {PROJECTS.map((project) => {
            const isVisible =
              activeCategory === "all" || project.category === activeCategory;
            return (
              <div
                key={project.id}
                data-project-card={project.id}
                data-project-category={project.category}
                className={`group h-full transition-all duration-300 ${
                  isVisible ? "block athar-stage-enter" : "hidden"
                }`}
              >
                <SpotlightCard
                  className="h-full flex flex-col justify-between overflow-hidden relative"
                  spotlightColor="rgba(164, 172, 134, 0.16)"
                >
                  <div className="relative z-10">
                    <div
                      data-open-project={project.id}
                      onClick={() => setSelectedProjectId(project.id)}
                      className="cursor-pointer"
                    >
                      <ProjectVisualPreview
                        visualType={project.visualType}
                        locale={locale}
                      />
                    </div>

                    <div className="p-5 sm:p-7">
                      {/* Client Name */}
                      <p
                        data-ar={project.client.ar}
                        data-en={project.client.en}
                        className="text-xs font-bold text-[#737A5D] uppercase tracking-wider mb-2"
                      >
                        {project.client[locale]}
                      </p>

                      {/* Title (H3) */}
                      <h3
                        data-open-project={project.id}
                        data-ar={project.title.ar}
                        data-en={project.title.en}
                        onClick={() => setSelectedProjectId(project.id)}
                        className="text-lg sm:text-xl font-bold text-[#414833] hover:text-[#737A5D] transition-colors mb-2.5 sm:mb-3 leading-snug cursor-pointer"
                      >
                        {project.title[locale]}
                      </h3>

                      {/* Summary */}
                      <p
                        data-ar={project.summary.ar}
                        data-en={project.summary.en}
                        className="text-xs sm:text-sm text-[#535b42] leading-relaxed mb-4"
                      >
                        {project.summary[locale]}
                      </p>

                      {/* Clean Text Tags */}
                      <p
                        data-ar={project.tags.ar.join("  •  ")}
                        data-en={project.tags.en.join("  •  ")}
                        className="text-[11px] font-semibold text-[#737A5D]"
                      >
                        {project.tags[locale].join("  •  ")}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer Action */}
                  <div className="relative z-10 px-5 pb-5 sm:px-7 sm:pb-7">
                    <button
                      type="button"
                      data-open-project={project.id}
                      onClick={() => setSelectedProjectId(project.id)}
                      className="w-full py-2.5 px-4 rounded-xl bg-[#EBE3D2]/50 hover:bg-[#414833] text-[#414833] hover:text-[#FDFCF9] border border-[#CBBFA3]/70 hover:border-[#414833] text-xs font-bold inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5 pointer-events-none" />
                      <span
                        data-ar="استعراض نطاق المشروع"
                        data-en="View Project Scope"
                        className="pointer-events-none"
                      >
                        {locale === "ar"
                          ? "استعراض نطاق المشروع"
                          : "View Project Scope"}
                      </span>
                    </button>
                  </div>
                </SpotlightCard>
              </div>
            );
          })}
        </div>
      </div>

      {/* Accessible Project Scope Modals */}
      {PROJECTS.map((project) => {
        const isOpen = selectedProjectId === project.id;
        const mappedServiceId = getMappedServiceId(project.category);

        return (
          <div
            key={project.id}
            data-project-modal={project.id}
            data-close-modal={project.id}
            className={`fixed inset-0 z-50 items-center justify-center p-3 sm:p-4 bg-[#23271c]/65 backdrop-blur-sm ${
              isOpen ? "flex" : "hidden"
            }`}
            role="dialog"
            aria-modal="true"
            aria-labelledby={`modal-title-${project.id}`}
            onClick={() => setSelectedProjectId(null)}
          >
            <div
              className="bg-[#FDFCF9] border border-[#CBBFA3] rounded-2xl sm:rounded-3xl max-w-2xl w-full overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="bg-[#414833] text-[#EBE3D2] p-5 sm:p-8 flex items-start justify-between gap-3 sm:gap-4 relative overflow-hidden">
                <DiamondLatticePattern variant="dark" />
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-xs font-semibold text-[#A4AC86] uppercase tracking-wider mb-1.5">
                    <Layers className="w-3.5 h-3.5" />
                    <span
                      data-ar={project.client.ar}
                      data-en={project.client.en}
                    >
                      {project.client[locale]}
                    </span>
                  </div>
                  <h3
                    id={`modal-title-${project.id}`}
                    data-ar={project.title.ar}
                    data-en={project.title.en}
                    className="text-lg sm:text-2xl font-bold text-[#FDFCF9]"
                  >
                    {project.title[locale]}
                  </h3>
                </div>
                <button
                  type="button"
                  data-close-modal={project.id}
                  onClick={() => setSelectedProjectId(null)}
                  className="relative z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#EBE3D2] transition-colors cursor-pointer shrink-0"
                  aria-label="Close modal"
                >
                  <X className="w-5 h-5 pointer-events-none" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-5 sm:p-8 space-y-5 sm:space-y-6 max-h-[75vh] overflow-y-auto">
                <div>
                  <p
                    data-ar="نبذة عن المشروع"
                    data-en="Project Overview"
                    className="text-xs font-bold uppercase tracking-wider text-[#737A5D] mb-2"
                  >
                    {locale === "ar" ? "نبذة عن المشروع" : "Project Overview"}
                  </p>
                  <p
                    data-ar={project.summary.ar}
                    data-en={project.summary.en}
                    className="text-sm sm:text-base text-[#414833] leading-relaxed"
                  >
                    {project.summary[locale]}
                  </p>
                </div>

                <div className="p-4 sm:p-5 rounded-2xl bg-[#EBE3D2]/40 border border-[#CBBFA3]/60">
                  <p
                    data-ar="نطاق العمل والعناصر المنفذة:"
                    data-en="Key Scope & Deliverables:"
                    className="text-xs font-bold uppercase tracking-wider text-[#414833] mb-3"
                  >
                    {locale === "ar"
                      ? "نطاق العمل والعناصر المنفذة:"
                      : "Key Scope & Deliverables:"}
                  </p>
                  <ul className="space-y-2.5">
                    {project.highlights.ar.map((highlightAr, idx) => {
                      const highlightEn = project.highlights.en[idx] || highlightAr;
                      return (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs sm:text-sm text-[#414833]"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#737A5D] shrink-0 mt-0.5" />
                          <span data-ar={highlightAr} data-en={highlightEn}>
                            {locale === "ar" ? highlightAr : highlightEn}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 pt-4 border-t border-[#414833]/10">
                  <p
                    data-ar={project.tags.ar.join("  •  ")}
                    data-en={project.tags.en.join("  •  ")}
                    className="text-xs font-semibold text-[#737A5D]"
                  >
                    {project.tags[locale].join("  •  ")}
                  </p>

                  <a
                    href="#contact"
                    data-close-modal={project.id}
                    data-select-service={mappedServiceId}
                    data-ar="اطلب مشروعاً مشابهاً"
                    data-en="Request Similar Solution"
                    onClick={() => {
                      setSelectedProjectId(null);
                      onSelectService?.(mappedServiceId);
                      if (typeof window !== "undefined") {
                        window.dispatchEvent(
                          new CustomEvent("athar:select-service", {
                            detail: mappedServiceId,
                          })
                        );
                      }
                    }}
                    className="w-full sm:w-auto text-center px-5 py-2.5 rounded-full bg-[#414833] hover:bg-[#2e3324] text-[#FDFCF9] text-xs font-semibold transition-colors cursor-pointer"
                  >
                    {locale === "ar"
                      ? "اطلب مشروعاً مشابهاً"
                      : "Request Similar Solution"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
