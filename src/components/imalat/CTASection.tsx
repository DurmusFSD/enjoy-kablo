import Link from "next/link";

export default function CTASection() {
    return (
        <section className="bg-primary py-24 text-center">
            <div className="max-w-3xl mx-auto px-gutter">
                <h2 className="text-h1 font-bold text-on-primary mb-6">
                    Detaylı Teknik Katalog
                </h2>
                <p className="text-primary-fixed mb-10 text-body-lg">
                    Tüm ürün gruplarımızın teknik spesifikasyonlarını ve kalite belgelerini
                    içeren güncel kataloğumuzu hemen indirin.
                </p>
                <div className="flex flex-col md:flex-row justify-center gap-4">

                    <a href="/images/pdf/enjoy.pdf"
                        download
                        className="bg-white text-primary text-button uppercase px-10 py-4 hover:bg-secondary-fixed transition-all shadow-lg"
                    >
                        PDF Kataloğu İndir
                    </a>
                    <a href="https://maps.google.com/maps?vet=10CAAQoqAOahcKEwiY--PYjKeUAxUAAAAAHQAAAAAQCQ..i&rlz=1C1CHZN_trTR1036TR1036&pvq=Cg0vZy8xMXpodjc4bW55IhEKC2Vuam95IGthYmxvEAIYAw&lqi=CgtlbmpveSBrYWJsb1oNIgtlbmpveSBrYWJsb5IBC2VsZWN0cmljaWFu&fvr=1&cs=0&um=1&ie=UTF-8&fb=1&gl=tr&sa=X&ftid=0x14cab1947338ea1d:0x52d551737e60dbb2"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="border-2 border-white text-white text-button uppercase px-10 py-4 hover:bg-white hover:text-primary transition-all"
                    >
                        Tesisimizi Ziyaret Edin
                    </a>
                </div>

            </div>
        </section>
    );
}