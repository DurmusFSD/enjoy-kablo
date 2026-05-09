import type { Metadata } from "next";
import ContactHero from "@/components/iletisim/Hero";
import ContactSection from "@/components/iletisim/ContactSection";
import MapSection from "@/components/iletisim/MapSection";
import CatalogCTA from "@/components/iletisim/CatalogCTA";

export const metadata: Metadata = {
  title: "İletişim",
  description:
    "Enjoy Kablo iletişim sayfası. Teklif talepleri, teknik destek ve bayilik başvuruları için bize ulaşın.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactSection />
      <MapSection />
      <CatalogCTA />
    </>
  );
}