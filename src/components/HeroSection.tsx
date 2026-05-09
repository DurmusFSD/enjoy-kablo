import Link from "next/link";
import Image from "next/image";
import Icon from "./Icon";

export default function HeroSection() {
  return (
    <section className="relative min-h-[870px] flex items-start pt-32 overflow-hidden bg-on-secondary-fixed">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.png"
          alt="Endüstriyel kablo üretim tesisi"
          fill
          priority
          className="object-cover grayscale-[20%] contrast-[1.1]"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-on-secondary-fixed/90 via-on-secondary-fixed/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1280px] mx-auto px-gutter w-full">
        <div className="max-w-2xl text-on-primary space-y-stack-lg">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-on-primary text-primary-container px-4 py-1.5 rounded-full text-label-caps uppercase">
            <Icon name="verified" size={16} filled />
            Endüstriyel Üretim Gücü
          </div>

          {/* Heading */}
          <h1 className="text-h1 font-bold">Enerjide Güven ve Kalite</h1>

          {/* Description */}
          <p className="text-body-lg text-secondary-fixed opacity-90">
            Yüksek iletkenlik, üstün yalıtım ve zorlu endüstriyel şartlara dayanıklı kablo
            çözümleriyle Türkiye&apos;nin üretim gücünü dünyaya taşıyoruz.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-stack-md pt-stack-sm">
            <Link
              href="/urunler"
              className="bg-primary-container text-on-primary text-button uppercase px-stack-lg py-4 border-2 border-primary-container hover:bg-primary hover:border-primary transition-all"
            >
              Ürünlerimizi İnceleyin
            </Link>
            <Link
              href="/urunler"
              className="border-2 border-on-primary text-on-primary text-button uppercase px-stack-lg py-4 hover:bg-on-primary hover:text-on-secondary-fixed transition-all"
            >
              Kurumsal Katalog
            </Link>
          </div>
        </div>
      </div>

      {/* Floating Stats */}
      <div className="absolute bottom-0 right-0 hidden lg:block bg-on-primary p-gutter border-t-4 border-primary-container shadow-2xl">
        <div className="flex gap-stack-lg">
          <div className="text-on-surface">
            <div className="text-h2 font-bold text-primary">500+</div>
            <div className="text-label-caps uppercase text-secondary-container">
              Ürün Çeşidi
            </div>
          </div>
          <div className="w-px bg-outline-variant" />
          <div className="text-on-surface">
            <div className="text-h2 font-bold text-primary">25+</div>
            <div className="text-label-caps uppercase text-secondary-container">
              İhracat Ülkesi
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
