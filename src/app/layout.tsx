import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { SITE_CONFIG } from "@/lib/constants";
import ContactCTA from "@/components/ContactCTA";
import Certificate from "@/components/Certificate";
import Categories from "@/components/Categories"

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${SITE_CONFIG.name} - Endüstriyel Çözümler`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "endüstriyel kablo",
    "seyyar makara",
    "uzatma kablosu",
    "akü takviye kablosu",
    "yerli üretim kablo",
    "TTR kablo",
    "Enjoy Kablo",
  ],
  openGraph: {
    title: SITE_CONFIG.fullName,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "tr_TR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="tr" className={`scroll-smooth ${inter.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
      </head>
      <body className="bg-background text-on-background overflow-x-hidden flex flex-col min-h-screen">
        <Navbar />
        <main className="mt-[72px] flex-1">{children}</main>
        
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
