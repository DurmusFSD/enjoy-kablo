import Image from "next/image";
import Link from "next/link";
import Icon from "./Icon";

const certificates = [
  { icon: "shield", title: "ISO 9001:2015", desc: "Kalite Yönetim Sistemi" },
  { icon: "workspace_premium", title: "TSE Belgeli", desc: "Türk Standartları Uyumu" },
  { icon: "verified", title: "CE Sertifikası", desc: "Avrupa Birliği Güvenlik" },
  { icon: "recycling", title: "RoHS Uyumu", desc: "Çevre Dostu Üretim" },
];

export default function QualitySection() {
  return (
    <section className="bg-on-secondary-fixed text-on-primary py-section-gap relative overflow-hidden">
      <div className="absolute -right-20 -top-20 opacity-10 pointer-events-none">
        <Icon name="factory" size={400} />
      </div>

      <div className="max-w-[1280px] mx-auto px-gutter relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-stack-lg items-center">
          {/* Left - Content */}
          <div className="space-y-stack-md">
            <h2 className="text-h2 font-bold">
              Global Standartlarda Üretim Teknolojisi
            </h2>
            <p className="text-body-lg text-secondary-fixed-dim">
              Enjoy Kablo olarak, en son teknolojiye sahip laboratuvarlarımızda her bir
              ürünü titizlikle test ediyoruz. Kalite bizim için sadece bir sertifika değil,
              üretimimizin temel taşıdır.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-stack-md py-stack-md">
              {certificates.map((c) => (
                <div key={c.title} className="flex items-start gap-3">
                  <Icon
                    name={c.icon}
                    size={32}
                    className="text-primary-container shrink-0"
                  />
                  <div>
                    <h4 className="text-[18px] font-semibold mb-1">{c.title}</h4>
                    <p className="text-label-caps opacity-70">{c.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/imalat"
              className="inline-block bg-on-primary text-on-secondary-fixed text-button uppercase px-8 py-4 border-2 border-on-primary hover:bg-transparent hover:text-on-primary transition-all"
            >
              Sertifikalarımızı İnceleyin
            </Link>
          </div>

          {/* Right - Image */}
          <div className="relative group">
            <div className="absolute -inset-2 bg-primary-container opacity-20 blur-xl group-hover:opacity-30 transition-opacity" />
            <div className="relative z-10 w-full h-[400px] border-4 border-on-secondary-fixed-variant shadow-2xl overflow-hidden">
              <Image
                src="/images/img.png"
                alt="Yüksek kaliteli kablo iç yapısı"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover grayscale-[30%]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}