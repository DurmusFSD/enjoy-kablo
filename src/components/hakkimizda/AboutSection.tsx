import Image from "next/image";
import Icon from "../Icon";

const features = [
  { icon: "precision_manufacturing", title: "Modern Üretim" },
  { icon: "verified_user", title: "Yüksek Kalite" },
];

export default function AboutSection() {
  return (
    <section className="py-section-gap max-w-[1280px] mx-auto px-gutter">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg items-center">
        {/* Left - Image */}
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-primary-container z-0" />

          <div className="relative z-10 w-full aspect-square border border-outline shadow-xl overflow-hidden">
            <Image
              src="/images/logo2.jpg"
              alt="Endüstriyel üretim tesisi"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          <div className="absolute bottom-4 right-4 bg-primary-container text-on-primary p-6 z-20">
            <span className="block text-h2 font-bold">20+</span>
            <span className="text-label-caps uppercase">Yıllık Tecrübe</span>
          </div>
        </div>

        {/* Right - Content */}
        <div className="space-y-stack-md">
          <h2 className="text-h2 font-bold text-on-background border-l-4 border-primary-container pl-4">
            Enerjinin Güvenilir Adresi
          </h2>

          <p className="text-body-lg text-secondary">
            Enjoy Kablo, enerji ve endüstriyel kablo sektöründe köklü geçmişi ve
            ileri teknoloji üretim tesisleri ile Türkiye&apos;nin parlayan
            yıldızıdır. Kuruluşumuzdan bu yana, yerli üretim gücünü küresel
            kalite standartlarıyla birleştirerek sektördeki en zorlu projelere
            imza atıyoruz.
          </p>

          <p className="text-body-md text-on-secondary-fixed-variant">
            Bakırın işlenmesinden nihai kablo formuna kadar her aşamada titiz bir
            mühendislik yaklaşımı sergiliyoruz. Ürünlerimiz, yüksek iletkenlik,
            üstün yalıtım ve zorlu çevresel koşullara dayanıklılık özellikleri
            ile donatılmıştır. Elektrik taahhüt firmalarından endüstriyel
            tesislere kadar geniş bir müşteri yelpazesine, kesintisiz enerji
            akışı için çözüm ortaklığı sunuyoruz.
          </p>

          <div className="grid grid-cols-2 gap-4 mt-8">
            {features.map((f) => (
              <div
                key={f.title}
                className="border border-outline-variant p-4 bg-white"
              >
                <Icon
                  name={f.icon}
                  size={32}
                  className="text-primary-container mb-2"
                />
                <h4 className="text-lg font-semibold text-on-surface">
                  {f.title}
                </h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}