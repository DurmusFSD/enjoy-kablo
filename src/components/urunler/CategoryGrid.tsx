import Link from "next/link";
import Image from "next/image";
import { categories } from "@/data/categories";
import Icon from "../Icon";

export default function CategoryGrid() {
  return (
    <section className="py-section-gap px-gutter max-w-[1280px] mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg">
        {categories.map((cat) => (
          <article
            key={cat.slug}
            className="group bg-white border border-outline-variant overflow-hidden flex flex-col md:flex-row shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.1)] transition-all duration-300"
          >
            {/* Image */}
            <div className="w-full md:w-2/5 aspect-square bg-surface-container overflow-hidden relative shrink-0">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute top-4 right-4 bg-white/90 px-3 py-1 rounded-full shadow-sm">
                <span className="text-label-caps text-on-surface uppercase">
                  Yerli Üretim
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="p-stack-lg flex flex-col justify-between flex-1">
              <div>
                <h3 className="text-h3 font-semibold text-on-surface mb-stack-sm uppercase">
                  {cat.title}
                </h3>
                <p className="text-body-md text-secondary mb-stack-md">
                  {cat.shortDescription}
                </p>
                <ul className="space-y-1">
                  {cat.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-label-caps text-on-surface-variant"
                    >
                      <Icon
                        name="check_circle"
                        size={16}
                        className="text-primary-container"
                      />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <Link
                href={`/urunler/${cat.slug}`}
                className="mt-stack-lg flex items-center justify-between text-button text-primary-container uppercase group-hover:gap-4 transition-all"
              >
                Ürünleri İncele
                <Icon name="arrow_forward" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}