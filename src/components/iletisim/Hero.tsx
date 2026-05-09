import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative bg-on-secondary-fixed py-section-gap overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block bg-primary-container text-on-primary px-3 py-1 text-label-caps uppercase mb-stack-md">
            BİZE ULAŞIN
          </span>
          <h1 className="text-h1 font-bold text-on-primary mb-stack-md">
            İletişim & Teknik Destek
          </h1>
          <p className="text-body-lg text-secondary-fixed-dim">
            Endüstriyel kablo çözümlerimiz için uzman ekibimizle görüşün.
            Projelerinize özel teknik destek ve teklif taleplerinizi bekliyoruz.
          </p>
        </div>
      </div>

      <div className="absolute right-0 top-0 h-full w-1/3 opacity-20 hidden lg:block">
        <Image
          src="/images/contact-bg.png"
          alt="Endüstriyel kablo detayı"
          fill
          sizes="33vw"
          className="object-cover grayscale brightness-50"
        />
      </div>
    </section>
  );
}