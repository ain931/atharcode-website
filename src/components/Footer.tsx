"use client";

import React from "react";
import { BrandLogo, ImpactDiamonds } from "./BrandLogo";
import { DiamondLatticePattern } from "./BrandPatterns";
import { NAV_ITEMS, SERVICES, CONTACT_INFO, Locale } from "@/data/content";
import { Mail, Globe, ArrowUp } from "lucide-react";

interface FooterProps {
  locale: Locale;
  onSelectService?: (serviceId: string) => void;
}

export function Footer({ locale, onSelectService }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#414833] text-[#EBE3D2] pt-16 pb-12 relative overflow-hidden z-10">
      <DiamondLatticePattern variant="dark" />

      <svg
        viewBox="0 0 1440 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-h-[200px] absolute bottom-0 inset-x-0 pointer-events-none select-none opacity-80"
        preserveAspectRatio="none"
      >
        <path
          d="M-100,220 C320,80 680,270 1120,120 C1320,55 1440,140 1560,90"
          stroke="#A4AC86"
          strokeWidth="1"
          strokeOpacity="0.16"
        />
        <path
          d="M-100,220 C320,80 680,270 1120,120 C1320,55 1440,140 1560,90"
          stroke="#A4AC86"
          strokeWidth="2.2"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-1"
        />
        <path
          d="M-80,250 C380,120 740,290 1180,155 C1350,95 1460,175 1560,130"
          stroke="#EBE3D2"
          strokeWidth="1.6"
          strokeLinecap="round"
          pathLength={100}
          className="svg-line-flow-2"
        />
      </svg>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-8 pb-10 sm:pb-14 border-b border-[#737A5D]/40">
          {/* Brand Column */}
          <div className="col-span-2 lg:col-span-4 flex flex-col items-start">
            <a href="#" aria-label="العودة إلى أعلى الصفحة الرئيسية لشركة أثر">
              <BrandLogo variant="light" size="md" />
            </a>

            <p
              data-ar="أثر شركة برمجية متخصصة في الحلول الرقمية والتجارب التفاعلية الرقمية وخدمات التسويق الرقمي، نجمع بين المنطق التقني والإبداعي لنصنع حلولاً تساهم في نمو أعمالك وتطورها."
              data-en="Athar is a software company specializing in digital solutions, interactive digital experiences, and digital marketing services. We combine technical and creative logic to build solutions that help your business grow and evolve."
              className="mt-4 text-xs sm:text-sm text-[#EBE3D2]/85 leading-relaxed max-w-sm"
            >
              {locale === "ar"
                ? "أثر شركة برمجية متخصصة في الحلول الرقمية والتجارب التفاعلية الرقمية وخدمات التسويق الرقمي، نجمع بين المنطق التقني والإبداعي لنصنع حلولاً تساهم في نمو أعمالك وتطورها."
                : "Athar is a software company specializing in digital solutions, interactive digital experiences, and digital marketing services. We combine technical and creative logic to build solutions that help your business grow and evolve."}
            </p>

            <div className="mt-4 sm:mt-5 flex items-center gap-2 text-xs font-semibold text-[#A4AC86] tracking-wide">
              <ImpactDiamonds className="w-3.5 h-3 shrink-0" color="#A4AC86" />
              <span
                data-ar="من الفكرة إلى الأثر — FROM IDEA TO IMPACT"
                data-en="FROM IDEA TO IMPACT"
              >
                {locale === "ar"
                  ? "من الفكرة إلى الأثر — FROM IDEA TO IMPACT"
                  : "FROM IDEA TO IMPACT"}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 lg:col-span-2">
            <h3
              data-ar="روابط سريعة"
              data-en="Navigation"
              className="text-xs font-bold uppercase tracking-wider text-[#A4AC86] mb-3.5 sm:mb-4"
            >
              {locale === "ar" ? "روابط سريعة" : "Navigation"}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {NAV_ITEMS.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.href}
                    data-ar={item.label.ar}
                    data-en={item.label.en}
                    className="text-[#EBE3D2]/80 hover:text-[#FFFFFF] transition-colors"
                  >
                    {item.label[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services Column — Clicking any service scrolls to #contact and auto-selects it */}
          <div className="col-span-1 lg:col-span-3">
            <h3
              data-ar="خدماتنا"
              data-en="Core Services"
              className="text-xs font-bold uppercase tracking-wider text-[#A4AC86] mb-3.5 sm:mb-4"
            >
              {locale === "ar" ? "خدماتنا" : "Core Services"}
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-[#EBE3D2]/80">
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <a
                    href="#contact"
                    data-select-service={s.id}
                    data-ar={s.title.ar}
                    data-en={s.title.en}
                    onClick={() => {
                      onSelectService?.(s.id);
                      if (typeof window !== "undefined") {
                        window.dispatchEvent(
                          new CustomEvent("athar:select-service", {
                            detail: s.id,
                          })
                        );
                      }
                    }}
                    className="hover:text-[#FFFFFF] transition-colors cursor-pointer"
                  >
                    {s.title[locale]}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Channels */}
          <div className="col-span-2 lg:col-span-3">
            <h3
              data-ar="قنوات التواصل"
              data-en="Contact & Channels"
              className="text-xs font-bold uppercase tracking-wider text-[#A4AC86] mb-3.5 sm:mb-4"
            >
              {locale === "ar" ? "قنوات التواصل" : "Contact & Channels"}
            </h3>
            <div className="space-y-3 text-xs sm:text-sm text-[#EBE3D2]/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#A4AC86] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors truncate"
                >
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Globe className="w-4 h-4 text-[#A4AC86] shrink-0" />
                <a
                  href={`mailto:${CONTACT_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  {CONTACT_INFO.website}
                </a>
              </div>
              <div className="pt-2 flex items-center gap-2">
                <span className="text-xs text-[#A4AC86]">Socials:</span>
                <span className="px-2.5 py-1 rounded-md bg-white/10 text-xs font-mono text-[#EBE3D2]">
                  {CONTACT_INFO.socialHandle}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Scroll to Top */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#EBE3D2]/70">
          <p
            data-ar={`© ${new Date().getFullYear()} أثر (Athar). جميع الحقوق محفوظة.`}
            data-en={`© ${new Date().getFullYear()} AtharCode (أثر). All rights reserved.`}
          >
            © {new Date().getFullYear()} أثر (Athar).{" "}
            {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>

          <div className="flex items-center gap-4">
            <span
              data-ar="الهوية البصرية مطابقة لدليل العلامة التجارية V1.0"
              data-en="Brand Guidelines V1.0 Aligned"
              className="text-[11px] text-[#A4AC86]"
            >
              {locale === "ar"
                ? "الهوية البصرية مطابقة لدليل العلامة التجارية V1.0"
                : "Brand Guidelines V1.0 Aligned"}
            </span>

            <button
              type="button"
              id="footer-scroll-top"
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#EBE3D2] transition-colors cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 pointer-events-none" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
