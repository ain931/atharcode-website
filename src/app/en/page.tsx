import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Athar | Software Engineering, Odoo ERP, AR/VR & Digital Marketing in Saudi Arabia",
  description:
    "Athar is a Saudi software company specializing in custom web applications, Odoo ERP customization, interactive AR/VR experiences, and performance digital marketing.",
  alternates: {
    canonical: "https://atharcode.com/en",
    languages: {
      ar: "https://atharcode.com",
      en: "https://atharcode.com/en",
    },
  },
  openGraph: {
    title: "Athar | Custom Software, Odoo ERP, AR/VR & Digital Marketing",
    description:
      "From Idea to Impact. Bespoke web systems, Odoo integrations, immersive AR/VR experiences, and data-driven marketing in Saudi Arabia.",
    url: "https://atharcode.com/en",
    siteName: "Athar",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/brand/logo-official-dark.png",
        width: 1200,
        height: 630,
        alt: "Athar Software & Digital Marketing Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athar | From Idea to Impact",
    description:
      "Software Engineering, Odoo ERP, AR/VR & Performance Marketing in Saudi Arabia.",
    site: "@athar_code",
    creator: "@athar_code",
    images: ["/brand/logo-official-dark.png"],
  },
};

export default function EnglishHomePage() {
  return <Home initialLocale="en" />;
}
