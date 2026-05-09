import Image from "next/image";
import { Category } from "@/data/categories";
import Icon from "../Icon";

interface Props {
  category: Category;
}

export default function ProductHero({ category }: Props) {
  return (
    <section className="relative bg-white py-section-gap overflow-hidden border-b border-outline-variant">
      <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 md:grid-cols-12 gap-stack-lg items-center">
        {/* Left - Content */}
        <div className="md:col-span-7 space-y-stack-md">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-surface-container-highest border border-outline rounded-full">
            <Icon
              name="verified"
              size={18}
              filled
              className="text-primary-container"
            />
            <span className="text-label-caps uppercase text-on-surface-variant">
              Yerli Üretim Teknolojisi
            </span>
          </div>

          <h1 className="text-h1 font-bold text-on-secondary-fixed leading-tight uppercase">
            {category.title}
          </h1>

          <p className="text-body-lg text-secondary max-w-[600px]">
            {category.description}
          </p>

          <div className="flex flex-wrap gap-stack-md pt-stack-sm">
            {category.heroFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-2 text-on-surface-variant"
              >
                <Icon
                  name="check_circle"
                  className="text-primary-container"
                />
                <span className="text-label-caps uppercase">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right - Image */}
        <div className="md:col-span-5 relative group">
          <div className="aspect-square bg-surface-container-low border border-outline-variant flex items-center justify-center overflow-hidden relative">
            <Image
              src={category.heroImage}
              alt={category.title}
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-contain p-12 transition-transform duration-500 group-hover:scale-105"
              priority
            />
          </div>

          <div className="absolute top-4 right-4 bg-white p-3 border border-on-secondary-fixed shadow-md">
            <Image
              src="/images/yerli-uretim.png"
              alt="Yerli Üretim Logo"
              width={40}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}