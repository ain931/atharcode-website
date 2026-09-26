"use client";

import React from "react";
import { clients, stats, Locale } from "@/data/content";
import { CLIENT_LOGO_DATA_URIS } from "@/data/clientLogosData";
import { ImpactDiamonds } from "./BrandLogo";
import { SpotlightCard } from "./SpotlightCard";
import { CardOrganicCorner } from "./BrandPatterns";

interface ClientsSectionProps {
  locale: Locale;
}

const LOGO_CROP_CONFIG: Record<
  string,
  {
    rawW: number;
    rawH: number;
    viewBox: string;
    boxClass: string;
  }
> = {
  "mawani.png": {
    rawW: 516,
    rawH: 482,
    viewBox: "128 32 272 426",
    boxClass: "w-[156px] h-[118px]",
  },
  "officers-club.png": {
    rawW: 438,
    rawH: 350,
    viewBox: "2 6 434 338",
    boxClass: "w-[168px] h-[116px]",
  },
  "sanad.png": {
    rawW: 447,
    rawH: 447,
    viewBox: "56 170 336 126",
    boxClass: "w-[192px] h-[108px]",
  },
  "lucid.png": {
    rawW: 1024,
    rawH: 1024,
    viewBox: "88 456 848 94",
    boxClass: "w-[192px] h-[84px]",
  },
  "sica.png": {
    rawW: 1024,
    rawH: 938,
    viewBox: "184 180 656 576",
    boxClass: "w-[154px] h-[114px]",
  },
};

export function ClientsSection({ locale }: ClientsSectionProps) {
  const hasStats =
    stats.clientsCount !== null && stats.projectsCompleted !== null;

  return (
    <section id="clients" className="py-14 sm:py-20 relative z-10">
      {/* Global HD Logo Sharpening & Pure-White Background Normalization Filter */}
      <svg className="sr-only" aria-hidden="true">
        <defs>
          <filter id="athar-hd-logo-filter" colorInterpolationFilters="sRGB">
            {/* Push slight JPEG off-white margins to pure #FFFFFF and deepen logo contrast */}
            <feComponentTransfer in="SourceGraphic" result="contrasted">
              <feFuncR type="linear" slope="1.09" intercept="-0.05" />
              <feFuncG type="linear" slope="1.09" intercept="-0.05" />
              <feFuncB type="linear" slope="1.09" intercept="-0.05" />
            </feComponentTransfer>
            {/* Subtle Unsharp Mask for razor-sharp edges & typography */}
            <feConvolveMatrix
              in="contrasted"
              order="3"
              kernelMatrix="0 -0.22 0 -0.22 1.88 -0.22 0 -0.22 0"
              preserveAlpha="true"
            />
          </filter>
        </defs>
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
          <h2
            data-ar="عملاء وثقوا بنا.. وتركنا أثراً معهم"
            data-en="Clients Who Trusted Us.. Leaving a Lasting Impact"
            className="text-2xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#414833] tracking-tight leading-tight"
          >
            {locale === "ar"
              ? "عملاء وثقوا بنا.. وتركنا أثراً معهم"
              : "Clients Who Trusted Us.. Leaving a Lasting Impact"}
          </h2>

          <p
            data-ar="نفخر بثقة مجموعة متنوعة من المؤسسات الحكومية والخاصة وغير الربحية، الذين اختاروا أثر شريكاً تقنياً لتحقيق أهدافهم الرقمية."
            data-en="We are proud of the trust placed in us by diverse government, private, and non-profit organizations who chose Athar as their technical partner."
            className="mt-3 sm:mt-4 text-sm sm:text-lg text-[#535b42] leading-relaxed"
          >
            {locale === "ar"
              ? "نفخر بثقة مجموعة متنوعة من المؤسسات الحكومية والخاصة وغير الربحية، الذين اختاروا أثر شريكاً تقنياً لتحقيق أهدافهم الرقمية."
              : "We are proud of the trust placed in us by diverse government, private, and non-profit organizations who chose Athar as their technical partner."}
          </p>

          {/* Mini Counter Above Logos — Bound to shared stats config with automatic textual fallback */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 sm:gap-6">
            {hasStats ? (
              <>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F4EFE3] border border-[#CBBFA3]/85 text-xs sm:text-sm font-bold text-[#414833]">
                  <ImpactDiamonds className="w-3.5 h-3 text-[#737A5D]" color="#737A5D" />
                  <span
                    data-ar={`${stats.clientsCount}+ عميل وثق بنا`}
                    data-en={`${stats.clientsCount}+ Trusted Clients`}
                  >
                    {locale === "ar"
                      ? `${stats.clientsCount}+ عميل وثق بنا`
                      : `${stats.clientsCount}+ Trusted Clients`}
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#F4EFE3] border border-[#CBBFA3]/85 text-xs sm:text-sm font-bold text-[#414833]">
                  <ImpactDiamonds className="w-3.5 h-3 text-[#737A5D]" color="#737A5D" />
                  <span
                    data-ar={`${stats.projectsCompleted}+ مشروع منفذ بنجاح`}
                    data-en={`${stats.projectsCompleted}+ Successfully Delivered Projects`}
                  >
                    {locale === "ar"
                      ? `${stats.projectsCompleted}+ مشروع منفذ بنجاح`
                      : `${stats.projectsCompleted}+ Successfully Delivered Projects`}
                  </span>
                </div>
              </>
            ) : (
              <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-2xl bg-[#F4EFE3] border border-[#CBBFA3]/85 text-xs sm:text-sm font-semibold text-[#414833]">
                <ImpactDiamonds className="w-4 h-3.5 text-[#737A5D] shrink-0" color="#737A5D" />
                <span
                  data-ar="شراكات تقنية موثوقة مع نخبة من الجهات الحكومية والخاصة وغير الربحية"
                  data-en="Trusted Technical Partnerships Across Government, Private & Non-Profit Sectors"
                >
                  {locale === "ar"
                    ? "شراكات تقنية موثوقة مع نخبة من الجهات الحكومية والخاصة وغير الربحية"
                    : "Trusted Technical Partnerships Across Government, Private & Non-Profit Sectors"}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Dynamic Clients Logo Grid — Cropped White Margins, Enhanced HD Quality, Uniform Visual Scale */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {clients.map((client) => {
            const fileName = client.logo.split("/").pop()?.split("?")[0] || "";
            const resolvedLogoSrc = CLIENT_LOGO_DATA_URIS[fileName] || client.logo;
            const crop = LOGO_CROP_CONFIG[fileName];

            return (
              <SpotlightCard
                key={client.name}
                className="p-4 sm:p-5 border border-[#CBBFA3]/80 flex flex-col items-center justify-between text-center group relative"
                spotlightColor="rgba(164, 172, 134, 0.16)"
              >
                <div className="relative z-10 flex flex-col items-center justify-between w-full h-full gap-3.5">
                  <div className="w-full h-36 sm:h-40 rounded-2xl bg-white border border-[#CBBFA3]/55 flex items-center justify-center p-3 shadow-xs overflow-hidden">
                    {crop ? (
                      <svg
                        viewBox={crop.viewBox}
                        className={`${crop.boxClass} max-w-full transition-transform duration-300 group-hover:scale-105`}
                        preserveAspectRatio="xMidYMid meet"
                        role="img"
                        aria-label={`شعار عميل أثر - ${client.name}`}
                      >
                        <image
                          href={resolvedLogoSrc}
                          width={crop.rawW}
                          height={crop.rawH}
                          filter="url(#athar-hd-logo-filter)"
                          style={{ imageRendering: "auto" }}
                        />
                      </svg>
                    ) : (
                      /* eslint-disable-next-line @next/next/no-img-element */
                      <img
                        src={resolvedLogoSrc}
                        alt={`شعار عميل أثر - ${client.name}`}
                        className="h-28 w-auto max-w-[180px] object-contain group-hover:scale-105 transition-transform duration-300"
                      />
                    )}
                  </div>
                  <span
                    data-ar={client.name}
                    data-en={client.nameEn}
                    className="text-xs sm:text-[13px] font-bold text-[#414833] group-hover:text-[#737A5D] transition-colors leading-snug line-clamp-2"
                  >
                    {locale === "ar" ? client.name : client.nameEn}
                  </span>
                </div>
              </SpotlightCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
