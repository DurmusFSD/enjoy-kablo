import Link from "next/link";
import { SITE_CONFIG, NAV_ITEMS } from "@/lib/constants";
import Icon from "./Icon";
import Image from "next/image";
import WhatsAppIcon from "@/components/WhatsAppIcon";
import InstagramIcon from "@/components/InstagramIcon";
import FacebookIcon from "@/components/FacebookIcon";


export default function Footer() {
  const productsItem = NAV_ITEMS.find((i) => i.label === "Ürünler");

  return (
    <footer className="bg-on-secondary-fixed text-on-primary border-t border-on-secondary-fixed-variant">
      <div className="w-full py-section-gap px-gutter max-w-[1280px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start gap-stack-lg">
          {/* Brand */}
          <div className="max-w-xl">
            <Link href="/" className="flex items-center mb-6">
              <Image
                src="/images/logo.png"
                alt={SITE_CONFIG.name}
                width={200}
                height={60}
                priority
                className="h-22 w-auto object-contain"
              />
            </Link>
            <p className="text-body-md text-secondary-fixed-dim">
              Endüstriyel kablo üretiminde Türkiye&apos;nin güvenilir çözüm ortağı.
              Yüksek kalite, yerli üretim.
            </p>
            <div className="flex gap-4 mt-6">
              <a
                href={`mailto:${SITE_CONFIG.email}`}
                className="w-10 h-10 rounded-full bg-on-secondary-fixed-variant flex items-center justify-center hover:bg-primary-container transition-colors"
                aria-label="E-posta"
              >
                <Icon name="alternate_email" size={20} />
              </a>
              <a
                href={`https://wa.me/${SITE_CONFIG.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-on-secondary-fixed-variant flex items-center justify-center hover:bg-primary-container transition-colors"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon size={20} />
              </a>
              <a href={SITE_CONFIG.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-on-secondary-fixed-variant flex items-center justify-center hover:bg-primary-container transition-colors"
                aria-label="Instagram"
              >
                <InstagramIcon size={20} />
              </a>


              <a href={SITE_CONFIG.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-on-secondary-fixed-variant flex items-center justify-center hover:bg-primary-container transition-colors"
                aria-label="Facebook"
              >
                <FacebookIcon size={20} />
              </a>
            </div>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 gap-stack-lg md:gap-20">
            <div className="flex flex-col gap-stack-sm">
              <span className="text-label-caps text-primary-container mb-2 uppercase">
                Kurumsal
              </span>
              <Link
                href="/hakkimizda"
                className="text-body-md text-secondary-fixed-dim hover:text-primary-container transition-colors"
              >
                Hakkımızda
              </Link>
              <Link
                href="/imalat"
                className="text-body-md text-secondary-fixed-dim hover:text-primary-container transition-colors"
              >
                Kalite Politikamız
              </Link>
              <Link
                href="/imalat"
                className="text-body-md text-secondary-fixed-dim hover:text-primary-container transition-colors"
              >
                Belgelerimiz
              </Link>
              <Link
                href="/iletisim"
                className="text-body-md text-secondary-fixed-dim hover:text-primary-container transition-colors"
              >
                KVKK
              </Link>
            </div>
            <div className="flex flex-col gap-stack-sm">
              <span className="text-label-caps text-primary-container mb-2 uppercase">
                Ürünler
              </span>
              {productsItem?.dropdown?.slice(0, 3).map((sub) => (
                <Link
                  key={sub.href}
                  href={sub.href}
                  className="text-body-md text-secondary-fixed-dim hover:text-primary-container transition-colors"
                >
                  {sub.label}
                </Link>
              ))}
              <a
                href={SITE_CONFIG.pdfCatalog}
                download
                className="text-body-md text-secondary-fixed-dim hover:text-primary-container transition-colors"
              >
                Fiyat Listesi
              </a>
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-stack-sm">
            <span className="text-label-caps text-primary-container mb-2 uppercase">
              İletişim
            </span>
            <div className="flex items-center gap-3 text-secondary-fixed-dim">
              <Icon name="location_on" size={18} />
              <span className="text-body-md">{SITE_CONFIG.address}</span>
            </div>
            <div className="flex items-center gap-3 text-secondary-fixed-dim">
              <Icon name="call" size={18} />
              <span className="text-body-md">{SITE_CONFIG.phone}</span>
            </div>
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="flex items-center gap-3 text-secondary-fixed-dim hover:text-primary-container transition-colors"
            >
              <Icon name="mail" size={18} />
              <span className="text-body-md">{SITE_CONFIG.email}</span>
            </a>
          </div>
        </div>

        {/* Bottom */}
         <div className="mt-section-gap pt-stack-md border-t border-on-secondary-fixed-variant flex flex-col md:flex-row justify-between items-center gap-stack-md">
          <span className="text-body-md text-secondary-fixed-dim opacity-70">
            © {new Date().getFullYear()} {SITE_CONFIG.name} - Endüstriyel Çözümler. Tüm
            Hakları Saklıdır.
          </span>
          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href="https://github.com/DurmusFSD"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-secondary-fixed-dim hover:text-primary-container transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-hidden="true"
              >
                <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-1-.02-1.96-3.2.69-3.87-1.54-3.87-1.54-.52-1.32-1.27-1.67-1.27-1.67-1.04-.71.08-.7.08-.7 1.15.08 1.76 1.18 1.76 1.18 1.02 1.75 2.68 1.24 3.33.95.1-.74.4-1.24.73-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .97-.31 3.18 1.18.92-.26 1.91-.39 2.89-.39.98 0 1.97.13 2.89.39 2.21-1.49 3.18-1.18 3.18-1.18.62 1.58.23 2.75.11 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.27 5.7.41.36.78 1.06.78 2.14 0 1.55-.01 2.79-.01 3.17 0 .31.21.68.8.56 4.56-1.52 7.85-5.83 7.85-10.91C23.5 5.73 18.27.5 12 .5z" />
              </svg>
            </a>
            <span className="material-symbols-outlined text-primary-container">location_on</span>
            <span className="font-body-md text-body-md">İstanbul, Türkiye</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
