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
              <div className="pt-2 flex flex-col gap-2">
                <span className="text-xs font-semibold text-[#A4AC86]">Socials:</span>
                <div className="flex items-center gap-2.5">
                  <a
                    href={CONTACT_INFO.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#EBE3D2] text-[#EBE3D2] hover:text-[#414833] border border-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer"
                    aria-label="Instagram"
                    title="Instagram @atharcode"
                  >
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
                    </svg>
                  </a>

                  <a
                    href={CONTACT_INFO.socials.snapchat}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#EBE3D2] text-[#EBE3D2] hover:text-[#414833] border border-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer"
                    aria-label="Snapchat"
                    title="Snapchat"
                  >
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12.002 2c-3.526 0-5.83 2.502-5.83 5.438 0 .894.218 1.83.473 2.518.083.224.088.358-.02.484-.13.151-.377.228-.62.296-.464.129-.974.271-1.309.645-.262.291-.259.626-.226.85.08.539.544.887 1.05 1.157.25.133.523.279.62.485.127.27.027.604-.15.935-.23.43-.585.875-.98 1.373-.13.164-.253.33-.362.5-.27.424-.468.895-.278 1.442.204.59.742.879 1.344.879.366 0 .744-.09 1.109-.176.456-.109.932-.222 1.432-.122.569.114 1.114.544 1.802 1.077.562.436 1.25.969 2.015.969.755 0 1.439-.526 1.997-.959.69-.537 1.242-.971 1.821-1.087.5-.1 1.01.014 1.47.123.361.087.733.176 1.092.176.602 0 1.14-.289 1.344-.879.19-.547-.008-1.018-.278-1.442-.109-.17-.232-.336-.362-.5-.395-.498-.75-.943-.98-1.373-.177-.331-.277-.665-.15-.935.097-.206.37-.352.62-.485.506-.27.97-.618 1.05-1.157.033-.224.036-.559-.226-.85-.335-.374-.845-.516-1.309-.645-.243-.068-.49-.145-.62-.296-.108-.126-.103-.26-.02-.484.255-.688.473-1.624.473-2.518C17.832 4.502 15.528 2 12.002 2z"/>
                    </svg>
                  </a>

                  <a
                    href={CONTACT_INFO.socials.x}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-lg bg-white/10 hover:bg-[#EBE3D2] text-[#EBE3D2] hover:text-[#414833] border border-white/10 flex items-center justify-center transition-all duration-200 cursor-pointer"
                    aria-label="X (Twitter)"
                    title="X @athar_code"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright (Centered) & Scroll to Top */}
        <div className="mt-8 relative flex items-center justify-center text-xs text-[#EBE3D2]/70">
          <p
            data-ar={`© ${new Date().getFullYear()} أثر (Athar). جميع الحقوق محفوظة.`}
            data-en={`© ${new Date().getFullYear()} AtharCode (أثر). All rights reserved.`}
            className="text-center"
          >
            © {new Date().getFullYear()} أثر (Athar).{" "}
            {locale === "ar" ? "جميع الحقوق محفوظة." : "All rights reserved."}
          </p>

          <button
            type="button"
            id="footer-scroll-top"
            onClick={scrollToTop}
            className="absolute end-0 p-2 rounded-full bg-white/10 hover:bg-white/20 text-[#EBE3D2] transition-colors cursor-pointer"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 pointer-events-none" />
          </button>
        </div>
      </div>
    </footer>
  );
}
