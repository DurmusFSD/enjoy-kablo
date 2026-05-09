import Link from "next/link";

export default function ProductsCTA() {
  return (
    <section className="bg-on-secondary-fixed py-section-gap px-gutter text-center">
      <div className="max-w-[1280px] mx-auto">
        <h2 className="text-h2 font-bold text-on-primary mb-stack-md uppercase">
          İhtiyacınıza Özel Çözümler
        </h2>
        <p className="text-body-lg text-secondary-fixed-dim max-w-2xl mx-auto mb-stack-lg">
          Toplu alımlar ve özel projeleriniz için teknik ekibimizle iletişime
          geçebilirsiniz.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-stack-md">
          <Link
            href="/iletisim"
            className="bg-primary-container text-on-primary text-button uppercase tracking-wider px-stack-lg py-4 hover:bg-primary transition-colors"
          >
            Teklif Alın
          </Link>
          
           <a href="/images/pdf/enjoy.pdf"
            download
            className="border-2 border-on-primary text-on-primary text-button uppercase tracking-wider px-stack-lg py-4 hover:bg-on-primary hover:text-on-secondary-fixed transition-colors"
          >
            Tüm Kataloğu İndir
          </a>
        </div>
      </div>
    </section>
  );
}