import Image from "next/image";
import Icon from "../Icon";

const qualityPoints = [
    {
        title: "Uluslararası Standartlar",
        desc: "Tüm üretim süreçlerimizde ISO ve TSE normlarına %100 uyum sağlıyoruz.",
    },
    {
        title: "Sürdürülebilir Üretim",
        desc: "Çevreye duyarlı ham maddeler ve enerji verimli üretim yöntemleri kullanıyoruz.",
    },
];

export default function QualityPolicy() {
    return (
        <section className="bg-surface-dim py-section-gap border-y border-outline-variant">
            <div className="max-w-[1280px] mx-auto px-gutter grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                {/* Left - Content */}
                <div>
                    <h2 className="text-h2 font-bold mb-stack-md text-on-surface">
                        Kalite Politikamız
                    </h2>
                    <p className="text-body-lg mb-8 text-on-surface">
                        Enjoy Kablo olarak, her ürünümüzde &quot;Sıfır Hata&quot; prensibiyle
                        hareket ediyoruz. Kalite sadece bir kontrol aşaması değil, üretim
                        felsefemizin temelidir.
                    </p>

                    <ul className="space-y-4">
                        {qualityPoints.map((point) => (
                            <li key={point.title} className="flex items-start gap-4">
                                <Icon
                                    name="check_circle"
                                    className="text-primary-container mt-1 shrink-0"
                                />
                                <div>
                                    <span className="font-bold block text-on-surface">
                                        {point.title}
                                    </span>
                                    <span className="text-on-surface-variant">{point.desc}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right - Card */}
                <div className="relative">
                    <div className="bg-white p-10 border border-outline shadow-[8px_8px_0px_rgba(0,0,0,0.1)] relative z-10">
                        <div className="flex items-center gap-6 mb-8">
                            <div className="w-20 h-20 flex items-center justify-center bg-primary-container text-on-primary shrink-0">
                                <Icon name="precision_manufacturing" size={40} />
                            </div>
                            <div>
                                <h3 className="text-h3 font-semibold text-primary-container">
                                    Yerli Üretim
                                </h3>
                                <p className="text-label-caps uppercase tracking-widest text-on-surface-variant">
                                    Global Standart, Milli Güç
                                </p>
                            </div>
                        </div>

                        <p className="text-on-surface-variant mb-6 italic">
                            &quot;Türkiye&apos;nin sanayi hamlesine değer katan Enjoy Kablo, %100
                            yerli sermaye ve iş gücü ile dünya pazarlarına ürün sunmaktadır.&quot;
                        </p>

                        <div className="pt-6 border-t border-outline-variant flex justify-between items-center">
                            <Image
                                src="/images/yerli-uretim.png"
                                alt="Yerli Üretim Logo"
                                width={48}
                                height={48}
                                className="h-12 w-auto  contrast-125 object-contain"
                            />
                            <span className="font-bold text-primary-container">
                                #TürkiyeGüçleniyor
                            </span>
                        </div>
                    </div>

                    {/* Decorative back element */}
                    <div className="absolute -bottom-4 -right-4 w-full h-full bg-primary-container -z-0 opacity-10 border border-primary-container" />
                </div>
            </div>
        </section>
    );
}