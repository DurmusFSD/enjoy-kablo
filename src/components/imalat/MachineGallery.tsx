import Image from "next/image";

const machines = [
  {
    title: "Yüksek Hızlı Büküm Hattı",
    image: "/images/imalat/makine-1.png",
    alt: "Yüksek hızlı büküm hattı",
  },
  {
    title: "İzole Ekstrüzyon Ünitesi",
    image: "/images/imalat/makine-2.png",
    alt: "İzole ekstrüzyon ünitesi",
  },
  {
    title: "PLC Kontrol Merkezi",
    image: "/images/imalat/makine-3.png",
    alt: "PLC kontrol merkezi",
  },
  {
    title: "Otomatik Paketleme Hattı",
    image: "/images/imalat/makine-4.png",
    alt: "Otomatik paketleme hattı",
  },
];

export default function MachineGallery() {
  return (
    <section className="pb-section-gap">
      <div className="max-w-[1280px] mx-auto px-gutter mb-10">
        <h2 className="text-h2 font-bold text-on-surface">Makine Parkurumuz</h2>
        <p className="text-on-surface-variant mt-2">
          En son teknoloji ekstrüzyon, büküm ve ambalaj makinelerimizden kareler.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 px-2">
        {machines.map((machine) => (
          <div
            key={machine.title}
            className="relative group h-80 overflow-hidden"
          >
            <Image
              src={machine.image}
              alt={machine.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
              <span className="text-white font-bold">{machine.title}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}