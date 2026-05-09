import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import Icon from "./Icon";

export default function Categories() {
  return (
    <section className="py-section-gap industrial-grid">
      <div className="max-w-[1280px] mx-auto px-gutter">
        {/* Header: Title + Yerli Üretim Badge */}
        <div className="flex justify-between items-end mb-stack-lg flex-wrap gap-4">
          <div className="space-y-stack-sm">
            <span className="text-label-caps text-primary-container uppercase tracking-widest">
              Katalog
            </span>
            <h2 className="text-h2 font-bold text-on-surface">
              Öne Çıkan Ürün Grupları
            </h2>
          </div>

          {/* Yerli Üretim Badge */}
          <div className="bg-white p-4 border border-outline-variant flex items-center gap-3">
            <Image
              src="/images/yerli-uretim.png"
              alt="Yerli Üretim"
              width={50}
              height={50}
              className="h-12 w-auto object-contain"
            />
            <div className="text-[10px] leading-tight font-bold text-on-surface uppercase">
              Türkiye&apos;nin <br /> Gururu
            </div>
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-stack-md">
          {categories.map((cat) => (
            <Link
              key={cat.slug}
              href={`/urunler/${cat.slug}`}
              className="group bg-white border border-outline-variant hover:border-primary-container transition-all duration-300 relative overflow-hidden flex flex-col h-full"
            >
              <div className="aspect-square bg-surface-container overflow-hidden relative">
                <Image
                  src={cat.image}
                  alt={cat.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-stack-md flex flex-col flex-grow">
                <h3 className="text-h3 font-semibold text-on-surface group-hover:text-primary-container transition-colors uppercase">
                  {cat.title}
                </h3>
                <p className="text-on-secondary-fixed text-body-md mt-2 flex-grow">
                  {cat.shortDescription}
                </p>
                <span className="mt-4 flex items-center text-button text-primary-container uppercase">
                  Detayları Gör
                  <Icon name="arrow_forward" size={18} className="ml-2" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}