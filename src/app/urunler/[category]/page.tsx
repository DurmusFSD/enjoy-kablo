import { notFound } from "next/navigation";
import { Metadata } from "next";
import { categories, getCategoryBySlug } from "@/data/categories";
import ProductHero from "@/components/urunler/ProductHero";
import TechnicalHighlights from "@/components/urunler/TechnicalHighlights";
import PriceTable from "@/components/urunler/PriceTable";
import ProductGallery from "@/components/urunler/ProductGallery";
import ProductCTA from "@/components/urunler/ProductCTA";

interface Props {
  params: Promise<{ category: string }>;
}

export async function generateStaticParams() {
  return categories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) return { title: "Kategori Bulunamadı" };
  return {
    title: cat.title,
    description: cat.description,
  };
}

export default async function CategoryPage({ params }: Props) {
  const { category } = await params;
  const cat = getCategoryBySlug(category);
  if (!cat) notFound();

  return (
    <>
      <ProductHero category={cat} />
      <TechnicalHighlights highlights={cat.highlights} />
      <PriceTable category={cat} />
      <ProductGallery gallery={cat.gallery} />
      <ProductCTA category={cat} />
    </>
  );
}