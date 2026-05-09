import Image from "next/image";

export default function ProductionHero() {
  return (
    <section className="relative h-[600px] flex items-center overflow-hidden bg-on-secondary-fixed">
      <div className="absolute inset-0 opacity-40">
        <Image
          src="/images/imalat/uretim-hatti.png"
          alt="Üretim hattı"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
      </div>

      <div className="relative w-full max-w-[1280px] mx-auto px-gutter z-10">
        <div className="max-w-2xl">
          <span className="inline-block bg-primary-container text-on-primary text-label-caps px-3 py-1 mb-stack-md uppercase">
            İmalat & Teknoloji
          </span>
          <h1 className="text-h1 font-bold text-on-primary mb-stack-md">
            Endüstriyel Gücü <br /> Kaliteyle İşliyoruz
          </h1>
          <p className="text-body-lg text-secondary-fixed-dim mb-stack-lg">
            Kablo üretiminde dünya standartlarını yerli mühendislik ve üstün
            teknolojiyle birleştiriyoruz. Her milimetrede kusursuzluk, her
            sarımda güven.
          </p>
        </div>
      </div>
    </section>
  );
}