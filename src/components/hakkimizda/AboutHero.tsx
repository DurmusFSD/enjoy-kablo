import Image from "next/image";

export default function AboutHero() {
  return (
    <header className="relative h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/logo.png"
          alt="Endüstriyel kablo üretimi"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 text-center text-on-primary max-w-[1280px] mx-auto px-gutter">
        <span className="text-label-caps uppercase tracking-[0.2em] text-primary-fixed-dim mb-4 block">
          Endüstriyel Güven ve Kalite
        </span>
        <h1 className="text-h1 font-bold">Kurumsal</h1>
        <div className="w-24 h-1 bg-primary-container mx-auto mt-6" />
      </div>
    </header>
  );
}