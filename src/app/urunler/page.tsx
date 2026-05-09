import type { Metadata } from "next";
import ProductsHeader from "@/components/urunler/ProductsHeader";
import CategoryGrid from "@/components/urunler/CategoryGrid";
import ProductsCTA from "@/components/urunler/ProductsCTA";

export const metadata: Metadata = {
  title: "Ürün Grupları",
  description:
    "Seyyar makaralar, uzatma kabloları, akü takviye kabloları ve elektrik aksesuarları. Tüm Enjoy Kablo ürün kategorileri.",
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHeader />
      <CategoryGrid />
      <ProductsCTA />
    </>
  );
}