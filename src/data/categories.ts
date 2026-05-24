export interface PriceListItem {
  code: string;
  spec: string;
  price: string;
  status: "Stokta" | "Sipariş Üzerine";
}

export interface Highlight {
  icon: string;
  title: string;
  desc: string;
}

export interface GalleryItem {
  icon: string;        // image yerine
  title: string;
  desc: string;
}

export interface Category {
  slug: string;
  title: string;
  description: string;
  shortDescription: string;
  image: string;
  features: string[];

  // Detay sayfası alanları
  heroImage: string;
  heroFeatures: string[];
  highlights: Highlight[];
  priceList: PriceListItem[];
  gallery: GalleryItem[];
}

const COMMON_GALLERY: GalleryItem[] = [
  {
    icon: "precision_manufacturing",
    title: "Modern Üretim",
    desc: "Tam otomatik enjeksiyon makineleri ile hatasız üretim süreci.",
  },
  {
    icon: "fact_check",
    title: "Kalite Kontrol",
    desc: "Her bir kablo sevk öncesi akım ve süreklilik testlerinden geçer.",
  },
  {
    icon: "inventory_2",
    title: "Dayanıklı Paketleme",
    desc: "Endüstriyel standartlarda paketleme ile güvenli lojistik.",
  },
];

// Tüm kategoriler için ortak teknik özellikler
const COMMON_HIGHLIGHTS: Highlight[] = [
  {
    icon: "engineering",
    title: "Endüstriyel Tasarım",
    desc: "Zorlu şartlara uygun yüksek kaliteli dış kaplama.",
  },
  {
    icon: "bolt",
    title: "Yüksek İletkenlik",
    desc: "%100 Bakır iletken seçenekleri ile maksimum verim.",
  },
  {
    icon: "shield",
    title: "Güvenlik Onaylı",
    desc: "Uluslararası standartlarda TSE ve ISO sertifikasyonu.",
  },
  {
    icon: "straighten",
    title: "Özel Boy Seçenekleri",
    desc: "Projeye özel uzunluk ve kapasite seçenekleri.",
  },
];

export const categories: Category[] = [
  {
    slug: "seyyar-makaralar",
    title: "Seyyar Makara Serisi",
    shortDescription: "20-50 mt arası TTR ve bakır makara çeşitleri",
    description:
      "Şantiye, atölye ve ev kullanımına uygun, dayanıklı taşınabilir kablo makaraları. 3x1.5 ve 3x2.5 TTR seçenekleri ile bakır iletkenli modeller.",
    image: "/images/products/category-seyyar-makara.jpeg",
    features: ["Darbelere Dayanıklı Gövde", "IP44 Koruma Sınıfı"],
    heroImage: "/images/products/category-seyyar-makara.jpeg",
    heroFeatures: ["TSE BELGELİ", "TERMİK KORUMA", "IP44 KORUMA"],
    highlights: COMMON_HIGHLIGHTS,
    gallery: COMMON_GALLERY,
    priceList: [
      {
        code: "ENJ 266",
        spec: "3X1.5 TTR 25 MT SEYYAR MAKARA",
        price: "960,00 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 268",
        spec: "3X1.5 TTR 35 MT SEYYAR MAKARA",
        price: "1.131 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 269",
        spec: "3X1.5 TTR 50 MT SEYYAR MAKARA",
        price: "1.420 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 270",
        spec: "3X2.5 TTR 20 MT SEYYAR MAKARA",
        price: "1.030 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 271",
        spec: "3X2.5 TTR 30 MT SEYYAR MAKARA",
        price: "1.313 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 272",
        spec: "3X2.5 TTR 40 MT SEYYAR MAKARA",
        price: "1.590 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 273",
        spec: "3X2.5 TTR 50 MT SEYYAR MAKARA",
        price: "1.860 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 259",
        spec: "BOŞ SEYYAR MAKARA (KABLOSUZ)",
        price: "495 ₺",
        status: "Stokta",
      },

      // BAKIR SERİSİ

      {
        code: "ENJ 274",
        spec: "20 MT BAKIR SEYYAR MAKARA",
        price: "2.505 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 275",
        spec: "25 MT BAKIR SEYYAR MAKARA",
        price: "3.005 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 276",
        spec: "30 MT BAKIR SEYYAR MAKARA",
        price: "3.510 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 277",
        spec: "35 MT BAKIR SEYYAR MAKARA",
        price: "4.010 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 278",
        spec: "40 MT BAKIR SEYYAR MAKARA",
        price: "4.510 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 279",
        spec: "50 MT BAKIR SEYYAR MAKARA",
        price: "5.510 ₺",
        status: "Stokta",
      },
      {
        code: "ENJ 259",
        spec: "BOŞ SEYYAR MAKARA (KABLOSUZ)",
        price: "495 ₺",
        status: "Stokta",
      },
    ],
  },
  {
    slug: "arapuarli-kablo",
    title: "Arapuarlı Kablo Serisi",
    shortDescription: "Endüstriyel kullanım için arapuarlı kablo çözümleri",
    description:
      "Endüstriyel standartlarda, yüksek iletkenliğe sahip %100 bakır ve alaşım seçenekleri ile üretilen Enjoy Kablo Arapuarlı serisi, dayanıklılığı ve güvenlik sertifikaları ile projelerinizin vazgeçilmezi.",
    image: "/images/products/category-arapuarli.jpeg",
    features: ["Ergonomik Anahtar Tasarımı", "Yüksek İzolasyon Kalitesi"],
    heroImage: "/images/products/category-arapuarli.jpeg",
    heroFeatures: ["TSE BELGELİ", "YÜKSEK KALİTE BAKIR", "DARBEYE DAYANIKLI"],
    highlights: COMMON_HIGHLIGHTS,
    gallery: COMMON_GALLERY,
    priceList: [
      {
        code: "ENJ 16",
        spec: "2X0.50 1.50 MT BAKIR ARAPUARLI KABLO",
        price: "77 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 17",
        spec: "2X0.50 2 MT BAKIR ARAPUARLI KABLO",
        price: "87 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 18",
        spec: "2X0.50 2.50 MT BAKIR ARAPUARLI KABLO",
        price: "100 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 19",
        spec: "2X0.50 3 MT BAKIR ARAPUARLI KABLO",
        price: "115 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 20",
        spec: "2X0.50 1.50 MT CCA ARAPUARLI KABLO",
        price: "58 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 21",
        spec: "2X0.50 2 MT CCA ARAPUARLI KABLO",
        price: "63 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 22",
        spec: "2X0.50 2.50 MT CCA ARAPUARLI KABLO",
        price: "70 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 23",
        spec: "2X0.50 3 MT CCA ARAPUARLI KABLO",
        price: "80 TL",
        status: "Stokta",
      },
    ],
  },
  {
    slug: "uzatma-kablo",
    title: "Uzatma Kablo Serisi",
    shortDescription: "Ev ve iş yeri için güvenli uzatma kabloları",
    description:
      "Farklı uzunluk ve kapasite seçenekleriyle ev ve profesyonel kullanım için uzatma kabloları.",
    image: "/images/products/category-uzatma (2).jpeg",
    features: ["TSE Standartlarında Üretim", "Çocuk Korumalı Prizler"],
    heroImage: "/images/products/category-uzatma (2).jpeg",
    heroFeatures: ["TSE BELGELİ", "ÇOCUK KORUMALI", "TOPRAKLI"],
    highlights: COMMON_HIGHLIGHTS,
    gallery: COMMON_GALLERY,
    priceList: [
      {
        code: "ENJ 169",
        spec: "3X1.5 TTR 5 MT UZATMA KABLOSU",
        price: "275 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 170",
        spec: "3X1.5 TTR 10 MT UZATMA KABLOSU",
        price: "365 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 171",
        spec: "3X1.5 TTR 15 MT UZATMA KABLOSU",
        price: "455 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 172",
        spec: "3X1.5 TTR 25 MT UZATMA KABLOSU",
        price: "640 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 173",
        spec: "3X1.5 TTR 35 MT UZATMA KABLOSU",
        price: "820 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 174",
        spec: "3X1.5 TTR 50 MT UZATMA KABLOSU",
        price: "1.095 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 175",
        spec: "3X2.5 TTR 10 MT UZATMA KABLOSU",
        price: "445 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 176",
        spec: "3X2.5 TTR 20 MT UZATMA KABLOSU",
        price: "705 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 177",
        spec: "3X2.5 TTR 30 MT UZATMA KABLOSU",
        price: "965 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 178",
        spec: "3X2.5 TTR 40 MT UZATMA KABLOSU",
        price: "1.225 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 179",
        spec: "3X2.5 TTR 50 MT UZATMA KABLOSU",
        price: "1.485 TL",
        status: "Stokta",
      },],
  },
  {
    slug: "fisli-kablo",
    title: "Fişli Kablo Serisi",
    shortDescription: "Matkap, süpürge ve power kablo modelleri",
    description:
      "Matkap, elektrik süpürgesi ve genel amaçlı power kablo çeşitleri. Topraklı ve topraksız fiş seçenekleri.",
    image: "/images/products/category-uzatma.jpeg",
    features: ["%100 Bakır İletken", "Sarsıntıya Karşı Dayanıklı"],
    heroImage: "/images/products/category-uzatma.jpeg",
    heroFeatures: ["%100 BAKIR", "SARSINTIYA DAYANIKLI", "TSE BELGELİ"],
    highlights: COMMON_HIGHLIGHTS,
    gallery: COMMON_GALLERY,
    priceList: [
      {
        code: "ENJ 193",
        spec: "3X1 TTR 2 MT FİŞLİ KABLO",
        price: "187 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 194",
        spec: "3X1 TTR 3 MT FİŞLİ KABLO",
        price: "237 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 195",
        spec: "3X1 TTR 5 MT FİŞLİ KABLO",
        price: "338 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 197",
        spec: "3X1.5 TTR 2 MT FİŞLİ KABLO",
        price: "224 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 198",
        spec: "3X1.5 TTR 3 MT FİŞLİ KABLO",
        price: "294 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 199",
        spec: "3X1.5 TTR 5 MT FİŞLİ KABLO",
        price: "434 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 201",
        spec: "3X2.5 TTR 2 MT FİŞLİ KABLO",
        price: "308 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 202",
        spec: "3X2.5 TTR 3 MT FİŞLİ KABLO",
        price: "420 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 203",
        spec: "3X2.5 TTR 5 MT FİŞLİ KABLO",
        price: "644 TL",
        status: "Stokta",
      },

      // DİĞER ÜRÜNLER

      {
        code: "ENJ 164",
        spec: "MATKAP KABLOSU 3.80 MT",
        price: "270 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 156",
        spec: "SÜPÜRGE KABLOSU 5 MT",
        price: "278 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 157",
        spec: "SÜPÜRGE KABLOSU 7 MT",
        price: "258 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 50",
        spec: "POWER KABLOSU 1.50 MT",
        price: "231 TL",
        status: "Stokta",
      },],
  },
  {
    slug: "kaucuk-serisi",
    title: "Kauçuk Serisi",
    shortDescription: "Endüstriyel kalitede kauçuk fiş ve priz çeşitleri",
    description:
      "Ağır kullanım koşullarına dayanıklı kauçuk fiş ve priz serisi. Endüstriyel ve atölye kullanımı için ideal.",
    image: "/images/products/category-kaucuk.jpeg",
    features: ["Kırılma ve Çatlamaya Karşı Direnç", "Yağ ve Asite Dayanım"],
    heroImage: "/images/products/category-kaucuk.jpeg",
    heroFeatures: ["YAĞ DAYANIMLI", "ASİTE DAYANIKLI", "16A KAPASİTE"],
    highlights: COMMON_HIGHLIGHTS,
    gallery: COMMON_GALLERY,
    priceList: [
      {
        code: "ENJ 369",
        spec: "1X16A KAUÇUK ERKEK FİŞ",
        price: "50 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 371",
        spec: "1X16A KAUÇUK DİŞİ FİŞ",
        price: "70 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 374",
        spec: "1X16A KAUÇUK 3’LÜ GRUP PRİZ (SARI)",
        price: "175 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 374D",
        spec: "1X16A KAUÇUK 3’LÜ GRUP PRİZ (DKP)",
        price: "130 TL",
        status: "Stokta",
      },],
  },
  {
    slug: "aksesuar",
    title: "Aksesuar",
    shortDescription: "Fiş, priz ve enerji bağlantı elemanları",
    description:
      "Kablo aksesuarları ve elektrik bağlantı elemanları geniş ürün yelpazesi.",
    image: "/images/products/aksesuar.jpeg",
    features: ["Geniş Ürün Yelpazesi", "Kolay Montaj Özelliği"],
    heroImage: "/images/products/aksesuar.jpeg",
    heroFeatures: ["GENİŞ ÇEŞİT", "KOLAY MONTAJ", "DAYANIKLI"],
    highlights: COMMON_HIGHLIGHTS,
    gallery: COMMON_GALLERY,
    priceList: [
      {
        code: "ENJ 375",
        spec: "TOPRAKLI ERKEK FİŞ",
        price: "45 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 376",
        spec: "TOPRAKLI ERKEK FİŞ L TİPİ",
        price: "45 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 377",
        spec: "TOPRAKLI DİŞİ FİŞ",
        price: "48 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 378",
        spec: "3’LÜ FİŞ PRİZ PAPATYA",
        price: "115 TL",
        status: "Stokta",
      },],
  },
  {
    slug: "aku-takviye",
    title: "Akü Takviye Serisi",
    shortDescription: "800 AMP ve 1200 AMP profesyonel modeller",
    description:
      "Otomotiv ve ağır vasıta kullanımına yönelik, yüksek amperli akü takviye kabloları. 800 AMP ve 1200 AMP seçenekleri.",
    image: "/images/products/category-aku.jpeg",
    features: ["600A - 1200A Seçenekleri", "Isınmaya Karşı Dayanıklı"],
    heroImage: "/images/products/category-aku.jpeg",
    heroFeatures: ["YÜKSEK AMPER", "İZOLELİ KROKODİL", "ISINMAYA DAYANIKLI"],
    highlights: COMMON_HIGHLIGHTS,
    gallery: COMMON_GALLERY,
    priceList: [
      {
        code: "ENJ 150",
        spec: "800 AMP 2.30 MT",
        price: "600 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 152",
        spec: "1200 AMP 2.30 MT",
        price: "800 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 154",
        spec: "AKÜ TAKVİYE MAŞASI (ADET)",
        price: "80 TL",
        status: "Stokta",
      },
    ],
  },
  {
    slug: "fis-baski",
    title: "Fiş Baskı Serisi",
    shortDescription: "Özel baskı fiş ve priz çözümleri",
    description:
      "Özel baskılı fiş ve priz üretimi. Markalama ve kurumsal kimlik için özel çözümler.",
    image: "/images/products/aksesuarr.jpeg",
    features: ["Hassas Enjeksiyon Kalitesi", "Özel Logo Baskı İmkanı"],
    heroImage: "/images/products/aksesuarr.jpeg",
    heroFeatures: ["ÖZEL LOGO", "HASSAS ENJEKSİYON", "MİN. SİPARİŞ ADEDİ"],
    highlights: COMMON_HIGHLIGHTS,
    gallery: COMMON_GALLERY,
    priceList: [
      {
        code: "ENJ 181",
        spec: "16A FİŞ BASKI",
        price: "60 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 182",
        spec: "16A FİŞ BASKI L TİPİ",
        price: "60 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 183",
        spec: "10A FİŞ BASKI",
        price: "35 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 184",
        spec: "2.5A FİŞ BASKI",
        price: "25 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 185",
        spec: "İNGİLİZ FİŞ BASKI",
        price: "120 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 186",
        spec: "AMERİKAN FİŞ BASKI",
        price: "30 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 187",
        spec: "TOP. AMERİKAN FİŞ BASKI",
        price: "50 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 188",
        spec: "POWER FİŞ BASKI",
        price: "50 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 189",
        spec: "POWER FİŞ BASKI L TİPİ",
        price: "50 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 190",
        spec: "MATKAP FİŞ BASKI",
        price: "55 TL",
        status: "Stokta",
      },
      {
        code: "ENJ 191",
        spec: "TEYP FİŞ BASKI",
        price: "25 TL",
        status: "Stokta",
      },],
  },
];

export function getCategoryBySlug(slug: string): Category | undefined {
  return categories.find((c) => c.slug === slug);
}