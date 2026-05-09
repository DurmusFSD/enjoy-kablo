import Icon from "../Icon";

const certificates = [
  {
    icon: "verified",
    title: "TSE Belgesi",
    desc: "Türk Standartları Enstitüsü",
  },
  {
    icon: "gavel",
    title: "ISO 9001:2015",
    desc: "Kalite Yönetim Sistemi",
  },
  {
    icon: "new_releases",
    title: "CE Deklarasyonu",
    desc: "Avrupa Uygunluk Normu",
  },
  {
    icon: "eco",
    title: "ROHS & REACH",
    desc: "Çevresel Uygunluk",
  },
];

export default function CertificatesSection() {
  return (
    <section className="py-section-gap max-w-[1280px] mx-auto px-gutter">
      <div className="text-center mb-16">
        <span className="text-label-caps text-primary-container uppercase tracking-widest mb-4 block">
          Onaylanmış Güven
        </span>
        <h2 className="text-h2 font-bold text-on-surface">
          Sertifikalarımız ve Belgelerimiz
        </h2>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {certificates.map((cert) => (
          <div
            key={cert.title}
            className="border border-outline-variant p-8 bg-white hover:border-primary-container transition-all duration-300 flex flex-col items-center text-center"
          >
            <div className="w-24 h-24 mb-6 bg-surface-container flex items-center justify-center">
              <Icon
                name={cert.icon}
                size={48}
                className="text-on-surface-variant"
              />
            </div>
            <h4 className="font-bold mb-2 text-on-surface">{cert.title}</h4>
            <p className="text-xs text-on-surface-variant uppercase tracking-tighter">
              {cert.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}