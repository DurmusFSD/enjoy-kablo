import Icon from "../Icon";

const items = [
  {
    icon: "visibility",
    title: "Vizyonumuz",
    desc: "Kablo üretim teknolojilerinde global ölçekte referans alınan, yenilikçi ve sürdürülebilir enerji çözümlerinde dünya lideri bir marka olmak. Yerli üretimin gücünü her kıtaya taşıyarak, geleceğin akıllı şehirlerini güvenli enerji ağlarıyla birbirine bağlamayı hedefliyoruz.",
  },
  {
    icon: "rocket_launch",
    title: "Misyonumuz",
    desc: "Müşterilerimize en üst düzeyde güvenlik, verimlilik ve kalite sunan kablo çözümleri üretmek. Sürekli Ar-Ge yatırımları ile endüstriyel standartları yukarı taşımak, çevre dostu üretim süreçleri ile topluma ve doğaya katma değer sağlamak temel varlık sebebimizdir.",
  },
];

export default function VisionMission() {
  return (
    <section className="bg-surface-container-low py-section-gap">
      <div className="max-w-[1280px] mx-auto px-gutter">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-stack-lg">
          {items.map((item) => (
            <div
              key={item.title}
              className="bg-white p-12 border-b-8 border-primary-container shadow-md"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-primary-container flex items-center justify-center shrink-0">
                  <Icon name={item.icon} className="text-on-primary" filled />
                </div>
                <h3 className="text-h2 font-bold text-on-surface">
                  {item.title}
                </h3>
              </div>
              <p className="text-body-lg text-secondary">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}