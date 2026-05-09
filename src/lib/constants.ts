export const SITE_CONFIG = {
  name: "Enjoy Kablo",
  fullName: "Enjoy Kablo - Endüstriyel Çözümler Kablo Plastik San. Tic. ve Ltd. Şti.",
  description:
    "Yüksek iletkenlik, üstün yalıtım ve zorlu endüstriyel şartlara dayanıklı kablo çözümleriyle Türkiye'nin üretim gücünü dünyaya taşıyoruz.",
  url: "https://enjoykablo.com",
  email: "enjkablo@gmail.com",
  whatsapp: "+90 534 265 03 28",
  whatsappDisplay: "+90 534 265 03 28",
  phone: "+90 534 265 03 28",
  address: "Karayolları, 582. Sk. No:74 A, 34400 Gaziosmanpaşa/İstanbul",
  pdfCatalog: "/pdf/enjoy.pdf",
  social: {
    instagram: "https://www.instagram.com/enjoykablo",
    facebook: "https://www.facebook.com/enjoykablo",
  },
};

export const NAV_ITEMS = [
  { label: "Anasayfa", href: "/" },
  {
    label: "Ürünler",
    href: "/urunler",
    dropdown: [
      { label: "Seyyar Makara Serisi", href: "/urunler/seyyar-makaralar" },
      { label: "Arapuarlı Kablo Serisi", href: "/urunler/arapuarli-kablo" },
      { label: "Uzatma Kablo Serisi", href: "/urunler/uzatma-kablo" },
      { label: "Fişli Kablo Serisi", href: "/urunler/fisli-kablo" },
      { label: "Kauçuk Serisi", href: "/urunler/kaucuk-serisi" },
      { label: "Aksesuar", href: "/urunler/aksesuar" },
      { label: "Akü Takviye Serisi", href: "/urunler/aku-takviye" },
      { label: "Fiş Baskı Serisi", href: "/urunler/fis-baski" },
    ],
  },
  { label: "Hakkımızda", href: "/hakkimizda" },
  { label: "İmalat", href: "/imalat" },
  { label: "İletişim", href: "/iletisim" },
];

export function whatsappLink(productCode?: string, productTitle?: string) {
  const base = `https://wa.me/${SITE_CONFIG.whatsapp}`;

  let message = "";
  if (productCode && productTitle) {
    message = `Merhaba, ${productCode} - ${productTitle} ürünü için teklif almak istiyorum.`;
  } else if (productTitle) {
    message = `Merhaba, ${productTitle} hakkında teklif almak istiyorum.`;
  } else if (productCode) {
    message = `Merhaba, ${productCode} ürünü için teklif almak istiyorum.`;
  }

  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}
