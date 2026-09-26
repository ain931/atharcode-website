import type { Metadata } from "next";
import Home from "../page";

export const metadata: Metadata = {
  title: "Athar | Software Engineering, Odoo ERP, AR/VR & Digital Marketing in Saudi Arabia",
  description:
    "Athar is a Saudi software company specializing in custom web applications, Odoo ERP customization, interactive AR/VR experiences, and digital marketing.",
};

export default function EnglishHomePage() {
  return <Home initialLocale="en" />;
}
