"use client";

import React, { useState, useEffect } from "react";
import { CONTACT_INFO, SERVICES, Locale } from "@/data/content";
import { ImpactDiamonds } from "./BrandLogo";
import { SpotlightCard } from "./SpotlightCard";
import { CardOrganicCorner } from "./BrandPatterns";
import {
  Mail,
  Globe,
  MapPin,
  ArrowUpRight,
  CheckCircle,
  Check,
} from "lucide-react";

interface ContactSectionProps {
  locale: Locale;
  selectedServiceId?: string;
  onSelectService?: (serviceId: string) => void;
}

export function ContactSection({
  locale,
  selectedServiceId,
  onSelectService,
}: ContactSectionProps) {
  const [selectedService, setSelectedService] = useState(
    selectedServiceId || SERVICES[0].id
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    details: "",
  });
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (selectedServiceId) {
      setSelectedService(selectedServiceId);
    }
  }, [selectedServiceId]);

  useEffect(() => {
    const handleCustomSelect = (e: Event) => {
      const customEvent = e as CustomEvent<string>;
      if (customEvent.detail) {
        setSelectedService(customEvent.detail);
        onSelectService?.(customEvent.detail);
      }
    };
    window.addEventListener("athar:select-service", handleCustomSelect);
    return () =>
      window.removeEventListener("athar:select-service", handleCustomSelect);
  }, [onSelectService]);

  const handleServiceSelect = (id: string) => {
    setSelectedService(id);
    onSelectService?.(id);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Brand Promise (5 cols) */}
          <div className="lg:col-span-5">
            <div className="flex items-center gap-2 text-[#737A5D] text-xs font-bold tracking-widest uppercase mb-3">
              <ImpactDiamonds className="w-4 h-3.5" color="#737A5D" />
              <span data-ar="تواصل معنا" data-en="GET IN TOUCH">
                {locale === "ar" ? "تواصل معنا" : "GET IN TOUCH"}
              </span>
            </div>

            <h2
              data-ar="جاهز لتحويل فكرتك إلى أثر مستدام؟"
              data-en="Ready to Turn Your Vision into Sustainable Impact?"
              className="text-2xl sm:text-4xl font-serif font-bold text-[#414833] tracking-tight leading-tight"
            >
              {locale === "ar"
                ? "جاهز لتحويل فكرتك إلى أثر مستدام؟"
                : "Ready to Turn Your Vision into Sustainable Impact?"}
            </h2>

            <p
              data-ar="راسلنا وأخبرنا بتفاصيل مشروعك، وسيتواصل معك فريقنا خلال 24 ساعة عمل لمناقشة أفضل حل يناسب احتياجك وميزانيتك."
              data-en="Message us with your project details, and our team will get back to you within 24 business hours to discuss the best solution for your needs and budget."
              className="mt-3 sm:mt-4 text-sm sm:text-base text-[#535b42] leading-relaxed"
            >
              {locale === "ar"
                ? "راسلنا وأخبرنا بتفاصيل مشروعك، وسيتواصل معك فريقنا خلال 24 ساعة عمل لمناقشة أفضل حل يناسب احتياجك وميزانيتك."
                : "Message us with your project details, and our team will get back to you within 24 business hours to discuss the best solution for your needs and budget."}
            </p>

            {/* Direct Contact Small Interactive Cards — Clean & Opaque */}
            <div className="mt-6 sm:mt-8 space-y-3.5 sm:space-y-4">
              {/* Email */}
              <a
                href={`mailto:${CONTACT_INFO.email}`}
                className="block group"
              >
                <SpotlightCard
                  className="p-3.5 sm:p-4 rounded-2xl border border-[#CBBFA3]/75 bg-[#FDFCF9] relative overflow-hidden"
                  spotlightColor="rgba(164, 172, 134, 0.14)"
                >
                  <div className="relative z-10 flex items-center gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EBE3D2] flex items-center justify-center text-[#414833] group-hover:bg-[#414833] group-hover:text-[#EBE3D2] transition-colors duration-200 shrink-0">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p
                        data-ar="البريد الإلكتروني المباشر"
                        data-en="Direct Email"
                        className="text-xs text-[#737A5D] font-medium"
                      >
                        {locale === "ar" ? "البريد الإلكتروني المباشر" : "Direct Email"}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-[#414833] direction-ltr truncate">
                        {CONTACT_INFO.email}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </a>

              {/* Website */}
              <div className="group">
                <SpotlightCard
                  className="p-3.5 sm:p-4 rounded-2xl border border-[#CBBFA3]/75 bg-[#FDFCF9] relative overflow-hidden"
                  spotlightColor="rgba(164, 172, 134, 0.14)"
                >
                  <div className="relative z-10 flex items-center gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EBE3D2] flex items-center justify-center text-[#414833] group-hover:bg-[#414833] group-hover:text-[#EBE3D2] transition-colors duration-200 shrink-0">
                      <Globe className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p
                        data-ar="الموقع الرسمي"
                        data-en="Official Website"
                        className="text-xs text-[#737A5D] font-medium"
                      >
                        {locale === "ar" ? "الموقع الرسمي" : "Official Website"}
                      </p>
                      <p className="text-xs sm:text-sm font-bold text-[#414833] truncate">
                        {CONTACT_INFO.website}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>

              {/* Location / City Variable */}
              <div className="group">
                <SpotlightCard
                  className="p-3.5 sm:p-4 rounded-2xl border border-[#CBBFA3]/75 bg-[#FDFCF9] relative overflow-hidden"
                  spotlightColor="rgba(164, 172, 134, 0.14)"
                >
                  <div className="relative z-10 flex items-center gap-3.5 sm:gap-4">
                    <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-[#EBE3D2] flex items-center justify-center text-[#414833] group-hover:bg-[#414833] group-hover:text-[#EBE3D2] transition-colors duration-200 shrink-0">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="min-w-0">
                      <p
                        data-ar="العنوان"
                        data-en="Address"
                        className="text-xs text-[#737A5D] font-medium"
                      >
                        {locale === "ar" ? "العنوان" : "Address"}
                      </p>
                      <p
                        data-ar={CONTACT_INFO.locationPlaceholder.ar}
                        data-en={CONTACT_INFO.locationPlaceholder.en}
                        className="text-xs font-semibold text-[#414833] leading-snug"
                      >
                        {CONTACT_INFO.locationPlaceholder[locale]}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Consultation Inquiry Form (7 cols) */}
          <div className="lg:col-span-7">
            <SpotlightCard className="p-5 sm:p-8 md:p-10 border border-[#CBBFA3]/75 relative overflow-hidden">
              <CardOrganicCorner
                variant="light"
                align={locale === "ar" ? "left" : "right"}
                className="w-40 h-28 sm:w-48 sm:h-36 opacity-65"
              />

              <div className="relative z-10 flex items-center justify-between pb-5 sm:pb-6 border-b border-[#414833]/10 mb-5 sm:mb-6">
                <div>
                  <h3
                    data-ar="نموذج استشارة المشروع"
                    data-en="Project Inquiry Form"
                    className="text-base sm:text-xl font-bold text-[#414833]"
                  >
                    {locale === "ar" ? "نموذج استشارة المشروع" : "Project Inquiry Form"}
                  </h3>
                  <p
                    data-ar="اختر الخدمة التي تحتاجها وأخبرنا بتفاصيل مشروعك، وسنقوم بالرد عليك في أقرب وقت."
                    data-en="Select the service you need and share your project details, and we will respond promptly."
                    className="text-xs text-[#737A5D] mt-0.5"
                  >
                    {locale === "ar"
                      ? "اختر الخدمة التي تحتاجها وأخبرنا بتفاصيل مشروعك، وسنقوم بالرد عليك في أقرب وقت."
                      : "Select the service you need and share your project details, and we will respond promptly."}
                  </p>
                </div>
              </div>

              {/* Success Confirmation Box */}
              <div
                id="contact-success-box"
                className={`relative z-10 py-12 flex-col items-center text-center ${
                  submitted ? "flex" : "hidden"
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-[#A4AC86]/30 text-[#414833] flex items-center justify-center mb-4">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <p
                  data-ar="شكراً لتواصلك معنا!"
                  data-en="Thank You For Reaching Out!"
                  className="text-xl font-bold text-[#414833]"
                >
                  {locale === "ar" ? "شكراً لتواصلك معنا!" : "Thank You For Reaching Out!"}
                </p>
                <p
                  data-ar="تم استلام رسالتك المبدئية بنجاح. سنراجع التفاصيل ونتواصل معك قريباً عبر البريد الإلكتروني."
                  data-en="Your message has been captured. Our team will review your requirements and reach out shortly."
                  className="mt-2 text-sm text-[#535b42] max-w-md"
                >
                  {locale === "ar"
                    ? "تم استلام رسالتك المبدئية بنجاح. سنراجع التفاصيل ونتواصل معك قريباً عبر البريد الإلكتروني."
                    : "Your message has been captured. Our team will review your requirements and reach out shortly."}
                </p>
                <button
                  id="contact-reset-btn"
                  type="button"
                  data-ar="إرسال استفسار آخر"
                  data-en="Send Another Message"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", email: "", details: "" });
                  }}
                  className="mt-6 px-5 py-2.5 rounded-full bg-[#EBE3D2] text-xs font-bold text-[#414833] hover:bg-[#CBBFA3] transition-colors cursor-pointer"
                >
                  {locale === "ar" ? "إرسال استفسار آخر" : "Send Another Message"}
                </button>
              </div>

              {/* Inquiry Form */}
              <form
                id="contact-inquiry-form"
                onSubmit={handleSubmit}
                className={`relative z-10 space-y-5 ${
                  submitted ? "hidden" : "block"
                }`}
              >
                <input
                  type="hidden"
                  id="selected-service-input"
                  name="service"
                  value={selectedService}
                />

                {/* Service Selection Bar with iPhone Liquid Glass Glider */}
                <div>
                  <label
                    data-ar="اختر مجال الخدمة المطلوب:"
                    data-en="Select Service Domain:"
                    className="block text-xs font-bold uppercase tracking-wider text-[#414833] mb-2.5"
                  >
                    {locale === "ar"
                      ? "اختر مجال الخدمة المطلوب:"
                      : "Select Service Domain:"}
                  </label>
                  <div
                    id="contact-service-options"
                    data-liquid-bar="contact-services"
                    style={{ "--liquid-radius": "12px" } as React.CSSProperties}
                    className="athar-liquid-bar grid grid-cols-1 sm:grid-cols-2 gap-2.5"
                  >
                    <span data-liquid-pill="true" className="athar-liquid-pill" aria-hidden="true" />
                    {SERVICES.map((s) => {
                      const isSelected = selectedService === s.id;
                      return (
                        <button
                          key={s.id}
                          type="button"
                          data-service-option={s.id}
                          data-liquid-item="true"
                          data-active={isSelected ? "true" : "false"}
                          aria-pressed={isSelected}
                          onClick={() => handleServiceSelect(s.id)}
                          className={`athar-liquid-item p-3.5 rounded-xl text-start text-xs font-bold border cursor-pointer flex items-center justify-between gap-2 ${
                            isSelected
                              ? "bg-[#414833] text-[#FDFCF9] border-[#414833] shadow-md ring-2 ring-[#A4AC86]/50"
                              : "bg-[#FDFCF9] text-[#414833] border-[#CBBFA3]/70"
                          }`}
                        >
                          <span
                            data-ar={s.title.ar}
                            data-en={s.title.en}
                            className="relative z-10 truncate pointer-events-none"
                          >
                            {s.title[locale]}
                          </span>
                          <span
                            data-service-check={s.id}
                            className={`relative z-10 w-5 h-5 rounded-full flex items-center justify-center shrink-0 transition-all duration-200 pointer-events-none ${
                              isSelected
                                ? "bg-[#A4AC86] text-[#414833] opacity-100 scale-100"
                                : "bg-[#EBE3D2] text-transparent opacity-0 scale-75"
                            }`}
                          >
                            <Check className="w-3 h-3 stroke-[3]" />
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Name & Email inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="form-name"
                      data-ar="الاسم الكريم *"
                      data-en="Your Name *"
                      className="block text-xs font-bold text-[#414833] mb-1.5"
                    >
                      {locale === "ar" ? "الاسم الكريم *" : "Your Name *"}
                    </label>
                    <input
                      id="form-name"
                      required
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      data-placeholder-ar="أحمد محمد"
                      data-placeholder-en="John Doe"
                      placeholder={locale === "ar" ? "أحمد محمد" : "John Doe"}
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBBFA3]/80 bg-[#FDFCF9] text-sm text-[#414833] placeholder:text-[#A4AC86] focus:border-[#414833] focus:bg-white transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="form-email"
                      data-ar="البريد الإلكتروني للعمل *"
                      data-en="Work Email *"
                      className="block text-xs font-bold text-[#414833] mb-1.5"
                    >
                      {locale === "ar" ? "البريد الإلكتروني للعمل *" : "Work Email *"}
                    </label>
                    <input
                      id="form-email"
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="name@company.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-[#CBBFA3]/80 bg-[#FDFCF9] text-sm text-[#414833] placeholder:text-[#A4AC86] focus:border-[#414833] focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Details textarea */}
                <div>
                  <label
                    htmlFor="form-details"
                    data-ar="نبذة موجزة عن فكرة المشروع أو الاحتياج:"
                    data-en="Brief Project Overview & Goals:"
                    className="block text-xs font-bold text-[#414833] mb-1.5"
                  >
                    {locale === "ar"
                      ? "نبذة موجزة عن فكرة المشروع أو الاحتياج:"
                      : "Brief Project Overview & Goals:"}
                  </label>
                  <textarea
                    id="form-details"
                    rows={4}
                    value={formData.details}
                    onChange={(e) =>
                      setFormData({ ...formData, details: e.target.value })
                    }
                    data-placeholder-ar="اكتب نبذة مختصرة عن أهداف مشروعك، الميزات المطلوبة، أو أي مواعيد مستهدفة..."
                    data-placeholder-en="Describe your project objectives, target timeline, or required capabilities..."
                    placeholder={
                      locale === "ar"
                        ? "اكتب نبذة مختصرة عن أهداف مشروعك، الميزات المطلوبة، أو أي مواعيد مستهدفة..."
                        : "Describe your project objectives, target timeline, or required capabilities..."
                    }
                    className="w-full px-4 py-2.5 rounded-xl border border-[#CBBFA3]/80 bg-[#FDFCF9] text-sm text-[#414833] placeholder:text-[#A4AC86] focus:border-[#414833] focus:bg-white transition-colors"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="group w-full py-3.5 px-6 rounded-xl bg-[#414833] hover:bg-[#2e3324] text-[#FDFCF9] text-sm font-bold shadow-md hover:shadow-lg transition-all duration-200 inline-flex items-center justify-center gap-2.5 cursor-pointer"
                >
                  <span
                    data-ar="إرسال طلب الاستشارة"
                    data-en="Submit Project Inquiry"
                  >
                    {locale === "ar"
                      ? "إرسال طلب الاستشارة"
                      : "Submit Project Inquiry"}
                  </span>
                  <ArrowUpRight
                    data-dir-arrow="true"
                    className={`w-4 h-4 transition-transform duration-200 group-hover:-translate-y-0.5 ${
                      locale === "ar"
                        ? "rotate-[-90deg] group-hover:-translate-x-0.5"
                        : "group-hover:translate-x-0.5"
                    }`}
                  />
                </button>

                <p
                  data-ar="يمكنك أيضاً مراسلتنا مباشرة على info@atharcode.com"
                  data-en="You can also reach us directly at info@atharcode.com"
                  className="text-[11px] text-[#737A5D] text-center pt-2"
                >
                  {locale === "ar"
                    ? "يمكنك أيضاً مراسلتنا مباشرة على info@atharcode.com"
                    : "You can also reach us directly at info@atharcode.com"}
                </p>
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
}
