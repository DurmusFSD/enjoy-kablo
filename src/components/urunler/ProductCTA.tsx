import Link from "next/link";
import { Category } from "@/data/categories";
import { SITE_CONFIG } from "@/lib/constants";

interface Props {
    category: Category;
}

export default function ProductCTA({ category }: Props) {
    return (
        <section className="py-section-gap bg-on-secondary-fixed relative overflow-hidden">
            <div className="absolute inset-0 industrial-overlay pointer-events-none" />

            <div className="max-w-[1280px] mx-auto px-gutter relative z-10 flex flex-col items-center text-center">
                <h2 className="text-h2 font-bold text-on-primary uppercase mb-stack-md">
                    Projenize Özel Çözümler
                </h2>
                <p className="text-on-primary/80 text-body-lg max-w-2xl mb-stack-lg">
                    Toplu alımlar ve projeye özel uzunluktaki {category.title}{" "}
                    siparişleriniz için teknik ekibimizle iletişime geçin.
                </p>

                <div className="flex flex-col sm:flex-row gap-stack-md">
                    <Link
                        href="/iletisim"
                        className="bg-primary-container text-on-primary text-button uppercase px-12 py-5 hover:bg-primary transition-all"
                    >
                        Teklif İste
                    </Link>

                    <a href={SITE_CONFIG.pdfCatalog}
                        download
                        className="bg-transparent border-2 border-on-primary text-on-primary text-button uppercase px-12 py-5 hover:bg-on-primary hover:text-on-secondary-fixed transition-all"
                    >
                        Kataloğu İncele
                    </a>
                </div>
            </div>
        </section>
    );
}