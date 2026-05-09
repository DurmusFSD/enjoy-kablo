import Icon from "../Icon";

export default function CatalogCTA() {
    return (
        <section className="relative bg-surface-container-high py-section-gap border-y border-outline-variant overflow-hidden">
            <div className="absolute inset-0 industrial-overlay pointer-events-none" />
            <div className="relative z-10 max-w-[1280px] mx-auto px-gutter flex flex-col md:flex-row items-center justify-between gap-stack-lg">
                <div className="flex items-center gap-stack-lg">
                    <Icon name="menu_book" size={64} className="text-primary-container" />
                    <div>
                        <h2 className="text-h2 font-bold text-on-surface">2026 Ürün Kataloğu</h2>
                        <p className="text-body-lg text-secondary">
                            Tüm teknik detaylar ve ürün gruplarımız tek bir dosyada.
                        </p>
                    </div>
                </div>

                <a href="/images/pdf/enjoy.pdf"
                    download
                    className="bg-on-secondary-fixed text-on-primary px-stack-lg py-4 text-button uppercase tracking-widest hover:bg-primary-container transition-all flex items-center gap-stack-md"
                >
                    HEMEN İNDİR (PDF)
                    <Icon name="download" />
                </a>
            </div>
        </section>
    );
}