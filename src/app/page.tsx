import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import ContactCTA from "@/components/ContactCTA";
import Certificate from "@/components/Certificate";
import Categories from "@/components/Categories"

export const metadata: Metadata = {
  title: "Ürünler",
  description:
    "Seyyar makaralar, uzatma kabloları, akü takviye kabloları ve elektrik aksesuarları. Tüm Enjoy Kablo ürün kategorileri.",
};

export default function ProductsPage() {
  return (
    <>
      <HeroSection />
      <Categories />
      <Certificate />
      <ContactCTA />
    </>
  );
}
