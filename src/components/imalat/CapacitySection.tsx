import Image from "next/image";
import Icon from "../Icon";

export default function CapacitySection() {
  return (
    <section className="py-section-gap max-w-[1280px] mx-auto px-gutter">
      <div className="mb-stack-lg">
        <h2 className="text-h2 font-bold text-on-background mb-4">
          Teknik Kapasite & AR-GE
        </h2>
        <div className="h-1 w-20 bg-primary-container" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Large Feature: R&D Lab */}
        <div className="md:col-span-8 bg-surface-container border border-outline-variant p-10 flex flex-col justify-between">
          <div>
            <h3 className="text-h3 font-semibold mb-4 text-on-surface">
              İleri Seviye AR-GE Laboratuvarı
            </h3>
            <p className="text-on-surface-variant max-w-lg mb-6">
              Ham maddeden son ürüne kadar her aşamada tam donanımlı
              laboratuvarlarımızda testler gerçekleştiriyoruz. İnovasyon odaklı
              yaklaşımımızla sektörün geleceğini tasarlıyoruz.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2">
                <Icon name="search" className="text-primary-container" />
                <span className="text-label-caps uppercase text-on-surface">
                  Hassas Analiz
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Icon name="science" className="text-primary-container" />
                <span className="text-label-caps uppercase text-on-surface">
                  Malzeme Testleri
                </span>
              </div>
            </div>
          </div>

          <div className="mt-10 relative h-64 overflow-hidden border border-outline">
            <Image
              src="/images/imalat/laboratuvar.png"
              alt="AR-GE Laboratuvarı"
              fill
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover"
            />
          </div>
        </div>

        {/* Small Features */}
        <div className="md:col-span-4 flex flex-col gap-6">
          <div className="bg-on-secondary-fixed text-on-primary p-8 flex-1 border border-primary-container">
            <Icon
              name="factory"
              size={40}
              className="mb-4 text-primary-fixed"
            />
            <h3 className="text-h3 font-semibold mb-2">15.000 m²</h3>
            <p className="text-secondary-fixed-dim">
              Toplam kapalı üretim alanı ile kesintisiz ve yüksek hacimli üretim
              gücü.
            </p>
          </div>

          <div className="bg-white border border-outline-variant p-8 flex-1">
            <Icon
              name="speed"
              size={40}
              className="mb-4 text-primary-container"
            />
            <h3 className="text-h3 font-semibold mb-2 text-on-surface">
              Yüksek Hız
            </h3>
            <p className="text-on-surface-variant">
              Modern ekstrüzyon hatlarımızla yıllık 50.000 ton bakır işleme
              kapasitesi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}